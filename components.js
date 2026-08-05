// ============================================================
//  KIKI.COM — Shared Component System
// ============================================================

// ---- AGE GATE ----
function initAgeGate() {
  if (localStorage.getItem('kiki_age_verified') === 'true') return;
  const gate = document.createElement('div');
  gate.id = 'age-gate';
  gate.className = 'age-gate';
  gate.innerHTML = `
    <div class="age-gate-box">
      <div class="age-gate-logo">💋 kiki.com</div>
      <h1 class="age-gate-title">Adults Only — 18+</h1>
      <p class="age-gate-subtitle">This website contains adult content intended for persons aged 18 and over. By entering, you confirm you are at least 18 years old and consent to viewing such material.</p>
      <div class="age-gate-actions">
        <button class="age-gate-btn age-gate-enter" id="age-enter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          I am 18 or older — Enter
        </button>
        <button class="age-gate-btn age-gate-exit" onclick="window.location='https://www.google.com'">
          I am under 18 — Exit
        </button>
      </div>
      <p class="age-gate-legal">By clicking "Enter", you agree to our <a href="terms.html">Terms of Service</a> and <a href="privacy.html">Privacy Policy</a>.</p>
    </div>
  `;
  document.body.appendChild(gate);
  document.getElementById('age-enter').addEventListener('click', () => {
    localStorage.setItem('kiki_age_verified', 'true');
    gate.classList.add('age-gate-hidden');
    setTimeout(() => gate.remove(), 400);
  });
}

// ---- COOKIE BANNER ----
function initCookieBanner() {
  if (localStorage.getItem('kiki_cookies_accepted') === 'true') return;
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-content">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
      <span>We use cookies to enhance your experience and for analytics. <a href="privacy.html">Learn more</a>.</span>
    </div>
    <div class="cookie-actions">
      <button class="cookie-btn cookie-accept" id="cookie-accept">Accept All</button>
      <button class="cookie-btn cookie-decline" id="cookie-decline">Decline</button>
    </div>
  `;
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('cookie-banner-show'), 800);
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('kiki_cookies_accepted', 'true');
    banner.remove();
  });
  document.getElementById('cookie-decline').addEventListener('click', () => {
    banner.remove();
  });
}

// ---- HEADER ----
function renderHeader(activePage = '') {
  const isLoggedIn = localStorage.getItem('kiki_user') !== null;
  return `
  <header class="site-header">
    <div class="site-header-inner">
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>

      <a href="index.html" class="site-logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.604 4.068 2 6.219 2c1.666 0 3.077.837 4.185 2.093C11.404 2.837 12.815 2 14.481 2 17.072 2 19 4.104 19 7.191c0 4.105-5.37 8.863-11 14.402z"/></svg>
        kiki.com
      </a>

      <div class="header-search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" class="header-search-input" id="header-search" placeholder="Search a city or name…" autocomplete="off">
        <div class="header-search-dropdown" id="header-search-dropdown"></div>
      </div>

      <nav class="main-nav" id="main-nav">
        <a href="index.html?cat=female" class="main-nav-link ${activePage==='female'?'active':''}">Escort Girl</a>
        <a href="index.html?cat=trans" class="main-nav-link ${activePage==='trans'?'active':''}">Escort Trans</a>
        <a href="index.html?cat=male" class="main-nav-link ${activePage==='male'?'active':''}">Escort Boy</a>
        <a href="index.html?cat=massage" class="main-nav-link ${activePage==='massage'?'active':''}">Massage</a>
        <a href="index.html?cat=couple" class="main-nav-link ${activePage==='couple'?'active':''}">Couples</a>
        <div class="nav-dropdown">
          <a href="locations.html" class="main-nav-link">
            📍 Locations
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="locations.html" class="nav-dropdown-item"><span>🇮🇳 India Directory</span><span class="nav-dropdown-count">2,000+</span></a>
            <div style="height:1px;background:var(--border);margin:4px 0"></div>
            ${(typeof CITIES !== 'undefined' ? CITIES.slice(0,5) : []).map(c => `<a href="city.html?city=${c.slug}" class="nav-dropdown-item"><span>${c.name}</span><span class="nav-dropdown-count">${c.count}</span></a>`).join('')}
            <a href="locations.html" class="nav-dropdown-item nav-dropdown-all">Explore all Indian cities →</a>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <div class="lang-selector">
          <button class="lang-btn" id="lang-btn">🇺🇸 EN</button>
          <div class="lang-menu" id="lang-menu">
            <button onclick="setLang('EN','🇺🇸')">🇺🇸 English</button>
            <button onclick="setLang('FR','🇫🇷')">🇫🇷 Français</button>
            <button onclick="setLang('DE','🇩🇪')">🇩🇪 Deutsch</button>
            <button onclick="setLang('ES','🇪🇸')">🇪🇸 Español</button>
          </div>
        </div>
        ${isLoggedIn ? `
          <a href="dashboard.html" class="btn-header-dash">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Dashboard
          </a>
        ` : `
          <a href="login.html" class="btn-header-signin">Sign in</a>
          <a href="signup.html" class="btn-header-signup">Post Ad</a>
        `}
      </div>
    </div>
  </header>
  <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
  `;
}

function initHeader() {
  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
      overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
      mainNav.classList.remove('nav-open');
      overlay.classList.remove('active');
    });
  }
  // Language selector
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('lang-menu-open'); });
    document.addEventListener('click', () => langMenu.classList.remove('lang-menu-open'));
  }
  // Live search
  const searchInput = document.getElementById('header-search');
  const searchDropdown = document.getElementById('header-search-dropdown');
  if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchDropdown.classList.remove('active'); return; }

      let html = '';
      
      // Search global cities first if available
      if (typeof searchCities === 'function') {
        const cityMatches = searchCities(q).slice(0, 4);
        if (cityMatches.length) {
          html += `<div style="padding:6px 12px;font-size:0.7rem;font-weight:700;color:var(--text-dim);text-transform:uppercase">Cities Worldwide</div>`;
          html += cityMatches.map(c => `
            <a href="city.html?city=${c.slug}" class="search-result-item" style="padding:8px 12px">
              <span style="font-size:1.1rem">${c.flag || '🌍'}</span>
              <div>
                <div class="search-result-name">${c.name}</div>
                <div class="search-result-city">${c.state || c.country}</div>
              </div>
              <span class="search-result-tier" style="margin-left:auto;background:var(--bg-3);color:var(--text-muted)">${c.count} listings</span>
            </a>
          `).join('');
        }
      }

      // Search profiles
      if (typeof PROFILES !== 'undefined') {
        const matches = PROFILES.filter(p => p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q)).slice(0, 4);
        if (matches.length) {
          if (html) html += `<div style="padding:6px 12px;font-size:0.7rem;font-weight:700;color:var(--text-dim);text-transform:uppercase;border-top:1px solid var(--border)">Profiles</div>`;
          html += matches.map(p => `
            <a href="profile.html?id=${p.id}" class="search-result-item">
              <img src="${p.primaryPhoto}" alt="${p.name}" class="search-result-img">
              <div>
                <div class="search-result-name">${p.name}, ${p.age}</div>
                <div class="search-result-city">📍 ${p.city}</div>
              </div>
              <span class="search-result-tier tier-${p.tier}">${p.tier}</span>
            </a>
          `).join('');
        }
      }

      if (!html) { searchDropdown.classList.remove('active'); return; }
      searchDropdown.innerHTML = html;
      searchDropdown.classList.add('active');
    });
    document.addEventListener('click', (e) => { if (!searchInput.contains(e.target)) searchDropdown.classList.remove('active'); });
  }
}
function setLang(code, flag) {
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = `${flag} ${code}`;
}

// ---- FOOTER ----
function renderFooter() {
  const cityLinksTop = (typeof CITIES !== 'undefined' ? CITIES.slice(0, 12) : [])
    .map(c => `<a href="${c.slug}-call-girls.html">${c.name}</a>`).join('');
  const cityLinksAll = (typeof CITIES !== 'undefined' ? CITIES : [])
    .map(c => `<a href="${c.slug}-call-girls.html">${c.name}</a>`).join('');

  // Dynamically generate links for all Indian States/UTs using LOCATIONS_RAW
  let stateLinks = '';
  if (typeof LOCATIONS_RAW !== 'undefined' && LOCATIONS_RAW.India) {
    stateLinks = Object.keys(LOCATIONS_RAW.India).map(state => {
      const slug = state.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
      return `<a href="${slug}.html">${state}</a>`;
    }).join('');
  }

  return `
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.604 4.068 2 6.219 2c1.666 0 3.077.837 4.185 2.093C11.404 2.837 12.815 2 14.481 2 17.072 2 19 4.104 19 7.191c0 4.105-5.37 8.863-11 14.402z"/></svg>
          kiki.com
        </a>
        <p class="footer-tagline">The premium adult directory for discerning adults in India.</p>
        <div class="footer-langs">
          <span>🇮🇳</span><span>🇬🇧</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Browse</h4>
        <a href="index.html?cat=female">Escort Girls</a>
        <a href="index.html?cat=trans">Escort Trans</a>
        <a href="index.html?cat=male">Escort Boys</a>
        <a href="index.html?cat=massage">Massage</a>
        <a href="index.html?cat=couple">Couples</a>
        <a href="search.html">Advanced Search</a>
      </div>
      <div class="footer-col">
        <h4>Top Cities</h4>
        ${cityLinksTop}
      </div>
      <div class="footer-col">
        <h4>States Directory</h4>
        <div style="display:flex; flex-direction:column; gap:6px; max-height: 250px; overflow-y: auto; padding-right: 4px;">
          ${stateLinks}
        </div>
      </div>
      <div class="footer-col">
        <h4>Advertisers</h4>
        <a href="signup.html">Post an Ad</a>
        <a href="membership.html">Membership Plans</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="faq.html">How It Works</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="terms.html">Terms of Service</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="faq.html">FAQ</a>
        <a href="mailto:contact@kiki.com">Contact Us</a>
        <a href="admin.html">Admin Panel</a>
      </div>
    </div>
    <div class="footer-seo-cities">
      <div class="footer-seo-cities-inner">
        <h4>Escorts by City</h4>
        <div class="seo-cities-links">
          ${cityLinksAll}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p>© ${new Date().getFullYear()} kiki.com — All rights reserved. All persons appearing have confirmed they are 18+.</p>
        <p class="footer-disclaimer">This site contains adult material intended for persons aged 18 and over. If you are under 18, please <a href="https://www.google.com">leave now</a>.</p>
      </div>
    </div>
  </footer>
  `;
}

// ---- PROFILE CARD ----
function renderProfileCard(profile, options = {}) {
  const { blurred = false, showCity = true } = options;
  const tierLabels = { diamond: '💎 Diamond', gold: '🥇 Gold', silver: '🥈 Silver', free: '' };
  const tierLabel = tierLabels[profile.tier] || '';
  const stars = profile.avgRating ? '★'.repeat(Math.round(profile.avgRating)) + '<span style="opacity:0.3">' + '★'.repeat(5 - Math.round(profile.avgRating)) + '</span>' : '';

  // Safe phone fallback and formatting
  const phone = profile.phone || '+919999999999';
  const cleanPhone = phone.replace(/[^0-9+]/g, '');

  return `
  <div class="profile-card tier-card-${profile.tier} ${blurred ? 'card-blurred' : ''}">
    <a href="profile.html?id=${profile.id}" class="profile-card-link" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; flex:1;">
      <div class="card-image-wrap">
        <img src="${profile.primaryPhoto}" alt="${profile.name}" class="card-image" loading="lazy">
        ${blurred ? `<div class="card-blur-overlay"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>Members Only</span></div>` : ''}
        <div class="card-top-badges">
          ${profile.hasVideo ? `<span class="card-badge card-badge-video"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Video</span>` : ''}
          ${profile.isNew ? `<span class="card-badge card-badge-new">✦ New</span>` : ''}
        </div>
        <div class="card-bottom-badges">
          ${profile.tier !== 'free' ? `<span class="card-badge card-tier-badge tier-${profile.tier}">${tierLabel}</span>` : ''}
        </div>
        <div class="card-status-row">
          ${profile.isOnline ? `<span class="online-dot-badge"><span class="online-pulse"></span> Online</span>` : ''}
          ${profile.isVerified ? `<span class="verified-dot-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Verified</span>` : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-name">${profile.name} <span class="card-age">${profile.age}</span></div>
        ${showCity ? `<div class="card-location">📍 ${profile.city}</div>` : ''}
        <p class="card-desc">${profile.shortDesc}</p>
        ${profile.reviewCount > 0 ? `<div class="card-stars">${stars} <span class="card-review-count">(${profile.reviewCount})</span></div>` : ''}
        <div class="card-rate">${profile.incallRate}</div>
      </div>
    </a>
    <div class="card-actions-wrapper">
      <a href="https://wa.me/${cleanPhone.replace('+', '')}?text=Hi%20${profile.name},%20I%20saw%20your%20profile%20on%20kiki.com" target="_blank" class="btn-card-action btn-card-whatsapp">
        💬 WhatsApp
      </a>
      <a href="tel:${cleanPhone}" class="btn-card-action btn-card-call">
        📞 Call Now
      </a>
    </div>
  </div>
  `;
}

// ---- SECTION RENDERER ----
function renderSection(title, icon, profiles, linkHref, options = {}) {
  const { blurred = false } = options;
  if (!profiles.length) return '';
  return `
  <section class="listing-section">
    <div class="section-head">
      <h2 class="section-heading">${icon} ${title}</h2>
      <a href="${linkHref}" class="section-view-all">View all →</a>
    </div>
    <div class="profiles-grid">
      ${profiles.map((p, i) => renderProfileCard(p, { blurred: blurred && i > 1 })).join('')}
    </div>
  </section>
  `;
}

// ---- CTA BANNER ----
function renderCTABanner(title, subtitle, btnText, btnHref, variant = 'red') {
  return `
  <div class="cta-banner cta-banner-${variant}">
    <div class="cta-banner-content">
      <div>
        <h3 class="cta-banner-title">${title}</h3>
        <p class="cta-banner-sub">${subtitle}</p>
      </div>
      <a href="${btnHref}" class="cta-banner-btn">${btnText}</a>
    </div>
  </div>
  `;
}

// ---- BREADCRUMB ----
function renderBreadcrumb(items) {
  return `
  <nav class="breadcrumb" aria-label="breadcrumb">
    ${items.map((item, i) => i < items.length - 1
      ? `<a href="${item.href}" class="breadcrumb-link">${item.label}</a><span class="breadcrumb-sep">›</span>`
      : `<span class="breadcrumb-current">${item.label}</span>`
    ).join('')}
  </nav>
  `;
}

// ---- REPORT MODAL ----
function renderReportModal() {
  return `
  <div class="modal-overlay" id="report-modal" style="display:none">
    <div class="modal-box">
      <div class="modal-header">
        <h3>Report this profile</h3>
        <button class="modal-close" id="modal-close-report">✕</button>
      </div>
      <div class="modal-body">
        <p style="color:var(--text-muted);margin-bottom:16px">Please select a reason for your report:</p>
        <label class="radio-label"><input type="radio" name="report" value="fake"> Fake profile / Scam</label>
        <label class="radio-label"><input type="radio" name="report" value="underage"> Suspected underage person</label>
        <label class="radio-label"><input type="radio" name="report" value="illegal"> Illegal content or services</label>
        <label class="radio-label"><input type="radio" name="report" value="spam"> Spam or duplicate</label>
        <label class="radio-label"><input type="radio" name="report" value="other"> Other</label>
        <textarea class="report-textarea" placeholder="Additional details (optional)…"></textarea>
      </div>
      <div class="modal-footer">
        <button class="btn-modal-cancel" id="modal-cancel-report">Cancel</button>
        <button class="btn-modal-submit">Submit Report</button>
      </div>
    </div>
  </div>
  `;
}

function initReportModal() {
  const modal = document.getElementById('report-modal');
  const trigger = document.getElementById('btn-report-trigger');
  const closeBtn = document.getElementById('modal-close-report');
  const cancelBtn = document.getElementById('modal-cancel-report');
  if (!modal) return;
  [trigger].filter(Boolean).forEach(el => el.addEventListener('click', () => modal.style.display = 'flex'));
  [closeBtn, cancelBtn].filter(Boolean).forEach(el => el.addEventListener('click', () => modal.style.display = 'none'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
}
