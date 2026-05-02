import React, { useEffect, useState } from 'react';

export interface ShowcaseSlide {
  src: string;
  title: string;
  caption?: string;
}

const DEFAULT_SLIDES: ShowcaseSlide[] = [
  { src: '/showcase/AI SDR - Dashboard.png', title: 'Self-improving AI SDR' },
  { src: '/showcase/AI SDR - Lead Portfolio.png', title: 'Bulk outreach AI SDR' },
  { src: '/showcase/Linkedin Content System - Dashboard.png', title: 'LinkedIn AI agent' },
  { src: '/showcase/AI Ad Infrastructure.png', title: 'AI Ad infrastructure' },
];

const INTERVAL_MS = 3500;

const Card: React.FC<{ slide: ShowcaseSlide; compact?: boolean }> = ({ slide, compact }) => (
  <div className="w-full h-full rounded-3xl bg-white dark:bg-[#0d0d0d] border border-black/5 dark:border-white/10 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">
    {/* Title */}
    <div className={compact ? 'px-5 md:px-6 pt-3.5 md:pt-4 pb-2.5 md:pb-3' : 'px-6 md:px-8 pt-5 md:pt-6 pb-3 md:pb-4'}>
      <h3 className={compact
        ? 'text-base md:text-lg lg:text-xl font-black tracking-tight text-black dark:text-white leading-tight'
        : 'text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-black dark:text-white leading-tight'}>
        {slide.title}
      </h3>
      {slide.caption && (
        <p className={compact
          ? 'mt-1 text-[11px] md:text-xs font-medium text-gray-500 dark:text-gray-400 leading-snug'
          : 'mt-2 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-snug'}>
          {slide.caption}
        </p>
      )}
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

interface ScreenshotShowcaseProps {
  slides?: ShowcaseSlide[];
  intervalMs?: number;
  compact?: boolean;
}

const ScreenshotShowcase: React.FC<ScreenshotShowcaseProps> = ({ slides, intervalMs, compact }) => {
  const deck = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;
  const tick = intervalMs ?? INTERVAL_MS;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (deck.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % deck.length);
    }, tick);
    return () => window.clearInterval(id);
  }, [deck.length, tick]);

  const aspectClass = compact ? 'aspect-[16/8] sm:aspect-[16/7.5]' : 'aspect-[16/11] sm:aspect-[16/10]';

  return (
    <div className={`relative w-full ${aspectClass}`}>
      {/* Soft color blobs behind the deck */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] bg-brand-red/25 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-500/20 dark:bg-blue-500/15 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-fuchsia-500/10 blur-[160px] rounded-full"></div>
      </div>

      {/* Stacked card deck */}
      {deck.map((slide, i) => {
        const offset = (i - active + deck.length) % deck.length;
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
              zIndex: deck.length - offset,
              filter: isFront ? 'none' : 'blur(0.5px)',
            }}
          >
            <Card slide={slide} compact={compact} />
          </div>
        );
      })}
    </div>
  );
};

export default ScreenshotShowcase;
