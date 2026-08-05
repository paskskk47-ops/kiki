// ============================================================
//  KIKI.COM — Search Page Script
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header-mount').innerHTML = renderHeader();
  document.getElementById('footer-mount').innerHTML = renderFooter();
  initHeader(); initAgeGate(); initCookieBanner();

  const ITEMS_PER_PAGE = 12;
  let currentPage = 1;
  let filteredProfiles = [...PROFILES];

  // Populate city selector
  const citySelect = document.getElementById('f-city');
  CITIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.slug; opt.textContent = `${c.name} (${c.count})`;
    citySelect.appendChild(opt);
  });

  // Populate service selector
  const serviceSelect = document.getElementById('f-service');
  SERVICES.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id; opt.textContent = s.label;
    serviceSelect.appendChild(opt);
  });

  // Apply URL params on load
  const params = new URLSearchParams(window.location.search);
  if (params.get('city'))   citySelect.value = params.get('city');
  if (params.get('tier'))   document.querySelectorAll('.f-tier').forEach(cb => { if (cb.value === params.get('tier')) cb.checked = true; });
  if (params.get('cat'))    document.querySelectorAll('.f-cat').forEach(cb => { if (cb.value === params.get('cat')) cb.checked = true; });
  if (params.get('filter') === 'online')   document.getElementById('f-online').checked = true;
  if (params.get('filter') === 'verified') document.getElementById('f-verified').checked = true;
  if (params.get('filter') === 'video')    document.getElementById('f-video').checked = true;
  if (params.get('filter') === 'new')      document.getElementById('f-new').checked = true;
  if (params.get('sort') === 'reviews')    document.getElementById('f-sort').value = 'reviews';
  if (params.get('sort') === 'popular')    document.getElementById('f-sort').value = 'popular';

  function applyFilters() {
    const city     = document.getElementById('f-city').value;
    const tiers    = [...document.querySelectorAll('.f-tier:checked')].map(c => c.value);
    const cats     = [...document.querySelectorAll('.f-cat:checked')].map(c => c.value);
    const ageMin   = parseInt(document.getElementById('f-age-min').value) || 18;
    const ageMax   = parseInt(document.getElementById('f-age-max').value) || 60;
    const ethnicity= document.getElementById('f-ethnicity').value;
    const service  = document.getElementById('f-service').value;
    const onlyOnline   = document.getElementById('f-online').checked;
    const onlyVerified = document.getElementById('f-verified').checked;
    const onlyVideo    = document.getElementById('f-video').checked;
    const onlyNew      = document.getElementById('f-new').checked;
    const onlyReviews  = document.getElementById('f-reviews').checked;
    const sort         = document.getElementById('f-sort').value;

    filteredProfiles = PROFILES.filter(p => {
      if (city     && p.citySlug !== city) return false;
      if (tiers.length && !tiers.includes(p.tier)) return false;
      if (cats.length  && !cats.includes(p.gender)) return false;
      if (p.age < ageMin || p.age > ageMax) return false;
      if (ethnicity && p.ethnicity !== ethnicity) return false;
      if (service   && !p.services.includes(service)) return false;
      if (onlyOnline   && !p.isOnline)   return false;
      if (onlyVerified && !p.isVerified) return false;
      if (onlyVideo    && !p.hasVideo)   return false;
      if (onlyNew      && !p.isNew)      return false;
      if (onlyReviews  && p.reviewCount === 0) return false;
      return true;
    });

    // Sort
    if (sort === 'reviews') filteredProfiles.sort((a,b) => b.reviewCount - a.reviewCount);
    else if (sort === 'popular') filteredProfiles.sort((a,b) => b.viewCount - a.viewCount);
    else if (sort === 'rating')  filteredProfiles.sort((a,b) => (b.avgRating||0) - (a.avgRating||0));
    else if (sort === 'recent')  filteredProfiles.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (sort === 'tier') {
      const tierOrder = {diamond:0, gold:1, silver:2, free:3};
      filteredProfiles.sort((a,b) => tierOrder[a.tier] - tierOrder[b.tier]);
    }

    currentPage = 1;
    renderResults();
  }

  function renderResults() {
    const grid = document.getElementById('search-grid');
    const empty = document.getElementById('search-empty');
    const countEl = document.getElementById('results-count');
    const pagination = document.getElementById('pagination');

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginated = filteredProfiles.slice(start, start + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filteredProfiles.length / ITEMS_PER_PAGE);

    countEl.textContent = `${filteredProfiles.length} listing${filteredProfiles.length !== 1 ? 's' : ''}`;

    if (paginated.length === 0) {
      grid.innerHTML = ''; empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      grid.innerHTML = paginated.map(p => renderProfileCard(p)).join('');
    }

    // Pagination
    if (totalPages > 1) {
      let paginationHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="page-btn${i === currentPage ? ' active' : ''}" onclick="gotoPage(${i})">${i}</button>`;
      }
      pagination.innerHTML = paginationHTML;
    } else {
      pagination.innerHTML = '';
    }
  }

  window.gotoPage = (n) => { currentPage = n; renderResults(); window.scrollTo(0,0); };

  document.getElementById('btn-apply').addEventListener('click', applyFilters);
  document.getElementById('f-sort').addEventListener('change', applyFilters);
  document.getElementById('btn-clear').addEventListener('click', () => {
    document.querySelectorAll('.f-tier, .f-cat').forEach(cb => cb.checked = false);
    ['f-city','f-ethnicity','f-service'].forEach(id => document.getElementById(id).value = '');
    ['f-online','f-verified','f-video','f-new','f-reviews'].forEach(id => document.getElementById(id).checked = false);
    document.getElementById('f-age-min').value = 18;
    document.getElementById('f-age-max').value = 60;
    applyFilters();
  });
  document.getElementById('btn-reset-empty')?.addEventListener('click', () => document.getElementById('btn-clear').click());

  // Mobile sidebar toggle
  document.getElementById('btn-mobile-filters')?.addEventListener('click', () => {
    document.getElementById('search-sidebar').classList.toggle('mobile-open');
  });

  // Initial render
  applyFilters();
});
