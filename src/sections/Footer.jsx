import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = ({ data }) => {
  if (!data) return null;

  return (
    <footer id="contact" className="bg-nexus-navy text-slate-400 pt-16 pb-8 overflow-hidden relative">
      {/* Decorative Brand Flare - Smaller size */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-nexus-orange/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Grid - Reduced gap from mb-24 to mb-12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: The Brand - Reduced space-y-8 to space-y-4 */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-black italic tracking-tighter">
              Nexus<span className="text-nexus-orange uppercase text-lg not-italic ml-1 tracking-widest">Architecture</span>
            </h3>
            <p className="leading-relaxed text-sm text-slate-400">
              Redefining the horizon through structural engineering and organic landscape design.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, link: data.instagram },
                { Icon: Facebook, link: data.facebook },
                { Icon: Twitter, link: data.twitter },
                { Icon: Youtube, link: data.youtube }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-nexus-peach hover:bg-nexus-orange hover:text-white transition-all"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation - Reduced space-y-5 to space-y-3 */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Studio</h4>
            <ul className="space-y-3 text-xs font-bold">
              {[
                { name: 'Home', hr: '#home' },
                { name: 'Architecture', hr: '#portfolio' },
                { name: 'Design Services', hr: '#services' },
                { name: 'Our Process', hr: '#process' },
                { name: 'Testimonials', hr: '#testimonials' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.hr} className="hover:text-nexus-orange flex items-center gap-2 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise - Reduced space-y-5 to space-y-3 */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Expertise</h4>
            <ul className="space-y-3 text-xs font-medium">
              {['Site Discovery', 'Hardscape Engineering', 'Master Planning', 'Hydraulic Systems'].map((item) => (
                <li key={item} className="flex items-center justify-between group cursor-default hover:text-white transition-colors">
                  <span>{item}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-nexus-red transition-all" />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact - Reduced gaps */}
          <div className="space-y-4">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <MapPin size={16} className="text-nexus-orange shrink-0" />
                <span className="text-slate-300 text-xs">{data.officeAddress}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={16} className="text-nexus-orange shrink-0" />
                <span className="text-slate-300 text-xs font-bold">{data.contactPhone}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-nexus-orange shrink-0" />
                <span className="text-slate-300 text-xs">{data.contactEmail}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Compressed padding */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-black">
          <p className="text-slate-600">
            © 2025 <span className="text-slate-400 italic">Nexus Architecture Studio</span>
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-nexus-orange transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-nexus-orange transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;