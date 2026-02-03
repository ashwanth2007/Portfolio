import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Code, GraduationCap, Flag } from 'lucide-react';
import SEO from '../components/SEO';

const Journey = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'education': return <GraduationCap size={18} />;
      case 'internship': return <Code size={18} />; 
      case 'work': return <Briefcase size={18} />; 
      default: return <Flag size={18} />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-black text-white">
       <SEO 
        title="My Journey" 
        description="Professional timeline of Ashwanth S, featuring experience at Zoro Corp, Instig8.AI, and Freedom With AI."
        keywords={["Career Timeline", "Experience", "Resume", "AI Engineer Background"]}
      />

       <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-block border-b-2 border-brand-red pb-1 mb-6">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Career Timeline</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">The Path</h1>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2"></div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isLatest = index === 0;

            return (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot/Icon */}
                <div className={`absolute left-6 md:left-1/2 w-12 h-12 rounded-none border-2 flex items-center justify-center z-10 transform -translate-x-1/2 -translate-y-2 bg-brand-black ${
                  isLatest ? 'border-brand-red text-brand-red shadow-[0_0_20px_rgba(220,38,38,0.4)]' : 'border-gray-700 text-gray-500'
                }`}>
                   {getIcon(exp.type)}
                </div>

                {/* Content Spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="group">
                    
                    <span className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-[0.2em]">
                      {exp.period}
                    </span>
                    
                    <h3 className={`text-3xl font-black mb-2 uppercase tracking-tighter ${isLatest ? 'text-white' : 'text-gray-300'}`}>
                      {exp.company}
                    </h3>
                    
                    <div className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest border ${
                      isLatest ? 'bg-brand-red text-white border-brand-red' : 'bg-transparent text-gray-400 border-gray-700'
                    }`}>
                      {exp.role}
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;