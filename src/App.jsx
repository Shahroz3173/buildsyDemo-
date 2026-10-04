import React, { useState } from 'react';
import './index.css';

import { Navbar, Hero, TrustStrip } from './components/Header';
import { ShopByCategory, ShopBySpace, TrendingCollections, VisualInspiration } from './components/Categories';
import { ProductFinder, SmartAssistant } from './components/SmartTools';
import { WhyBuildsy, Brands, ToolsSection } from './components/Features';
import { ExpertConsultation, CustomerStories, Blog } from './components/Community';
import { FinalCTA, Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      <main>
        <Hero />
        <TrustStrip />
        <ShopByCategory />
        <ShopBySpace />
        <TrendingCollections />
        <VisualInspiration />
        <ProductFinder />
        <SmartAssistant />
        <WhyBuildsy />
        <Brands />
        <ToolsSection />
        <ExpertConsultation />
        <CustomerStories />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
