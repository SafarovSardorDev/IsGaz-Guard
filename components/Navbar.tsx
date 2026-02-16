import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  // Handle Dark Mode Toggle
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll Spy for Active State
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'solution', 'how-it-works', 'team', 'financials', 'roadmap'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDemo = location.pathname === '/demo';

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
      <div className={`
        relative w-full max-w-6xl rounded-full px-6 py-3 transition-all duration-300
        ${isDark ? 'bg-[#050505]/80 border border-white/10' : 'bg-white/80 border border-black/5'}
        backdrop-blur-xl shadow-lg
      `}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <ShieldCheck className={`h-8 w-8 relative z-10 ${isDark ? 'text-white' : 'text-blue-600'}`} />
                {isDark && <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>}
              </div>
              <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                IsGaz Guard
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = isDemo 
                ? link.href === '/demo' 
                : activeSection === link.id && link.href !== '/demo';

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive 
                      ? (isDark ? 'bg-white text-black shadow-glow' : 'bg-slate-900 text-white shadow-lg') 
                      : (isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-slate-900 hover:bg-black/5')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Controls: Theme & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl border shadow-xl backdrop-blur-xl ${
             isDark ? 'bg-[#0a0a0a]/95 border-white/10' : 'bg-white/95 border-black/5'
          }`}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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