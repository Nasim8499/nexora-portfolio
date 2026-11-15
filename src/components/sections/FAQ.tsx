import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most engagements run 6–10 weeks from kickoff to launch. Bigger platform builds can extend to 3–4 months, and sprints wrap in 2 weeks flat." },
  { q: "What does a project cost?", a: "Sprints start at $12k. Full brand or website projects usually land between $48k and $120k depending on scope. Retainers start at $18k/month." },
  { q: "Do you work with early-stage startups?", a: "Absolutely — many of our best partners were pre-seed when we met them. We reserve a discounted slot each quarter for exceptional founding teams." },
  { q: "Can you take over an existing project?", a: "Yes. We start with a 1-week audit to understand the codebase, brand and roadmap, then propose the fastest path to unblocking your team." },
  { q: "Who owns the work you produce?", a: "You do — completely. On sign-off we hand over every file, all source code, and full IP transfer. Nothing is held hostage." },
  { q: "Do you offer ongoing support?", a: "Yes — 30 days of free bug support is included, and most clients continue on a monthly care plan for hosting, tweaks and small features." },
  { q: "Where are you based?", a: "We're a distributed team across New York, London, Lisbon and Tokyo. Our leadership meets in person quarterly, and we come to you for kickoffs when needed." },
  { q: "How do we start working together?", a: "Book a 30-minute intro call from the contact page. If it's a fit, we send a proposal within a week and can typically start within 2–4 weeks." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                Questions
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-6">
              <SplitText text="Frequently" />
              <br />
              <span className="font-serif italic">asked.</span>
            </h2>
            <Reveal delay={0.4}>
              <p className="text-black/60 leading-relaxed">
                Can't find your question? Drop us a line — we usually reply within a day.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:col-start-6">
            <div className="border-t border-black/10">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex items-center justify-between text-left py-6 gap-6 group"
                    >
                      <span className="text-lg md:text-2xl font-semibold group-hover:text-black/70 transition-colors">{f.q}</span>
                      <motion.span
                        animate={{ rotate: open === i ? 45 : 0 }}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f4f1ea] flex items-center justify-center"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-black/60 pb-6 pr-16 leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
