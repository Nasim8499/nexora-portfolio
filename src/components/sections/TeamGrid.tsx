import { motion } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";
import { team } from "../../data/site";

export default function TeamGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px bg-black/60" />
                The team
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-3xl">
              <SplitText text="Small crew." />
              <span className="font-serif italic"> Big ideas.</span>
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div className="max-w-sm">
              <p className="text-black/60 mb-4">
                A tight team of designers, strategists and engineers working directly with you — no middle layers.
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/45">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                Hiring 2 roles
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-4 bg-[#f4f1ea]">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                loading="lazy" decoding="async" />

                {/* sliding dark panel with bio */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#0b0b0f]/95 backdrop-blur-sm p-5 text-white">
                  <p className="text-xs text-white/70 leading-relaxed mb-3">{p.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[9px] uppercase tracking-wider font-bold bg-[#d4ff3d] text-black px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* index badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center font-mono text-[10px] font-bold">
                  0{i + 1}
                </div>

                {/* arrow */}
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#d4ff3d] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>

              <h3 className="text-lg font-bold group-hover:translate-x-1 transition-transform">{p.name}</h3>
              <p className="text-black/50 text-sm mt-0.5">{p.role}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                className="h-px bg-black/15 mt-4 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
