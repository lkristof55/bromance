import React, { useState, useRef, useEffect } from 'react';

// Helper function to get image with cache busting in development
const getImagePath = (path: string) => {
  // In development, add timestamp to force refresh
  if (import.meta.env.DEV) {
    return `${path}?t=${Date.now()}`;
  }
  return path;
};

const events = [
  {
    date: "MAY 2025",
    title: "THE DIVORCE",
    desc: "Elon calls Trump's bill 'disgusting'. Trump threatens to cancel Starlink access for Mar-a-Lago.",
    img: "/images/timeline-divorce.png"
  },
  {
    date: "JULY 2025",
    title: "NUCLEAR OPTION",
    desc: "Epstein card played. Relationship status: radioactive. Doge price crashes 40%.",
    img: "/images/timeline-nuclear.png"
  },
  {
    date: "18 NOV 2025",
    title: "THE DINNER",
    desc: "Trump belly-pats Musk in front of MBS. $1.4T secured. The awkwardness is visible from space.",
    img: "/images/timeline-dinner.png"
  },
  {
    date: "19 NOV 2025",
    title: "THE TWEET",
    desc: "Elon posts 'Thank you Mr. President ❤️'. Translation: Please don't rug my government contracts.",
    img: "/images/timeline-tweet.png"
  },
  {
    date: "Q1 2026",
    title: "THE REMATCH",
    desc: "99.9% chance of renewed hostilities. Buy the dip when Elon unblocks Trump.",
    img: "/images/timeline-rematch.png"
  }
];

export const Timeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Wheel scroll handler for horizontal scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current) return;
      
      // Check if scrolling horizontally or holding Shift for vertical-to-horizontal conversion
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const shouldConvertVertical = e.shiftKey && Math.abs(e.deltaY) > 0;
      
      if (isHorizontalScroll || shouldConvertVertical) {
        e.preventDefault();
        const scrollAmount = isHorizontalScroll ? e.deltaX : e.deltaY;
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.getBoundingClientRect().left;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section id="evidence-section" className="space-y-6 relative border-t-2 border-b-2 border-dashed border-gray-600 py-12 bg-paper/5">
      <div className="flex items-center gap-4 px-4">
        <div className="w-4 h-4 rounded-full bg-maga-red animate-pulse"></div>
        <h2 className="text-3xl font-presidential text-paper uppercase tracking-widest">
            Timeline of Operations
        </h2>
      </div>

      <div 
        ref={scrollContainerRef}
        className={`overflow-x-auto pb-8 timeline-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none scroll-smooth`}
        style={{ scrollBehavior: 'smooth' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-8 px-4 w-max">
          {events.map((evt, i) => (
            <div 
                key={i} 
                className="relative group w-[300px] flex-shrink-0 bg-white p-3 shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 hover:z-10"
            >
              {/* Oil Stain Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-900/20 rounded-full blur-xl pointer-events-none"></div>
              
              {/* Paperclip */}
              <div className="absolute -top-4 left-1/2 w-4 h-12 bg-gray-400 rounded-full z-20 border-2 border-gray-600"></div>

              {/* Photo Area */}
              <div className="bg-black w-full h-48 mb-4 overflow-hidden relative">
                 <img 
                   key={`${evt.title}-${i}`}
                   src={getImagePath(evt.img)} 
                   alt={evt.title} 
                   className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all"
                   loading="eager"
                   onError={(e) => {
                     console.error(`Failed to load image: ${evt.img}`, e);
                     // Fallback to placeholder if image not found
                     (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${evt.title.toLowerCase().replace(/\s+/g, '')}/300/300`;
                   }}
                   onLoad={() => {
                     console.log(`Successfully loaded image: ${evt.img}`);
                   }}
                 />
                 <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-mono">EVIDENCE #{900 + i}</div>
              </div>

              {/* Text */}
              <div className="font-cia space-y-2">
                <span className="text-maga-red font-bold text-lg block border-b border-black/10 pb-1">{evt.date}</span>
                <h3 className="text-black font-bold text-xl">{evt.title}</h3>
                <p className="text-black/80 text-sm leading-tight">{evt.desc}</p>
              </div>

              {/* Stamp */}
              <div className="absolute bottom-10 right-2 w-24 h-24 border-4 border-maga-red rounded-full flex items-center justify-center opacity-40 -rotate-12 pointer-events-none">
                <span className="text-maga-red font-black text-xs uppercase text-center">Eyes<br/>Only</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};