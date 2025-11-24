import React from 'react';

export const Tokenomics = () => {
  return (
    <section id="prenup-section" className="relative py-12">
      <div className="bg-paper text-black p-8 md:p-12 shadow-2xl max-w-4xl mx-auto transform -rotate-1 relative overflow-hidden">
        
        {/* Coffee Stain */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-900/10 rounded-full blur-xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

        <h2 className="text-center font-presidential font-bold text-2xl md:text-3xl mb-8 border-b-4 border-double border-black pb-4">
          WHITE HOUSE PRENUPTIAL AGREEMENT
        </h2>

        <div className="font-cia space-y-6 text-sm md:text-base relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4">
                <span className="font-bold uppercase">Token Name:</span>
                <span className="font-bold font-presidential text-xl">$BROMANCE 2.0</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4">
                <span className="font-bold uppercase">Total Supply:</span>
                <span>1,000,000,000 (One Billion)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4 relative group">
                <span className="font-bold uppercase">Liquidity:</span>
                <div>
                    Locked until the next public feud*
                    <br/>
                    <span className="text-xs text-gray-500 italic">*expected Q1 2026, monitor @realDonaldTrump</span>
                </div>
                {/* Trump Sharpie Note */}
                <span className="absolute -right-4 top-0 text-blue-900 font-handwriting text-lg -rotate-12 opacity-80 font-black">HUGE!</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4">
                <span className="font-bold uppercase">Buy/Sell Tax:</span>
                <span>0% / 0% (We have standards)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4">
                <span className="font-bold uppercase">Dev Wallet:</span>
                <span>0% (We are paid in emotional trauma)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-300 pb-4">
                <span className="font-bold uppercase">Contract:</span>
                <span>Renounced & LP Burned (Like their reputations)</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 pb-8">
                <span className="font-bold uppercase">Backed By:</span>
                <span>Awkward male affection + unlimited Saudi petrodollars</span>
            </div>

            {/* Signatures */}
            <div className="flex justify-between items-end pt-12 mt-8 border-t-2 border-black">
                <div className="text-center w-1/3">
                    <div className="font-handwriting text-4xl mb-2 text-blue-900 transform -rotate-6">Donald J. Trump</div>
                    <div className="border-t border-black text-xs uppercase pt-1">Party A (The Don)</div>
                </div>
                <div className="text-center w-1/3">
                    <div className="font-handwriting text-2xl mb-4 text-gray-800 transform rotate-3">Elon R. Musk</div>
                    <div className="border-t border-black text-xs uppercase pt-1">Party B (The Dogefather)</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};