import React, { useState, useEffect } from 'react';
import './Header.css';

export function Navbar({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">Buildsy</div>
        <ul className={`nav-links ${menuOpen ? 'nav-links-mobile-active' : ''}`}>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a></li>
          <li><a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a></li>
          <li><a href="#brands" onClick={() => setMenuOpen(false)}>Brands</a></li>
          <li><a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a></li>
        </ul>
        <div className="nav-actions">
          <div className="search-icon">🔍</div>
          <div className="wishlist-icon hide-on-mobile">♡</div>
          <button 
            className="btn btn-primary nav-btn" 
            onClick={() => window.open('https://opal.google/app/14tn1-GrgR07in3yHRdF0WBDvCGoG8k93', '_blank')}
          >
            Get Expert Help
          </button>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <header className="hero">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src="/showcase-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text reveal">
          <h1>Build Your Space. <br/>Your Way.</h1>
          <p>Discover premium tiles, marble, sanitaryware and home solutions — all in one place.</p>
          <div className="hero-search-box">
            <input type="text" placeholder="What are you looking for? Tiles, marble, bathroom fittings..." />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="hero-chips">
            <span className="chip">Tiles</span>
            <span className="chip">Marble</span>
            <span className="chip">Sanitaryware</span>
            <span className="chip">Bath Fittings</span>
            <span className="chip">Kitchen</span>
            <span className="chip">Flooring</span>
          </div>
          <div className="hero-actions">
            <button className="btn btn-white">Explore Products</button>
            <button className="btn btn-secondary" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent'}}>Find Your Style</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function TrustStrip() {
  const points = [
    "✓ Premium Quality",
    "✓ Wide Product Collection",
    "✓ Verified Brands",
    "✓ Expert Assistance",
    "✓ Easy Enquiry"
  ];
  return (
    <div className="trust-strip">
      <div className="container trust-container">
        {points.map((pt, i) => (
          <div key={i} className="trust-point">{pt}</div>
        ))}
      </div>
    </div>
  );
}
