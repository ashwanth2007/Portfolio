import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, X, Layers, Cpu, TrendingUp, AlertCircle, CheckCircle, FolderOpen, ShieldCheck, ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

      useEffect(() => {
    if (projectId) {
      const project = PROJECTS.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      } else {
        navigate('/case-studies', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectId, navigate]);

  const filteredProjects = PROJECTS;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    navigate(`/case-studies/${PROJECTS[prevIndex].id}`, { replace: true });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    navigate(`/case-studies/${PROJECTS[nextIndex].id}`, { replace: true });
  };

  const handleCloseModal = () => {
    navigate(-1);
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies & Projects",
    "description": "Deployed AI systems and automation projects by Ashwanth S.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "description": project.subtitle,
        "url": `https://ashwanth.dev/case-studies/${project.id}`
      }))
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Case Studies" 
        description="Explore enterprise-grade AI automation projects and deployed systems for clients like BCG, Ashwanth S, and Instig8."
        schema={projectSchema}
        keywords={["Case Studies", "AI Projects", "Automation Portfolio", "System Architecture"]}
      />

      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-black dark:text-white transition-colors">
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

      {/* CTA Strip */}
      <div className="mb-16 relative overflow-hidden rounded-3xl bg-black dark:bg-[#0a0a0a] border border-black dark:border-white/10 px-6 sm:px-10 py-7 md:py-9">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red/15 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">Like what you see?</p>
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/case-studies/${project.id}`}
              className="group cursor-pointer flex flex-col h-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Abstract Grid */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] dark:bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff)] bg-[length:20px_20px]"></div>

              {/* Card Header Section */}
              <div className="p-10 pb-8 relative z-10 flex-none h-[260px] flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <span className="text-6xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand-red/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                 </div>

                 <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-[1.1] mb-4 text-black dark:text-white group-hover:text-brand-red transition-colors line-clamp-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] line-clamp-1">
                      {project.client}
                    </p>
                 </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 dark:bg-white/10 group-hover:bg-brand-red transition-colors"></div>

              {/* Card Footer Section */}
              <div className="p-10 pt-8 flex-1 flex flex-col justify-between relative z-10 bg-gray-50/50 dark:bg-white/5 transition-colors">
                 <div className="mb-8">
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium h-[60px]">
                      {project.subtitle}
                    </p>
                 </div>

                 <div className="flex items-center justify-between mt-auto gap-6">
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Impact</span>
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

      {/* Detail Modal - Full Screen Dashboard */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[9999] bg-white dark:bg-black overflow-y-auto animate-in fade-in duration-300 transition-colors">
          {/* Dashboard Header */}
          <div className="sticky top-0 z-50 bg-black dark:bg-[#050505] text-white px-4 md:px-6 py-4 flex items-center justify-between shadow-xl border-b border-white/5">
            <div className="flex items-center gap-3 md:gap-6 min-w-0 flex-1">
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0"
              >
                <X size={20} />
              </button>
              <div className="h-8 w-px bg-white/20 shrink-0"></div>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm md:text-xl font-black tracking-tighter uppercase leading-none truncate">{selectedProject.title}</h2>
                <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1 truncate">{selectedProject.client}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 mr-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Navigation</span>
                <div className="flex gap-1">
                  <button 
                    onClick={handlePrev}
                    className="p-2 bg-white/10 hover:bg-brand-red transition-colors rounded-l-md"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 bg-white/10 hover:bg-brand-red transition-colors rounded-r-md"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <button 
                onClick={handleCloseModal}
                className="hidden md:block bg-brand-red text-white px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
              >
                Close Dashboard
              </button>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="max-w-[1400px] mx-auto p-4 md:p-6 lg:p-10 space-y-8">

            {/* Hero Impact Strip - stat cards from impact_summary */}
            {(() => {
              const stats = selectedProject.impact_summary
                .split(/(?<=[.!])\s+/)
                .map(s => s.replace(/[.!]+$/, '').trim())
                .filter(Boolean);

              const splitStat = (stat: string) => {
                const m = stat.match(/^([\$₹€£]?[\d.,]+\s*[KMBkmb%+]*\+?)\s+(.+)$/);
                if (m) return { lead: m[1], rest: m[2] };
                return { lead: stat, rest: '' };
              };

              return (
                <div className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0a0a] text-white p-6 md:p-10 rounded-3xl overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/10 blur-3xl rounded-full -mr-36 -mt-36 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/15 rounded-xl">
                          <TrendingUp className="text-brand-red" size={22} />
                        </div>
                        <div>
                          <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.25em]">Headline Impact</p>
                          <p className="text-xs font-black text-brand-red uppercase tracking-widest mt-0.5">Deployed Results</p>
                        </div>
                      </div>
                      <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                        {selectedProject.client} · {selectedProject.role}
                      </p>
                    </div>

                    <div className={`grid gap-3 md:gap-4 ${stats.length === 1 ? 'grid-cols-1' : stats.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                      {stats.map((stat, i) => {
                        const { lead, rest } = splitStat(stat);
                        return (
                          <div key={i} className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-brand-red/40 transition-colors group">
                            <span className="absolute top-3 right-4 text-[10px] font-black text-gray-600 uppercase tracking-widest">0{i + 1}</span>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none mb-3 group-hover:text-brand-red transition-colors break-words">
                              {lead}
                            </div>
                            {rest && (
                              <p className="text-xs md:text-sm font-medium text-gray-400 leading-snug">
                                {rest.charAt(0).toUpperCase() + rest.slice(1)}
                              </p>
                            )}
                            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-brand-red/60 to-transparent"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Challenge / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
                    <AlertCircle className="text-black dark:text-white" size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-black dark:text-white">The Challenge</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed font-medium">
                  {selectedProject.problem}
                </p>
              </div>
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-brand-red/10 rounded-lg">
                    <Layers className="text-brand-red" size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-black dark:text-white">The Solution</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed font-medium">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* KPIs - full width */}
            <div className="bg-black dark:bg-[#0a0a0a] text-white p-6 md:p-10 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
                <h3 className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={14} />
                  Key Performance Indicators
                </h3>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">{selectedProject.results.length} Outcomes</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                {selectedProject.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-brand-red rounded-full shrink-0"></div>
                    <p className="text-[13px] md:text-sm font-medium leading-snug text-gray-100">{res}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture - full width with inline tech stack */}
            <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 md:p-10 rounded-3xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black dark:text-white">System Architecture</h3>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{selectedProject.architecture.length} Layers · Modular Workflow Infrastructure</p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:max-w-[60%] md:justify-end">
                  {selectedProject.tech_stack.map(tech => (
                    <span key={tech} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-black dark:text-white">
                      <Cpu size={10} className="text-brand-red" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl hover:border-brand-red transition-colors group">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-black dark:text-white font-black text-base shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span className="font-bold text-sm uppercase tracking-tight text-gray-700 dark:text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <div className="flex md:hidden justify-between items-center pt-4">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Projects;