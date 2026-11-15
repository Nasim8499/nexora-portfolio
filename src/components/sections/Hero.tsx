import { Link } from "@/lib/nav";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText, FloatingText, Reveal } from "../../lib/motion";

const pressLogos = ["Awwwards", "FWA", "CSSDA", "Comm. Arts", "Dezeen"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section ref={ref} className="relative lg:min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16 overflow-hidden bg-[#f4f1ea]">
      {/* BG grid + orbs */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <motion.div
        className="absolute top-32 -left-40 w-[500px] h-[500px] bg-[#d4ff3d]/40 blur-3xl animate-blob"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-orange-300/20 blur-3xl animate-blob"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        {/* Top badge row */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-black/70">
              <span className="relative inline-block w-2 h-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </span>
              Booking Q2 2026
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hidden md:flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-black/60">
              <span>Est. 2015</span>
              <span className="w-1 h-1 rounded-full bg-black/40" />
              <span>4 cities</span>
              <span className="w-1 h-1 rounded-full bg-black/40" />
              <span>12 people</span>
            </div>
          </Reveal>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT — headline & content */}
          <motion.div style={{ y }} className="lg:col-span-8 relative z-10">
            <h1 className="font-black text-[16vw] sm:text-[14vw] lg:text-[9.5vw] xl:text-[10rem] leading-[0.88] tracking-[-0.03em]">
              <span className="block">
                <SplitText text="Design" />
              </span>
              <span className="block">
                <span className="font-serif italic font-normal">
                  <FloatingText text="studio" />
                </span>
                <span className="inline-flex align-middle mx-2 sm:mx-4">
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block w-[0.7em] h-[0.7em] rounded-full bg-[#d4ff3d]"
                  />
                </span>
                <SplitText text="for" delay={0.15} />
              </span>
              <span className="block">
                <SplitText text="bold" delay={0.3} />
                <span className="inline-flex align-middle mx-2 sm:mx-4 h-[0.7em] w-[1.3em] rounded-full overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    src="/images/creative-workspace.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  loading="eager" decoding="async" />
                </span>
                <SplitText text="brands." delay={0.5} />
              </span>
            </h1>

            {/* Sub row */}
            <div className="mt-10 lg:mt-16 grid sm:grid-cols-12 gap-6 items-end">
              <Reveal delay={0.6} className="sm:col-span-7">
                <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-lg">
                  We build identities, digital products & campaigns that move
                  markets — for founders who care about the details.
                </p>
              </Reveal>

              <Reveal delay={0.8} className="sm:col-span-5 flex sm:justify-end gap-4">
                <Link
                  to="/portfolio"
                  className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[#0b0b0f] text-[#f4f1ea] pl-5 sm:pl-6 pr-2 py-2 sm:py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#d4ff3d] hover:text-[#0b0b0f] transition-all"
                >
                  See work
                  <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#d4ff3d] group-hover:bg-[#0b0b0f] flex items-center justify-center text-[#0b0b0f] group-hover:text-[#d4ff3d] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </div>
          </motion.div>

          {/* RIGHT — visual */}
          <motion.div style={{ y: imgY }} className="lg:col-span-4 relative">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden bg-[#0b0b0f]">
              <motion.img
                src="/images/hero-portrait.jpg"
                width={600}
                height={800}
                alt="Creative"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              loading="eager" decoding="async" />
              {/* Sticker badge */}
              <motion.div
                style={{ rotate: rot }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-10"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <defs>
                      <path id="hcircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#0b0b0f" />
                    <text fill="#d4ff3d" fontSize="8.5" letterSpacing="1.5" fontWeight="700">
                      <textPath href="#hcircle">NEW WORK • 2026 • NEXORA • </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#d4ff3d] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-black leading-none">240+</div>
                  <div className="text-[10px] uppercase tracking-widest text-black/50 mt-1">Projects</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black leading-none">98%</div>
                  <div className="text-[10px] uppercase tracking-widest text-black/50 mt-1">Retention</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black leading-none text-[#d4ff3d] bg-[#0b0b0f] px-2 rounded">19</div>
                  <div className="text-[10px] uppercase tracking-widest text-black/50 mt-1">Awards</div>
                </div>
              </motion.div>
            </div>

            {/* Floating avatars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden lg:flex absolute -bottom-8 -left-16 bg-white rounded-full pl-2 pr-5 py-2 items-center gap-3 shadow-xl border border-black/5"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&h=80&w=80",
                  "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=80&w=80",
                  "https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=80&w=80",
                ].map((s, i) => (
                  <img key={i} src={s} className="w-8 h-8 rounded-full border-2 border-white object-cover" loading="lazy" decoding="async" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-bold">12 experts</div>
                <div className="text-black/50">Ready to help</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll ticker + credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14 lg:mt-20 border-t border-black/15 pt-5 sm:pt-6"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
            <motion.button
              type="button"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight * 0.92, behavior: "smooth" })
              }
              whileHover={{ x: 2 }}
              className="group flex min-w-0 items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-black/60"
            >
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/20 transition-colors group-hover:border-black group-hover:bg-[#0b0b0f] group-hover:text-[#d4ff3d]">
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-sm leading-none"
                >
                  ↓
                </motion.span>
              </span>
              <span className="truncate">Scroll to explore</span>
            </motion.button>

            <div className="flex shrink-0 items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-black/50">
              <span className="hidden sm:inline">Available</span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
              </span>
              <span className="whitespace-nowrap">2 slots left</span>
            </div>
          </div>

          {/* Featured-in strip — marquee on mobile, static row on desktop */}
          <div className="mt-5 sm:mt-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-black/40 shrink-0">
              Featured in
            </span>
            <div className="press-strip">
              <div className="flex w-max items-center gap-6 md:w-auto md:gap-8">
                {[...pressLogos, ...pressLogos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className={`text-sm sm:text-base font-bold uppercase tracking-tight text-black/80 transition-colors hover:text-black whitespace-nowrap ${
                      i >= pressLogos.length ? "md:hidden" : ""
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
