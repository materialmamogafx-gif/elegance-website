import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 glass-panel border-t border-white/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
                <span className="text-white font-serif text-sm font-bold">B&T</span>
              </div>
              <span className="text-lg font-serif tracking-widest uppercase font-semibold text-zinc-800">
                Parlour
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-zinc-500 font-light">
              Experience the pinnacle of beauty and relaxation. Our expert technicians are dedicated to enhancing your natural beauty in a serene, luxury environment.
            </p>
            <div className="flex space-x-5">
              <div className="w-9 h-9 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer shadow-sm">
                <Instagram size={18} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer shadow-sm">
                <Facebook size={18} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer shadow-sm">
                <Phone size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-6 tracking-wide italic">Our Menu</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/services" className="hover:text-rose-500 transition-colors">Manicure & Pedicure</Link></li>
              <li><Link to="/services" className="hover:text-rose-500 transition-colors">Brazilian Waxing</Link></li>
              <li><Link to="/services" className="hover:text-rose-500 transition-colors">Eyelash Extensions</Link></li>
              <li><Link to="/services" className="hover:text-rose-500 transition-colors">Permanent Makeup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-6 tracking-wide italic">Location</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-rose-400 shrink-0" />
                <span>5 Koedoe Rd, Fauna, Bloemfontein, South Africa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-rose-400 shrink-0" />
                <span>+27 83 797 3312</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-serif text-lg mb-6 tracking-wide italic">Hours</h4>
            <ul className="space-y-3 text-sm text-zinc-500 uppercase tracking-widest text-[10px]">
              <li className="flex justify-between border-b border-white/40 pb-2">
                <span>Mon - Fri</span>
                <span className="text-zinc-900 font-bold">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/40 pb-2">
                <span>Sat</span>
                <span className="text-zinc-900 font-bold">09:00 - 16:00</span>
              </li>
              <li className="flex justify-between italic">
                <span>Sun</span>
                <span className="text-rose-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/40 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          <p>© 2024 B&T Nail Parlour. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6 font-bold">
            <Link to="#" className="hover:text-rose-500 transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-rose-500 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
