import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const isVideoSrc = (src: string) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(src);

// ─── Lightbox ────────────────────────────────────────────────────────────────

const Lightbox: React.FC<{
  slides: ShowcaseSlide[];
  startIndex: number;
  onClose: () => void;
}> = ({ slides, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const slide = slides[current];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col" onClick={onClose}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
        <span className="text-white/50 text-sm font-medium">{current + 1} / {slides.length}</span>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center px-14 md:px-20 min-h-0" onClick={(e) => e.stopPropagation()}>
        {isVideoSrc(slide.src) ? (
          <video
            src={slide.src}
            autoPlay loop muted playsInline
            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
          />
        ) : (
          <img
            src={slide.src}
            alt={slide.title}
            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
          />
        )}

        {/* Prev */}
        {slides.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next */}
        {slides.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 md:right-4 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Caption */}
      <div className="shrink-0 text-center px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <p className="text-white font-bold text-sm md:text-base">{slide.title}</p>
        {slide.caption && <p className="text-white/40 text-xs mt-1 max-w-lg mx-auto">{slide.caption}</p>}
      </div>
    </div>
  );
};

// ─── Card ────────────────────────────────────────────────────────────────────

const Card: React.FC<{
  slide: ShowcaseSlide;
  compact?: boolean;
  onImageClick?: () => void;
}> = ({ slide, compact, onImageClick }) => (
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

    {/* Divider */}
    <div className="h-px bg-gray-200 dark:bg-white/10" />

    {/* Media — click to open lightbox */}
    <div
      className={`flex-1 min-h-0 overflow-hidden bg-white dark:bg-[#0d0d0d] ${onImageClick ? 'cursor-zoom-in' : ''}`}
      onClick={onImageClick}
    >
      {isVideoSrc(slide.src) ? (
        <video
          src={slide.src}
          autoPlay loop muted playsInline preload="metadata"
          className={`w-full h-full block ${compact ? 'object-cover object-top' : 'object-contain object-top'}`}
        />
      ) : (
        <img
          src={slide.src}
          alt={slide.title}
          className={`w-full h-full block ${compact ? 'object-cover object-top' : 'object-contain object-top'}`}
        />
      )}
    </div>
  </div>
);

// ─── ScreenshotShowcase ──────────────────────────────────────────────────────

interface ScreenshotShowcaseProps {
  slides?: ShowcaseSlide[];
  intervalMs?: number;
  compact?: boolean;
}

const ScreenshotShowcase: React.FC<ScreenshotShowcaseProps> = ({ slides, intervalMs, compact }) => {
  const deck = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;
  const tick = intervalMs ?? INTERVAL_MS;
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (deck.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % deck.length);
    }, tick);
    return () => window.clearInterval(id);
  }, [deck.length, tick]);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const aspectClass = compact ? 'aspect-[16/10] sm:aspect-[16/7.5]' : 'aspect-[16/11] sm:aspect-[16/10]';

  return (
    <>
      <div className={`relative w-full ${aspectClass}`}>
        {/* Color blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] bg-brand-red/25 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-500/20 dark:bg-blue-500/15 blur-[140px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-fuchsia-500/10 blur-[160px] rounded-full" />
        </div>

        {deck.map((slide, i) => {
          const offset = (i - active + deck.length) % deck.length;
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
              <Card
                slide={slide}
                compact={compact}
                onImageClick={isFront ? openLightbox : undefined}
              />
            </div>
          );
        })}
      </div>

      {lightboxOpen && (
        <Lightbox slides={deck} startIndex={active} onClose={closeLightbox} />
      )}
    </>
  );
};

export default ScreenshotShowcase;
