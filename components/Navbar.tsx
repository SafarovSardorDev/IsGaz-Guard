import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="relative w-full max-w-6xl rounded-full px-6 py-3 bg-[#050505]/80 border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {/* Glow effect behind the logo */}
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ShieldCheck className="h-8 w-8 relative z-10 text-white transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white transition-colors">
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
                      ? 'bg-white text-slate-900 shadow-lg hover:shadow-white/20 transform hover:-translate-y-0.5 hover:bg-gray-100' 
                      : 'text-slate-300 hover:text-blue-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Controls: Mobile Menu */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl bg-[#050505]/95">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    link.id === 'demo'
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
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