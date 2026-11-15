import { useParams, Link } from "@/lib/nav";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/site";
import { Reveal, SplitText } from "../lib/motion";
import CTA from "../components/sections/CTA";



export default function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug) || projects[0];
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOp = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[560px] overflow-hidden bg-[#0b0b0f]">
        <motion.img
          style={{ scale: heroScale }}
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover"
        loading="lazy" decoding="async" />
        <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-black/50 to-black/85`} />

        <motion.div style={{ y: heroY, opacity: heroOp }} className="relative h-full flex flex-col justify-end pb-14 sm:pb-20">
          <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 w-full text-white">
            <Reveal>
              <div className="flex items-center gap-2 sm:gap-3 text-xs text-white/50 mb-6">
                <Link to="/" className="hover:text-white">Home</Link><span>/</span>
                <Link to="/portfolio" className="hover:text-white">Portfolio</Link><span>/</span>
                <span className="text-white">{p.title}</span>
              </div>
            </Reveal>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.discipline.map((d, i) => (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-black px-3 py-1.5 rounded-full"
                  style={{ background: p.accent }}
                >
                  {d}
                </motion.span>
              ))}
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[9rem] font-black leading-[0.88] tracking-tight mb-6">
              <SplitText text={p.title} />
            </h1>

            <Reveal delay={0.4}>
              <p className="text-lg sm:text-2xl text-white/70 max-w-2xl leading-relaxed">{p.excerpt}</p>
            </Reveal>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 right-6 text-white/40 text-xs uppercase tracking-widest hidden sm:flex items-center gap-2"
        >
          Scroll <span>↓</span>
        </motion.div>
      </section>

      {/* META BAR */}
      <section className="bg-[#0b0b0f] text-white border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
          {[
            { l: "Client", v: p.client },
            { l: "Year", v: p.year },
            { l: "Duration", v: p.duration },
            { l: "Team", v: p.team },
            { l: "Location", v: p.location },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="py-6 px-4 first:pl-0"
            >
              <div className="text-[10px] uppercase tracking-widest text-white/35 mb-1.5">{m.l}</div>
              <div className="text-sm sm:text-base font-semibold">{m.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-20 lg:py-28 bg-[#f4f1ea]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-28">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/50 mb-4">
                  <span className="w-8 h-px bg-black/50" />
                  01 — The Challenge
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black" style={{ background: p.accent, color: "#0b0b0f" }}>?</div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
              <SplitText text="What we were asked to solve." />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-black/70 leading-relaxed">{p.challenge}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY 1 */}
      <section className="pb-20 bg-[#f4f1ea]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-4 sm:gap-5">
          {p.gallery.slice(0, 2).map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="overflow-hidden rounded-3xl"
            >
              <motion.img src={g} alt="" className="w-full aspect-[4/5] object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH — dark */}
      <section className="py-20 lg:py-28 bg-[#0b0b0f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: p.accent }}
        />
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-4" style={{ color: p.accent }}>
                <span className="w-8 h-px" style={{ background: p.accent }} />
                02 — Our Approach
              </div>
            </Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
              <SplitText text="How we got there." />
            </h2>
            <Reveal delay={0.3}>
              <div className="space-y-3 mt-8">
                <div className="text-[10px] uppercase tracking-widest text-white/35 mb-3">Deliverables</div>
                {p.deliverables.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 text-sm text-white/70 py-2 border-b border-white/10"
                  >
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: p.accent }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="4"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {d}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.15}>
              <p className="text-lg sm:text-2xl text-white/75 leading-relaxed mb-10">{p.approach}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="rounded-3xl overflow-hidden mb-8">
                <img src={p.gallery[2]} alt="" className="w-full aspect-video object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/35 mb-3">Stack & tools</div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-4 py-2 rounded-full border border-white/15 font-medium hover:border-white/40 transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 lg:py-28" style={{ background: p.accent }}>
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 text-[#0b0b0f]">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-6">
              <span className="w-8 h-px bg-black" />
              03 — Results
            </div>
          </Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-12 max-w-3xl leading-[0.95]">
            <SplitText text="The numbers, a year later." />
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-14">
            {p.results.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="border-t-2 border-black/20 pt-6"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">{s.n}</div>
                <div className="text-xs uppercase tracking-widest mt-3 text-black/60">{s.l}</div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl text-black/75">{p.outcome}</p>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.svg
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            width="56" height="42" viewBox="0 0 40 30" className="mx-auto mb-8"
            style={{ color: p.accent }}
          >
            <path fill="currentColor" d="M0 30V17c0-5 1-8 3-11S8 1 12 0l2 4c-2 1-4 2-5 4s-2 3-2 5h6v17H0zm22 0V17c0-5 1-8 3-11s5-5 9-6l2 4c-2 1-4 2-5 4s-2 3-2 5h6v17H22z" />
          </motion.svg>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-10">
            <SplitText text={`"${p.quote.text}"`} stagger={0.03} />
          </blockquote>
          <Reveal delay={0.3}>
            <div className="font-bold text-lg">{p.quote.name}</div>
            <div className="text-black/50 text-sm mt-1">{p.quote.role}</div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY 2 */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl overflow-hidden">
              <img src={p.gallery[3]} alt="" className="w-full aspect-[21/9] object-cover" loading="lazy" decoding="async" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="bg-[#0b0b0f] text-white">
        <div className="grid md:grid-cols-2">
          {[{ p: prev, dir: "Previous" }, { p: next, dir: "Next" }].map(({ p: np, dir }) => (
            <Link key={dir} to={`/portfolio/${np.slug}`} className="group relative block h-[280px] sm:h-[360px] overflow-hidden">
              <img src={np.img} alt={np.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[900ms]" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-black/50" />
              <div className={`relative h-full flex flex-col justify-center p-8 sm:p-12 ${dir === "Next" ? "items-end text-right" : ""}`}>
                <div className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: np.accent }}>{dir} project</div>
                <div className="text-3xl sm:text-5xl font-black mb-3 group-hover:translate-x-1 transition-transform">{np.title}</div>
                <div className="text-white/50 text-sm">{np.category}</div>
                <motion.div whileHover={{ rotate: 45 }} className="mt-5 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: np.accent }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8"><path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center py-8 border-t border-white/10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-[#d4ff3d] transition-colors">
            ← Back to all {projects.length} projects
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
