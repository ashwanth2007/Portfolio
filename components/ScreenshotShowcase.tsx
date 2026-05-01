import React, { useEffect, useState } from 'react';

export interface ShowcaseSlide {
  src: string;
  title: string;
}

const SLIDES: ShowcaseSlide[] = [
  { src: '/showcase/AI SDR - Dashboard.png', title: 'Self-improving AI SDR' },
  { src: '/showcase/AI SDR - Lead Portfolio.png', title: 'Bulk outreach AI SDR' },
  { src: '/showcase/Linkedin Content System - Dashboard.png', title: 'LinkedIn AI agent' },
  { src: '/showcase/AI Ad Infrastructure.png', title: 'AI ad infrastructure' },
];

const INTERVAL_MS = 3500;

const Card: React.FC<{ slide: ShowcaseSlide }> = ({ slide }) => (
  <div className="w-full h-full rounded-3xl bg-white dark:bg-[#0d0d0d] border border-black/5 dark:border-white/10 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">
    {/* Title */}
    <div className="px-6 md:px-8 pt-5 md:pt-6 pb-3 md:pb-4">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-black dark:text-white leading-tight">
        {slide.title}
      </h3>
    </div>

    {/* Grey divider */}
    <div className="h-px bg-gray-200 dark:bg-white/10"></div>

    {/* Screenshot fills the rest of the card without cropping */}
    <div className="flex-1 min-h-0 overflow-hidden bg-white dark:bg-[#0d0d0d]">
      <img
        src={slide.src}
        alt={slide.title}
        className="w-full h-full object-contain object-top block"
      />
    </div>
  </div>
);

const ScreenshotShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10]">
      {/* Soft color blobs behind the deck */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] bg-brand-red/25 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-500/20 dark:bg-blue-500/15 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-fuchsia-500/10 blur-[160px] rounded-full"></div>
      </div>

      {/* Stacked card deck */}
      {SLIDES.map((slide, i) => {
        const offset = (i - active + SLIDES.length) % SLIDES.length;
        // offset 0 => front (active)
        // offset 1 => peeking back card
        // offset >= 2 => hidden behind
        const isFront = offset === 0;
        const isBack = offset === 1;

        return (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              opacity: isFront ? 1 : isBack ? 0.6 : 0,
              transform: `translateY(${isFront ? '0px' : isBack ? '-22px' : '-44px'}) scale(${isFront ? 1 : isBack ? 0.96 : 0.92})`,
              zIndex: SLIDES.length - offset,
              filter: isFront ? 'none' : 'blur(0.5px)',
            }}
          >
            <Card slide={slide} />
          </div>
        );
      })}
    </div>
  );
};

export default ScreenshotShowcase;
