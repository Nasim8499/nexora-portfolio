import { Link } from "@/lib/nav";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SplitText } from "../../lib/motion";
import { projects } from "../../data/site";

function WorkCard({ p, i, wide }: { p: (typeof projects)[number]; i: number; wide?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [m, setM] = useState({ x: 0, y: 0, active: false });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setM({ x: e.clientX - r.left, y: e.clientY - r.top, active: true });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={wide ? "md:col-span-2" : ""}
    >
      <Link
        ref={ref}
        to={`/portfolio/${p.slug}`}
        onMouseMove={onMove}
        onMouseLeave={() => setM((s) => ({ ...s, active: false }))}
        className={`group relative block overflow-hidden rounded-[28px] ${wide ? "aspect-[16/10] md:aspect-[16/8]" : "aspect-[4/3]"}`}
      >
        <motion.img
          style={{ y: imgY }}
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
        loading="lazy" decoding="async" />
        <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-black/35 to-black/85`} />

        {/* Cursor spotlight */}
        <motion.div
          animate={{ opacity: m.active ? 1 : 0 }}
          className="absolute w-64 h-64 rounded-full pointer-events-none blur-3xl hidden lg:block"
          style={{
            left: m.x - 128,
            top: m.y - 128,
            background: p.accent,
            opacity: 0.25,
          }}
        />

        {/* Top row */}
        <div className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-start justify-between">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full"
          >
            {p.category}
          </motion.span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{p.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-mono">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              {/* discipline pills — slide up on hover */}
              <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                {p.discipline.map((d) => (
                  <span key={d} className="text-[10px] uppercase tracking-wider text-black font-bold px-2.5 py-1 rounded-full" style={{ background: p.accent }}>
                    {d}
                  </span>
                ))}
              </div>
              <h3 className={`font-black text-white leading-[0.95] ${wide ? "text-4xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-4xl"}`}>
                {p.title}
              </h3>
              <p className="text-white/60 text-sm mt-2 max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {p.excerpt}
              </p>
            </div>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              style={{ background: p.accent }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Progress line */}
          <div className="mt-5 h-px w-full bg-white/15 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-full w-full"
              style={{ background: p.accent }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const items = projects.slice(0, 5);
  return (
    <section className="py-20 lg:py-32 bg-[#0b0b0f] text-[#f4f1ea] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-1/4 -left-40 w-[420px] h-[420px] rounded-full bg-[#d4ff3d]/10 blur-3xl pointer-events-none"
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4ff3d] mb-6">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-px bg-[#d4ff3d]"
                />
                Selected work
                <span className="relative flex w-1.5 h-1.5 ml-1">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[#d4ff3d] opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#d4ff3d]" />
                </span>
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <SplitText text="Recent" />
              <span className="font-serif italic text-[#d4ff3d]"> projects </span>
              <SplitText text="we're proud of." delay={0.25} />
            </h2>
          </div>
          <Reveal delay={0.4}>
            <Link
              to="/portfolio"
              className="group inline-flex self-start items-center gap-3 border border-white/20 rounded-full pl-6 pr-2 py-2 text-sm font-semibold hover:bg-[#d4ff3d] hover:text-[#0b0b0f] hover:border-[#d4ff3d] transition-all"
            >
              View all {projects.length} projects
              <span className="w-9 h-9 rounded-full bg-[#d4ff3d] group-hover:bg-[#0b0b0f] text-[#0b0b0f] group-hover:text-[#d4ff3d] flex items-center justify-center transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {items.map((p, i) => (
            <WorkCard key={p.slug} p={p} i={i} wide={i === 0 || i === 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
