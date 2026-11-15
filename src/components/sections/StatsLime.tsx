import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal, SplitText } from "../../lib/motion";

const stats = [
  { n: 10, suffix: "+", l: "Years in business" },
  { n: 240, l: "Projects shipped" },
  { n: 48, l: "Countries served" },
  { n: 19, l: "Industry awards" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(start + (end - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function StatsLime() {
  return (
    <section className="py-16 sm:py-24 bg-[#d4ff3d] text-[#0b0b0f] relative overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/30 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <Reveal>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-10 sm:mb-14 max-w-4xl leading-tight">
            <SplitText text="Ten years of independent work, hundreds of shipped projects, one relentless standard." />
          </h3>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="border-t border-black/20 pt-6">
                <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
                  <Counter end={s.n} suffix={s.suffix} />
                </div>
                <div className="text-sm uppercase tracking-widest mt-3 text-black/70">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
