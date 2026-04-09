import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Home, FolderOpen, Cpu, Map, Award, BookOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home size={18} /> },
    { name: 'CASE STUDIES', path: '/case-studies', icon: <FolderOpen size={18} /> },
    { name: 'ARSENAL', path: '/arsenal', icon: <Cpu size={18} /> },
    { name: 'JOURNEY', path: '/journey', icon: <Map size={18} /> },
    { name: 'CERTIFICATIONS', path: '/certifications', icon: <Award size={18} /> },
    { name: 'RESOURCES', path: '/resources', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex flex-col items-start justify-center">
          <div className="text-lg md:text-xl font-black tracking-tighter text-black">
            ASHWANTH S
          </div>
          <div className="flex h-1 w-full mt-0.5">
            <div className="w-2/3 h-full bg-black"></div>
            <div className="w-1/3 h-full bg-brand-red"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  active ? 'bg-black text-white' : 'hover:bg-black/5 text-gray-600 hover:text-black'
                }`}
              >
                <div className={`${active ? 'text-brand-red' : 'text-current group-hover:text-brand-red'} transition-colors`}>
                  {item.icon}
                </div>
                <span 
                  className={`whitespace-nowrap text-[10px] font-black tracking-[0.2em] overflow-hidden transition-all duration-300 ease-in-out ${
                    active ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-white/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200">
           {navItems.map((item) => {
             const active = isActive(item.path);
             return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-black tracking-tighter uppercase group ${
                  active ? 'text-brand-red' : 'text-black'
                }`}
              >
                <div className={`p-2 rounded-xl ${active ? 'bg-brand-red/10' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                   {item.icon}
                </div>
                {item.name}
              </Link>
             );
           })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;