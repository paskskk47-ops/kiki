// ============================================================
//  KIKI.COM — Locations Directory Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Render header & footer
  if (typeof renderHeader === 'function') {
    document.getElementById('header-mount').innerHTML = renderHeader();
    if (typeof initHeader === 'function') initHeader();
  }
  if (typeof renderFooter === 'function') {
    document.getElementById('footer-mount').innerHTML = renderFooter();
  }
  if (typeof initAgeGate === 'function') initAgeGate();

  // Populate total stat
  const totalEl = document.getElementById('stat-total-cities');
  if (totalEl && typeof ALL_CITIES !== 'undefined') {
    totalEl.textContent = ALL_CITIES.length + (typeof CITIES !== 'undefined' ? CITIES.length : 0);
  }

  // Live search setup
  const searchInput = document.getElementById('loc-search-input');
  const searchResults = document.getElementById('loc-search-results');
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (q.length < 2) {
        searchResults.classList.remove('active');
        return;
      }
      const matches = typeof searchCities === 'function' ? searchCities(q) : [];
      if (!matches.length) {
        searchResults.innerHTML = `<div class="loc-search-item" style="color:var(--text-muted);justify-content:center">No cities found matching "${q}"</div>`;
      } else {
        searchResults.innerHTML = matches.map(c => `
          <a href="city.html?city=${c.slug}" class="loc-search-item">
            <div class="loc-item-left">
              <span>${c.flag || '🌍'}</span>
              <span>${c.name}</span>
              <span style="font-weight:400;color:var(--text-muted);font-size:0.8rem">(${c.state})</span>
            </div>
            <div class="loc-item-right">${c.count} listings →</div>
          </a>
        `).join('');
      }
      searchResults.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });
  }

  // Render featured cities section
  renderFeaturedCities();

  // Default to India tab or URL param ?region=
  const params = new URLSearchParams(window.location.search);
  const initialRegion = params.get('region') || 'India';
  const tabEl = document.querySelector(`.loc-tab[data-region="${initialRegion}"]`) || document.querySelector('.loc-tab[data-region="India"]');
  switchRegion(initialRegion, tabEl);
});

window.switchRegion = (region, el) => {
  document.querySelectorAll('.loc-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');

  const bar = document.getElementById('loc-region-bar');
  const content = document.getElementById('loc-content');
  if (!bar || !content) return;

  const regionData = LOCATIONS[region] || {};
  const statesOrCountries = Object.keys(regionData);
  const totalRegionCities = typeof getCitiesByRegion === 'function' ? getCitiesByRegion(region).length : 0;
  const flag = '🇮🇳';
  const subLabel = 'States & Union Territories';

  bar.innerHTML = `
    <div class="loc-region-title">${flag} India Directory</div>
    <div class="loc-region-count">${statesOrCountries.length} States & UTs • ${totalRegionCities} Cities</div>
  `;

  content.innerHTML = statesOrCountries.map(sc => {
    const cities = regionData[sc] || [];
    const stateSlug = typeof slugify === 'function' ? slugify(sc) : sc.toLowerCase().replace(/[^a-z0-9]+/g,'-');
    return `
      <div class="state-card">
        <div class="state-header">
          <a href="state.html?state=${stateSlug}" class="state-name" style="text-decoration:none;transition:var(--transition);display:flex;align-items:center;gap:6px;" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--text)'">
            ${sc} <span style="font-size:0.75rem;color:var(--text-dim);font-weight:400;">→</span>
          </a>
          <div class="state-badge">${cities.length} Cities</div>
        </div>
        <div class="cities-list">
          ${cities.map(cName => {
            const slug = typeof slugify === 'function' ? slugify(cName) : cName.toLowerCase().replace(/[^a-z0-9]+/g,'-');
            return `<a href="city.html?city=${slug}" class="city-link">${cName}</a>`;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
};

function renderFeaturedCities() {
  const grid = document.getElementById('featured-cities-grid');
  if (!grid) return;

  const featuredSlugs = ['mumbai','delhi','bengaluru','hyderabad','chennai','kolkata','pune','ahmedabad','jaipur','surat','lucknow','kanpur'];
  const cards = [];

  featuredSlugs.forEach(slug => {
    const c = typeof getCityBySlug === 'function' ? getCityBySlug(slug) : null;
    if (c) {
      cards.push(`
        <a href="city.html?city=${c.slug}" class="featured-city-card">
          <div>
            <div class="feat-city-name">${c.flag || ''} ${c.name}</div>
            <div class="feat-city-sub">${c.state || c.country}</div>
          </div>
          <div class="feat-city-count">${c.count}</div>
        </a>
      `);
    }
  });

  grid.innerHTML = cards.join('');
}
