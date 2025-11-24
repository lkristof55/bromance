import React from 'react';
import { CA_ADDRESS } from '../constants';

export const Chart = () => {
  // Check if CA_ADDRESS is a placeholder
  const isValidAddress = CA_ADDRESS && !CA_ADDRESS.includes('Fake') && !CA_ADDRESS.includes('...');
  const contractAddress = isValidAddress ? CA_ADDRESS : null;

  return (
    <section id="market-section" className="py-12 border-y-4 border-midnight bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-presidential text-white">
                LIVE SURVEILLANCE FEED
            </h2>
            <span className="text-maga-red font-cia animate-pulse">● LIVE ACTION</span>
        </div>
        
        <p className="font-cia text-saudi-gold mb-4 text-center text-sm md:text-lg">
            "Price action more dramatic than their entire 2025 arc"
        </p>

        <div className="w-full h-[600px] border-4 border-saudi-gold bg-black relative">
            {contractAddress ? (
                <>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark`}
                        title="DexScreener"
                        className="relative z-10"
                        allow="clipboard-read; clipboard-write"
                    ></iframe>
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saudi-gold/5 pointer-events-none z-20"></div>
                </>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-cia flex-col z-10">
                    <p className="mb-4 text-center px-4">
                        [SECURE CONNECTION ESTABLISHED]<br/>
                        WAITING FOR ON-CHAIN CONFIRMATION...
                    </p>
                    <div className="w-16 h-16 border-4 border-maga-red border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            
            {/* Scanline Effect (always visible) */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saudi-gold/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};