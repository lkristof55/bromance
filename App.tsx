import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Tokenomics } from './components/Tokenomics';
import { WhyBuy } from './components/WhyBuy';
import { BuySection } from './components/BuySection';
import { Footer } from './components/Footer';
import { EffectsOverlay } from './components/EffectsOverlay';
import { FolderNavigation } from './components/FolderNavigation';

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  // Global click handler for the "Raining Money" effect
  const handleGlobalClick = (e: React.MouseEvent) => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div 
      className="relative min-h-screen bg-midnight bg-wood-pattern bg-blend-overlay"
      onClick={handleGlobalClick}
    >
      {/* Background Seal Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 flex items-center justify-center overflow-hidden">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Great_Seal_of_the_United_States_%28obverse%29.svg/2048px-Great_Seal_of_the_United_States_%28obverse%29.svg.png" 
            alt="Presidential Seal" 
            className="w-[800px] h-[800px] animate-[spin_60s_linear_infinite]"
         />
      </div>

      {/* Interactive FX Overlay (Cursor, Rain, Hand) */}
      <EffectsOverlay clickTrigger={clickCount} />

      {/* Main Content styled as a folder */}
      <main className="relative z-10 max-w-5xl mx-auto border-x-4 border-saudi-gold/20 shadow-2xl bg-black/40 min-h-screen backdrop-blur-sm">
        <div className="border-t-8 border-maga-red sticky top-0 z-50 shadow-lg">
             <div className="bg-paper text-midnight text-xs font-bold text-center py-1 tracking-[0.3em]">
                TOP SECRET // ORCON // NOFORN
             </div>
        </div>

        <FolderNavigation />

        <div className="p-4 md:p-8 space-y-24">
          <Hero />
          <Timeline />
          <Tokenomics />
          <WhyBuy />
          <BuySection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}