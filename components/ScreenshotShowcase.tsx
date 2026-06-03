import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';

export interface ShowcaseSlide {
  src: string;
  title: string;
  caption?: string;
  caseStudyId?: string;
  metric?: string;
}

const DEFAULT_SLIDES: ShowcaseSlide[] = [
  {
    src: '/showcase/AI Ad Infrastructure.png',
    title: 'AI Ad Infrastructure',
    caseStudyId: 'zoro-ad-intel',
    metric: '4× Revenue Growth',
  },
  {
    src: '/showcase/AI SDR - Dashboard.png',
    title: 'Self-improving AI SDR',
    caseStudyId: 'zoro-bcg',
    metric: '$480K SDR Team Replaced',
  },
  {
    src: '/showcase/Linkedin Content System - Dashboard.png',
    title: 'LinkedIn Content AI agent',
    caseStudyId: 'calcuquote-linkedin',
    metric: 'Hyper-Personalized End-to-End Pipeline',
  },
  {
    src: '/showcase/AI SDR - Lead Portfolio.png',
    title: 'Bulk outreach AI SDR',
    caseStudyId: 'b2b-lead-intel',
  },
];

const INTERVAL_MS = 3500;

const isVideoSrc = (src: string) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(src);

// ─── Lightbox (portalled into document.body — no stacking-context trap) ──────

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
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  const slide = slides[current];

  const overlay = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(0,0,0,0.93)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', flexShrink: 0 }}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600 }}>
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image area */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 60px', minHeight: 0 }}
      >
        {isVideoSrc(slide.src) ? (
          <video
            src={slide.src}
            autoPlay loop muted playsInline
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 12, objectFit: 'contain' }}
          />
        ) : (
          <img
            src={slide.src}
            alt={slide.title}
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 12, objectFit: 'contain', display: 'block' }}
          />
        )}

        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: 'absolute', left: 8,
                background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              style={{
                position: 'absolute', right: 8,
                background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
                width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
              }}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ flexShrink: 0, textAlign: 'center', padding: '12px 24px 20px' }}
      >
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, margin: 0 }}>{slide.title}</p>
        {slide.caption && (
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>{slide.caption}</p>
        )}
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};

// ─── Card ────────────────────────────────────────────────────────────────────

const Card: React.FC<{
  slide: ShowcaseSlide;
  compact?: boolean;
  onExpand?: () => void;
}> = ({ slide, compact, onExpand }) => (
  <div className="w-full h-full rounded-3xl bg-white dark:bg-[#0d0d0d] border border-black/5 dark:border-white/10 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">

    {/* Title row — title left, case study + expand right */}
    <div className={`flex items-center justify-between gap-3 ${compact ? 'px-5 md:px-6 pt-3.5 md:pt-4 pb-1.5' : 'px-6 md:px-8 pt-5 md:pt-6 pb-2'}`}>
      <h3 className={`min-w-0 flex-1 ${compact
        ? 'text-base md:text-lg lg:text-xl font-black tracking-tight text-black dark:text-white leading-tight'
        : 'text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-black dark:text-white leading-tight'}`}>
        {slide.title}
      </h3>
      <div className="flex items-center gap-2 shrink-0">
        {slide.caseStudyId && (
          <Link
            to={`/case-studies/${slide.caseStudyId}`}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.1em] hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <span className="hidden sm:inline whitespace-nowrap">View Case Study</span>
            <ArrowRight size={11} />
          </Link>
        )}
        {onExpand && (
          <button
            onClick={onExpand}
            className="p-1.5 rounded-lg border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            title="Expand"
            aria-label="Expand image"
          >
            <Maximize2 size={13} />
          </button>
        )}
      </div>
    </div>

    {/* Metric row */}
    {(slide.metric || slide.caption) && (
      <div className={`flex items-center ${compact ? 'px-5 md:px-6 pb-2.5 md:pb-3' : 'px-6 md:px-8 pb-3 md:pb-4'}`}>
        {slide.metric && (
          <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/25 border border-emerald-300 dark:border-emerald-500/35 rounded-full text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-[0.15em] whitespace-nowrap">
            {slide.metric}
          </span>
        )}
        {slide.caption && !slide.metric && (
          <p className="text-[11px] md:text-xs font-medium text-gray-500 dark:text-gray-400 leading-snug">
            {slide.caption}
          </p>
        )}
      </div>
    )}

    {/* Divider */}
    <div className="h-px bg-gray-200 dark:bg-white/10 shrink-0" />

    {/* Media — click to open lightbox */}
    <div
      className={`flex-1 min-h-0 overflow-hidden bg-white dark:bg-[#0d0d0d] ${onExpand ? 'cursor-zoom-in' : ''}`}
      onClick={onExpand}
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
                onExpand={isFront ? openLightbox : undefined}
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
