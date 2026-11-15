import { Reveal, SplitText, motion } from "../../lib/motion";

const values = [
  { n: "01", t: "Curious", body: "We ask the annoying questions early so we don't waste your quarter." },
  { n: "02", t: "Honest", body: "We tell you what we'd tell a friend, even when it costs us the pitch." },
  { n: "03", t: "Craft", body: "Details matter. The right kerning, the perfect ease, the last 5%." },
  { n: "04", t: "Together", body: "You're in every review. This is your work, not ours to hand you." },
];

export default function Approach() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
              <span className="w-8 h-px bg-black/60" />
              Our approach
              <span className="w-8 h-px bg-black/60" />
            </div>
          </Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            <SplitText text="Four values that guide" />
            <br />
            <span className="font-serif italic">every decision.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-black/10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative bg-[#f4f1ea] rounded-3xl p-8 lg:p-10 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0b0b0f] text-[#d4ff3d] flex items-center justify-center font-mono text-sm mb-6 relative z-10">
                    {v.n}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{v.t}</h3>
                  <p className="text-black/60 leading-relaxed">{v.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
