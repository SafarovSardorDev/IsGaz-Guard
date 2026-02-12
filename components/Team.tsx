import React from 'react';
import { Github, Linkedin, Users, Star, Award, Lightbulb } from 'lucide-react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    name: "To‘xtaboyeva Gulbahor",
    role: "Project Manager",
    tasks: "Loyiha boshqaruvi, strategiya",
    skills: "Management, Analysis",
    image: "/gulbahor.jpg"
  },
  {
    name: "Haydarbek",
    role: "Hardware Engineer",
    tasks: "Qurilma sxemasi, sensorlar",
    skills: "Embedded Systems, IoT"
  },
  {
    name: "Safarov Sardor",
    role: "Software Engineer",
    tasks: "Dasturiy ta’minot, backend",
    skills: "Python, C++, Server",
    image: "https://ibb.co/tSKB7JG"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor - Removed blue blob */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-500/5 dark:bg-white/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Jamoa & Nega Biz?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Xavfsizlik ekspertlari
          </h2>
        </div>

        {/* TEAM CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {members.map((member, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 hover:bg-white dark:hover:bg-white/5 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-white/5 group flex flex-col items-center">
              
              {/* Image or Initials Avatar */}
              {member.image ? (
                <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white dark:border-white/10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">${member.name.charAt(0)}</div>`;
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-transparent transition-colors"></div>
                </div>
              ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-center mb-6 text-sm">{member.role}</p>
              
              <div className="space-y-4 mb-8 border-t border-slate-100 dark:border-white/10 pt-6 w-full">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 text-center">Vazifalari</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 text-center">{member.tasks}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-auto">
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WHY US SECTION - Neutral Dark Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-slate-900 dark:to-slate-950 dark:border dark:border-white/10 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           
           <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Nega aynan IsGaz Guard?</h3>
           
           <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-yellow-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Mahalliy Ishlab Chiqarish</h4>
                 <p className="text-blue-100 dark:text-gray-400 text-sm">O'zbekiston sharoitiga moslashtirilgan, arzon va sifatli xizmat ko'rsatish tizimi.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Award className="w-6 h-6 text-orange-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Ijtimoiy Mas'uliyat</h4>
                 <p className="text-blue-100 dark:text-gray-400 text-sm">Bizning maqsad faqat daromad emas, balki insonlar hayotini saqlab qolish.</p>
              </div>

              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Lightbulb className="w-6 h-6 text-green-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Innovatsion Yondashuv</h4>
                 <p className="text-blue-100 dark:text-gray-400 text-sm">IoT va sun'iy intellekt texnologiyalarini qo'llash orqali aniqlik darajasini oshirish.</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Team;