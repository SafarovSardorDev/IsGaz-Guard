import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
      {/* Background Effects - Toned down for dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-white/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-white/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 dark:border-white/10 bg-blue-50 dark:bg-white/5 backdrop-blur-sm text-blue-800 dark:text-white text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-white"></span>
            </span>
            Yangi avlod xavfsizlik tizimi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
            Xavfsiz hayot — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-white dark:to-slate-400">
              Xotirjam kelajak
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            IsGaz Guard — sun'iy intellekt va IoT texnologiyalari yordamida is gazi xavfini real vaqtda aniqlab, oilangiz va mulkingizni 
            haqiqiy himoya bilan ta’minlovchi tizim.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/demo"
              className="group inline-flex justify-center items-center px-8 py-4 bg-blue-600 dark:bg-white text-white dark:text-slate-900 text-base font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/20 transform hover:-translate-y-1"
            >
              Demo ko'rish
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#problem"
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-base font-semibold rounded-full text-slate-700 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md"
            >
              <Play className="mr-2 h-4 w-4 fill-slate-700 dark:fill-white" />
              Loyiha haqida
            </a>
          </div>
        </div>
        
        {/* Floating Abstract Cards/Nodes - Neutral colors in dark mode */}
        <div className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 -ml-12 opacity-80">
           <div className="glass-card p-4 rounded-2xl w-48 animate-float">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="h-2 w-20 bg-slate-200 dark:bg-white/10 rounded-full"></div>
              </div>
              <div className="h-2 w-32 bg-slate-100 dark:bg-white/5 rounded-full"></div>
           </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-0 right-0 mb-20 -mr-4 opacity-80">
           <div className="glass-card p-4 rounded-2xl w-48 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <div className="h-2 w-24 bg-slate-200 dark:bg-white/10 rounded-full"></div>
              </div>
              <div className="h-2 w-16 bg-slate-100 dark:bg-white/5 rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;