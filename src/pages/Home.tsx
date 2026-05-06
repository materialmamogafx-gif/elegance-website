import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?q=80&w=2000"
            alt="Luxury Nails"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 bg-rose-100/80 backdrop-blur-md text-rose-700 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full"
            >
              Premier Beauty in Bloemfontein
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl text-white mb-8 leading-[1.1]"
            >
              Elegance <br /><span className="italic font-light text-rose-300">Redefined.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg max-w-md mb-10 leading-relaxed font-light"
            >
              Experience luxury beauty services in the heart of Fauna. From bespoke nail art to professional waxing, we celebrate your unique radiance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Link
                to="/services"
                className="bg-white text-zinc-900 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-rose-50 transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                Our Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-zinc-400 text-xs uppercase tracking-widest mb-4 block">A Legacy of Beauty</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Where Luxury Meets <br /> <span className="italic text-brand-pink">Impeccable Service</span>
            </h2>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              At B&T Nail Parlour, we believe beauty is more than just skin deep. It's a feeling of confidence, relaxation, and self-care. Since our founding, we've provided Bloemfontein with a sanctuary where premium products and expert techniques come together to create a transformative experience.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <Sparkles className="text-brand-pink" size={24} />
                <h4 className="font-bold text-sm uppercase italic">Premium Products</h4>
                <p className="text-xs text-zinc-500">Only the highest quality gels, waxes, and pigments.</p>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-brand-pink" size={24} />
                <h4 className="font-bold text-sm uppercase italic">Hygienic Standards</h4>
                <p className="text-xs text-zinc-500">Your safety is our top priority, always.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200"
                alt="Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden lg:block w-64 h-64 bg-brand-pink/10 -z-10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-zinc-50 py-24 px-4 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 {...fadeInUp} className="text-4xl mb-4">Our Commitment to You</motion.h2>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="w-20 h-1 bg-brand-pink mx-auto mb-8"></motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Expertise",
              desc: "Years of training in the latest Korean and European nail trends.",
              icon: Sparkles
            },
            {
              title: "Serenity",
              desc: "A calm, neutral atmosphere designed to de-stress your mind.",
              icon: Heart
            },
            {
              title: "Quality",
              desc: "Cruelty-free, vegan pigments and medical-grade sterilization.",
              icon: ShieldCheck
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-10 text-center group h-full hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-100 transition-colors">
                <feature.icon className="text-zinc-900 group-hover:text-rose-500 transition-colors" size={28} />
              </div>
              <h3 className="text-xl mb-4 italic uppercase tracking-wider">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 overflow-hidden">
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto bg-zinc-900 rounded-sm p-12 md:p-24 relative"
        >
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden lg:block">
            <Sparkles size={400} className="text-white -rotate-12 translate-x-20 -translate-y-20" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white text-4xl md:text-6xl mb-8 leading-tight">
              Ready for a <br className="hidden md:block" />
              <span className="text-brand-pink font-light italic">Transformation?</span>
            </h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Book your session today and discover why B&T is the most trusted parlour in Bloemfontein.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-zinc-900 px-12 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-pink transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
