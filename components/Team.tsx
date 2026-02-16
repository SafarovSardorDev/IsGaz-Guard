import React from 'react';
import { Github, Linkedin, Users, Star, Award, Lightbulb } from 'lucide-react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    name: "To‘xtaboyeva Gulbahor",
    role: "Project Manager",
    tasks: "Loyiha boshqaruvi, strategiya",
    skills: "Management, Analysis"
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
    skills: "Python, C++, Server"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden transition-colors duration-300 dark:bg-[#050505] bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-white text-blue-600 text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Jamoa & Nega Biz?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4">
            Xavfsizlik ekspertlari
          </h2>
        </div>

        {/* TEAM CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {members.map((member, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 dark:hover:bg-white/5 hover:bg-white hover:shadow-xl transition-all duration-300 border dark:border-white/5 border-slate-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 text-center mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium text-center mb-6 text-sm">{member.role}</p>
              
              <div className="space-y-4 mb-8 border-t dark:border-white/10 border-slate-100 pt-6">
                <div>
                  <h4 className="text-xs font-semibold dark:text-gray-500 text-slate-400 uppercase tracking-wider mb-1">Vazifalari</h4>
                  <p className="text-sm dark:text-gray-300 text-slate-600">{member.tasks}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="p-2 dark:text-gray-500 text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 dark:text-gray-500 text-slate-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WHY US SECTION */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           
           <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Nega aynan IsGaz Guard?</h3>
           
           <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-yellow-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Mahalliy Ishlab Chiqarish</h4>
                 <p className="text-blue-100 text-sm">O'zbekiston sharoitiga moslashtirilgan, arzon va sifatli xizmat ko'rsatish tizimi.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Award className="w-6 h-6 text-orange-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Ijtimoiy Mas'uliyat</h4>
                 <p className="text-blue-100 text-sm">Bizning maqsad faqat daromad emas, balki insonlar hayotini saqlab qolish.</p>
              </div>

              <div className="text-center">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Lightbulb className="w-6 h-6 text-green-300" />
                 </div>
                 <h4 className="font-bold text-lg mb-2">Innovatsion Yondashuv</h4>
                 <p className="text-blue-100 text-sm">IoT va sun'iy intellekt texnologiyalarini qo'llash orqali aniqlik darajasini oshirish.</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Team;