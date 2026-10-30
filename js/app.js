// ============================================================
// SCHOLARNET — Main Application JS
// ============================================================

// ---------- Toast Notification System ----------
const toastContainer = (() => {
  let el = document.getElementById('toast-container');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast-container';
    el.className = 'toast-container';
    document.body.appendChild(el);
  }
  return el;
})();

export function showToast(title, msg = '', type = 'info', duration = 4000) {
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ---------- Loading Overlay ----------
export function showLoading(msg = 'Loading...') {
  let el = document.getElementById('loading-overlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'loading-overlay';
    el.className = 'loading-overlay';
    el.innerHTML = `<div class="spinner"></div><p>${msg}</p>`;
    document.body.appendChild(el);
  }
  el.style.display = 'flex';
}

export function hideLoading() {
  const el = document.getElementById('loading-overlay');
  if (el) el.style.display = 'none';
}

// ---------- Dark Mode ----------
function initDarkMode() {
  const toggle = document.querySelector('.dark-toggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  if (toggle) {
    toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar-nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close on link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });
}

// ---------- Active Nav Link ----------
function initActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (path.endsWith(href) || (href !== '/' && path.includes(href.replace('../', '').replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

// ---------- Smooth Scroll ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---------- Scroll Animations ----------
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ---------- Counter Animation ----------
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g, ''));
  const suffix = el.dataset.suffix || el.textContent.replace(/[0-9,]/g, '');
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ---------- Testimonial Slider ----------
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let current = 0;
  let autoPlay;

  function goTo(idx) {
    current = (idx + cards.length) % cards.length;
    const cardW = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${current * cardW}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn?.addEventListener('click', () => { clearInterval(autoPlay); goTo(current - 1); startAuto(); });
  nextBtn?.addEventListener('click', () => { clearInterval(autoPlay); goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(autoPlay); goTo(i); startAuto(); }));

  function startAuto() { autoPlay = setInterval(() => goTo(current + 1), 5000); }
  goTo(0);
  startAuto();
}

// ---------- Stats bar particles (decorative) ----------
function createParticles() {
  const container = document.querySelector('.hero .particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:absolute;
      width:${Math.random() * 4 + 2}px;
      height:${Math.random() * 4 + 2}px;
      border-radius:50%;
      background:rgba(0,166,81,${Math.random() * 0.4 + 0.1});
      top:${Math.random() * 100}%;
      left:${Math.random() * 100}%;
      animation:float ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay:${Math.random() * 3}s;
    `;
    container.appendChild(p);
  }
}

// ---------- Auth Guard ----------
export async function requireAuth(redirectTo = '../pages/auth.html') {
  try {
    const { auth } = await import('./firebase-config.js');
    return new Promise((resolve) => {
      const unsub = auth.onAuthStateChanged((user) => {
        unsub();
        if (!user) {
          window.location.href = redirectTo;
        } else {
          resolve(user);
        }
      });
    });
  } catch (e) {
    console.warn('Auth module unavailable — running in demo mode');
    return null;
  }
}

// ---------- Sidebar Toggle (Dashboard) ----------
function initSidebar() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar on mobile link click
  sidebar.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 900) sidebar.classList.remove('open');
    });
  });
}

// ---------- Countdown Timer ----------
export function startCountdown(targetDate, dayEl, hrEl, minEl, secEl) {
  function update() {
    const now  = new Date();
    const diff = targetDate - now;
    if (diff <= 0) { dayEl.textContent = '00'; hrEl.textContent = '00'; minEl.textContent = '00'; secEl.textContent = '00'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    dayEl.textContent = String(d).padStart(2, '0');
    hrEl.textContent  = String(h).padStart(2, '0');
    minEl.textContent = String(m).padStart(2, '0');
    secEl.textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// ---------- Leaderboard Filter Tabs ----------
function initFilterTabs() {
  document.querySelectorAll('.filter-tabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.filter-tabs').querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ---------- Subjects Filter ----------
function initSubjectsFilter() {
  const filterTabs = document.querySelectorAll('[data-category]');
  const cards = document.querySelectorAll('[data-subject-cat]');
  if (!filterTabs.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.subjectCat === cat;
        card.style.display = match ? '' : 'none';
        card.style.animation = match ? 'fadeInUp 0.4s ease' : '';
      });
    });
  });
}

// ---------- Subject Search ----------
function initSubjectSearch() {
  const searchInput = document.getElementById('subject-search');
  const cards = document.querySelectorAll('[data-subject-name]');
  if (!searchInput || !cards.length) return;

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    cards.forEach(card => {
      const name = card.dataset.subjectName.toLowerCase();
      card.closest('.subject-card-wrap').style.display = name.includes(q) ? '' : 'none';
    });
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  initActiveNav();
  initSmoothScroll();
  initScrollAnimations();
  initCounters();
  initTestimonialSlider();
  createParticles();
  initSidebar();
  initFilterTabs();
  initSubjectsFilter();
  initSubjectSearch();
});
