import React from 'react';
import { Wind, Cpu, BellRing, Smartphone, ShieldBan } from 'lucide-react';

const steps = [
  {
    icon: Wind,
    title: "1. Aniqlash",
    desc: "Yuqori sezgir sensorlar havodagi CO miqdorini tahlil qiladi."
  },
  {
    icon: Cpu,
    title: "2. Tahlil",
    desc: "Mikrokontroller xavf darajasini o'lchab, qaror qabul qiladi."
  },
  {
    icon: BellRing,
    title: "3. Signal",
    desc: "Ovozli sirena va yorug'lik indikatorlari ishga tushadi."
  },
  {
    icon: Smartphone,
    title: "4. Xabar",
    desc: "Foydalanuvchiga SMS va Telegram orqali xabar boradi."
  },
  {
    icon: ShieldBan,
    title: "5. Himoya",
    desc: "Klapan avtomatik yopilib, gaz sizishini to'xtatadi."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ishlash prinsipi
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Murakkab texnologiyalar — oddiy va ishonchli yechimda. Har bir soniya hisobga olingan xavfsizlik zanjiri.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-white/20 to-transparent -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div className="glass-card p-6 rounded-2xl h-full hover:bg-white dark:hover:bg-white/5 transition-all duration-300 border border-slate-200 dark:border-white/5 hover:shadow-lg">
                  <div className="w-14 h-14 mx-auto bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {/* Connecting glowing dot for mobile/desktop decorative */}
                <div className="hidden lg:block absolute -top-[1.6rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-950 border-2 border-blue-500 rounded-full z-10 group-hover:bg-blue-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;