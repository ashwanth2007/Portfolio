import React from 'react';
import { TOOL_ARSENAL } from '../data';
import { Settings, Zap, Database, Brain } from 'lucide-react';

const Arsenal = () => {
  const getIcon = (name: string) => {
    if (name.includes('Models')) return <Brain size={24} className="text-brand-red" />;
    if (name.includes('Orchestration')) return <Settings size={24} className="text-brand-red" />;
    if (name.includes('Intelligence')) return <Zap size={24} className="text-brand-red" />;
    return <Database size={24} className="text-brand-red" />;
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          The Arsenal
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          A curated stack of enterprise-grade tools. No fluff, just leverage. 
          Selected for reliability, scalability, and integration capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {TOOL_ARSENAL.map((category) => (
          <div key={category.name} className="bg-white border-2 border-black p-8 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
              {getIcon(category.name)}
              <h3 className="text-xl font-black uppercase tracking-wider">{category.name}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.tools.map((tool) => (
                <div 
                  key={tool} 
                  className="group flex items-center gap-2 bg-gray-50 px-4 py-2 border border-gray-200 hover:border-black hover:bg-black transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-white uppercase tracking-wide">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arsenal;