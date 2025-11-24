import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { CA_ADDRESS } from '../constants';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering money rain on button logic if desired, but request said click anywhere triggers rain.
    navigator.clipboard.writeText(CA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="summary-section" className="relative w-full flex flex-col items-center justify-center text-center space-y-8 pt-8">
      {/* Classification Banner */}
      <div className="w-full border-b border-saudi-gold mb-4 pb-2">
         <p className="text-maga-red font-cia text-sm uppercase animate-pulse">
           // Special Access Required // Clearance Level: DEGEN 
         </p>
      </div>

      {/* Headlines */}
      <div className="space-y-4 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-presidential text-saudi-gold drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-tighter">
          $BROMANCE 2.0
        </h1>
        <p className="text-xl md:text-2xl font-cia text-maga-red bg-black/80 inline-block px-4 py-2 rotate-1 shadow-lg">
          Official reconciliation between Donald J. Trump and Elon Reeve Musk, achieved via one (1) public abdominal contact and $1.4 trillion Saudi dowry.
        </p>
      </div>

      {/* Visual */}
      <div className="relative w-full max-w-2xl aspect-video bg-black border-4 border-double border-saudi-gold shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden group">
        {/* Grayscale filter overlay for 'leaked document' vibe */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-10 mix-blend-overlay"></div>
        <div className="absolute top-4 right-4 z-20 transform rotate-12 border-4 border-maga-red px-4 py-2 rounded">
           <span className="text-maga-red font-black text-2xl uppercase font-cia opacity-80">Declassified</span>
        </div>
        
        {/* Hero Image - Contract Signing Scene */}
        <img 
            src="/images/hero-image.png" 
            alt="Trump and Musk signing contract with MBS" 
            className="w-full h-full object-cover filter contrast-125 sepia-[0.3]"
            onError={(e) => {
              // Fallback to placeholder if image not found
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/trumpelon/800/450";
            }}
        />
        
        {/* Caption Overlay */}
        <div className="absolute bottom-0 w-full bg-midnight/90 p-2 border-t border-saudi-gold">
            <p className="font-cia text-xs text-saudi-gold text-left">
                IMG_REF_9921: Subject A (Trump) initiates contact with Subject B (Musk) abdomen.
            </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl items-center justify-center pt-8">
        <a 
            href="#buy-section"
            className="w-full md:w-auto px-8 py-4 bg-maga-red text-white font-presidential font-bold text-xl uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:animate-shake transition-all"
        >
            Buy Now Before They Fight Again
        </a>

        <button 
            onClick={handleCopy}
            className="w-full md:w-auto px-8 py-4 bg-midnight text-saudi-gold font-cia font-bold text-sm md:text-base border-2 border-saudi-gold shadow-[4px_4px_0px_0px_#d4af37] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:animate-shake transition-all flex items-center justify-center gap-3"
        >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "COPIED TO CLIPBOARD" : `CA: ${CA_ADDRESS.slice(0,6)}...${CA_ADDRESS.slice(-4)}`}
        </button>
      </div>
    </section>
  );
};