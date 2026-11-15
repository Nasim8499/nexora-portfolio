import { useState } from "react";
import { Reveal, SplitText, motion } from "../../lib/motion";

const quotes = [
  { quote: "Nexora rebuilt our brand from the ground up and delivered a system our whole team can actually use. Sales cycles shortened noticeably within the first quarter.", name: "Elena Marchetti", role: "CMO, Halden Studio" },
  { quote: "The most senior team we've ever worked with. They pushed back where it mattered and delivered work that made our board pay attention.", name: "David Chen", role: "Founder, Kova Financial" },
  { quote: "From strategy to launch, everything felt considered. Our new site converts three times better and finally reflects the company we've become.", name: "Sofia Reyes", role: "Head of Growth, Nomad OS" },
  { quote: "A real partner, not a vendor. They stayed with us through launch and were still shipping fixes at midnight the day we went live.", name: "Marcus Bello", role: "Product, Vela" },
];

import { AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="py-20 lg:py-32 bg-[#f4f1ea]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
              <span className="w-8 h-px bg-black/60" />
              Kind words
            </div>
          </Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            <SplitText text="What our" />
            <span className="font-serif italic"> clients </span>
            <SplitText text="say." delay={0.3} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 border border-black/5"
              >
                <svg width="48" height="36" viewBox="0 0 40 30" className="text-[#0b0b0f] mb-6 sm:mb-10">
                  <path fill="currentColor" d="M0 30V17c0-5 1-8 3-11S8 1 12 0l2 4c-2 1-4 2-5 4s-2 3-2 5h6v17H0zm22 0V17c0-5 1-8 3-11s5-5 9-6l2 4c-2 1-4 2-5 4s-2 3-2 5h6v17H22z" />
                </svg>
                <p className="text-xl sm:text-2xl md:text-4xl leading-snug font-medium mb-8 sm:mb-10">"{q.quote}"</p>
                <div className="border-t border-black/10 pt-6 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg">{q.name}</div>
                    <div className="text-sm text-black/50 mt-1">{q.role}</div>
                  </div>
                  <div className="text-sm font-mono text-black/40">{String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {quotes.map((qq, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  idx === i
                    ? "bg-[#0b0b0f] text-white border-[#0b0b0f]"
                    : "bg-white border-black/10 hover:border-black/40"
                }`}
              >
                <div className="text-sm font-semibold">{qq.name}</div>
                <div className={`text-xs mt-1 ${idx === i ? "text-white/60" : "text-black/50"}`}>{qq.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
