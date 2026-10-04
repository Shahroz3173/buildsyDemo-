import React from 'react';
import './Footer.css';

export function FinalCTA() {
  return (
    <section className="section cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-content">
        <h2>Your Dream Space Starts Here.</h2>
        <p>Discover the right materials, explore inspiring designs and build with confidence.</p>
        <div className="cta-actions">
          <button className="btn btn-primary">Explore Buildsy</button>
          <button className="btn btn-secondary" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent'}}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">Buildsy</h3>
            <p>The premium digital platform for discovering and buying home-building materials in India.</p>
            <div className="social-links">
              <span>Fb</span>
              <span>Ig</span>
              <span>Tw</span>
              <span>In</span>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Buildsy</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Tiles</a></li>
              <li><a href="#">Marble</a></li>
              <li><a href="#">Sanitaryware</a></li>
              <li><a href="#">Bath Fittings</a></li>
              <li><a href="#">Flooring</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Tools & Support</h4>
            <ul>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Buildsy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
