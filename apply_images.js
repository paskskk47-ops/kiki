const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const imgDir = path.join(__dirname, 'extracted_images');

if (!fs.existsSync(imgDir)) {
  console.error('Error: extracted_images directory does not exist.');
  process.exit(1);
}

// Get all image files in extracted_images
const allFiles = fs.readdirSync(imgDir);
const imgFiles = allFiles.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.webp', '.png', '.jpg', '.jpeg', '.avif'].includes(ext);
});

if (imgFiles.length === 0) {
  console.error('Error: No image files found in extracted_images.');
  process.exit(1);
}

console.log(`Found ${imgFiles.length} local images in extracted_images.`);

// Read data.js
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Replace all Unsplash URLs in data.js with local images
let replaceCount = 0;
const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^\s"',\)]+/g;

dataContent = dataContent.replace(unsplashRegex, () => {
  const chosenImg = imgFiles[replaceCount % imgFiles.length];
  replaceCount++;
  return `extracted_images/${chosenImg}`;
});

fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log(`Successfully replaced ${replaceCount} Unsplash image URLs in data.js with local images!`);
