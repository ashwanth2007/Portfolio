import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, X, Layers, Cpu, TrendingUp, AlertCircle, CheckCircle, FolderOpen, ShieldCheck, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const CATEGORIES = ['CASE STUDIES', 'INSTIG8', 'FREEDOM WITH AI', 'PERSONAL'];

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('CASE STUDIES');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (projectId) {
      const project = PROJECTS.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setActiveCategory(project.category);
      } else {
        navigate('/case-studies', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectId, navigate]);

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    navigate(`/case-studies/${filteredProjects[prevIndex].id}`);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    navigate(`/case-studies/${filteredProjects[nextIndex].id}`);
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === 'CASE STUDIES') return 'CASE STUDIES';
    if (cat === 'INSTIG8') return 'INSTIG8.AI';
    return cat;
  };

  const handleCloseModal = () => {
    navigate('/case-studies');
    setIsExpanded(false);
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-black dark:text-white transition-colors">
            Deployed Systems
            </h1>
            <div className="w-24 h-2 bg-brand-red mb-6"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl text-lg font-medium transition-colors">
            Select a portfolio sector below to view specific case studies.
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

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-200 dark:border-white/10 mb-12 transition-colors">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-4 text-xs md:text-sm font-bold tracking-[0.2em] transition-all relative ${
              activeCategory === cat 
                ? 'text-black dark:text-white' 
                : 'text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {getCategoryLabel(cat)}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red"></div>
            )}
          </button>
        ))}
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
              <div className="p-8 pb-4 relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand-red/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                 </div>

                 <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2 text-black dark:text-white group-hover:text-brand-red transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                   {project.client}
                 </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 dark:bg-white/10 group-hover:bg-brand-red transition-colors"></div>

              {/* Card Footer Section */}
              <div className="p-8 pt-4 flex-1 flex flex-col justify-between relative z-10 bg-gray-50/50 dark:bg-white/5 transition-colors">
                 <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                   {project.subtitle}
                 </p>

                 <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Impact</span>
                      <span className="text-xs font-bold text-black dark:text-white border-b-2 border-brand-red pb-0.5 transition-colors">{project.impact_summary}</span>
                    </div>
                    <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-2 rounded-full group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                       <ArrowUpRight size={16} />
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
          <div className="sticky top-0 z-50 bg-black dark:bg-[#050505] text-white px-6 py-4 flex items-center justify-between shadow-xl border-b border-white/5">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <h2 className="text-xl font-black tracking-tighter uppercase leading-none">{selectedProject.title}</h2>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{selectedProject.client}</p>
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
                className="bg-brand-red text-white px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Close Dashboard
              </button>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="max-w-[1600px] mx-auto p-6 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: ROI & Impact (Dashboard Style) */}
              <div className="lg:col-span-4 space-y-8">
                {/* ROI Card */}
                <div className="bg-gray-50 dark:bg-white/5 border-2 border-black dark:border-white/10 p-8 rounded-3xl relative overflow-hidden group transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  <TrendingUp className="text-brand-red mb-6" size={40} />
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Primary ROI Metric</h3>
                  <div className="text-5xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none mb-4 transition-colors">
                    {selectedProject.impact_summary}
                  </div>
                  <div className="h-1 w-20 bg-brand-red"></div>
                </div>

                {/* Quantitative Results */}
                <div className="bg-black dark:bg-[#0a0a0a] text-white p-8 rounded-3xl shadow-2xl border border-white/5 transition-colors">
                  <h3 className="text-xs font-black text-brand-red uppercase tracking-widest mb-8 flex items-center gap-2">
                    <CheckCircle size={16} />
                    Key Performance Indicators
                  </h3>
                  <div className="space-y-6">
                    {selectedProject.results.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="mt-1 w-1.5 h-1.5 bg-brand-red rounded-full shrink-0 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm md:text-base font-bold uppercase tracking-tight leading-tight">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Visualization */}
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 rounded-3xl transition-colors">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">System Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech_stack.map(tech => (
                      <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-black dark:text-white hover:border-black dark:hover:border-white transition-colors">
                        <Cpu size={12} className="text-brand-red" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Problem, Solution & Architecture */}
              <div className="lg:col-span-8 space-y-8">
                {/* Context & Problem Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg transition-colors">
                        <AlertCircle className="text-black dark:text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tighter text-black dark:text-white">The Challenge</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium transition-colors">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg transition-colors">
                        <Layers className="text-black dark:text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tighter text-black dark:text-white">The Solution</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium transition-colors">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Dashboard */}
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-3xl transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">System Architecture</h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Modular Workflow Infrastructure</p>
                    </div>
                    <div className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-colors">
                      Production Ready v1.0
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.architecture.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 p-6 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-2xl hover:border-brand-red transition-colors group">
                        <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-black dark:text-white font-black text-xl group-hover:bg-brand-red group-hover:text-white transition-all">
                          {idx + 1}
                        </div>
                        <span className="font-bold text-sm uppercase tracking-tight text-gray-700 dark:text-gray-300 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation for Mobile */}
                <div className="flex md:hidden justify-between items-center pt-8">
                  <button 
                    onClick={handlePrev}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Projects;