import { Link } from "@/lib/nav";
import { Reveal, SplitText, motion } from "../../lib/motion";

const plans = [
  {
    name: "Sprint",
    price: "12k",
    desc: "For focused, time-boxed engagements. Perfect for a landing page, brand refresh or design audit.",
    features: ["2-week engagement", "1 senior designer", "Weekly review calls", "Handoff files & docs"],
    highlight: false,
  },
  {
    name: "Project",
    price: "48k",
    desc: "Our most popular engagement. End-to-end for a full brand identity, website or product launch.",
    features: ["6–10 week timeline", "Dedicated team of 3", "Strategy + design + build", "Launch support (30 days)", "Post-launch retrospective"],
    highlight: true,
  },
  {
    name: "Partnership",
    price: "Custom",
    desc: "Ongoing creative partnership. Act as your embedded design & marketing team month-over-month.",
    features: ["Monthly retainer", "Cross-functional team", "Priority response", "Quarterly strategy days"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-[#f4f1ea]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                Engagements
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-3xl">
              <SplitText text="Simple," />
              <span className="font-serif italic"> transparent </span>
              <SplitText text="pricing." delay={0.3} />
            </h2>
          </div>
          <Reveal delay={0.3}>
            <p className="max-w-sm text-black/60">
              Three ways to work with us. All start with a discovery call — no obligation, just a real conversation.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 lg:p-10 flex flex-col h-full ${
                  p.highlight ? "bg-[#0b0b0f] text-[#f4f1ea] scale-100 lg:scale-105 shadow-2xl" : "bg-white border border-black/10"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  {p.highlight && (
                    <span className="text-xs uppercase tracking-widest bg-[#d4ff3d] text-[#0b0b0f] px-3 py-1 rounded-full font-semibold">Popular</span>
                  )}
                </div>
                <div className="mb-6">
                  {p.price !== "Custom" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-medium">$</span>
                      <span className="text-6xl font-black">{p.price}</span>
                      <span className={`text-sm ${p.highlight ? "text-white/50" : "text-black/50"}`}>USD</span>
                    </div>
                  ) : (
                    <div className="text-6xl font-black">Custom</div>
                  )}
                </div>
                <p className={`${p.highlight ? "text-white/60" : "text-black/60"} mb-8`}>{p.desc}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${p.highlight ? "bg-[#d4ff3d]" : "bg-[#0b0b0f]"}`}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={p.highlight ? "#0b0b0f" : "#d4ff3d"} strokeWidth="3">
                          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold transition-colors ${
                    p.highlight ? "bg-[#d4ff3d] text-[#0b0b0f] hover:bg-white" : "bg-[#0b0b0f] text-[#f4f1ea] hover:bg-[#d4ff3d] hover:text-[#0b0b0f]"
                  }`}
                >
                  Book a call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
