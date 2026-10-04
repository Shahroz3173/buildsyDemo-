import React from 'react';
import './Features.css';

export function WhyBuildsy() {
  const features = [
    { title: "Curated Collections", desc: "Discover products selected for modern spaces.", icon: "✨" },
    { title: "Compare Products", desc: "Compare designs, specifications and prices easily.", icon: "⚖️" },
    { title: "Expert Guidance", desc: "Get help choosing the right product for your space.", icon: "🤝" },
    { title: "Multiple Brands", desc: "Explore products across trusted brands.", icon: "🏢" },
    { title: "Easy Enquiry", desc: "Connect with sellers and request information quickly.", icon: "💬" },
    { title: "Inspiration", desc: "Discover real spaces and design ideas before you buy.", icon: "📸" }
  ];

  return (
    <section className="section" id="why-buildsy">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Buildsy?</h2>
          <p>We're redefining how you discover and buy building materials.</p>
        </div>
        <div className="grid grid-3">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  const brands = ['Kajaria', 'Somany', 'Jaquar', 'Kohler', 'CERA', 'Hindware'];
  
  return (
    <section className="section bg-secondary" id="brands">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 style={{marginBottom: '40px', fontSize: '2.5rem'}}>Trusted Brands. Better Choices.</h2>
        <div className="brands-container">
          {brands.map((b, i) => (
            <div key={i} className="brand-logo">{b}</div>
          ))}
        </div>
        <button className="btn btn-secondary mt-4">View All Brands →</button>
      </div>
    </section>
  );
}

export function ToolsSection() {
  const tools = [
    { name: "Tile Calculator", desc: "Estimate the number of tiles required for your space.", icon: "🧮" },
    { name: "Budget Calculator", desc: "Estimate your entire material budget instantly.", icon: "₹" },
    { name: "Area Calculator", desc: "Calculate floor and wall area effectively.", icon: "📐" }
  ];

  return (
    <section className="section" id="tools">
      <div className="container">
        <div className="section-header left">
          <h2>Plan Before You Buy</h2>
          <p>Use our smart tools to make accurate estimations and save money.</p>
        </div>
        <div className="grid grid-3">
          {tools.map((t, i) => (
            <div key={i} className="tool-card">
              <div className="tool-icon">{t.icon}</div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <div className="tool-link">Try Tool →</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: '48px'}}>
          <button className="btn btn-primary">Explore All Tools</button>
        </div>
      </div>
    </section>
  );
}
