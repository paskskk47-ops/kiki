const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Get URL from command line arguments
const targetUrl = process.argv[2];
if (!targetUrl) {
  console.log('Error: Please provide a URL.');
  console.log('Usage: node extract_images.js <URL> [maxPages]');
  process.exit(1);
}

// Limit the crawling to prevent running indefinitely or getting rate-limited
const maxPages = parseInt(process.argv[3]) || 150;

const parsedTarget = new URL(targetUrl);
const allowedHost = parsedTarget.hostname;

// Ensure target output folder exists
const outputDir = path.join(__dirname, 'extracted_images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting RECURSIVE crawling for: ${targetUrl}`);
console.log(`Max pages to crawl: ${maxPages}`);
console.log(`Images will be saved to: ${outputDir}\n`);

const crawledUrls = new Set();
const crawlQueue = [targetUrl];
const downloadedImages = new Set();

let completedCount = 0;
let failedCount = 0;

// Helper to download a single file
function downloadFile(urlStr, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = urlStr.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, background: true) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    protocol.get(urlStr, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status Code: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Fetch the HTML from a URL
function fetchHtml(urlStr) {
  return new Promise((resolve, reject) => {
    const protocol = urlStr.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, background: true) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    protocol.get(urlStr, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, urlStr).toString();
        resolve(fetchHtml(redirectUrl));
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Status code ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ html: data, finalUrl: urlStr }));
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Extract image URLs and page links from HTML contents
function parseHtml(html, pageUrl) {
  const images = new Set();
  const links = new Set();

  // 1. Standard img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    images.add(match[1]);
  }

  // 2. Link preloads as images
  const preloadRegex = /<link[^>]+href=["']([^"']+)["'][^>]+as=["']image["']/gi;
  while ((match = preloadRegex.exec(html)) !== null) {
    images.add(match[1]);
  }

  // 3. Meta og:image tags
  const ogRegex = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/gi;
  while ((match = ogRegex.exec(html)) !== null) {
    images.add(match[1]);
  }

  // 4. Extract page links (a tags) for recursive crawling
  const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    const rawLink = match[1];
    // Ignore anchors, emails, phone numbers, javascript voids
    if (rawLink.startsWith('#') || rawLink.startsWith('mailto:') || rawLink.startsWith('tel:') || rawLink.startsWith('javascript:')) {
      continue;
    }
    links.add(rawLink);
  }

  // Process Images: resolve relative links
  const absoluteImages = [];
  images.forEach(rawImg => {
    if (!rawImg || rawImg.startsWith('data:')) return;
    try {
      const absoluteUrl = new URL(rawImg, pageUrl).toString();
      absoluteImages.push(absoluteUrl);
    } catch (e) {}
  });

  // Process Page Links: filter for local domain only
  const absoluteLinks = [];
  links.forEach(rawLink => {
    try {
      const parsedUrl = new URL(rawLink, pageUrl);
      // Only crawl links on the same host domain
      if (parsedUrl.hostname === allowedHost) {
        // Strip out the hash fragments
        parsedUrl.hash = '';
        absoluteLinks.push(parsedUrl.toString());
      }
    } catch (e) {}
  });

  return { images: absoluteImages, links: absoluteLinks };
}

// Function to download an array of images in parallel
async function downloadImagesList(images) {
  const downloadPromises = images.map(urlStr => {
    if (downloadedImages.has(urlStr)) return Promise.resolve();
    downloadedImages.add(urlStr);

    const urlObj = new URL(urlStr);
    let filename = path.basename(urlObj.pathname);
    filename = filename.split('?')[0];

    if (!filename || !filename.includes('.')) {
      filename = `image_${downloadedImages.size}.jpg`;
    } else {
      filename = `${downloadedImages.size}_${filename}`;
    }

    const destPath = path.join(outputDir, filename);

    return downloadFile(urlStr, destPath)
      .then(() => {
        completedCount++;
        console.log(`[✓] Image downloaded: ${filename}`);
      })
      .catch(err => {
        failedCount++;
        console.error(`[✗] Image failed: ${urlStr} (${err.message})`);
      });
  });

  await Promise.all(downloadPromises);
}

// Crawling orchestrator
async function startCrawler() {
  while (crawlQueue.length > 0 && crawledUrls.size < maxPages) {
    const currentUrl = crawlQueue.shift();

    // Skip if already crawled
    if (crawledUrls.has(currentUrl)) continue;
    crawledUrls.add(currentUrl);

    console.log(`\n>>> Crawling [${crawledUrls.size}/${maxPages}]: ${currentUrl}`);

    try {
      const { html, finalUrl } = await fetchHtml(currentUrl);
      const { images, links } = parseHtml(html, finalUrl);

      console.log(`Found ${images.length} image(s) and ${links.length} link(s) on page.`);

      // Download images found on this page
      if (images.length > 0) {
        await downloadImagesList(images);
      }

      // Add newly discovered links to queue
      for (const link of links) {
        if (!crawledUrls.has(link) && !crawlQueue.includes(link)) {
          crawlQueue.push(link);
        }
      }
    } catch (err) {
      console.error(`Failed to crawl page: ${currentUrl} (${err.message})`);
    }
  }

  console.log('\n======================================');
  console.log('       CRAWLER JOB SUMMARY');
  console.log('======================================');
  console.log(`Pages Crawled:   ${crawledUrls.size}`);
  console.log(`Images Saved:    ${completedCount}`);
  console.log(`Failed Downloads: ${failedCount}`);
  console.log(`Image Directory:  ${outputDir}`);
  console.log('======================================');
}

startCrawler();
