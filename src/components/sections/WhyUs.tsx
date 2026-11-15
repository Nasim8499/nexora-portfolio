import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";

const reasons = [
  { k: "senior", icon: "◐", title: "Senior team only", body: "Every project is led by a partner. No handoffs, no drift, no juniors learning on your budget.", stat: "12 yrs", statLabel: "Avg experience" },
  { k: "time", icon: "◇", title: "Fixed timelines", body: "We commit to dates and hit them. Weekly check-ins, transparent scopes, zero mystery.", stat: "94%", statLabel: "On-time delivery" },
  { k: "price", icon: "◈", title: "Fair pricing", body: "Flat project fees so you know exactly what you're getting from the first conversation.", stat: "0", statLabel: "Surprise invoices" },
  { k: "own", icon: "◉", title: "You own everything", body: "Full IP transfer, source files, editable systems — nothing held hostage, ever.", stat: "100%", statLabel: "IP transferred" },
  { k: "support", icon: "◍", title: "Post-launch support", body: "30-day free bug window plus optional care plans to keep everything fresh and fast.", stat: "30d", statLabel: "Free support" },
  { k: "global", icon: "◎", title: "Global perspective", body: "Distributed across 4 cities means we design for real-world, multi-market audiences.", stat: "48", statLabel: "Countries served" },
];

export default function WhyUs() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#d4ff3d]/20 blur-3xl pointer-events-none"
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px bg-black/60" />
                Why nexora
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
              <SplitText text="Six reasons ambitious teams" />
              <span className="font-serif italic"> pick us.</span>
            </h2>
          </div>
          <Reveal delay={0.3} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-base sm:text-lg text-black/60 leading-relaxed">
              We're not the cheapest agency in your inbox. We're the one that pays for itself in
              fewer meetings, faster launches, and work you can actually be proud of.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((r, i) => {
            const isOn = hover === r.k;
            return (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHover(r.k)}
                onMouseLeave={() => setHover(null)}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden p-7 rounded-3xl border transition-colors duration-500 cursor-default ${
                  isOn ? "bg-[#0b0b0f] border-[#0b0b0f] text-white" : "bg-[#f4f1ea] border-black/10 text-black"
                }`}
              >
                {/* sweeping fill */}
                <motion.div
                  initial={false}
                  animate={{ scale: isOn ? 3 : 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#0b0b0f] pointer-events-none"
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      animate={{ rotate: isOn ? 180 : 0, scale: isOn ? 1.05 : 1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl transition-colors duration-500 ${
                        isOn ? "bg-[#d4ff3d] text-[#0b0b0f]" : "bg-white text-[#0b0b0f]"
                      }`}
                    >
                      {r.icon}
                    </motion.div>
                    <span className={`font-mono text-[10px] transition-colors ${isOn ? "text-white/30" : "text-black/25"}`}>
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                  <p className={`leading-relaxed text-sm mb-6 transition-colors ${isOn ? "text-white/60" : "text-black/60"}`}>
                    {r.body}
                  </p>

                  {/* revealing stat */}
                  <div className={`flex items-end justify-between pt-4 border-t transition-colors ${isOn ? "border-white/15" : "border-black/10"}`}>
                    <div>
                      <div className={`text-2xl font-black transition-colors ${isOn ? "text-[#d4ff3d]" : "text-[#0b0b0f]"}`}>
                        {r.stat}
                      </div>
                      <div className={`text-[10px] uppercase tracking-widest mt-0.5 transition-colors ${isOn ? "text-white/40" : "text-black/40"}`}>
                        {r.statLabel}
                      </div>
                    </div>
                    <motion.div
                      animate={{ x: isOn ? 0 : -8, opacity: isOn ? 1 : 0 }}
                      className="w-8 h-8 rounded-full bg-[#d4ff3d] flex items-center justify-center"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="3">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
