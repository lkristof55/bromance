import React, { useState, useEffect, useRef } from 'react';
import { DollarSign } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  type: 'money' | 'doge';
}

export const EffectsOverlay: React.FC<{ clickTrigger: number }> = ({ clickTrigger }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Raining Money Logic
  useEffect(() => {
    if (clickTrigger === 0) return;
    
    // Add new particles at mouse position
    const id = Date.now();
    const count = 5; // items per click
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: id + i,
        x: mousePos.x + (Math.random() * 100 - 50),
        y: mousePos.y + (Math.random() * 100 - 50),
        rotation: Math.random() * 360,
        type: Math.random() > 0.5 ? 'money' : 'doge',
      });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id < id));
    }, 1000);

  }, [clickTrigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" ref={containerRef}>
      
      {/* Custom Cursor: Saudi Dagger */}
      <div 
        className="absolute w-8 h-8 transition-transform duration-75 ease-out z-[100]"
        style={{ 
            left: mousePos.x, 
            top: mousePos.y,
            transform: 'translate(-50%, -50%) rotate(-45deg)'
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
          <path d="M12 2L15 8L12 22L9 8L12 2Z" fill="#d4af37" stroke="#000" strokeWidth="1"/>
          <path d="M12 22C12 22 13 24 14 26" stroke="black" strokeWidth="2" strokeLinecap="round" className="animate-pulse opacity-50"/>
          {/* Oil Drip */}
          <circle cx="12" cy="22" r="2" fill="black" className="animate-[bounce_2s_infinite]">
             <animate attributeName="cy" values="22;40" dur="1s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute animate-fade-in-float"
          style={{
            left: p.x,
            top: p.y,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.type === 'money' ? (
             <div className="bg-green-100 border border-green-800 text-green-800 text-[10px] font-bold px-2 py-1 shadow-md w-16 text-center">
               $100
             </div>
          ) : (
            <div className="text-2xl animate-spin">
              🐕
            </div>
          )}
        </div>
      ))}

    </div>
  );
};