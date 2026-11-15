import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SplitText } from "../../lib/motion";
import { Link } from "@/lib/nav";

const items = [
  {
    n: "01",
    title: "Brand Identity",
    sub: "Positioning → Logotype → System",
    desc: "Naming, logos and complete visual systems that scale from a business card to a stadium banner.",
    img: "/images/brand-mockup.jpg",
    tags: ["Naming", "Logo", "System", "Guidelines"],
    stat: { n: "62", l: "Identities shipped" },
    bg: "#0b0b0f",
    fg: "#f4f1ea",
    accent: "#d4ff3d",
  },
  {
    n: "02",
    title: "Digital Product",
    sub: "Research → Systems → Interface",
    desc: "SaaS interfaces, dashboards and native apps built on design systems that grow with your team.",
    img: "https://images.pexels.com/photos/7181116/pexels-photo-7181116.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=900",
    tags: ["UX", "UI", "Design System", "Prototype"],
    stat: { n: "48", l: "Avg components" },
    bg: "#f4f1ea",
    fg: "#0b0b0f",
    accent: "#0b0b0f",
  },
  {
    n: "03",
    title: "Web Development",
    sub: "Architecture → Build → Ship",
    desc: "Marketing sites and web apps engineered for speed, SEO and conversion — Next.js, Framer or Shopify.",
    img: "/images/creative-workspace.jpg",
    tags: ["Next.js", "Framer", "Webflow", "Shopify"],
    stat: { n: "98", l: "Avg Lighthouse" },
    bg: "#d4ff3d",
    fg: "#0b0b0f",
    accent: "#0b0b0f",
  },
  {
    n: "04",
    title: "Motion & 3D",
    sub: "Storyboard → Animate → Render",
    desc: "Cinematic brand films, interactive WebGL and product animation for the modern web.",
    img: "/images/abstract-shape.jpg",
    tags: ["After Effects", "Blender", "WebGL", "Rive"],
    stat: { n: "140+", l: "Films produced" },
    bg: "#0b0b0f",
    fg: "#f4f1ea",
    accent: "#d4ff3d",
  },
];

function Card({ item, i, total }: { item: (typeof items)[number]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);
  const top = `calc(88px + ${i * 22}px)`;

  return (
    <div ref={ref} className="sticky" style={{ top }}>
      <motion.div
        style={{ scale, backgroundColor: item.bg, color: item.fg }}
        className="relative rounded-[28px] overflow-hidden border border-black/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
      >
        {/* animated glow */}
        <motion.div
          style={{ opacity: glow, background: item.accent }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative grid md:grid-cols-12">
          {/* Text */}
          <div className="md:col-span-7 p-7 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[420px] md:min-h-[540px]">
            <div>
              <div className="flex items-center justify-between mb-8">
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-xs tracking-widest"
                  style={{ color: item.accent }}
                >
                  / {item.n}
                </motion.span>
                <span className="text-[10px] uppercase tracking-[0.25em] opacity-40">
                  {i + 1} — {total}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4"
              >
                {item.sub}
              </motion.div>

              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6 overflow-hidden">
                {item.title.split(" ").map((w, k) => (
                  <span key={k} className="inline-block overflow-hidden pb-1 mr-3">
                    <motion.span
                      initial={{ y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: k * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.65 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="leading-relaxed text-base sm:text-lg max-w-md mb-8"
              >
                {item.desc}
              </motion.p>
            </div>

            <div className="space-y-6">
              {/* animated tag chips */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t, k) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + k * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="text-xs px-3 py-1.5 rounded-full border font-medium"
                    style={{ borderColor: `${item.fg}25` }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-end justify-between gap-4 pt-6 border-t" style={{ borderColor: `${item.fg}15` }}>
                <div>
                  <div className="text-3xl sm:text-4xl font-black" style={{ color: item.accent }}>
                    {item.stat.n}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-45 mt-1">{item.stat.l}</div>
                </div>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.accent }}
                >
                  Explore
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300"
                    style={{ background: item.accent, color: item.bg }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Image with parallax */}
          <div className="md:col-span-5 relative min-h-[280px] md:min-h-[540px] overflow-hidden">
            <motion.img
              style={{ y: imgY }}
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-[124%] object-cover"
            loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-l" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute top-5 right-5 w-16 h-16"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id={`svc-${item.n}`} d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <circle cx="50" cy="50" r="46" fill={item.accent} opacity="0.95" />
                <text fill={item.bg} fontSize="9" fontWeight="800" letterSpacing="1.5">
                  <textPath href={`#svc-${item.n}`}>NEXORA • CRAFT • NEXORA • </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StickyServices() {
  return (
    <section className="py-20 lg:py-32 bg-[#f4f1ea] relative">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-px bg-black/60"
                />
                Our craft
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <SplitText text="Four core" />
              <br />
              <span className="font-serif italic">disciplines.</span>
            </h2>
          </div>
          <Reveal delay={0.3}>
            <p className="max-w-xs text-black/55 leading-relaxed">
              Each one deep enough to stand alone — and designed to compound when you combine them.
            </p>
          </Reveal>
        </div>

        <div className="space-y-5">
          {items.map((it, i) => (
            <Card key={it.n} item={it} i={i} total={items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
