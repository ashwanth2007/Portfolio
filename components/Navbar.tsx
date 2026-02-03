import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Home, FolderOpen, Cpu, Map, Award, BookOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home size={18} /> },
    { name: 'CASE STUDIES', path: '/projects', icon: <FolderOpen size={18} /> },
    { name: 'ARSENAL', path: '/arsenal', icon: <Cpu size={18} /> },
    { name: 'JOURNEY', path: '/journey', icon: <Map size={18} /> },
    { name: 'CERTIFICATIONS', path: '/certifications', icon: <Award size={18} /> },
    { name: 'RESOURCES', path: '/resources', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex flex-col items-start justify-center">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-black">
            ASHWANTH S
          </div>
          <div className="flex h-1.5 w-full mt-1">
            <div className="w-2/3 h-full bg-black"></div>
            <div className="w-1/3 h-full bg-brand-red"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  active ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-black'
                }`}
              >
                <div className={`${active ? 'text-brand-red' : 'text-current group-hover:text-brand-red'} transition-colors`}>
                  {item.icon}
                </div>
                <span 
                  className={`whitespace-nowrap text-xs font-bold tracking-widest overflow-hidden transition-all duration-300 ease-in-out ${
                    active ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
          
          <div className="h-6 w-px bg-gray-200 mx-4"></div>

          <a 
            href="https://newsletter.ashwanth.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black text-white px-4 py-2 text-xs font-bold tracking-wider rounded-sm hover:bg-brand-red transition-colors uppercase flex items-center gap-2"
          >
            <Mail size={14} className="group-hover:rotate-12 transition-transform" />
            <span className="hidden lg:inline">Join Free Newsletter</span>
            <span className="lg:hidden">Join</span>
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-6 shadow-xl h-screen animate-in slide-in-from-top-10 duration-200">
           {navItems.map((item) => {
             const active = isActive(item.path);
             return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-2xl font-black tracking-tighter uppercase group ${
                  active ? 'text-brand-red' : 'text-black'
                }`}
              >
                <div className={`p-2 rounded-md ${active ? 'bg-brand-red/10' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                   {item.icon}
                </div>
                {item.name}
              </Link>
             );
           })}
          <div className="w-full h-px bg-gray-100"></div>
          <a 
            href="https://linkedin.com/in/ashwanthofficial" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-lg font-bold text-gray-600"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
           <a 
            href="https://newsletter.ashwanth.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-bold text-gray-600"
          >
            <Mail size={20} />
            Join Free Newsletter
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;