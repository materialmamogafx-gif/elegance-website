import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Reserve Your <span className="italic font-light text-brand-pink">Sanctuary</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-widest text-xs font-semibold">
            Ready to experience something special? Book your session below.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Booking System */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 glass-card p-2 md:p-6"
          >
            <div className="mb-6 flex justify-between items-center px-4">
              <h3 className="font-serif text-2xl italic pt-2">Select Your Slot</h3>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-rose-400 py-1 px-3 bg-white/50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                Real-time Availability
              </div>
            </div>
            {/* Calendly Integration Placeholder */}
            <div className="w-full min-h-[600px] bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl flex items-center justify-center relative overflow-hidden">
               <iframe
                src="https://calendly.com/YOUR-LINK"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0"
                title="Scheduling"
              ></iframe>
            </div>
          </motion.div>

          {/* Details & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="glass-card p-10">
              <h3 className="text-lg uppercase tracking-[0.2em] font-bold mb-10 border-b border-white/40 pb-4 text-zinc-900">Contact Info</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={18} className="text-rose-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase mb-1 tracking-widest text-zinc-400">Our Location</h5>
                    <p className="text-sm text-zinc-800 leading-relaxed font-medium">5 Koedoe Rd, Fauna, Bloemfontein</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={18} className="text-rose-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase mb-1 tracking-widest text-zinc-400">Call Us</h5>
                    <p className="text-sm text-zinc-800 leading-relaxed font-medium">+27 83 797 3312</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-10 glass-card bg-zinc-950 border-zinc-700/50 text-white relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
              <Clock size={20} className="text-rose-400 mb-6" />
              <h4 className="text-2xl font-serif italic mb-8">Hours of Sanctuary</h4>
              <ul className="space-y-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
                <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span>Mon - Fri</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span>Saturday</span>
                  <span className="text-white font-medium">09:00 - 16:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-rose-400 italic">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Sparkles({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3L4 3.5" />
      <path d="M5 21L4 20.5" />
      <path d="M19 3L20 3.5" />
      <path d="M19 21L20 20.5" />
    </svg>
  );
}
