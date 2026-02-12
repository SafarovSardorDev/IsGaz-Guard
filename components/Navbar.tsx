import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize Theme
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Muammo', href: '/#problem', id: 'problem' },
    { name: 'Yechim', href: '/#solution', id: 'solution' },
    { name: 'Qanday ishlaydi?', href: '/#how-it-works', id: 'how-it-works' },
    { name: 'Jamoa & Nega biz?', href: '/#team', id: 'team' },
    { name: 'Moliyaviy foyda', href: '/#financials', id: 'financials' },
    { name: 'Yo\'l xaritasi', href: '/#roadmap', id: 'roadmap' },
    { name: 'Demo', href: '/demo', id: 'demo' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-6xl rounded-full px-6 py-3 bg-white/90 dark:bg-[#050505]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {/* Glow effect behind the logo */}
                <div className="absolute inset-0 bg-blue-500/20 dark:bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ShieldCheck className="h-8 w-8 relative z-10 text-blue-600 dark:text-white transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white transition-colors">
                IsGaz Guard
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isDemo = link.id === 'demo';

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isDemo
                      ? 'bg-blue-600 dark:bg-white text-white dark:text-slate-900 shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-white/20 transform hover:-translate-y-0.5 hover:bg-blue-700 dark:hover:bg-gray-100' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Dark Mode Toggle Desktop */}
            <button 
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Controls: Mobile Menu & Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl bg-white/95 dark:bg-[#050505]/95">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    link.id === 'demo'
                      ? 'bg-blue-600 dark:bg-white text-white dark:text-slate-900 shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;