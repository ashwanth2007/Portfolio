import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black dark:bg-[#050505] pt-20 pb-12 px-6 mt-20 border-t border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div className="space-y-4 max-w-md">
            <h3 className="text-xs font-black text-brand-red uppercase tracking-[0.3em]">Insights and Updates</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Architecting the autonomous enterprise. Join the newsletter for deep dives into AI systems and systemic leverage.
            </p>
          </div>
          <a 
            href="https://newsletter.ashwanth.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white dark:bg-white text-black dark:text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-brand-red hover:text-white dark:hover:bg-brand-red dark:hover:text-white transition-all duration-300 rounded-sm shadow-2xl"
          >
            <Mail size={16} />
            Subscribe to Newsletter
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="space-y-8">
          {/* Top Row: Name and Socials */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="group inline-block">
              <h2 className="text-2xl font-black tracking-tighter text-white uppercase">Ashwanth S</h2>
              <div className="flex h-1.5 w-full mt-1">
                <div className="w-2/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-brand-red"></div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ashwanthofficial/", label: "LinkedIn" },
                { icon: <Twitter size={20} />, href: "https://x.com/ashwanth_ai", label: "X (Twitter)" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/ashwanth_pvt.in/", label: "Instagram" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/5 hover:bg-brand-red text-gray-400 hover:text-white transition-all duration-300 rounded-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Copyright and Legal */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
              Copyright © 2026 All Rights Reserved
            </span>
            
            <div className="flex gap-8">
              <Link 
                to="/terms" 
                className="text-[10px] font-black text-gray-500 hover:text-brand-red uppercase tracking-[0.2em] transition-colors"
              >
                Terms
              </Link>
              <Link 
                to="/privacy" 
                className="text-[10px] font-black text-gray-500 hover:text-brand-red uppercase tracking-[0.2em] transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;