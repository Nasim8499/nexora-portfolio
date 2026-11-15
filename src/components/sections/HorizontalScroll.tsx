import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/site";
import { Link } from "@/lib/nav";

export default function HorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 22, restDelta: 0.001 });
  const x = useTransform(smooth, [0, 1], ["2%", "-78%"]);
  const bar = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const counter = useTransform(smooth, (v) =>
    String(Math.min(projects.length, Math.max(1, Math.ceil(v * projects.length) || 1))).padStart(2, "0")
  );

  return (
    <section ref={ref} className="relative h-[420vh] bg-[#0b0b0f]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#d4ff3d] blur-3xl"
        />

        {/* Header */}
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 w-full mb-8 sm:mb-12 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4ff3d] mb-4">
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>→</motion.span>
                Scroll to explore
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.9]">
                Recent{" "}
                <span className="font-serif italic text-[#d4ff3d]">chapters.</span>
              </h2>
            </div>

            {/* Counter + progress */}
            <div className="flex items-center gap-5">
              <div className="flex items-baseline gap-1 font-mono">
                <motion.span className="text-4xl sm:text-5xl font-black text-[#d4ff3d]">{counter}</motion.span>
                <span className="text-lg text-white/30">/ {String(projects.length).padStart(2, "0")}</span>
              </div>
              <div className="w-32 sm:w-48 h-[3px] bg-white/15 rounded-full overflow-hidden">
                <motion.div style={{ width: bar }} className="h-full bg-[#d4ff3d]" />
              </div>
            </div>
          </div>
        </div>

        {/* Track */}
        <motion.div style={{ x }} className="flex gap-4 sm:gap-6 pl-5 sm:pl-6 lg:pl-10 relative">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-[78vw] sm:w-[52vw] md:w-[40vw] lg:w-[30vw]"
            >
              <Link
                to={`/portfolio/${p.slug}`}
                className="group relative block aspect-[3/4] rounded-[26px] overflow-hidden bg-[#111117]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                loading="lazy" decoding="async" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-black/30 to-black/90`} />

                {/* accent border on hover */}
                <div
                  className="absolute inset-0 rounded-[26px] border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: p.accent }}
                />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/10 backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                      {p.year}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.discipline.map((d) => (
                        <span
                          key={d}
                          className="text-[9px] uppercase tracking-wider font-bold text-black px-2 py-0.5 rounded-full"
                          style={{ background: p.accent }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black leading-none mb-2">{p.title}</div>
                    <p className="text-white/60 text-xs sm:text-sm line-clamp-2 mb-4">{p.excerpt}</p>

                    {/* mini result strip */}
                    <div className="flex items-center gap-4 pt-3 border-t border-white/15">
                      {p.results.slice(0, 2).map((r) => (
                        <div key={r.l}>
                          <div className="text-base font-black" style={{ color: p.accent }}>{r.n}</div>
                          <div className="text-[9px] uppercase tracking-wider text-white/40">{r.l}</div>
                        </div>
                      ))}
                      <div className="ml-auto w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#d4ff3d] group-hover:text-black flex items-center justify-center transition-colors">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                          <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* End card */}
          <div className="flex-shrink-0 w-[78vw] sm:w-[40vw] flex items-center justify-center">
            <Link to="/portfolio" className="group flex flex-col items-center gap-5 text-white">
              <motion.div
                whileHover={{ scale: 1.12, rotate: 45 }}
                className="w-28 h-28 rounded-full bg-[#d4ff3d] text-[#0b0b0f] flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <div className="text-center">
                <div className="text-2xl font-black">View full archive</div>
                <div className="text-white/40 text-sm mt-1">{projects.length} case studies</div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
