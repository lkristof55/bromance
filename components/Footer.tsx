import React from 'react';
import { Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 px-8 border-t border-gray-800 font-cia text-xs md:text-sm">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        
        <div className="flex justify-center gap-8">
            <a 
                href="https://x.com/BromanceCoinOnX" 
                target="_blank" 
                rel="noreferrer noopener"
                className="hover:text-saudi-gold hover:animate-shake transition-colors flex flex-col items-center gap-2"
            >
                <Twitter className="w-8 h-8" />
                <span>X</span>
            </a>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-4">
            <p className="uppercase tracking-widest text-maga-red/60">
                "This document was never meant to see daylight."
            </p>
            <p className="max-w-2xl mx-auto">
                Not financial advice. Not relationship advice. Definitely not legal advice. 
                Made by degens who survived 2021 and still believe in billionaire love stories.
            </p>
            <p className="opacity-30">
                Send classified tips to Mar-a-Lago
            </p>
        </div>

        <div className="pt-8 opacity-20 hover:opacity-100 transition-opacity">
            <p>CLASSIFIED 2025 // DEPT OF MEMETIC WARFARE</p>
        </div>
      </div>
    </footer>
  );
};