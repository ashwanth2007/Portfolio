import React from 'react';
import { Linkedin, Mail, Twitter, Youtube, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* 1. Branding */}
            <div className="space-y-4">
              <div className="group inline-block">
                <h2 className="text-xl font-black tracking-tighter text-black uppercase">Ashwanth S</h2>
                <div className="flex h-1.5 w-full mt-1">
                    <div className="w-2/3 h-full bg-black"></div>
                    <div className="w-1/3 h-full bg-brand-red"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Architecting the autonomous enterprise. Moving operators from manual tasks to systemic leverage.
              </p>
            </div>

            {/* 2. Address */}
            <div>
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Location</h3>
                 <div className="flex items-start gap-3 text-sm font-medium text-gray-600">
                    <MapPin size={18} className="text-brand-red mt-0.5 shrink-0" />
                    <p className="leading-relaxed">
                      Vellore, Tamil Nadu,<br/>
                      India, Asia - 632014
                    </p>
                 </div>
            </div>

            {/* 3. Socials */}
            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect</h3>
                <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/ashwanthofficial/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-50 hover:bg-black hover:text-white transition-colors rounded-md text-gray-600"
                      aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://x.com/ashwanth_off" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-50 hover:bg-black hover:text-white transition-colors rounded-md text-gray-600"
                      aria-label="X (Twitter)"
                    >
                        <Twitter size={20} />
                    </a>
                    <a 
                      href="https://www.youtube.com/@ashwanthdotdev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-50 hover:bg-black hover:text-white transition-colors rounded-md text-gray-600"
                      aria-label="YouTube"
                    >
                        <Youtube size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/ashwanth_pvt.in/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-50 hover:bg-black hover:text-white transition-colors rounded-md text-gray-600"
                      aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                </div>
            </div>

            {/* 4. Newsletter */}
            <div className="flex flex-col items-start">
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Insights and Updates</h3>
               <a 
                  href="https://newsletter.ashwanth.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors w-full md:w-auto justify-center rounded-sm"
                >
                  <Mail size={14} />
                  Newsletter
              </a>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-center items-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              © 2026 All Rights Reserved
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;