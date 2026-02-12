import React from 'react';
import { RoadmapStep } from '../types';
import { Flag, Rocket, Settings, Lightbulb } from 'lucide-react';

const steps: (RoadmapStep & { icon: React.ElementType, desc: string })[] = [
  { 
    title: "G'oya (Idea)", 
    status: 'completed', 
    icon: Lightbulb,
    desc: "Muammoni o'rganish va texnik yechim konsepti."
  },
  { 
    title: "Prototip", 
    status: 'completed', 
    icon: Settings,
    desc: "Ilk ishchi nusxani yig'ish va sinovdan o'tkazish."
  },
  { 
    title: "MVP", 
    status: 'current', 
    icon: Flag,
    desc: "Minimal funksional mahsulotni tayyorlash."
  },
  { 
    title: "Ishga tushirish", 
    status: 'future', 
    icon: Rocket,
    desc: "Ommaviy ishlab chiqarish va bozorga chiqish."
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-20">
          Rivojlanish xaritasi
        </h2>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className={`p-6 glass-card rounded-2xl relative transition-all duration-300 hover:border-blue-500/30 border ${step.status === 'current' ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20' : 'border-slate-200 dark:border-white/10'}`}>
                    {step.status === 'current' && (
                      <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                        Hozirgi bosqich
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Icon/Status Indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full z-10 bg-white dark:bg-[#050505] border-4 border-slate-50 dark:border-[#111]">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                     step.status === 'completed' ? 'bg-blue-600 border-blue-600 text-white shadow-lg' :
                     step.status === 'current' ? 'bg-white dark:bg-[#050505] border-blue-500 text-blue-500 animate-pulse' :
                     'bg-white dark:bg-[#050505] border-slate-200 dark:border-white/20 text-gray-300 dark:text-gray-600'
                   }`}>
                     <step.icon className="w-4 h-4" />
                   </div>
                </div>

                {/* Empty Spacer */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;