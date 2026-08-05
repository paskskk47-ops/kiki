// ============================================================
//  KIKI.COM — Homepage Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mount Header & Footer ----
  const headerMount = document.getElementById('header-mount');
  const footerMount = document.getElementById('footer-mount');
  const reportMount = document.getElementById('report-modal-mount');

  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();
  if (reportMount) reportMount.innerHTML = renderReportModal();

  // ---- Init shared components ----
  initAgeGate();
  initCookieBanner();
  initHeader();
  initReportModal();

  // ---- Populate hero city selector ----
  const heroCity = document.getElementById('hero-city');
  if (heroCity && typeof CITIES !== 'undefined') {
    CITIES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.slug;
      opt.textContent = `${c.name} (${c.count})`;
      heroCity.appendChild(opt);
    });
  }

  // ---- Hero search button ----
  const heroSearchBtn = document.getElementById('hero-search-btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const city = document.getElementById('hero-city')?.value || '';
      const cat  = document.getElementById('hero-cat')?.value  || '';
      const tier = document.getElementById('hero-tier')?.value || '';
      const params = new URLSearchParams();
      if (city) params.set('city', city);
      if (cat)  params.set('cat', cat);
      if (tier) params.set('tier', tier);
      window.location.href = `search.html?${params.toString()}`;
    });
  }

  // ---- Hero stats ----
  if (typeof SITE_STATS !== 'undefined') {
    const el = (id) => document.getElementById(id);
    el('stat-online')   && (el('stat-online').textContent   = SITE_STATS.onlineNow);
    el('stat-verified') && (el('stat-verified').textContent = SITE_STATS.verifiedProfiles);
  }

  // ---- Cities Strip ----
  const citiesStrip = document.getElementById('cities-strip');
  if (citiesStrip && typeof CITIES !== 'undefined') {
    citiesStrip.innerHTML = CITIES.map(c =>
      `<a href="city.html?city=${c.slug}" class="city-pill">
        <span>${c.name}</span>
        <span class="city-pill-count">${c.count}</span>
      </a>`
    ).join('');
  }

  // ---- Diamond Section ----
  const diamondMount = document.getElementById('section-diamond');
  if (diamondMount) {
    diamondMount.innerHTML = renderSection(
      'Diamond Escorts', '💎',
      getProfilesByTier('diamond', 6),
      'search.html?tier=diamond',
    );
  }

  // ---- CTA 1 ----
  const cta1 = document.getElementById('cta-1');
  if (cta1) {
    cta1.innerHTML = renderCTABanner(
      'Post Your Listing Today',
      'Reach thousands of discerning clients. Join as Diamond, Gold or Silver.',
      'Create Free Account →',
      'signup.html',
      'red'
    );
  }

  // ---- Gold Section ----
  const goldMount = document.getElementById('section-gold');
  if (goldMount) {
    goldMount.innerHTML = renderSection(
      'Gold Escorts', '🥇',
      getProfilesByTier('gold', 6),
      'search.html?tier=gold',
    );
  }

  // ---- Silver Section ----
  const silverMount = document.getElementById('section-silver');
  if (silverMount) {
    silverMount.innerHTML = renderSection(
      'Silver Escorts', '🥈',
      getProfilesByTier('silver', 6),
      'search.html?tier=silver',
    );
  }

  // ---- CTA 2 ----
  const cta2 = document.getElementById('cta-2');
  if (cta2) {
    cta2.innerHTML = renderCTABanner(
      'Upgrade to Premium — Receive Direct Messages',
      'Gold & Diamond members get direct inbox messages from interested clients.',
      'View Membership Plans →',
      'membership.html',
      'purple'
    );
  }

  // ---- Online Now Section ----
  const onlineMount = document.getElementById('section-online');
  if (onlineMount) {
    onlineMount.innerHTML = renderSection(
      'Online Now', '<span class="online-pulse" style="display:inline-block"></span>',
      getOnlineProfiles(6),
      'search.html?filter=online',
    );
  }

  // ---- New & Trending (blurred for non-members) ----
  const newMount = document.getElementById('section-new');
  if (newMount) {
    const isLoggedIn = localStorage.getItem('kiki_user') !== null;
    newMount.innerHTML = renderSection(
      'New &amp; Trending', '✦',
      getNewProfiles(6),
      'search.html?filter=new',
      { blurred: !isLoggedIn }
    );
    // Add login prompt if blurred
    if (!isLoggedIn) {
      const blurredCards = newMount.querySelectorAll('.card-blurred');
      blurredCards.forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = 'login.html';
        });
      });
    }
  }

  // ---- With Video Section ----
  const videoMount = document.getElementById('section-video');
  if (videoMount) {
    videoMount.innerHTML = renderSection(
      'With Video', '▶',
      getProfilesWithVideo(6),
      'search.html?filter=video',
    );
  }

  // ---- CTA 3 ----
  const cta3 = document.getElementById('cta-3');
  if (cta3) {
    cta3.innerHTML = renderCTABanner(
      'Upgrade Your Listing — Go Diamond',
      'Maximum exposure, unlimited photos & videos, priority placement.',
      'Upgrade Now →',
      'membership.html',
      'gold'
    );
  }

  // ---- Most Reviewed ----
  const reviewedMount = document.getElementById('section-reviewed');
  if (reviewedMount) {
    reviewedMount.innerHTML = renderSection(
      'Most Reviewed', '⭐',
      getMostReviewed(6),
      'search.html?sort=reviews',
    );
  }

  // ---- Most Popular ----
  const popularMount = document.getElementById('section-popular');
  if (popularMount) {
    popularMount.innerHTML = renderSection(
      'Most Popular', '🔥',
      getMostPopular(6),
      'search.html?sort=popular',
    );
  }

  // ---- SEO city links ----
  const seoCities = document.getElementById('seo-city-links');
  if (seoCities && typeof CITIES !== 'undefined') {
    seoCities.innerHTML = CITIES.map(c =>
      `<a href="city.html?city=${c.slug}">Escort ${c.name}</a>`
    ).join('');
  }

  // ---- Animate sections on scroll ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.listing-section, .cta-banner').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ---- URL param filter on load ----
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    const navLinks = document.querySelectorAll('.main-nav-link');
    navLinks.forEach(link => {
      if (link.href.includes(`cat=${catParam}`)) {
        link.classList.add('active');
      }
    });
  }
});
