import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const SOCIALS = [
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ashwanthxs/', label: 'LinkedIn' },
  { icon: <Twitter size={18} />, href: 'https://x.com/ashwanthXs', label: 'X (Twitter)' },
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/ashwanthXs', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black dark:bg-[#050505] pt-20 pb-10 px-6 mt-20 border-t border-white/5 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter strip */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
          <div className="space-y-3 max-w-md">
            <h3 className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em]">Insights & Updates</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Architecting the autonomous enterprise. Join the newsletter for deep dives into AI systems and systemic leverage.
            </p>
          </div>
          <a
            href="https://newsletter.ashwanth.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors duration-300 rounded-sm shadow-2xl whitespace-nowrap"
          >
            <Mail size={16} />
            Subscribe to Newsletter
          </a>
        </div>

        {/* Big brand mark - centered */}
        <div className="pt-10 pb-12 flex flex-col items-center justify-center gap-8 select-none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <img
              src="/logo.png"
              alt="Ashwanth S"
              className="h-24 sm:h-32 md:h-44 lg:h-52 w-auto shrink-0"
              draggable={false}
            />
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter text-white uppercase leading-[0.85]">
                Ashwanth S
              </span>
              <div className="flex h-2 md:h-3 w-full mt-3">
                <div className="w-2/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-brand-red"></div>
              </div>
            </div>
          </div>

          {/* Tagline + email */}
          <div className="flex flex-col items-center gap-2 mt-2 text-center">
            <p className="text-xs md:text-sm font-bold text-gray-300 uppercase tracking-[0.3em]">
              AI Systems Architect
            </p>
            <p className="text-xs md:text-sm font-medium text-gray-400">
              Email:{' '}
              <a
                href="mailto:me@ashwanth.dev"
                className="text-white hover:text-brand-red underline underline-offset-4 decoration-white/30 hover:decoration-brand-red transition-colors"
              >
                me@ashwanth.dev
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-red text-gray-400 hover:text-white transition-colors duration-300 rounded-lg border border-white/5 hover:border-brand-red"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
            © 2026 Ashwanth S · All Rights Reserved
          </span>

          <div className="flex gap-6">
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
            <Link
              to="/discovery"
              className="text-[10px] font-black text-gray-500 hover:text-brand-red uppercase tracking-[0.2em] transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
