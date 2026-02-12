import React from 'react';
import { AlertTriangle, CheckCircle2, Shield, Activity, Zap, Flame, Car, Factory, Skull } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div id="solution"></div> {/* Anchor for nav */}
      
      {/* Background blobs - drastically reduced visibility in dark mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-red-500/5 dark:bg-white/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PROBLEM HEADER */}
        <div className="text-center mb-20">
             <div className="inline-flex items-center px-3 py-1 rounded-full border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-xs font-bold mb-6">
               <AlertTriangle className="w-3 h-3 mr-2" />
               KO'RINMAS QOTIL
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
               Is gazi — Ssiz va Hidsiz <span className="text-red-500">Xavf</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
               Statistikaga ko'ra, is gazi (CO) zaharlanishi asosan isitish mavsumida sodir bo'ladi. 
               Organizm kislorod o'rniga is gazini qabul qila boshlaydi, bu esa fojiali oqibatlarga olib keladi.
             </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          
          {/* Left: Sources & Impact */}
          <div className="space-y-8">
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Flame className="text-orange-500" />
                Asosiy Manbalar
             </h3>
             <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, title: "Pechlar", desc: "Nosoz mo'rilar" },
                  { icon: Car, title: "Avtomobillar", desc: "Yopiq garajda" },
                  { icon: Zap, title: "Generator", desc: "Benzin generatorlar" },
                  { icon: Factory, title: "Oshxona", desc: "Gaz plitalari" },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-4 rounded-2xl flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>

             <div className="glass-card p-6 rounded-3xl border-l-4 border-l-red-500 mt-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                   <Skull className="text-red-500 w-5 h-5" />
                   Zaharlanish belgilari (PPM)
                </h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 dark:text-green-400 font-bold">&lt; 50 PPM</span>
                      <span className="text-slate-600 dark:text-slate-400">Xavfsiz yoki yengil bosh og'rig'i</span>
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                   </div>

                   <div className="flex items-center justify-between text-sm">
                      <span className="text-yellow-500 font-bold">51 - 200 PPM</span>
                      <span className="text-slate-600 dark:text-slate-400">Bosh aylanishi, ko'ngil aynishi</span>
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                   </div>

                   <div className="flex items-center justify-between text-sm">
                      <span className="text-red-600 font-bold">&gt; 400 PPM</span>
                      <span className="text-red-600 font-bold">Hushdan ketish va O'lim xavfi</span>
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full animate-pulse" style={{ width: '90%' }}></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side: The Solution (IsGaz Guard) */}
          <div className="relative pt-10">
             <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full"></div>
             
             <div className="relative grid grid-cols-2 gap-4">
                {/* Main Feature Card - Clean dark border */}
                <div className="col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group border-2 border-blue-500/20 dark:border-white/10">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-white/5 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                   <div className="flex justify-between items-start mb-6">
                      <CheckCircle2 className="w-12 h-12 text-blue-500" />
                      <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold">Yechim</span>
                   </div>
                   <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">IsGaz Guard</h3>
                   <p className="text-slate-600 dark:text-slate-300 mb-6">Muammoni nafaqat aniqlaydigan, balki uni bartaraf etadigan (gazni o'chiradigan) to'liq avtomatlashtirilgan yechim.</p>
                   
                   <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        Xonadonlar uchun
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        Ishlab chiqarish korxonalari
                      </li>
                   </ul>
                </div>

                {/* Sub Feature 1 */}
                <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                   <Activity className="w-8 h-8 text-green-500 mb-3" />
                   <h4 className="text-slate-900 dark:text-white font-bold">24/7 Monitoring</h4>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Uzluksiz nazorat</p>
                </div>

                {/* Sub Feature 2 */}
                <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                   <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                   <h4 className="text-slate-900 dark:text-white font-bold">Avto-blok</h4>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Klapan yopiladi</p>
                </div>
                
                 {/* Sub Feature 3 */}
                <div className="col-span-2 glass-card p-6 rounded-3xl flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                   <div>
                     <h4 className="text-slate-900 dark:text-white font-bold">SMS & Telegram</h4>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Xavf haqida tezkor xabar</p>
                   </div>
                   <Shield className="w-8 h-8 text-purple-500" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;