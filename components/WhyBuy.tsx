import React from 'react';
import { Quote } from 'lucide-react';

export const WhyBuy = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
         <h2 className="text-4xl font-presidential text-saudi-gold mb-2">LEAKED TOAST TRANSCRIPT</h2>
         <p className="text-maga-red font-cia text-sm">AUDIO RECORDING #8821 // MAR-A-LAGO BALLROOM</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
            "To the only relationship stronger than their egos… for now.",
            "The only coin that pumps on hugs and dumps on tweets.",
            "Backed by more Saudi money than truth."
        ].map((quote, i) => (
            <div key={i} className="bg-black/50 border border-saudi-gold/30 p-8 relative hover:bg-black/70 transition-colors group">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-maga-red opacity-50 group-hover:animate-bounce" />
                <p className="font-presidential text-xl text-paper text-center italic mt-4 leading-relaxed">
                    "{quote}"
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-saudi-gold to-transparent"></div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};