// ========= SHARED NAV & FOOTER INJECTION =========
const NAV_HTML = `
<nav>
  <a href="index.html" class="logo">
    <div class="logo-icon">🏏</div>
    GoldPlays99
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
    <a href="https://wa.me/19207685046" class="btn-whatsapp" target="_blank" rel="noopener"><span class="btn-whatsapp-icon">🟢</span> GET CRICKET ID</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon">🏏</div>
        GoldPlays99
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
    <p>© 2026 GoldPlays99. All rights reserved. Operated under license.</p>
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
<a href="https://wa.me/19207685046" target="_blank" rel="noopener" class="float-whatsapp" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
  </svg>
  <span class="float-whatsapp-label">Chat Now</span>
</a>
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
    if (this.querySelector('.odd-value').textContent === '—') return;
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
