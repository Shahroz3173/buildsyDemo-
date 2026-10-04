import React from 'react';
import './Community.css';

export function ExpertConsultation() {
  return (
    <section className="section consultation-section">
      <div className="consultation-bg"></div>
      <div className="container consultation-content">
        <h2>Building or Renovating Your Space?</h2>
        <p>Get personalized guidance from our experts and make confident decisions for your dream home.</p>
        <div className="consultation-actions">
          <button className="btn btn-primary">Talk to an Expert</button>
          <button className="btn btn-white">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
}

export function CustomerStories() {
  const stories = [
    { type: "Villa Renovation", location: "Bangalore", products: "Italian Marble, Grohe Fittings", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
    { type: "Modern Apartment", location: "Mumbai", products: "Vitrified Tiles, Minimalist Bath", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" },
    { type: "Boutique Cafe", location: "Delhi", products: "Terrazzo & Wood Finish", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80" }
  ];

  return (
    <section className="section bg-secondary" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Spaces Built with Buildsy</h2>
          <p>See how our customers transformed their spaces using our premium materials.</p>
        </div>
        <div className="grid grid-3">
          {stories.map((s, i) => (
            <div key={i} className="story-card">
              <div className="story-img">
                <img src={s.img} alt={s.type} loading="lazy" />
              </div>
              <div className="story-content">
                <div className="story-meta">{s.type} • {s.location}</div>
                <h3>Products Used</h3>
                <p>{s.products}</p>
                <div className="story-link">View Project →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const articles = [
    { title: "How to Choose the Right Tiles for Your Home", date: "Oct 12, 2026" },
    { title: "Marble vs Vitrified Tiles: What Should You Choose?", date: "Oct 05, 2026" },
    { title: "10 Modern Bathroom Design Ideas", date: "Sep 28, 2026" },
    { title: "Latest Interior Design Trends for 2027", date: "Sep 20, 2026" }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header left" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2>Design Ideas & Expert Tips</h2>
            <p>Knowledge and inspiration to help you build better.</p>
          </div>
          <button className="btn btn-secondary">Explore All Articles →</button>
        </div>
        <div className="grid grid-4" style={{marginTop: '40px'}}>
          {articles.map((a, i) => (
            <div key={i} className="article-card">
              <div className="article-placeholder"></div>
              <div className="article-meta">{a.date}</div>
              <h4>{a.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
