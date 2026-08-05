// ============================================================
//  KIKI.COM — Admin Panel Script
// ============================================================

let currentTab = 'dashboard';

function switchTab(tab, el) {
  currentTab = tab;
  document.querySelectorAll('.admin-nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('admin-breadcrumb').textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
  renderTab(tab);
}

function renderTab(tab) {
  const main = document.getElementById('admin-main');
  switch (tab) {
    case 'dashboard':    main.innerHTML = renderDashboard(); break;
    case 'profiles':     main.innerHTML = renderProfilesTab(); break;
    case 'users':        main.innerHTML = renderUsersTab(); break;
    case 'verifications':main.innerHTML = renderVerificationsTab(); break;
    case 'reports':      main.innerHTML = renderReportsTab(); break;
    case 'cities':       main.innerHTML = renderCitiesTab(); break;
    case 'payments':     main.innerHTML = renderPaymentsTab(); break;
    case 'settings':     main.innerHTML = renderSettingsTab(); break;
  }
}

// ---- DASHBOARD ----
function renderDashboard() {
  const onlineCount = PROFILES.filter(p => p.isOnline).length;
  const verifiedCount = PROFILES.filter(p => p.isVerified).length;
  const diamondCount = PROFILES.filter(p => p.tier === 'diamond').length;

  const barHeights = [40,65,50,80,60,90,75,55,85,70,95,88];

  return `
  <h1 style="font-size:1.3rem;font-weight:800;margin-bottom:24px">Dashboard Overview</h1>
  <div class="admin-stats">
    <div class="admin-stat-card">
      <div class="admin-stat-icon red">👥</div>
      <div>
        <div class="admin-stat-val">${PROFILES.length}</div>
        <div class="admin-stat-lbl">Total Profiles</div>
        <div class="admin-stat-change up">↑ +12 this week</div>
      </div>
    </div>
    <div class="admin-stat-card">
      <div class="admin-stat-icon gold">💰</div>
      <div>
        <div class="admin-stat-val">₹3,45,000</div>
        <div class="admin-stat-lbl">Monthly Revenue</div>
        <div class="admin-stat-change up">↑ +8.3%</div>
      </div>
    </div>
    <div class="admin-stat-card">
      <div class="admin-stat-icon blue">🌐</div>
      <div>
        <div class="admin-stat-val">52,410</div>
        <div class="admin-stat-lbl">Monthly Visitors</div>
        <div class="admin-stat-change up">↑ +15.2%</div>
      </div>
    </div>
    <div class="admin-stat-card">
      <div class="admin-stat-icon green">🛡️</div>
      <div>
        <div class="admin-stat-val">${verifiedCount}</div>
        <div class="admin-stat-lbl">Verified Profiles</div>
        <div class="admin-stat-change up">↑ +3</div>
      </div>
    </div>
  </div>

  <div class="chart-grid">
    <div class="chart-card">
      <div class="chart-title">Monthly Visitors (Last 12 months)</div>
      <div class="chart-placeholder">
        ${barHeights.map(h => `<div class="chart-bar" style="height:${h}%"></div>`).join('')}
      </div>
    </div>
    <div class="chart-card">
      <div class="chart-title">Membership Tiers</div>
      <div class="pie-placeholder">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="60" fill="none" stroke="var(--bg-3)" stroke-width="30"/>
          <circle cx="80" cy="80" r="60" fill="none" stroke="${getComputedStyle(document.documentElement).getPropertyValue('--diamond')||'#7dd3fc'}" stroke-width="30" stroke-dasharray="113 264" stroke-dashoffset="-66" transform="rotate(-90 80 80)"/>
          <circle cx="80" cy="80" r="60" fill="none" stroke="${getComputedStyle(document.documentElement).getPropertyValue('--gold')||'#f5a623'}" stroke-width="30" stroke-dasharray="113 264" stroke-dashoffset="47" transform="rotate(-90 80 80)"/>
          <circle cx="80" cy="80" r="60" fill="none" stroke="${getComputedStyle(document.documentElement).getPropertyValue('--silver')||'#94a3b8'}" stroke-width="30" stroke-dasharray="75 302" stroke-dashoffset="160" transform="rotate(-90 80 80)"/>
          <text x="80" y="85" text-anchor="middle" fill="white" font-size="14" font-weight="800">${PROFILES.length}</text>
        </svg>
        <div style="margin-left:16px;font-size:0.8rem;display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:6px"><span style="width:10px;height:10px;border-radius:50%;background:#7dd3fc;display:inline-block"></span> Diamond (${diamondCount})</div>
          <div style="display:flex;align-items:center;gap:6px"><span style="width:10px;height:10px;border-radius:50%;background:#f5a623;display:inline-block"></span> Gold (${PROFILES.filter(p=>p.tier==='gold').length})</div>
          <div style="display:flex;align-items:center;gap:6px"><span style="width:10px;height:10px;border-radius:50%;background:#94a3b8;display:inline-block"></span> Silver (${PROFILES.filter(p=>p.tier==='silver').length})</div>
        </div>
      </div>
    </div>
  </div>

  <div class="admin-table-wrap">
    <div class="admin-table-header">
      <div class="admin-table-title">Recent Profiles</div>
      <a href="#" onclick="switchTab('profiles',null)" style="font-size:0.82rem;color:var(--red);font-weight:600">View all →</a>
    </div>
    <table class="admin-table">
      <thead><tr><th>Profile</th><th>Tier</th><th>City</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        ${PROFILES.slice(0,6).map(p => `
        <tr>
          <td><div class="profile-mini">
            <img src="${p.primaryPhoto}" alt="${p.name}">
            <div><div class="profile-mini-name">${p.name}</div><div class="profile-mini-city">${p.age} yrs</div></div>
          </div></td>
          <td><span class="card-badge tier-${p.tier}">${p.tier}</span></td>
          <td>${p.city}</td>
          <td><span class="status-badge status-active">Active</span></td>
          <td style="color:var(--text-muted)">${new Date(p.createdAt).toLocaleDateString()}</td>
          <td>
            <a href="profile.html?id=${p.id}" class="admin-action-btn btn-view">View</a>
            <button class="admin-action-btn btn-reject">Ban</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  `;
}

// ---- PROFILES TAB ----
function renderProfilesTab() {
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
    <h1 style="font-size:1.3rem;font-weight:800">All Profiles (${PROFILES.length})</h1>
    <div style="display:flex;gap:8px">
      <input type="text" class="form-input" placeholder="Search profiles…" style="width:220px;padding:8px 12px;font-size:0.875rem" id="admin-prof-search" oninput="filterAdminProfiles(this.value)">
      <select class="form-input" style="width:140px;padding:8px 12px;font-size:0.875rem" id="admin-prof-tier" onchange="filterAdminProfiles(document.getElementById('admin-prof-search').value)">
        <option value="">All Tiers</option>
        <option value="diamond">Diamond</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
      </select>
    </div>
  </div>
  <div class="admin-table-wrap">
    <table class="admin-table" id="admin-profiles-table">
      <thead><tr><th>Profile</th><th>Tier</th><th>City</th><th>Gender</th><th>Verified</th><th>Reviews</th><th>Views</th><th>Actions</th></tr></thead>
      <tbody id="admin-profiles-tbody">
        ${PROFILES.map(p => `
        <tr data-name="${p.name.toLowerCase()}" data-tier="${p.tier}">
          <td><div class="profile-mini">
            <img src="${p.primaryPhoto}" alt="${p.name}">
            <div><div class="profile-mini-name">${p.name}</div><div class="profile-mini-city">${p.city}</div></div>
          </div></td>
          <td><span class="card-badge tier-${p.tier}">${p.tier}</span></td>
          <td>${p.city}</td>
          <td style="text-transform:capitalize">${p.gender}</td>
          <td>${p.isVerified ? '<span style="color:#4ade80">✓ Yes</span>' : '<span style="color:var(--text-dim)">No</span>'}</td>
          <td>${p.reviewCount}</td>
          <td>${p.viewCount.toLocaleString()}</td>
          <td>
            <a href="profile.html?id=${p.id}" class="admin-action-btn btn-view">View</a>
            <button class="admin-action-btn btn-approve" onclick="alert('Verification approved!')">Verify</button>
            <button class="admin-action-btn btn-reject" onclick="alert('Profile banned!')">Ban</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
  `;
}

window.filterAdminProfiles = (query) => {
  const tier = document.getElementById('admin-prof-tier')?.value || '';
  const q = query.toLowerCase();
  document.querySelectorAll('#admin-profiles-tbody tr').forEach(row => {
    const nameMatch = row.dataset.name?.includes(q) ?? true;
    const tierMatch = !tier || row.dataset.tier === tier;
    row.style.display = (nameMatch && tierMatch) ? '' : 'none';
  });
};

// ---- USERS TAB ----
function renderUsersTab() {
  const mockUsers = [
    { name: 'Marc Dupont', email: 'marc@email.com', role: 'member', joined: '2026-06-01', status: 'active', lastLogin: 'Today' },
    { name: 'Admin User',  email: 'admin@kiki.com', role: 'admin', joined: '2024-01-01', status: 'active', lastLogin: 'Today' },
    { name: 'Julien R.',   email: 'julien@email.com', role: 'member', joined: '2026-07-01', status: 'active', lastLogin: '1h ago' },
    { name: 'Pierre D.',   email: 'pierre@email.com', role: 'advertiser', joined: '2026-05-15', status: 'active', lastLogin: '2d ago' },
    { name: 'Thomas M.',   email: 'thomas@email.com', role: 'member', joined: '2026-03-10', status: 'banned', lastLogin: '30d ago' },
  ];
  return `
  <h1 style="font-size:1.3rem;font-weight:800;margin-bottom:20px">User Management</h1>
  <div class="admin-table-wrap">
    <table class="admin-table">
      <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Joined</th><th>Last Login</th><th>Actions</th></tr></thead>
      <tbody>
        ${mockUsers.map(u => `
        <tr>
          <td><div><div style="font-weight:600">${u.name}</div><div style="font-size:0.75rem;color:var(--text-muted)">${u.email}</div></div></td>
          <td><span class="card-badge" style="background:var(--bg-3);color:var(--text-muted)">${u.role}</span></td>
          <td><span class="status-badge status-${u.status}">${u.status}</span></td>
          <td style="color:var(--text-muted)">${u.joined}</td>
          <td style="color:var(--text-muted)">${u.lastLogin}</td>
          <td>
            ${u.status === 'banned'
              ? `<button class="admin-action-btn btn-approve" onclick="alert('User unbanned!')">Unban</button>`
              : `<button class="admin-action-btn btn-reject" onclick="alert('User banned!')">Ban</button>`}
            <button class="admin-action-btn btn-view" onclick="alert('Editing role...')">Edit Role</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ---- VERIFICATIONS TAB ----
function renderVerificationsTab() {
  const queue = PROFILES.filter(p => !p.isVerified).slice(0, 5);
  return `
  <h1 style="font-size:1.3rem;font-weight:800;margin-bottom:20px">Verification Queue (${queue.length} pending)</h1>
  <div class="admin-table-wrap">
    <table class="admin-table">
      <thead><tr><th>Profile</th><th>Type</th><th>Submitted</th><th>Photo</th><th>Actions</th></tr></thead>
      <tbody>
        ${queue.map((p,i) => `
        <tr>
          <td><div class="profile-mini">
            <img src="${p.primaryPhoto}" alt="${p.name}">
            <div><div class="profile-mini-name">${p.name}</div><div class="profile-mini-city">${p.city}</div></div>
          </div></td>
          <td><span class="card-badge" style="background:rgba(245,166,35,0.1);color:var(--gold)">${['Photo','ID','Phone','Video'][i%4]} Verification</span></td>
          <td style="color:var(--text-muted)">${i} day${i!==1?'s':''} ago</td>
          <td><img src="${p.primaryPhoto}" style="width:48px;height:48px;border-radius:6px;object-fit:cover;cursor:pointer" onclick="alert('Viewing verification photo...')"></td>
          <td>
            <button class="admin-action-btn btn-approve" onclick="alert('Verification approved!')">✓ Approve</button>
            <button class="admin-action-btn btn-reject" onclick="alert('Verification rejected!')">✗ Reject</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ---- REPORTS TAB ----
function renderReportsTab() {
  const reasons = ['Fake profile','Suspected underage','Illegal content','Spam','Other'];
  return `
  <h1 style="font-size:1.3rem;font-weight:800;margin-bottom:20px">Reports (7 open)</h1>
  <div class="admin-table-wrap">
    <table class="admin-table">
      <thead><tr><th>Reporter</th><th>Profile</th><th>Reason</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
      <tbody>
        ${PROFILES.slice(0,7).map((p,i) => `
        <tr>
          <td style="color:var(--text-muted)">Anonymous</td>
          <td><div class="profile-mini">
            <img src="${p.primaryPhoto}" alt="${p.name}">
            <div class="profile-mini-name">${p.name}</div>
          </div></td>
          <td>${reasons[i % reasons.length]}</td>
          <td><span class="status-badge ${i < 5 ? 'status-open' : 'status-resolved'}">${i < 5 ? 'Open' : 'Resolved'}</span></td>
          <td style="color:var(--text-muted)">${i + 1}d ago</td>
          <td>
            <button class="admin-action-btn btn-approve" onclick="alert('Report resolved!')">Resolve</button>
            <button class="admin-action-btn btn-reject" onclick="alert('Profile removed!')">Remove Profile</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ---- CITIES TAB ----
function renderCitiesTab() {
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
    <h1 style="font-size:1.3rem;font-weight:800">City Management (${CITIES.length})</h1>
    <button class="btn-primary" style="max-width:160px;padding:9px 20px" onclick="alert('Add city form...')">+ Add City</button>
  </div>
  <div class="admin-table-wrap">
    <table class="admin-table">
      <thead><tr><th>City</th><th>Slug</th><th>Region</th><th>Listings</th><th>Actions</th></tr></thead>
      <tbody>
        ${CITIES.map(c => `
        <tr>
          <td style="font-weight:600">${c.name}</td>
          <td style="color:var(--text-muted);font-family:monospace">${c.slug}</td>
          <td style="color:var(--text-muted)">${c.region}</td>
          <td><strong>${c.count}</strong></td>
          <td>
            <button class="admin-action-btn btn-view" onclick="alert('Editing ${c.name}...')">Edit</button>
            <button class="admin-action-btn btn-reject" onclick="alert('Deleting ${c.name}...')">Delete</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ---- PAYMENTS TAB ----
function renderPaymentsTab() {
  const tiers = ['diamond','gold','gold','silver','diamond','gold','silver','diamond'];
  const prices = { diamond: '₹8,000', gold: '₹5,000', silver: '₹2,500' };
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
    <h1 style="font-size:1.3rem;font-weight:800">Payments & Subscriptions</h1>
    <div style="font-size:0.875rem;color:var(--text-muted)">Total MRR: <strong style="color:#4ade80">₹3,45,000</strong></div>
  </div>
  <div class="admin-table-wrap">
    <table class="admin-table">
      <thead><tr><th>Profile</th><th>Tier</th><th>Amount</th><th>Start</th><th>Renews</th><th>Status</th></tr></thead>
      <tbody>
        ${PROFILES.filter(p=>p.tier!=='free').slice(0,8).map((p,i) => `
        <tr>
          <td><div class="profile-mini">
            <img src="${p.primaryPhoto}" alt="${p.name}">
            <div class="profile-mini-name">${p.name}</div>
          </div></td>
          <td><span class="card-badge tier-${p.tier}">${p.tier}</span></td>
          <td style="font-weight:700">${prices[p.tier]}/mo</td>
          <td style="color:var(--text-muted)">${new Date(p.createdAt).toLocaleDateString()}</td>
          <td style="color:var(--text-muted)">2026-08-${String(i+1).padStart(2,'0')}</td>
          <td><span class="status-badge status-paid">Paid</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

// ---- SETTINGS TAB ----
function renderSettingsTab() {
  return `
  <h1 style="font-size:1.3rem;font-weight:800;margin-bottom:24px">Site Settings</h1>
  <div class="settings-grid">
    <div class="settings-card">
      <div class="settings-card-title">General</div>
      <div class="form-group">
        <label class="form-label">Site Name</label>
        <input type="text" class="form-input" value="kiki.com">
      </div>
      <div class="form-group">
        <label class="form-label">Contact Email</label>
        <input type="email" class="form-input" value="contact@kiki.com">
      </div>
      <div class="form-group">
        <label class="form-label">Default Language</label>
        <select class="form-input"><option>English</option><option>Hindi</option></select>
      </div>
      <button class="btn-primary" style="max-width:150px;padding:10px" onclick="alert('Settings saved!')">Save Changes</button>
    </div>
    <div class="settings-card">
      <div class="settings-card-title">Feature Toggles</div>
      <div class="toggle-row">
        <div><div class="toggle-row-label">Age Gate</div><div class="toggle-row-desc">Show 18+ popup on entry</div></div>
        <label class="filter-toggle" style="padding:0">
          <input type="checkbox" checked>
          <span class="toggle-track"><span class="toggle-thumb"></span></span>
        </label>
      </div>
      <div class="toggle-row">
        <div><div class="toggle-row-label">Maintenance Mode</div><div class="toggle-row-desc">Show maintenance page</div></div>
        <label class="filter-toggle" style="padding:0">
          <input type="checkbox">
          <span class="toggle-track"><span class="toggle-thumb"></span></span>
        </label>
      </div>
      <div class="toggle-row">
        <div><div class="toggle-row-label">New Registrations</div><div class="toggle-row-desc">Allow new users to sign up</div></div>
        <label class="filter-toggle" style="padding:0">
          <input type="checkbox" checked>
          <span class="toggle-track"><span class="toggle-thumb"></span></span>
        </label>
      </div>
      <div class="toggle-row">
        <div><div class="toggle-row-label">Email Notifications</div><div class="toggle-row-desc">Send admin email alerts</div></div>
        <label class="filter-toggle" style="padding:0">
          <input type="checkbox" checked>
          <span class="toggle-track"><span class="toggle-thumb"></span></span>
        </label>
      </div>
    </div>
  </div>`;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  renderTab('dashboard');
});
