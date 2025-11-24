import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PUMP_FUN_URL } from '../constants';

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
            href={PUMP_FUN_URL} 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-full py-8 bg-burning-orange/90 overflow-hidden border-4 border-saudi-gold hover:border-white transition-all shadow-[0_0_30px_rgba(255,69,0,0.6)] hover:shadow-[0_0_50px_rgba(255,69,0,0.8)]"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-center gap-4">
                <span className="font-presidential font-bold text-3xl md:text-4xl text-white group-hover:scale-110 transition-transform uppercase tracking-wider">
                    Buy on PumpFun
                </span>
                <ExternalLink className="text-white w-8 h-8 group-hover:rotate-45 transition-transform" />
            </div>
            <div className="absolute bottom-0 left-0 h-2 bg-white transition-all duration-300 w-0 group-hover:w-full"></div>
        </a>
      </div>
    </section>
  );
};