import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FolderOpen, Map, Award, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home size={18} /> },
    { name: 'CASE STUDIES', path: '/case-studies', icon: <FolderOpen size={18} /> },
    { name: 'JOURNEY', path: '/journey', icon: <Map size={18} /> },
    { name: 'CREDENTIALS', path: '/credentials', icon: <Award size={18} /> },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-5xl mx-auto bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] px-4 md:px-8 h-16 flex items-center justify-between transition-colors duration-300">
        {/* Wordmark */}
        <Link to="/" className="group flex flex-col items-start justify-center shrink-0">
          <div className="text-lg md:text-xl font-black tracking-tighter text-black dark:text-white transition-colors leading-none">
            ASHWANTH S
          </div>
          <div className="flex h-1 w-full mt-1">
            <div className="w-2/3 h-full bg-black dark:bg-white transition-colors"></div>
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
                  active ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-black/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
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
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button 
            className="p-2 text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200 transition-colors">
           {navItems.map((item) => {
             const active = isActive(item.path);
             return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-black tracking-tighter uppercase group ${
                  active ? 'text-brand-red' : 'text-black dark:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl ${active ? 'bg-brand-red/10' : 'bg-gray-50 dark:bg-white/5 group-hover:bg-gray-100 dark:group-hover:bg-white/10'}`}>
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