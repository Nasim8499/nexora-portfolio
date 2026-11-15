import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";

const steps = [
  {
    n: "01",
    title: "Discovery",
    week: "Week 1–2",
    body: "We dig into your business, users and market. Interviews, audits and a strategy sprint that aligns the whole team.",
    points: ["Stakeholder interviews", "Competitive audit", "Content inventory"],
  },
  {
    n: "02",
    title: "Strategy",
    week: "Week 2–3",
    body: "A clear positioning, messaging framework and creative brief. Everything downstream flows from this document.",
    points: ["Positioning platform", "Messaging matrix", "Creative brief"],
  },
  {
    n: "03",
    title: "Design",
    week: "Week 3–8",
    body: "Concepts, systems and prototypes — refined in weekly reviews with your team. No surprises at the end.",
    points: ["Concept routes", "Design system", "Interactive prototype"],
  },
  {
    n: "04",
    title: "Build & Launch",
    week: "Week 8–12",
    body: "Engineering, QA, content and go-to-market support. We stay hands-on through launch and the first 90 days.",
    points: ["Production build", "QA & accessibility", "90-day support"],
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 lg:py-32 relative bg-[#f4f1ea] border-t border-black/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px bg-black/60" />
                How we work
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <SplitText text="A proven" />
              <span className="font-serif italic"> process</span>
              <SplitText text=", refined over a decade." delay={0.25} />
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-black/10">
              <div>
                <div className="text-3xl font-black">12</div>
                <div className="text-[10px] uppercase tracking-widest text-black/45">Weeks avg.</div>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div>
                <div className="text-3xl font-black">4</div>
                <div className="text-[10px] uppercase tracking-widest text-black/45">Phases</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Progress rail — desktop */}
          <div className="hidden lg:block absolute top-[38px] left-0 right-0 h-[3px] bg-black/10 rounded-full overflow-hidden">
            <motion.div style={{ width: lineH }} className="h-full bg-[#0b0b0f]" />
          </div>
          {/* Progress rail — mobile vertical */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[19px] w-[3px] bg-black/10 rounded-full overflow-hidden">
            <motion.div style={{ height: lineH }} className="w-full bg-[#0b0b0f]" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 lg:pl-0"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.12 + 0.2 }}
                  className="absolute left-0 top-0 lg:relative lg:mb-8 w-10 h-10 rounded-full bg-[#0b0b0f] text-[#d4ff3d] flex items-center justify-center font-mono text-xs z-10 ring-4 ring-[#f4f1ea]"
                >
                  {s.n}
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl p-6 lg:p-7 border border-black/10 hover:border-[#0b0b0f] hover:shadow-[6px_6px_0_#0b0b0f] transition-all h-full"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">{s.week}</div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 group-hover:text-black transition-colors">{s.title}</h3>
                  <p className="text-black/60 leading-relaxed text-sm mb-5">{s.body}</p>
                  <ul className="space-y-2 pt-4 border-t border-black/10">
                    {s.points.map((pt, k) => (
                      <motion.li
                        key={pt}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.3 + k * 0.07 }}
                        className="flex items-center gap-2.5 text-xs text-black/70"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#d4ff3d] flex items-center justify-center flex-shrink-0">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="4">
                            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
