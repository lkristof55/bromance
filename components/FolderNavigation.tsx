import React from 'react';

const navigationMap: Record<string, string> = {
  'SUMMARY': 'summary-section',
  'EVIDENCE': 'evidence-section',
  'PRENUP': 'prenup-section',
  'MARKET': 'market-section',
};

export const FolderNavigation = () => {
  const handleScrollTo = (label: string) => {
    const sectionId = navigationMap[label];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="hidden md:flex absolute -right-[calc(100%+20px)] top-20 flex-col gap-2">
      {/* Decorative Tabs on the right side of the "folder" */}
      {['SUMMARY', 'EVIDENCE', 'PRENUP', 'MARKET'].map((label, i) => (
         <div 
            key={i}
            onClick={() => handleScrollTo(label)}
            className="bg-paper text-midnight font-bold font-cia text-xs py-4 px-2 rounded-r-lg writing-mode-vertical border-r-2 border-y-2 border-gray-400 shadow-md opacity-80 hover:translate-x-2 hover:opacity-100 transition-all cursor-pointer"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
         >
            {label}
         </div>
      ))}
    </div>
  );
};