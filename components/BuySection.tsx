import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CA_ADDRESS } from '../constants';

export const BuySection = () => {
  return (
    <section id="buy-section" className="py-20 px-4 text-center space-y-12">
      <div className="relative inline-block">
        <h2 className="text-5xl md:text-7xl font-presidential text-paper relative z-10">
            INITIATE ACQUISITION
        </h2>
        <div className="absolute -bottom-2 left-0 w-full h-4 bg-maga-red skew-x-12 -z-0"></div>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        
        <a 
            href={`https://jup.ag/swap/SOL-${CA_ADDRESS}`} 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-full py-6 bg-burning-orange/90 overflow-hidden border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(255,69,0,0.4)]"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-center gap-4">
                <span className="font-presidential font-bold text-2xl text-white group-hover:scale-110 transition-transform">BUY ON JUPITER</span>
                <ExternalLink className="text-white w-6 h-6 group-hover:rotate-45 transition-transform" />
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 w-0 group-hover:w-full"></div>
        </a>

        <a 
            href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${CA_ADDRESS}`}
            target="_blank" 
            rel="noreferrer"
            className="group relative w-full py-6 bg-purple-900/90 overflow-hidden border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(128,0,128,0.4)]"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-center gap-4">
                <span className="font-presidential font-bold text-2xl text-white group-hover:scale-110 transition-transform">BUY ON RAYDIUM</span>
                <ExternalLink className="text-white w-6 h-6 group-hover:rotate-45 transition-transform" />
            </div>
             <div className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 w-0 group-hover:w-full"></div>
        </a>

        <a 
            href={`https://phantom.app/ul/browse/https://jup.ag/swap/SOL-${CA_ADDRESS}?ref=jup_ag`}
            className="group relative w-full py-6 bg-gray-800/90 overflow-hidden border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
             <div className="relative z-10 flex items-center justify-center gap-4">
                <span className="font-presidential font-bold text-2xl text-white group-hover:scale-110 transition-transform">BUY WITH PHANTOM</span>
                <ExternalLink className="text-white w-6 h-6 group-hover:rotate-45 transition-transform" />
            </div>
             <div className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 w-0 group-hover:w-full"></div>
        </a>

      </div>
    </section>
  );
};