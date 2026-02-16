import React from 'react';
import { TrendingUp, DollarSign, Wallet, BarChart3, Globe2 } from 'lucide-react';

const Financials: React.FC = () => {
  return (
    <section id="financials" className="py-24 relative overflow-hidden transition-colors duration-300 dark:bg-[#0a0a0a] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border dark:border-green-500/30 border-green-200 dark:bg-green-500/10 bg-green-50 text-green-600 text-xs font-bold mb-4">
            <DollarSign className="w-3 h-3 mr-2" />
            IQTISODIY SAMARADORLIK
          </div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Moliyaviy foyda va <br/>
            <span className="text-green-500">Bozor tahlili</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Investment Need */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                 <TrendingUp className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold dark:text-white text-slate-900">Investitsiya</h3>
            </div>
            <div className="mb-4">
               <p className="text-sm dark:text-gray-400 text-slate-500 mb-1">Loyiha uchun kerakli summa</p>
               <div className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">
                 174,244,000 <span className="text-sm font-normal text-gray-500">UZS</span>
               </div>
            </div>
            <p className="text-sm dark:text-gray-400 text-slate-600 leading-relaxed">
               Ushbu mablag' ommaviy ishlab chiqarishni yo'lga qo'yish, sertifikatlash va marketing xarajatlari uchun sarflanadi.
            </p>
          </div>

          {/* Card 2: Cost & Price */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border-2 dark:border-green-500/20 border-green-100">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600 dark:text-green-400">
                 <Wallet className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold dark:text-white text-slate-900">Mahsulot narxi</h3>
            </div>
            <div className="mb-6">
               <p className="text-sm dark:text-gray-400 text-slate-500 mb-1">Taxminiy tannarx</p>
               <div className="text-4xl font-bold text-green-500 tracking-tight">
                 400,000 <span className="text-sm font-normal dark:text-gray-400 text-slate-500">UZS</span>
               </div>
               <p className="text-xs text-green-600 mt-2 font-medium bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-lg inline-block">
                  Aholi uchun hamyonbop
               </p>
            </div>
            <div className="flex items-center justify-between text-sm pt-4 border-t dark:border-white/10 border-slate-100">
               <span className="dark:text-gray-400 text-slate-500">Yillik xizmat:</span>
               <span className="font-semibold dark:text-white text-slate-900">Bepul (kafolat davrida)</span>
            </div>
          </div>

          {/* Card 3: Competitor Analysis */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                 <Globe2 className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold dark:text-white text-slate-900">Xalqaro Analoglar</h3>
            </div>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                  <span className="dark:text-gray-300 text-slate-700 font-medium">Nest Protect (Google)</span>
                  <span className="text-red-500 font-bold">~ $119</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-1.5">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
               </div>

               <div className="flex justify-between items-center">
                  <span className="dark:text-gray-300 text-slate-700 font-medium">Kidde Alarm</span>
                  <span className="text-orange-500 font-bold">~ $50</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-1.5">
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
               </div>

               <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold">IsGaz Guard</span>
                  <span className="text-green-500 font-bold">~ $32</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
               </div>
            </div>
            
            <p className="text-xs dark:text-gray-500 text-slate-400 mt-6 italic">
              * Narxlar taxminiy va bozor holatiga qarab o'zgarishi mumkin.
            </p>
          </div>

        </div>

        {/* Impact Bar */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
           <div className="p-6 rounded-2xl dark:bg-white/5 bg-slate-100">
              <h4 className="text-3xl font-bold dark:text-white text-slate-900 mb-2">90%</h4>
              <p className="text-sm dark:text-gray-400 text-slate-600">Zaharlanish xavfining kamayishi</p>
           </div>
           <div className="p-6 rounded-2xl dark:bg-white/5 bg-slate-100">
              <h4 className="text-3xl font-bold dark:text-white text-slate-900 mb-2">3+</h4>
              <p className="text-sm dark:text-gray-400 text-slate-600">Yangi ish o'rinlari (startap bosqichida)</p>
           </div>
           <div className="p-6 rounded-2xl dark:bg-white/5 bg-slate-100">
              <h4 className="text-3xl font-bold dark:text-white text-slate-900 mb-2">5 yil</h4>
              <p className="text-sm dark:text-gray-400 text-slate-600">Sensorning o'rtacha xizmat muddati</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;