import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'frosted-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${scrolled ? 'bg-black' : 'bg-white/20 backdrop-blur-md'}`}>
              <span className={`font-serif text-xl font-bold ${scrolled ? 'text-white' : 'text-white'}`}>B&T</span>
            </div>
            <span className={`text-xl font-serif tracking-widest uppercase font-semibold transition-colors ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
              Nail <span className={scrolled ? 'text-rose-500 italic' : 'text-rose-200 italic'}>Parlour</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-rose-400 ${
                  location.pathname === link.href 
                    ? scrolled ? 'text-rose-500 border-b-2 border-rose-500' : 'text-white border-b-2 border-white'
                    : scrolled ? 'text-zinc-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                scrolled 
                  ? 'bg-black text-white hover:bg-zinc-800' 
                  : 'bg-white text-zinc-900 hover:bg-rose-50 shadow-xl'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className={scrolled ? 'text-zinc-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-zinc-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif tracking-wide text-zinc-900 hover:text-brand-pink transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-zinc-100 w-full justify-center">
              <Instagram size={20} className="text-zinc-400" />
              <Facebook size={20} className="text-zinc-400" />
              <Phone size={20} className="text-zinc-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
