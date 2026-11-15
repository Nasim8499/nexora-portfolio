import { Reveal, SplitText, motion } from "../../lib/motion";

export default function Showreel() {
  return (
    <section className="py-20 lg:py-32 bg-[#0b0b0f] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4ff3d] mb-6">
                <span className="w-8 h-px bg-[#d4ff3d]" />
                2026 Showreel
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
              <SplitText text="Two minutes" />
              <br />
              <span className="font-serif italic text-[#d4ff3d]">of our year.</span>
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex flex-col items-end">
                <div className="text-xs uppercase tracking-widest text-white/40">Runtime</div>
                <div className="text-white font-mono">02:14</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col items-end">
                <div className="text-xs uppercase tracking-widest text-white/40">Format</div>
                <div className="text-white font-mono">4K · 60fps</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <motion.div whileHover="hover" className="relative rounded-3xl overflow-hidden aspect-[16/9] cursor-pointer group">
            <img
              src="/images/abstract-shape.jpg"
              alt="Showreel"
              className="absolute inset-0 w-full h-full object-cover"
            loading="lazy" decoding="async" />
            <motion.div
              className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                variants={{ hover: { scale: 1.15 } }}
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-[#d4ff3d] flex items-center justify-center"
              >
                <div className="w-0 h-0 border-l-[18px] sm:border-l-[24px] md:border-l-[30px] border-l-[#0b0b0f] border-y-[12px] sm:border-y-[16px] md:border-y-[20px] border-y-transparent ml-2" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="showreel-circ" d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                    </defs>
                    <text fill="#0b0b0f" fontSize="8" letterSpacing="2" fontWeight="800">
                      <textPath href="#showreel-circ">WATCH REEL • 2026 • WATCH REEL • 2026 • </textPath>
                    </text>
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Timeline bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white text-xs">
              <span className="font-mono">00:00</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "32%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-[#d4ff3d]"
                />
              </div>
              <span className="font-mono">02:14</span>
            </div>

            {/* Corner tags */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full">Brand Film</span>
              <span className="text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full">2026 Reel</span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest bg-red-600 text-white px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live
              </span>
            </div>
          </motion.div>
        </Reveal>

        {/* Under video stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "24", l: "Projects featured" },
            { n: "8", l: "Cities visited" },
            { n: "142k", l: "Views on Vimeo" },
            { n: "6", l: "Award nominations" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="border-t border-white/10 pt-4">
                <div className="text-3xl sm:text-4xl font-black text-[#d4ff3d]">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
