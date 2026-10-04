import React, { useState } from 'react';
import './SmartTools.css';

export function ProductFinder() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ space: '', style: '', budget: '' });

  const spaces = ['Living Room', 'Bathroom', 'Kitchen', 'Bedroom', 'Outdoor'];
  const styles = ['Modern', 'Luxury', 'Minimal', 'Traditional', 'Natural'];
  const budgets = ['Budget', 'Mid-range', 'Premium', 'Luxury'];

  const handleSelect = (key, value) => {
    setSelection(prev => ({ ...prev, [key]: value }));
    setTimeout(() => {
      if (step < 3) setStep(step + 1);
    }, 400);
  };

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="finder-wrapper">
          <div className="finder-content">
            <h2 className="finder-title">Not Sure What to Choose?</h2>
            <p className="finder-subtitle">Tell us about your space and we'll help you find the right products.</p>
            
            <div className="finder-steps">
              <div className={`step-dot ${step >= 1 ? 'active' : ''}`}></div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 2 ? 'active' : ''}`}></div>
              <div className="step-line"></div>
              <div className={`step-dot ${step >= 3 ? 'active' : ''}`}></div>
            </div>

            <div className="step-container">
              {step === 1 && (
                <div className="step-fade-in">
                  <h3>Step 1: Where are you building?</h3>
                  <div className="options-grid">
                    {spaces.map(s => (
                      <button key={s} 
                        className={`option-btn ${selection.space === s ? 'selected' : ''}`}
                        onClick={() => handleSelect('space', s)}>{s}</button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="step-fade-in">
                  <h3>Step 2: What's your style?</h3>
                  <div className="options-grid">
                    {styles.map(s => (
                      <button key={s} 
                        className={`option-btn ${selection.style === s ? 'selected' : ''}`}
                        onClick={() => handleSelect('style', s)}>{s}</button>
                    ))}
                  </div>
                  <button className="back-link" onClick={() => setStep(1)}>← Back</button>
                </div>
              )}
              {step === 3 && (
                <div className="step-fade-in">
                  <h3>Step 3: What's your budget?</h3>
                  <div className="options-grid">
                    {budgets.map(s => (
                      <button key={s} 
                        className={`option-btn ${selection.budget === s ? 'selected' : ''}`}
                        onClick={() => handleSelect('budget', s)}>{s}</button>
                    ))}
                  </div>
                  <button className="back-link" onClick={() => setStep(2)}>← Back</button>
                </div>
              )}
            </div>

            {step === 3 && selection.budget && (
              <button className="btn btn-primary mt-4 fade-in-up">Find My Products</button>
            )}
          </div>
          <div className="finder-visual">
            <img src="https://images.unsplash.com/photo-1593121543162-811c7980590a?w=800&q=80" alt="Material selection" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SmartAssistant() {
  return (
    <section className="section section-dark ai-section">
      <div className="container ai-container">
        <div className="ai-content">
          <div className="ai-badge">✨ Buildsy AI</div>
          <h2>Your Smart Building Material Assistant</h2>
          <p>Confused between hundreds of designs? Get personalized recommendations based on your space, style and budget. Our AI understands interior design trends and material specifications to suggest the perfect match.</p>
          <button className="btn btn-white ai-btn">Get Recommendations <span>→</span></button>
        </div>
        <div className="ai-visual">
          <div className="glass-card">
            <div className="ai-chat">
              <div className="msg bot-msg">"I'm redesigning my 200 sqft living room in a modern minimalist style."</div>
              <div className="msg bot-reply">
                I recommend <strong>large-format Statuario marble tiles (1200x2400mm)</strong> to make the space look expansive. Would you like to see options under ₹150/sqft?
              </div>
            </div>
          </div>
          <div className="glow-sphere"></div>
        </div>
      </div>
    </section>
  );
}
