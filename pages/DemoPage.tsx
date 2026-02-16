import React from 'react';
import { Play, Activity, AlertOctagon, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
            IsGaz Guard Demo
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tizimning real vaqt rejimida qanday ishlashini videoda ko'ring va prototip imkoniyatlari bilan tanishing.
          </p>
        </div>

        {/* Video Section */}
        <div className="glass-card rounded-3xl overflow-hidden mb-16 border border-white/10 relative group">
          <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors pointer-events-none"></div>
          
          <div className="aspect-w-16 aspect-h-9 w-full bg-[#0a0a0a] relative">
            {/* Placeholder for Video Embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <Play className="w-10 h-10 fill-current ml-2" />
              </div>
              <p className="font-semibold text-xl">Demo Video</p>
              <p className="text-gray-500 text-sm mt-2 font-mono bg-white/5 px-2 py-1 rounded">1-5 daqiqa</p>
            </div>
          </div>
          
          <div className="p-8 md:p-12 border-t border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Video tavsifi</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/5">
                <Activity className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Sensor reaksiyasi</h4>
                  <p className="text-sm text-gray-400 mt-2">Is gazi aniqlanganda sensorlarning tezkor javobi.</p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/5">
                <AlertOctagon className="w-6 h-6 text-red-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Signal va Xabar</h4>
                  <p className="text-sm text-gray-400 mt-2">Sirena va SMS/Telegram xabarnomalar tizimi.</p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Avtomatik bloklash</h4>
                  <p className="text-sm text-gray-400 mt-2">Gaz klapanining avtomatik yopilishi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype Placeholder */}
        <div className="relative rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black z-0"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
               <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ishlayotgan prototip
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Hozirda bizning muhandislarimiz prototipning interaktiv veb-interfeysi ustida ishlamoqda. 
            </p>
            <button disabled className="px-8 py-4 bg-white/5 text-gray-400 rounded-full font-medium cursor-not-allowed border border-white/10 backdrop-blur-sm">
              Havola tez orada qo'shiladi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;