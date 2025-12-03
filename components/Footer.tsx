import React from 'react';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Left: Branding */}
        <div className="space-y-4">
          <div className="group inline-block">
            <h2 className="text-xl font-black tracking-tighter text-black uppercase">Ashwanth S</h2>
            <div className="flex h-1.5 w-full mt-1">
                <div className="w-2/3 h-full bg-black"></div>
                <div className="w-1/3 h-full bg-brand-red"></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Architecting the autonomous enterprise. Moving operators from manual tasks to systemic leverage.
          </p>
        </div>

        {/* Right: Newsletter & Links */}
        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
          
          <div id="newsletter" className="w-full md:w-auto text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Insights & Updates</p>
            <a 
                href="https://ashwanth.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
              >
                <Mail size={14} />
                Join the Newsletter
            </a>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://linkedin.com/in/ashwanthofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              © 2025 All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;