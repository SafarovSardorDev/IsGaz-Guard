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
    <section id="how-it-works" className="py-24 transition-colors duration-300 dark:bg-[#0a0a0a] bg-white dark:border-t dark:border-white/5 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Ishlash prinsipi
          </h2>
          <p className="text-lg dark:text-gray-400 text-slate-600 max-w-2xl mx-auto">
            Murakkab texnologiyalar — oddiy va ishonchli yechimda. Har bir soniya hisobga olingan xavfsizlik zanjiri.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div className="glass-card p-6 rounded-2xl h-full dark:hover:bg-white/5 hover:bg-slate-50 transition-all duration-300 border dark:border-white/5 border-slate-100 dark:hover:border-blue-500/30 hover:shadow-lg">
                  <div className="w-14 h-14 mx-auto dark:bg-[#1a1a1a] bg-blue-50 border dark:border-white/10 border-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-lg dark:shadow-black/50 shadow-blue-500/10">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-slate-600 text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {/* Connecting glowing dot for mobile/desktop decorative */}
                <div className="hidden lg:block absolute -top-[1.6rem] left-1/2 -translate-x-1/2 w-3 h-3 dark:bg-[#0a0a0a] bg-white border-2 border-blue-500 rounded-full z-10 group-hover:bg-blue-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;