import React from 'react';
import { ArrowRight, ShieldAlert, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Yangi avlod xavfsizlik tizimi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] text-glow">
            Xavfsiz hayot — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">
              Xotirjam kelajak
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            IsGaz Guard — sun'iy intellekt va IoT texnologiyalari yordamida is gazi xavfini real vaqtda aniqlab, oilangiz va mulkingizni 
            haqiqiy himoya bilan ta’minlovchi tizim.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/demo"
              className="group inline-flex justify-center items-center px-8 py-4 bg-white text-black text-base font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
            >
              Demo ko'rish
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-base font-semibold rounded-full text-white hover:bg-white/10 transition-all"
            >
              <Play className="mr-2 h-4 w-4 fill-white" />
              Loyiha haqida
            </a>
          </div>
        </div>
        
        {/* Floating Abstract Cards/Nodes */}
        <div className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 -ml-12 opacity-50">
           <div className="glass-card p-4 rounded-2xl w-48 animate-float">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="h-2 w-20 bg-white/20 rounded-full"></div>
              </div>
              <div className="h-2 w-32 bg-white/10 rounded-full"></div>
           </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-0 right-0 mb-20 -mr-4 opacity-50">
           <div className="glass-card p-4 rounded-2xl w-48 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <div className="h-2 w-24 bg-white/20 rounded-full"></div>
              </div>
              <div className="h-2 w-16 bg-white/10 rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;