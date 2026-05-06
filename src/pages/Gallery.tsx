import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?q=80&w=1000",
      title: "Signature Red",
      cat: "Manicure"
    },
    {
      url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000",
      title: "Pastel Dream",
      cat: "Nail Art"
    },
    {
      url: "https://images.unsplash.com/photo-1519415510236-85592ac59c96?q=80&w=1000",
      title: "Pedicure Bliss",
      cat: "Relaxation"
    },
    {
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1000",
      title: "Lash Volume",
      cat: "Eyelashes"
    },
    {
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000",
      title: "Permanent Glow",
      cat: "Makeup"
    },
    {
      url: "https://images.unsplash.com/photo-1560750585-334921edca10?q=80&w=1000",
      title: "Minimalist Chic",
      cat: "Gel Overlay"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619661-d60f5800f130?q=80&w=1000",
      title: "Smooth Silky Finish",
      cat: "Waxing"
    },
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000",
      title: "Sanctuary Interior",
      cat: "The Parlour"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl mb-6"
        >
          Visual <span className="italic font-light text-brand-pink">Inspiration</span>
        </motion.h1>
        <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-bold">
          A collection of our recent work and the beauty within our sanctuary.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-rose-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-6 backdrop-blur-[2px]">
                <div className="glass-panel p-6 rounded-xl border-white/60">
                  <span className="text-rose-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-4 block mb-2">{img.cat}</span>
                  <h3 className="text-zinc-900 font-serif text-2xl italic">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-zinc-100 pt-16">
          <h2 className="text-3xl mb-4 italic">Join the Luxury Experience</h2>
          <p className="text-zinc-500 mb-8">Follow us on Instagram for daily updates and behind-the-scenes glimpses.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-widest text-xs hover:text-brand-pink transition-colors"
          >
            Follow @btparlour <div className="w-1.5 h-1.5 bg-brand-pink rounded-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
