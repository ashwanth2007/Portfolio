import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: '01',
      title: 'PROFILE',
      content: (
        <div>
          <div className="w-12 h-1 bg-brand-red mb-4"></div>
          <p className="text-gray-400 text-xs font-mono leading-relaxed">
            ASHWANTH S.<br/>
            LOC: INDIA<br/>
            SPEC: AUTOMATION<br/>
            STATUS: ACTIVE
          </p>
        </div>
      )
    },
    {
      id: '02',
      title: 'SKILLS',
      content: (
        <div>
          <div className="w-12 h-1 bg-brand-red mb-4"></div>
          <ul className="text-gray-400 text-xs font-mono leading-relaxed space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Context Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> AI Agents & Assistants
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Workflow Auto. Eng.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Vibe Coding/Marketing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Web Development
            </li>
          </ul>
        </div>
      )
    },
    {
      id: '03',
      title: 'LANGUAGES',
      content: (
        <div>
           <div className="w-12 h-1 bg-brand-red mb-4"></div>
           <div className="space-y-3">
             {[
               { lang: 'English', level: 'Native / Bilingual' },
               { lang: 'Tamil', level: 'Native / Bilingual' },
               { lang: 'Telugu', level: 'Native / Bilingual' },
               { lang: 'Hindi', level: 'Limited Working' }
             ].map(l => (
               <div key={l.lang} className="flex justify-between items-end text-[10px] md:text-xs font-mono border-b border-gray-800/50 pb-1">
                 <span className="text-white font-bold">{l.lang}</span>
                 <span className="text-gray-500 text-[9px] uppercase tracking-wide">{l.level}</span>
               </div>
             ))}
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-8 space-y-10">
          
          <div className="inline-block border-b-2 border-brand-red pb-1">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-black">
               System_Architecture_v1.0
             </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.9]">
            I BUILD <br/>
            <span className="text-brand-red">AUTONOMOUS</span> <br/>
            SYSTEMS.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl border-l-4 border-gray-200 pl-6">
            Specializing in enterprise-grade AI automation, multi-agent orchestration, and scalable infrastructure. 
            I turn manual operations into revenue-generating code.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link 
              to="/projects"
              className="group flex items-center justify-between bg-black text-white px-8 py-4 min-w-[200px] hover:bg-brand-red transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">View Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
             <Link 
              to="/journey"
              className="group flex items-center justify-between border-2 border-black text-black px-8 py-4 min-w-[200px] hover:bg-black hover:text-white transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">My Journey</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* Visual / Interactive Card Element */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center h-full">
           <div className="relative w-full aspect-[3/4]">
              
              {/* Decorative Squares - Now relative to the specific card wrapper */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-black z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-100 z-0"></div>

              {/* Main Card */}
              <div className="absolute inset-0 bg-brand-darkgray overflow-hidden flex flex-col justify-between transition-all duration-500 z-10 shadow-xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3e852997b060?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                    <div className="flex justify-between items-start">
                        <div className="text-xs font-bold text-brand-red uppercase tracking-widest bg-black/20 backdrop-blur-sm px-2 py-1">
                            {slides[currentSlide].title}
                        </div>
                        <div className="text-4xl font-black text-white tracking-tighter opacity-80">
                            {slides[currentSlide].id}
                        </div>
                    </div>
                    
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 key={currentSlide}">
                        {slides[currentSlide].content}
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute bottom-0 right-0 z-20 flex border-t border-l border-white/10 bg-black/50 backdrop-blur-sm">
                    <button 
                      onClick={prevSlide}
                      className="p-3 text-white hover:bg-brand-red hover:text-white transition-colors border-r border-white/10"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-3 text-white hover:bg-brand-red hover:text-white transition-colors"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
              </div>
           </div>
        </div>

      </div>

      {/* Expertise List */}
      <div className="mt-32 border-t border-gray-200 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: 'Architecture', desc: 'Designing resilient, self-healing systems that scale.' },
             { title: 'Automation', desc: 'Replacing manual labor with intelligent agentic workflows.' },
             { title: 'Optimization', desc: 'Reducing latency and cost while maximizing output.' }
           ].map(item => (
             <div key={item.title} className="group">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-brand-red transition-colors">{item.title}</h3>
                <p className="text-gray-500 font-medium">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;