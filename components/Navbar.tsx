import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex flex-col items-start justify-center">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-black">
            ASHWANTH S
          </h1>
          <div className="flex h-1.5 w-full mt-1">
            <div className="w-2/3 h-full bg-black"></div>
            <div className="w-1/3 h-full bg-brand-red"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'HOME', path: '/' },
            { name: 'CASE STUDIES', path: '/projects' },
            { name: 'ARSENAL', path: '/arsenal' },
            { name: 'JOURNEY', path: '/journey' },
            { name: 'CERTIFICATIONS', path: '/certifications' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-xs font-bold tracking-[0.2em] transition-colors duration-200 uppercase ${
                isActive(item.path) ? 'text-brand-red' : 'text-gray-400 hover:text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-gray-200 mx-2"></div>

          <a 
            href="https://cal.com/ashwanthofficial/custom-ai-agent-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 text-xs font-bold tracking-wider rounded-sm hover:bg-brand-red transition-colors uppercase flex items-center gap-2"
          >
            <Phone size={12} />
            Schedule Discovery
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-6 shadow-xl h-screen">
           {[
            { name: 'HOME', path: '/' },
            { name: 'CASE STUDIES', path: '/projects' },
            { name: 'ARSENAL', path: '/arsenal' },
            { name: 'JOURNEY', path: '/journey' },
            { name: 'CERTIFICATIONS', path: '/certifications' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black tracking-tighter uppercase ${
                isActive(item.path) ? 'text-brand-red' : 'text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="w-full h-px bg-gray-100"></div>
          <a 
            href="https://linkedin.com/in/ashwanthofficial" 
            target="_blank"
            className="flex items-center gap-3 text-lg font-bold text-gray-600"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
           <a 
            href="https://cal.com/ashwanthofficial/custom-ai-agent-consultation" 
            target="_blank"
            className="flex items-center gap-3 text-lg font-bold text-gray-600"
          >
            <Phone size={20} />
            Schedule Discovery
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;