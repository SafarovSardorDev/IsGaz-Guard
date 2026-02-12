import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-white" />
              <span className="font-bold text-2xl text-white tracking-tight">IsGaz Guard</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              O'zbekiston aholisi uchun xavfsiz va ishonchli kelajak yaratish yo'lida. 
              Sun'iy intellekt va zamonaviy muhandislik yechimi.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@isgazguard.uz" className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full font-semibold transition-colors">
                Biz bilan bog'laning
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Menyu</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bosh sahifa</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">Muammo va Yechim</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Texnologiya</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Jamoa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Kontaktlar</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-500 mt-0.5" />
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-500 mt-0.5" />
                <span>info@isgazguard.uz</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 mt-0.5" />
                <span>Toshkent sh., O'zbekiston</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} IsGaz Guard. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
             <a href="#" className="hover:text-white">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;