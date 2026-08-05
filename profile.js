// ============================================================
//  KIKI.COM — Profile Detail Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mount header/footer
  document.getElementById('header-mount').innerHTML = renderHeader();
  document.getElementById('footer-mount').innerHTML = renderFooter();
  document.getElementById('report-modal-mount').innerHTML = renderReportModal();
  initAgeGate();
  initCookieBanner();
  initHeader();
  initReportModal();

  // Load profile from URL param
  const params = new URLSearchParams(window.location.search);
  const profileId = parseInt(params.get('id') || '1');
  const profile = getProfileById(profileId);

  if (!profile) {
    document.getElementById('profile-404').style.display = 'block';
    return;
  }

  document.getElementById('profile-page').style.display = 'block';

  // Page title & meta
  document.title = `${profile.name}, ${profile.age} — ${profile.city} | kiki.com`;
  document.getElementById('page-desc').content = profile.shortDesc;

  // Breadcrumb
  document.getElementById('breadcrumb-mount').innerHTML = renderBreadcrumb([
    { label: 'Home', href: 'index.html' },
    { label: profile.city, href: `city.html?city=${profile.citySlug}` },
    { label: profile.name, href: '#' },
  ]);

  // ---- Gallery ----
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.src = profile.primaryPhoto;
  mainImg.alt = `${profile.name}, escort ${profile.city}`;

  // Thumbnails
  const thumbsWrap = document.getElementById('gallery-thumbs');
  profile.photos.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = `gallery-thumb${i === 0 ? ' active' : ''}`;
    div.innerHTML = `<img src="${src}" alt="Photo ${i + 1}">`;
    div.addEventListener('click', () => {
      mainImg.src = src;
      thumbsWrap.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      div.classList.add('active');
    });
    thumbsWrap.appendChild(div);
  });

  // Badges
  const tierLabels = { diamond: '💎 Diamond', gold: '🥇 Gold', silver: '🥈 Silver', free: '' };
  const tierBadgeTL = document.getElementById('gallery-tier-badge');
  if (profile.tier !== 'free') {
    tierBadgeTL.innerHTML = `<span class="card-badge card-tier-badge tier-${profile.tier}">${tierLabels[profile.tier]}</span>`;
  }
  if (profile.isVerified) document.getElementById('gallery-verified').style.display = 'inline-flex';
  if (profile.isOnline)   document.getElementById('gallery-online').style.display = 'block';
  if (profile.hasVideo) {
    const playBtn = document.getElementById('gallery-play');
    playBtn.style.display = 'flex';
    playBtn.addEventListener('click', () => {
      document.getElementById('video-player').style.display = 'block';
      playBtn.style.display = 'none';
    });
  }

  // ---- Right column ----
  document.getElementById('prof-name').textContent = profile.name;
  document.getElementById('prof-age').textContent = `Age ${profile.age}`;

  // Tier badge
  document.getElementById('prof-tier-badge').innerHTML = profile.tier !== 'free'
    ? `<span class="card-badge card-tier-badge tier-${profile.tier}" style="font-size:0.9rem;padding:6px 16px">${tierLabels[profile.tier]}</span>`
    : '';

  // Status chips
  const chipsWrap = document.getElementById('prof-chips');
  if (profile.isOnline)   chipsWrap.innerHTML += `<span class="profile-chip chip-online"><span class="online-pulse"></span> Online Now</span>`;
  if (profile.isVerified) chipsWrap.innerHTML += `<span class="profile-chip chip-verified"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Verified</span>`;
  if (profile.isNew)      chipsWrap.innerHTML += `<span class="profile-chip chip-new">✦ New</span>`;
  if (profile.hasVideo)   chipsWrap.innerHTML += `<span class="profile-chip chip-video"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Has Video</span>`;

  // Contact block
  const contactBlock = document.getElementById('contact-block');
  contactBlock.innerHTML = `
    <div class="contact-block-title">Contact Information</div>
    ${profile.phone ? `
    <div class="contact-method">
      <div class="contact-method-label">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/></svg>
        Phone
      </div>
      <button class="contact-reveal-btn" data-phone="${profile.phone}" onclick="revealContact(this, '${profile.phone}')">Reveal Number</button>
    </div>` : ''}
    ${profile.whatsapp ? `
    <div class="contact-method">
      <div class="contact-method-label">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        WhatsApp
      </div>
      <button class="contact-reveal-btn" onclick="revealContact(this, '${profile.phone}')">WhatsApp</button>
    </div>` : ''}
    ${profile.email ? `
    <div class="contact-method">
      <div class="contact-method-label">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </div>
      <button class="contact-reveal-btn" onclick="revealContact(this, '${profile.email}')">Reveal Email</button>
    </div>` : ''}
    <a href="messages.html" class="btn-message">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Send Message
    </a>
  `;

  // Quick info grid
  const infoGrid = document.getElementById('prof-info-grid');
  const infoItems = [
    ['📍 Location', profile.city],
    ['👤 Gender', profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)],
    ['📏 Height', profile.height],
    ['🌍 Ethnicity', profile.ethnicity],
    ['💆 Body Type', profile.bodyType],
    ['💇 Hair', profile.hairColor],
    ['👁️ Cup Size', profile.cupSize],
  ];
  infoGrid.innerHTML = infoItems.map(([label, value]) => `
    <div class="info-cell">
      <div class="info-cell-label">${label}</div>
      <div class="info-cell-value">${value}</div>
    </div>
  `).join('');

  // Services
  const servicesWrap = document.getElementById('prof-services');
  const serviceMap = {};
  if (typeof SERVICES !== 'undefined') SERVICES.forEach(s => serviceMap[s.id] = s.label);
  servicesWrap.innerHTML = profile.services
    .map(s => `<span class="service-tag">${serviceMap[s] || s}</span>`)
    .join('');

  // Languages
  document.getElementById('prof-languages').innerHTML = profile.languages
    .map(l => `<span class="service-tag">${l}</span>`).join('');

  // Description
  document.getElementById('prof-desc').textContent = profile.description;

  // Rates
  document.getElementById('prof-rates').innerHTML = `
    <div class="rate-card">
      <div class="rate-card-title">Incall</div>
      <div class="rate-price">${profile.incallRate}</div>
      <div class="rate-duration">Per hour</div>
    </div>
    <div class="rate-card">
      <div class="rate-card-title">Outcall</div>
      <div class="rate-price">${profile.outcallRate}</div>
      <div class="rate-duration">Per hour</div>
    </div>
  `;

  // Availability
  const days = ['mon','tue','wed','thu','fri','sat','sun'];
  const dayLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  document.getElementById('prof-avail').innerHTML = days.map((d, i) => {
    const time = profile.availability[d];
    const isOff = time === 'Off';
    return `
      <div class="avail-row">
        <span class="avail-day">${dayLabels[i]}</span>
        <span class="avail-time ${isOff ? 'off' : 'available'}">${time}</span>
      </div>
    `;
  }).join('');

  // ---- Reviews ----
  const reviewsTitle = document.getElementById('reviews-title');
  reviewsTitle.textContent = `Reviews (${profile.reviewCount})`;

  if (profile.avgRating && profile.reviewCount > 0) {
    const ratingSummary = document.getElementById('rating-summary');
    ratingSummary.style.display = 'flex';
    const stars = '★'.repeat(Math.round(profile.avgRating)) + '☆'.repeat(5 - Math.round(profile.avgRating));
    ratingSummary.innerHTML = `
      <div class="rating-big">${profile.avgRating.toFixed(1)}</div>
      <div>
        <div class="rating-stars-big">${stars}</div>
        <div class="rating-count">Based on ${profile.reviewCount} reviews</div>
      </div>
    `;
  }

  const reviewsList = document.getElementById('reviews-list');
  if (profile.reviews && profile.reviews.length > 0) {
    reviewsList.innerHTML = profile.reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-author">
            <div class="review-avatar">${r.author.charAt(0)}</div>
            <div>
              <div class="review-name">${r.author}</div>
              <div class="review-date">${new Date(r.date).toLocaleDateString('en-GB', {year:'numeric',month:'long',day:'numeric'})}</div>
            </div>
          </div>
          <div class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
        <p class="review-comment">${r.comment}</p>
      </div>
    `).join('');
  } else {
    reviewsList.innerHTML = `<p style="color:var(--text-muted);font-size:0.9rem">No reviews yet. Be the first to leave one!</p>`;
  }

  // Write review toggle
  let selectedStars = 0;
  document.getElementById('btn-write-review').addEventListener('click', () => {
    const form = document.getElementById('write-review-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  document.querySelectorAll('.star-inp').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedStars = parseInt(btn.dataset.val);
      document.querySelectorAll('.star-inp').forEach((s, i) => {
        s.classList.toggle('active', i < selectedStars);
      });
    });
  });

  // ---- Similar Profiles ----
  const similarGrid = document.getElementById('similar-grid');
  const similar = getSimilarProfiles(profile, 4);
  similarGrid.innerHTML = similar.map(p => renderProfileCard(p)).join('');

  // ---- SEO text ----
  document.getElementById('seo-text').innerHTML = `
    <h2>${profile.name} — Escort in ${profile.city}</h2>
    <p>${profile.name} is a ${profile.tier} tier escort based in ${profile.city}${profile.region ? ', ' + profile.region : ''}. ${profile.description}</p>
    <h3>Services offered by ${profile.name}</h3>
    <p>Services include: ${profile.services.map(s => serviceMap[s] || s).join(', ')}.</p>
    <h3>Contact ${profile.name}</h3>
    <p>To contact ${profile.name}, please reveal the contact information above. Incall rates from ${profile.incallRate}, outcall from ${profile.outcallRate}.</p>
  `;
});

// ---- Contact reveal helper ----
function revealContact(btn, value) {
  if (btn.classList.contains('revealed')) return;
  btn.textContent = value;
  btn.classList.add('revealed');
}

// ---- Review submit ----
function submitReview() {
  const textarea = document.getElementById('review-textarea');
  const stars = document.querySelectorAll('.star-inp.active').length;
  if (!stars) { alert('Please select a star rating.'); return; }
  if (!textarea.value.trim()) { alert('Please write a review comment.'); return; }
  // In a real app, this would POST to API
  const form = document.getElementById('write-review-form');
  form.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-muted)">✅ Thank you! Your review has been submitted for moderation.</div>`;
}
