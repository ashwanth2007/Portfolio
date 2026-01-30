import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, X, Layers, Cpu, TrendingUp, AlertCircle, CheckCircle, FolderOpen, ShieldCheck, Maximize2, Minimize2 } from 'lucide-react';
import SEO from '../components/SEO';

const CATEGORIES = ['ZORO CORP', 'INSTIG8', 'FREEDOM WITH AI', 'PERSONAL'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('INSTIG8');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  const getCategoryLabel = (cat: string) => {
    if (cat === 'ZORO CORP') return 'ZORO CORP';
    if (cat === 'INSTIG8') return 'INSTIG8.AI';
    return cat;
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
        "url": `https://ashwanth.dev/#/projects?id=${project.id}`
      }))
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Case Studies" 
        description="Explore enterprise-grade AI automation projects and deployed systems for clients like BCG, Zoro Corp, and Instig8."
        schema={projectSchema}
        keywords={["Case Studies", "AI Projects", "Automation Portfolio", "System Architecture"]}
      />

      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
            Deployed Systems
            </h2>
            <div className="w-24 h-2 bg-brand-red mb-6"></div>
            <p className="text-gray-500 max-w-xl text-lg font-medium">
            Select a portfolio sector below to view specific case studies.
            </p>
        </div>
        
        <Link 
            to="/verification"
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-colors"
        >
            <ShieldCheck size={16} />
            Data Verification Center
        </Link>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-200 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-4 text-xs md:text-sm font-bold tracking-[0.2em] transition-all relative ${
              activeCategory === cat 
                ? 'text-black' 
                : 'text-gray-400 hover:text-black'
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
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col h-full bg-white border border-gray-200 hover:border-black transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Abstract Grid */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px]"></div>

              {/* Card Header Section */}
              <div className="p-8 pb-4 relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-black text-gray-100 group-hover:text-brand-red/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="bg-black text-white px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                      {project.tags[0]}
                    </div>
                 </div>

                 <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2 group-hover:text-brand-red transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                   {project.client}
                 </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 group-hover:bg-brand-red transition-colors"></div>

              {/* Card Footer Section */}
              <div className="p-8 pt-4 flex-1 flex flex-col justify-between relative z-10 bg-gray-50/50">
                 <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                   {project.subtitle}
                 </p>

                 <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Impact</span>
                      <span className="text-xs font-bold text-black border-b-2 border-brand-red pb-0.5">{project.impact_summary}</span>
                    </div>
                    <div className="bg-white border border-gray-200 p-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                       <ArrowUpRight size={16} />
                    </div>
                 </div>
              </div>
            </div>
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

      {/* Detail Modal - Using Portal to break out of z-index stacking context */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={handleCloseModal}
          ></div>
          
          <div className={`relative bg-white w-full ${isExpanded ? 'max-w-[95vw] h-[95vh]' : 'max-w-4xl max-h-[85vh]'} overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-200 transition-all ease-in-out`}>
            
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 bg-white text-black border border-gray-200 hover:bg-black hover:text-white transition-colors rounded-full md:rounded-none shadow-sm"
                  title={isExpanded ? "Collapse View" : "Expand View"}
                >
                  {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button 
                  onClick={handleCloseModal}
                  className="p-2 bg-black text-white hover:bg-brand-red transition-colors rounded-full md:rounded-none shadow-sm"
                >
                  <X size={20} />
                </button>
            </div>

            {/* Left Sidebar (Header) */}
            <div className="md:w-5/12 bg-gray-50 p-6 md:p-8 border-r border-gray-200">
              <div className="sticky top-0">
                <div className="mb-6 flex items-center gap-2">
                   <div className="w-2 h-2 bg-brand-red"></div>
                   <span className="text-xs font-bold text-black uppercase tracking-widest">System Architecture v1.0</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 uppercase leading-none">{selectedProject.title}</h2>
                <p className="text-sm md:text-base font-medium text-gray-600 mb-8">{selectedProject.subtitle}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">Role</h4>
                    <p className="font-medium text-sm text-gray-600">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech_stack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">Key Impact</h4>
                    <div className="text-brand-red font-black text-lg">
                      {selectedProject.impact_summary}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-7/12 p-6 md:p-10 space-y-10">
              
              {/* Context & Problem */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-black" size={20} />
                  <h3 className="text-lg font-black uppercase tracking-tighter">The Challenge</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm border-l-2 border-gray-200 pl-4">
                  <div><strong className="text-black uppercase text-[10px] tracking-widest block mb-1">Context</strong> {selectedProject.context}</div>
                  <div><strong className="text-black uppercase text-[10px] tracking-widest block mb-1 mt-3">Problem Statement</strong> {selectedProject.problem}</div>
                </div>
              </section>

              {/* Solution & Architecture */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="text-black" size={20} />
                  <h3 className="text-lg font-black uppercase tracking-tighter">System Architecture</h3>
                </div>
                <p className="mb-4 text-gray-700 font-bold text-sm">{selectedProject.solution}</p>
                <div className="bg-gray-50 p-5 border border-gray-100">
                  <ul className="space-y-3">
                    {selectedProject.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-600">
                        <div className="mt-0.5 shrink-0 text-brand-red">
                          <Cpu size={14} />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Results */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-black" size={20} />
                  <h3 className="text-lg font-black uppercase tracking-tighter">Quantitative Impact</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {selectedProject.results.map((res, idx) => (
                    <div key={idx} className="bg-black text-white p-3 flex items-center gap-3 shadow-md">
                      <div className="text-brand-red">
                        <CheckCircle size={14} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide">{res}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Spacer for bottom scrolling comfort */}
              <div className="h-24 w-full bg-white"></div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Projects;