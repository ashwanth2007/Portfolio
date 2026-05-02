import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import { techLogo } from '../techLogos';
import { Project, ArchitectureStep } from '../types';
import {
  ArrowUpRight,
  Layers,
  Cpu,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  FolderOpen,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
  Image as ImageIcon,
  Workflow,
} from 'lucide-react';
import SEO from '../components/SEO';
import ScreenshotShowcase from '../components/ScreenshotShowcase';

// ─── Helpers ─────────────────────────────────────────────────────────────

// Auto-break inline numbered lists like "lead text 1) item 2) item 3) item." into a real <ol>.
// Preserves any prefix before "1)" and any trailing prose after the last item.
const renderProse = (text: string) => {
  const baseClass =
    'text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed font-medium';
  if (!/\b\d+\)\s/.test(text)) {
    return <p className={baseClass}>{text}</p>;
  }

  const firstIdx = text.search(/\b1\)\s/);
  const prefixRaw = firstIdx > 0 ? text.slice(0, firstIdx).trim().replace(/[:\s]+$/, '') : '';
  const listText = firstIdx >= 0 ? text.slice(firstIdx) : text;

  const markers = Array.from(listText.matchAll(/(\d+)\)\s/g));
  const items: string[] = [];
  for (let i = 0; i < markers.length; i++) {
    const start = (markers[i].index ?? 0) + markers[i][0].length;
    const end = i + 1 < markers.length ? (markers[i + 1].index ?? listText.length) : listText.length;
    items.push(listText.slice(start, end).trim());
  }

  let suffix = '';
  if (items.length) {
    const last = items[items.length - 1];
    const split = last.match(/^(.+?[.!?])\s+([A-Z][\s\S]+)$/);
    if (split && split[2].split(/\s+/).length >= 4) {
      items[items.length - 1] = split[1].trim();
      suffix = split[2].trim();
    }
  }

  return (
    <div className="space-y-3">
      {prefixRaw && (
        <p className={baseClass}>
          {prefixRaw}
          {prefixRaw.match(/[.!?:]$/) ? '' : ':'}
        </p>
      )}
      <ol className="space-y-2 list-decimal pl-5 marker:text-brand-red marker:font-black">
        {items.map((item, i) => (
          <li key={i} className={baseClass}>
            {item}
          </li>
        ))}
      </ol>
      {suffix && <p className={baseClass}>{suffix}</p>}
    </div>
  );
};

// When a project doesn't ship hand-authored architectureSteps, infer a category and
// the tools used from the existing one-line architecture string + the project tech_stack.
const deriveSteps = (project: Project): ArchitectureStep[] => {
  if (project.architectureSteps && project.architectureSteps.length > 0) {
    return project.architectureSteps;
  }

  const escapeForRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return project.architecture.map((line) => {
    let category = '';
    let description = line;

    // Pattern: "Category Name (Tool A + Tool B)" or "Category Name (extra context)"
    const parenMatch = line.match(/^(.+?)\s*\(([^)]+)\)\s*(.*)$/);
    // Pattern: "Category Name: actual description"
    const colonMatch = line.match(/^([A-Z][A-Za-z0-9 \-/&]{2,40}):\s*(.+)$/);

    if (parenMatch) {
      category = parenMatch[1].trim();
      const trailing = parenMatch[3].trim();
      description = trailing || `${category} powered by ${parenMatch[2].trim()}.`;
    } else if (colonMatch) {
      category = colonMatch[1].trim();
      description = colonMatch[2].trim();
    } else {
      // Take the first 2-4 capitalised words / nouns as a category, fall back to whole line.
      const words = line.split(/\s+/);
      const cap = Math.min(words.length, words.length <= 6 ? Math.ceil(words.length / 2) : 4);
      category = words.slice(0, cap).join(' ');
    }

    // Detect tools by matching tech_stack labels found anywhere in the architecture line.
    const tools = project.tech_stack
      .filter((tech) => new RegExp(`\\b${escapeForRegex(tech)}\\b`, 'i').test(line))
      .map((name) => ({ name }));

    return { category, description, tools: tools.length > 0 ? tools : undefined };
  });
};

// ─── Sidebar ─────────────────────────────────────────────────────────────

const CaseStudySidebar: React.FC<{ activeId: string }> = ({ activeId }) => (
  <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-0 [scrollbar-width:none] [-ms-overflow-style:none]">
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0a0a0a]">
      <div className="px-3 py-2 border-b border-gray-100 dark:border-white/10">
        <p className="text-[9px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.25em]">
          All Case Studies
        </p>
      </div>
      <ul className="p-2 space-y-0.5">
        {PROJECTS.map((p, i) => {
          const active = p.id === activeId;
          return (
            <li key={p.id}>
              <Link
                to={`/case-studies/${p.id}`}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md border-l-2 transition-colors ${
                  active
                    ? 'border-brand-red bg-gray-50 dark:bg-white/5'
                    : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <span
                  className={`text-[10px] font-black shrink-0 w-5 leading-tight ${
                    active ? 'text-brand-red' : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-xs font-bold leading-snug ${
                    active
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {p.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </aside>
);

// ─── Detail ──────────────────────────────────────────────────────────────

interface DetailProps {
  project: Project;
  onPrev: () => void;
  onNext: () => void;
  position: { current: number; total: number };
}

const CaseStudyDetail: React.FC<DetailProps> = ({ project, onPrev, onNext, position }) => {
  const steps = deriveSteps(project);

  const stats = project.impact_summary
    .split(/(?<=[.!])\s+/)
    .map((s) => s.replace(/[.!]+$/, '').trim())
    .filter(Boolean);

  const splitStat = (stat: string) => {
    const m = stat.match(/^([\$₹€£]?[\d.,]+\s*[KMBkmb%+]*\+?)\s+(.+)$/);
    if (m) return { lead: m[1], rest: m[2], hasNumber: true };
    return { lead: stat, rest: '', hasNumber: false };
  };

  return (
    <main className="min-w-0 space-y-6 md:space-y-8">
      {/* Header strip */}
      <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
        >
          <ChevronLeft size={14} />
          Back to all case studies
        </Link>
        <span>
          {String(position.current).padStart(2, '0')} / {String(position.total).padStart(2, '0')}
        </span>
      </div>

      {/* Title + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:gap-8 items-start md:items-end">
        <div className="min-w-0">
          <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em] mb-3">
            {project.client} · {project.role}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-black dark:text-white leading-[1.05] break-words">
            {project.title}
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
            {project.subtitle}
          </p>
        </div>
        <Link
          to="/discovery"
          className="inline-flex items-center gap-2 bg-brand-red text-white px-5 lg:px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors whitespace-nowrap rounded-full shadow-lg shadow-brand-red/20 self-start md:self-end"
        >
          <Calendar size={14} />
          Book a Call Right Now
          <ArrowRight size={14} />
        </Link>
      </div>


      {/* Headline Impact strip */}
      <div className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0a0a] text-white p-5 md:p-7 rounded-3xl overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/10 blur-3xl rounded-full -mr-36 -mt-36 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 md:mb-5 flex-wrap gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-brand-red/15 rounded-lg">
                <TrendingUp className="text-brand-red" size={16} />
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-[0.25em]">
                  Headline Impact
                </p>
                <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-widest mt-0.5">
                  Deployed Results
                </p>
              </div>
            </div>
          </div>

          <div
            className={`grid gap-3 ${
              stats.length === 1
                ? 'grid-cols-1'
                : stats.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}
          >
            {stats.map((stat, i) => {
              const { lead, rest, hasNumber } = splitStat(stat);
              return (
                <div
                  key={i}
                  className="relative bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:border-brand-red/40 transition-colors group"
                >
                  <span className="absolute top-2.5 right-3 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <div
                    className={
                      hasNumber
                        ? 'text-2xl md:text-3xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-brand-red transition-colors break-words'
                        : 'text-sm md:text-base font-black text-white tracking-tight leading-snug mb-1.5 group-hover:text-brand-red transition-colors break-words'
                    }
                  >
                    {lead}
                  </div>
                  {rest && (
                    <p className="text-[11px] md:text-xs font-medium text-gray-400 leading-snug">
                      {rest.charAt(0).toUpperCase() + rest.slice(1)}
                    </p>
                  )}
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-brand-red/60 to-transparent"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Snapshots - narrowed so it doesn't eat vertical space */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-red/10 rounded-lg">
              <ImageIcon className="text-brand-red" size={18} />
            </div>
            <h3 className="text-base md:text-xl font-black uppercase tracking-tighter text-black dark:text-white">
              System Snapshots
            </h3>
          </div>
          <div className="max-w-5xl">
            <ScreenshotShowcase slides={project.gallery} compact />
          </div>
        </div>
      )}

      {/* Challenge / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
              <AlertCircle className="text-black dark:text-white" size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-black dark:text-white">
              The Challenge
            </h3>
          </div>
          {renderProse(project.problem)}
        </div>
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-brand-red/10 rounded-lg">
              <Layers className="text-brand-red" size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-black dark:text-white">
              The Solution
            </h3>
          </div>
          {renderProse(project.solution)}
        </div>
      </div>

      {/* KPIs - capped to top 4 most impactful */}
      {(() => {
        const topResults = project.results.slice(0, 4);
        return (
          <div className="bg-black dark:bg-[#0a0a0a] text-white p-6 md:p-10 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
              <h3 className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-widest flex items-center gap-2">
                <CheckCircle size={14} />
                Key Performance Indicators
              </h3>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">
                {topResults.length} Outcomes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {topResults.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-brand-red rounded-full shrink-0"></div>
                  <p className="text-[13px] md:text-sm font-medium leading-snug text-gray-100">{res}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* System Architecture - compact vertical step rail */}
      <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-4 md:p-6 rounded-3xl">
        <div className="flex items-center gap-2.5 mb-3 md:mb-4">
          <div className="p-1.5 bg-brand-red/10 rounded-lg">
            <Workflow className="text-brand-red" size={16} />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-black uppercase tracking-tighter text-black dark:text-white leading-tight">
              System Architecture
            </h3>
            <p className="text-[9px] md:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-0.5">
              {steps.length} Layers · Modular Workflow Infrastructure
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-white/10 border-t border-gray-200 dark:border-white/10">
          {steps.map((step, idx) => {
            const stepNum = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={idx}
                className="py-3.5 md:py-4 grid grid-cols-1 md:grid-cols-[150px_minmax(0,1fr)] gap-3 md:gap-6"
              >
                <div>
                  <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.25em]">
                    {stepNum}
                  </p>
                  <h4 className="text-xs md:text-sm font-black uppercase tracking-tight text-black dark:text-white mt-0.5 leading-tight">
                    {step.category}
                  </h4>
                  {step.parallel && (
                    <span className="inline-block mt-1.5 px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[8px] font-black uppercase tracking-widest rounded">
                      Parallel
                    </span>
                  )}
                </div>
                <div className="space-y-2.5 min-w-0">
                  <p className="text-[13px] md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                  {step.tools && step.tools.length > 0 && (
                    <div
                      className={`grid gap-2 ${
                        step.tools.length === 1
                          ? 'grid-cols-1'
                          : step.tools.length === 2
                          ? 'grid-cols-1 sm:grid-cols-2'
                          : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                      }`}
                    >
                      {step.tools.map((tool) => {
                        const logo = techLogo(tool.name);
                        return (
                          <div
                            key={tool.name}
                            className="border border-gray-200 dark:border-white/10 rounded-lg p-2.5 bg-white dark:bg-black hover:border-brand-red/40 transition-colors"
                          >
                            <div className="flex items-center gap-1.5 mb-1">
                              {logo ? (
                                <img
                                  src={logo}
                                  alt=""
                                  className="w-4 h-4 rounded-sm object-contain"
                                />
                              ) : (
                                <Cpu size={12} className="text-brand-red" />
                              )}
                              <span className="text-[11px] md:text-xs font-black uppercase tracking-tight text-black dark:text-white">
                                {tool.name}
                              </span>
                            </div>
                            {tool.description && (
                              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                                {tool.description}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inline prev/next at the bottom (mobile + desktop) */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors py-3"
        >
          <ChevronLeft size={16} />
          Previous
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors py-3"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </main>
  );
};

// ─── List view (grid) ────────────────────────────────────────────────────

const CaseStudyList: React.FC = () => (
  <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
    <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 text-black dark:text-white transition-colors">
          Deployed Systems
        </h1>
        <div className="w-24 h-2 bg-brand-red mb-6"></div>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl text-lg font-medium transition-colors">
          A comprehensive list of deployed AI systems and enterprise automation projects.
        </p>
      </div>
      <Link
        to="/verification"
        className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red dark:text-white dark:hover:text-brand-red transition-colors"
      >
        <ShieldCheck size={16} />
        Data Verification Center
      </Link>
    </div>

    <div className="mb-16 relative overflow-hidden rounded-3xl bg-black dark:bg-[#0a0a0a] border border-black dark:border-white/10 px-6 sm:px-10 py-7 md:py-9">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red/15 blur-3xl rounded-full pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">
            Like what you see?
          </p>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">
            Book a Call <span className="text-brand-red">Right Now</span>
          </h3>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            30 minutes. We map the agent, the metric, and what shipping it would actually cost.
          </p>
        </div>
        <Link
          to="/discovery"
          className="group inline-flex items-center justify-center gap-2.5 bg-brand-red text-white px-6 py-3.5 sm:px-8 sm:py-4 font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl whitespace-nowrap shrink-0"
        >
          <Calendar size={14} />
          Schedule a Call
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.length > 0 ? (
        PROJECTS.map((project, index) => (
          <Link
            key={project.id}
            to={`/case-studies/${project.id}`}
            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] dark:bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff)] bg-[length:20px_20px]"></div>
            <div className="p-10 pb-8 relative z-10 flex-none h-[260px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-6xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand-red/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter leading-[1.1] mb-4 text-black dark:text-white group-hover:text-brand-red transition-colors line-clamp-3">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold tracking-[0.2em] line-clamp-1">
                  {project.client}
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-100 dark:bg-white/10 group-hover:bg-brand-red transition-colors"></div>
            <div className="p-10 pt-8 flex-1 flex flex-col justify-between relative z-10 bg-gray-50/50 dark:bg-white/5 transition-colors">
              <div className="mb-8">
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium h-[60px]">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto gap-6">
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Impact
                  </span>
                  <div className="h-[40px] flex items-center">
                    <span className="text-xs font-bold text-black dark:text-white border-b-2 border-brand-red pb-1 transition-colors block leading-tight line-clamp-2">
                      {project.impact_summary}
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-3 rounded-full group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
            <FolderOpen className="text-gray-300" size={32} />
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest">No Projects Deployed Yet</p>
        </div>
      )}
    </div>
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const selectedProject = projectId
    ? PROJECTS.find((p) => p.id === projectId) ?? null
    : null;

  useEffect(() => {
    if (projectId && !selectedProject) {
      navigate('/case-studies', { replace: true });
    }
  }, [projectId, selectedProject, navigate]);

  const handlePrev = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prev = (idx - 1 + PROJECTS.length) % PROJECTS.length;
    navigate(`/case-studies/${PROJECTS[prev].id}`);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const next = (idx + 1) % PROJECTS.length;
    navigate(`/case-studies/${PROJECTS[next].id}`);
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies & Projects',
    description: 'Deployed AI systems and automation projects by Ashwanth S.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        description: project.subtitle,
        url: `https://ashwanth.dev/case-studies/${project.id}`,
      })),
    },
  };

  if (selectedProject) {
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    return (
      <div className="min-h-screen pt-28 pb-20">
        <SEO
          title={selectedProject.title}
          description={selectedProject.subtitle}
          schema={projectSchema}
          keywords={['Case Studies', 'AI Projects', 'Automation Portfolio', 'System Architecture']}
        />
        <div className="max-w-[1500px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-6 lg:gap-8">
            <CaseStudySidebar activeId={selectedProject.id} />
            <CaseStudyDetail
              project={selectedProject}
              onPrev={handlePrev}
              onNext={handleNext}
              position={{ current: idx + 1, total: PROJECTS.length }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Case Studies"
        description="Explore enterprise-grade AI automation projects and deployed systems for clients like BCG, Ashwanth S, and Instig8."
        schema={projectSchema}
        keywords={['Case Studies', 'AI Projects', 'Automation Portfolio', 'System Architecture']}
      />
      <CaseStudyList />
    </>
  );
};

export default Projects;
