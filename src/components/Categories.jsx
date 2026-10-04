import React from 'react';
import './Categories.css';

export function ShopByCategory() {
  const categories = [
    { name: "Tiles", desc: "For floors and walls", img: "/premium-tiles.png" },
    { name: "Marble & Stone", desc: "Natural elegance", img: "/premium-marble.png" },
    { name: "Sanitaryware", desc: "Modern bathroom essentials", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=500&q=80" },
    { name: "Bath Fittings", desc: "Faucets & showers", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&q=80" },
    { name: "Kitchen Solutions", desc: "Sinks & countertops", img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=500&q=80" },
    { name: "Flooring", desc: "Wooden & vinyl options", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80" },
    { name: "Wall Cladding", desc: "Interior & exterior", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80" },
    { name: "Outdoor & Paving", desc: "Durable pavers", img: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=500&q=80" }
  ];

  return (
    <section className="section bg-secondary" id="products">
      <div className="container">
        <div className="section-header left">
          <h2>Everything You Need to Build Beautiful Spaces</h2>
          <p>Explore our wide range of premium building materials sourced globally.</p>
        </div>
        <div className="masonry-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card" style={{ '--delay': `${i * 0.1}s` }}>
              <img src={cat.img} alt={cat.name} loading="lazy" />
              <div className="category-overlay">
                <div>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
                <div className="explore-btn">Explore →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopBySpace() {
  const spaces = [
    { name: "Living Room", img: "/premium-living-room.png" },
    { name: "Bathroom", img: "/premium-bathroom.png" },
    { name: "Kitchen", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80" },
    { name: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80" },
    { name: "Outdoor", img: "https://images.unsplash.com/photo-1600607688092-23c2a6f7b11c?w=500&q=80" }
  ];

  return (
    <section className="section" id="collections">
      <div className="container">
        <div className="section-header">
          <h2>Find Products for Every Space</h2>
          <p>Curated collections to match the functionality and aesthetic of your rooms.</p>
        </div>
        <div className="spaces-carousel">
          {spaces.map((space, i) => (
            <div key={i} className="space-card">
              <img src={space.img} alt={space.name} loading="lazy" />
              <div className="space-label">{space.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrendingCollections() {
  const trending = [
    { name: "Luxury Marble Look", img: "/trend-marble.png" },
    { name: "Modern Concrete", img: "/trend-concrete.png" },
    { name: "Wooden Finish", img: "/trend-wood.png" },
    { name: "Terrazzo Dreams", img: "/trend-terrazzo.png" }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header left" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2>Trending Right Now</h2>
            <p>The most sought-after styles by interior designers.</p>
          </div>
          <button className="btn btn-secondary" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.2)'}}>View All Trends</button>
        </div>
        <div className="trending-grid" style={{marginTop: '40px'}}>
          {trending.map((trend, i) => (
            <div key={i} className="trend-card">
              <div className="trend-img-wrapper">
                <img src={trend.img} alt={trend.name} loading="lazy" />
              </div>
              <h4>{trend.name}</h4>
              <p>Explore Collection →</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisualInspiration() {
  const rooms = [
    { name: "Living Room", img: "/premium-living-room.png" },
    { name: "Bathroom", img: "/premium-bathroom.png" },
    { name: "Kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" }
  ];

  return (
    <section className="section" id="inspiration">
      <div className="container">
        <div className="section-header">
          <h2>Get Inspired</h2>
          <p>Discover beautiful interior designs and shop the exact materials used in them.</p>
        </div>
        <div className="inspiration-grid">
          {rooms.map((room, i) => (
            <div key={i} className={`inspire-card i-card-${i}`}>
              <img src={room.img} alt={room.name} loading="lazy" />
              <div className="inspire-overlay">
                <h3>{room.name}</h3>
                <span className="shop-look-btn">Shop this look →</span>
              </div>
              <div className="hotspot" style={{top: '40%', left: '30%'}}></div>
              {i !== 1 && <div className="hotspot" style={{top: '60%', left: '70%'}}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
