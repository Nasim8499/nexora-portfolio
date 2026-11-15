import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";

const awards = [
  { year: "2026", name: "Awwwards Site of the Year", cat: "Portfolio", img: "https://images.pexels.com/photos/7078411/pexels-photo-7078411.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" },
  { year: "2025", name: "Communication Arts Design Annual", cat: "Brand", img: "/images/brand-mockup.jpg" },
  { year: "2025", name: "FWA of the Month — May", cat: "Interactive", img: "/images/abstract-shape.jpg" },
  { year: "2025", name: "Type Directors Club Certificate", cat: "Typography", img: "https://images.pexels.com/photos/11741328/pexels-photo-11741328.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" },
  { year: "2024", name: "Awwwards Developer Award", cat: "Web Dev", img: "/images/creative-workspace.jpg" },
  { year: "2024", name: "Brand New Notable Rebrand", cat: "Identity", img: "https://images.pexels.com/photos/8532943/pexels-photo-8532943.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" },
  { year: "2024", name: "CSS Design Awards Best Innovation", cat: "Web", img: "https://images.pexels.com/photos/9845176/pexels-photo-9845176.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" },
  { year: "2023", name: "The One Show Silver Pencil", cat: "Digital Craft", img: "https://images.pexels.com/photos/8148722/pexels-photo-8148722.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" },
];

export default function Awards() {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="py-20 lg:py-32 bg-[#0b0b0f] text-[#f4f1ea] relative overflow-hidden"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#d4ff3d] blur-3xl pointer-events-none"
      />

      {/* Floating preview image following cursor */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className="fixed pointer-events-none z-30 hidden lg:block"
            style={{ left: pos.x + 28, top: pos.y - 130 }}
          >
            <div className="w-52 h-64 rounded-2xl overflow-hidden border-2 border-[#d4ff3d] shadow-2xl rotate-3">
              <img src={awards[active].img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4ff3d] mb-6">
                <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px bg-[#d4ff3d]" />
                Recognition
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <SplitText text="Awards &" />
              <span className="font-serif italic text-[#d4ff3d]"> honors.</span>
            </h2>
          </div>
          <Reveal delay={0.3} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-6">
              We don't chase awards — they're a nice side-effect of doing careful, curious work
              with people we like. Here are a few we're grateful for.
            </p>
            <div className="flex items-center gap-6">
              {[
                { n: "19", l: "Total wins" },
                { n: "8", l: "This year" },
                { n: "6", l: "Jury seats" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-[#d4ff3d]">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative group border-b border-white/10 overflow-hidden"
            >
              {/* sweep fill */}
              <motion.div
                initial={false}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#d4ff3d] origin-bottom"
              />

              <div className="relative grid grid-cols-12 gap-3 py-5 sm:py-7 px-4 -mx-4 items-center transition-colors duration-300">
                <div className={`col-span-3 sm:col-span-2 font-mono text-xs sm:text-sm transition-colors ${active === i ? "text-black/60" : "text-white/40"}`}>
                  {a.year}
                </div>
                <div className={`col-span-7 sm:col-span-7 text-base sm:text-2xl md:text-3xl font-bold transition-all duration-300 ${active === i ? "text-black translate-x-2" : "text-white"}`}>
                  {a.name}
                </div>
                <div className={`col-span-2 sm:col-span-3 flex items-center justify-end gap-3`}>
                  <span className={`hidden sm:inline text-[10px] uppercase tracking-widest transition-colors ${active === i ? "text-black/60" : "text-white/45"}`}>
                    {a.cat}
                  </span>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0, scale: active === i ? 1 : 0.7, opacity: active === i ? 1 : 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${active === i ? "bg-black text-[#d4ff3d]" : "bg-white/10 text-white"}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
