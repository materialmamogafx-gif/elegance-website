import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: "Hand & Foot Care",
      desc: "Impeccable finishes and soothing treatments for your hands and feet.",
      services: [
        { name: "Classic Manicure", price: "R250", desc: "Shaping, cuticle care, and high-shine polish." },
        { name: "Gel Overlay", price: "R380", desc: "Chip-resistant durability with a signature glow." },
        { name: "Luxury Pedicure", price: "R450", desc: "Exfoliation, massage, and deep hydration." },
        { name: "Nail Extensions", price: "R550", desc: "Elegant length with strength and style." }
      ],
      image: "https://images.unsplash.com/photo-1519415510236-85592ac59c96?q=80&w=1000"
    },
    {
      title: "Precision Beauty",
      desc: "Frame your face with our expert lash and brow treatments.",
      services: [
        { name: "Eyelash Extensions", price: "R650", desc: "Classic or Volume sets for a captivating gaze." },
        { name: "Eyebrow Shaping", price: "R120", desc: "Precision threading or waxing to frame your face." },
        { name: "Permanent Makeup", price: "R1200+", desc: "Wake up with perfect brows and eyeliner." },
        { name: "Lash Lift & Tint", price: "R400", desc: "Natural enhancement that lasts weeks." }
      ],
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1000"
    },
    {
      title: "Smooth Silky Skin",
      desc: "Gentle yet effective hair removal for ultimate confidence.",
      services: [
        { name: "Brazilian Wax", price: "R350", desc: "Expert care using premium hypoallergenic hard wax." },
        { name: "Full Leg Wax", price: "R420", desc: "Silky smooth results that stay for weeks." },
        { name: "Underarm Wax", price: "R150", desc: "Quick, clean, and minimally invasive." },
        { name: "Facial Waxing", price: "R180", desc: "Gentle removal for upper lip, chin, or cheeks." }
      ],
      image: "https://images.unsplash.com/photo-1570172619661-d60f5800f130?q=80&w=1000"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Curated <span className="italic font-light text-brand-pink">Treatments</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-widest text-xs font-semibold">
            Premium ingredients. Professional results. Pure relaxation.
          </p>
        </header>

        <div className="space-y-32">
          {categories.map((cat, index) => (
            <section key={index} className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 aspect-square md:aspect-video overflow-hidden rounded-2xl shadow-2xl relative"
              >
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 glass-card p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-5xl mb-6 italic">{cat.title}</h2>
                <p className="text-zinc-500 mb-10 text-sm lg:text-base leading-relaxed">{cat.desc}</p>
                <div className="grid grid-cols-1 gap-6">
                  {cat.services.map((service, si) => (
                    <motion.div
                      key={si}
                      whileHover={{ x: 10 }}
                      className="group flex justify-between items-start border-b border-white/40 pb-4"
                    >
                      <div>
                        <h4 className="font-bold text-zinc-900 group-hover:text-rose-500 transition-colors uppercase tracking-wider text-sm">{service.name}</h4>
                        <p className="text-xs text-zinc-400 mt-1 italic">{service.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-lg text-zinc-900 group-hover:text-rose-600 transition-colors">{service.price}</span>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400">Starting</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 glass-card text-center"
        >
          <div className="flex justify-center gap-12 mb-12 flex-wrap">
            {["Premium Products", "Sterilized Tools", "Expert Specialists", "Luxury Setting"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-500 tracking-[0.2em]">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                  <Check size={14} className="text-rose-500" />
                </div>
                {tag}
              </div>
            ))}
          </div>
          <h3 className="text-3xl mb-6">Not sure which treatment is right for you?</h3>
          <p className="text-zinc-500 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">Contact us for a free consultation. Our specialists will help you choose the best services for your beauty goals.</p>
          <button className="bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl">
            Ask a Specialist
          </button>
        </motion.div>
      </div>
    </div>
  );
}
