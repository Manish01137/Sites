// ========= SHARED NAV & FOOTER INJECTION =========
const NAV_HTML = `
<nav>
  <a href="index.html" class="logo">
    <div class="logo-icon">🏏</div>
    BatKing
  </a>

  <ul class="nav-links">
    <li><a href="index.html" data-page="home">Home</a></li>
    <li>
      <a href="exchanges.html" data-page="exchanges">Betting Exchanges <span class="dropdown-arrow">▼</span></a>
      <div class="dropdown">
        <div class="dropdown-label">Popular IDs</div>
        <a href="fairbet.html"><div class="dropdown-icon">⭐</div> Fairbet ID</a>
        <a href="world777.html"><div class="dropdown-icon">🌍</div> World777 ID</a>
        <a href="sky-exchange.html"><div class="dropdown-icon">🌀</div> Sky Exchange ID</a>
        <a href="tigerexch.html"><div class="dropdown-icon">🐅</div> TigerExch ID</a>
        <a href="diamondexch.html"><div class="dropdown-icon">💎</div> DiamondExch ID</a>
        <div class="dropdown-divider"></div>
        <div class="dropdown-label">Compare</div>
        <a href="compare.html"><div class="dropdown-icon">⚖️</div> Fairbet vs World777</a>
      </div>
    </li>
    <li>
      <a href="ipl-2026.html" data-page="tournaments">Tournaments <span class="dropdown-arrow">▼</span></a>
      <div class="dropdown">
        <a href="ipl-2026.html"><div class="dropdown-icon">🏆</div> IPL 2026 Cricket ID</a>
        <a href="womens-t20.html"><div class="dropdown-icon">👩</div> Women's T20 World Cup ID</a>
        <a href="wpl.html"><div class="dropdown-icon">🏏</div> WPL Cricket ID</a>
        <a href="psl.html"><div class="dropdown-icon">🌙</div> PSL Cricket ID</a>
      </div>
    </li>
    <li>
      <a href="predictions.html" data-page="match">Match Center <span class="dropdown-arrow">▼</span></a>
      <div class="dropdown">
        <a href="predictions.html"><div class="dropdown-icon">🔮</div> Today's Match Predictions</a>
        <a href="live-scores.html"><div class="dropdown-icon">📡</div> Live Scores & Points Tables</a>
        <a href="player-stats.html"><div class="dropdown-icon">📊</div> Player Stats</a>
      </div>
    </li>
    <li>
      <a href="bonus-offers.html" data-page="offers">Offers & Proof <span class="dropdown-arrow">▼</span></a>
      <div class="dropdown">
        <a href="bonus-offers.html"><div class="dropdown-icon">🎁</div> Bonus Offers</a>
        <a href="withdrawal-proofs.html"><div class="dropdown-icon">✅</div> Withdrawal Proofs</a>
        <div class="dropdown-divider"></div>
        <a href="refer-friends.html"><div class="dropdown-icon">🤝</div> Refer 5 Friends = ₹2000 Bonus</a>
      </div>
    </li>
  </ul>

  <div class="nav-right">
    <a href="https://wa.me/" class="btn-whatsapp" target="_blank" rel="noopener">
      <span class="btn-whatsapp-icon">🟢</span>
      GET CRICKET ID
    </a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-nav" id="mobileNav">
  <div class="mobile-nav-section"><a href="index.html" class="mobile-nav-home">Home</a></div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-title" onclick="this.classList.toggle('expanded');this.nextElementSibling.classList.toggle('open')">Betting Exchanges <span class="chevron">▼</span></div>
    <div class="mobile-subnav">
      <a href="fairbet.html">Fairbet ID</a>
      <a href="world777.html">World777 ID</a>
      <a href="sky-exchange.html">Sky Exchange ID</a>
      <a href="tigerexch.html">TigerExch ID</a>
      <a href="diamondexch.html">DiamondExch ID</a>
      <a href="compare.html">Fairbet vs World777</a>
    </div>
  </div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-title" onclick="this.classList.toggle('expanded');this.nextElementSibling.classList.toggle('open')">Tournaments <span class="chevron">▼</span></div>
    <div class="mobile-subnav">
      <a href="ipl-2026.html">IPL 2026 Cricket ID</a>
      <a href="womens-t20.html">Women's T20 World Cup ID</a>
      <a href="wpl.html">WPL Cricket ID</a>
      <a href="psl.html">PSL Cricket ID</a>
    </div>
  </div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-title" onclick="this.classList.toggle('expanded');this.nextElementSibling.classList.toggle('open')">Match Center <span class="chevron">▼</span></div>
    <div class="mobile-subnav">
      <a href="predictions.html">Today's Match Predictions</a>
      <a href="live-scores.html">Live Scores & Points Tables</a>
      <a href="player-stats.html">Player Stats</a>
    </div>
  </div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-title" onclick="this.classList.toggle('expanded');this.nextElementSibling.classList.toggle('open')">Offers & Proof <span class="chevron">▼</span></div>
    <div class="mobile-subnav">
      <a href="bonus-offers.html">Bonus Offers</a>
      <a href="withdrawal-proofs.html">Withdrawal Proofs</a>
      <a href="refer-friends.html">Refer 5 Friends = ₹2000 Bonus</a>
    </div>
  </div>

  <div class="mobile-nav-cta">
    <a href="https://wa.me/" class="btn-whatsapp" target="_blank" rel="noopener"><span class="btn-whatsapp-icon">🟢</span> GET CRICKET ID</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon">🏏</div>
        BatKing
      </a>
      <p>India's most trusted direct Cricket ID provider. 15% welcome bonus. 2-minute withdrawals. Daily predictions, Dream11 tips & verified payout proofs.</p>
      <div class="footer-legal">
        ⚠️ Gambling can be addictive. Play responsibly.<br>
        18+ only. T&Cs apply.
      </div>
    </div>
    <div>
      <div class="footer-col-title">Exchange IDs</div>
      <ul class="footer-links">
        <li><a href="fairbet.html">Fairbet ID</a></li>
        <li><a href="world777.html">World777 ID</a></li>
        <li><a href="sky-exchange.html">Sky Exchange ID</a></li>
        <li><a href="tigerexch.html">TigerExch ID</a></li>
        <li><a href="diamondexch.html">DiamondExch ID</a></li>
        <li><a href="compare.html">Compare Exchanges</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Match Center</div>
      <ul class="footer-links">
        <li><a href="predictions.html">Today's Predictions</a></li>
        <li><a href="live-scores.html">Live Scores & Points Table</a></li>
        <li><a href="player-stats.html">Player Stats</a></li>
        <li><a href="ipl-2026.html">IPL 2026</a></li>
        <li><a href="wpl.html">WPL Cricket ID</a></li>
        <li><a href="psl.html">PSL Cricket ID</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Offers & Proof</div>
      <ul class="footer-links">
        <li><a href="bonus-offers.html">Bonus Offers (15%)</a></li>
        <li><a href="withdrawal-proofs.html">Withdrawal Proofs</a></li>
        <li><a href="refer-friends.html">Refer 5 = ₹2000</a></li>
        <li><a href="womens-t20.html">Women's T20 WC</a></li>
        <li><a href="exchanges.html">All Exchanges</a></li>
        <li><a href="index.html">Home</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 BatKing. All rights reserved. Operated under license.</p>
    <div class="footer-bottom-right">
      <div class="age-badge">18+ Only</div>
      <div class="social-links">
        <a href="#" class="social-btn">𝕏</a>
        <a href="#" class="social-btn">in</a>
        <a href="#" class="social-btn">▶</a>
        <a href="#" class="social-btn">📸</a>
      </div>
    </div>
  </div>
</footer>
`;

const BETSLIP_HTML = `
<div class="bet-slip">
  <button class="bet-slip-toggle" onclick="this.querySelector('.bet-count').textContent = Math.min(9, parseInt(this.querySelector('.bet-count').textContent)+1)">
    🎯 Bet Slip
    <div class="bet-count">0</div>
  </button>
</div>
`;

// Mount nav/footer/betslip if placeholders exist
const navMount = document.getElementById('nav-mount');
const footerMount = document.getElementById('footer-mount');
const betslipMount = document.getElementById('betslip-mount');
if (navMount) navMount.innerHTML = NAV_HTML;
if (footerMount) footerMount.innerHTML = FOOTER_HTML;
if (betslipMount) betslipMount.innerHTML = BETSLIP_HTML;

// Highlight current page in nav
const currentPage = document.body.getAttribute('data-page');
if (currentPage) {
  document.querySelectorAll(`[data-page="${currentPage}"]`).forEach(el => {
    el.style.color = 'var(--gold)';
  });
}

// ========= SCROLL REVEAL =========
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ========= LIVE ODDS RANDOMIZER =========
function randomizeOdds() {
  document.querySelectorAll('.odd-value').forEach(el => {
    if (el.textContent === '—') return;
    const current = parseFloat(el.textContent);
    if (isNaN(current)) return;
    const change = (Math.random() - 0.5) * 0.06;
    el.textContent = Math.max(1.01, current + change).toFixed(2);
    el.parentElement.classList.add('flash-green');
    setTimeout(() => el.parentElement.classList.remove('flash-green'), 600);
  });
}
if (document.querySelector('.odd-value')) setInterval(randomizeOdds, 2200);

// ========= ODD BUTTON CLICK =========
document.querySelectorAll('.odd-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const val = this.querySelector('.odd-value').textContent;
    if (val === '—') return;
    const countEl = document.querySelector('.bet-count');
    if (!countEl) return;
    const count = parseInt(countEl.textContent);
    if (count < 9) countEl.textContent = count + 1;
    this.style.transform = 'scale(0.95)';
    setTimeout(() => this.style.transform = '', 150);
  });
});

// ========= SCORE UPDATE SIMULATION =========
if (document.querySelector('.team-score')) {
  setInterval(() => {
    document.querySelectorAll('.team-score').forEach(s => {
      if (s.textContent.includes('/') && Math.random() > 0.85) {
        const parts = s.textContent.split('/');
        const runs = parseInt(parts[0]);
        s.textContent = (runs + (Math.random() > 0.5 ? 1 : 0)) + '/' + parts[1];
      }
    });
  }, 3000);
}

// ========= LIVE BLOG AUTO-PUSH =========
const feed = document.getElementById('liveBlogFeed');
if (feed) {
  const liveEvents = [
    { t: '19.1', tag: 'tag', label: 'Live', txt: 'Bumrah starts the 20th over. Tight yorker, dot ball.' },
    { t: '19.2', tag: 'tag six', label: 'SIX', txt: 'SIX! Hardik Pandya launches it over long-on!' },
    { t: '19.3', tag: 'tag hot', label: 'Wicket', txt: 'Wicket! Hardik holes out at deep midwicket.' },
    { t: '19.4', tag: 'tag', label: 'Live', txt: 'Two runs, good running between wickets.' },
    { t: '19.5', tag: 'tag six', label: 'FOUR', txt: 'FOUR! Glanced fine down to the rope.' },
    { t: '19.6', tag: 'tag hot', label: 'Result', txt: 'Last ball — MI need 4. Full toss... dot! RCB win by 3!' },
  ];
  let liveIdx = 0;
  setInterval(() => {
    if (liveIdx >= liveEvents.length) return;
    const e = liveEvents[liveIdx++];
    const entry = document.createElement('div');
    entry.className = 'blog-entry';
    entry.innerHTML = `<div class="blog-time">${e.t}</div><div class="blog-event"><span class="${e.tag}">${e.label}</span> ${e.txt}</div>`;
    entry.style.opacity = 0;
    entry.style.transform = 'translateY(-10px)';
    feed.insertBefore(entry, feed.firstChild);
    requestAnimationFrame(() => {
      entry.style.transition = 'all 0.4s ease';
      entry.style.opacity = 1;
      entry.style.transform = 'none';
    });
  }, 6000);
}

// ========= HAMBURGER TOGGLE =========
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ========= FAQ ACCORDION =========
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
});
