import { Reveal, SplitText, motion } from "../../lib/motion";

export default function BentoGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
              <span className="w-8 h-px bg-black/60" />
              What sets us apart
            </div>
          </Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            <SplitText text="Built different," />
            <br />
            <span className="font-serif italic">by design.</span>
          </h2>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 sm:gap-4">
          {/* Big — Award */}
          <Reveal className="col-span-6 md:col-span-6">
            <motion.div whileHover={{ y: -6 }} className="relative overflow-hidden rounded-3xl bg-[#0b0b0f] text-white p-8 lg:p-10 min-h-[320px] flex flex-col justify-between group">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4ff3d]/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-[#d4ff3d] mb-4">Award winning</div>
                <div className="text-7xl lg:text-8xl font-black leading-none">19</div>
                <div className="text-white/60 mt-2">Global design awards since 2020</div>
              </div>
              <div className="relative flex flex-wrap gap-2 mt-6">
                {["Awwwards", "FWA", "CSSDA", "Comm. Arts", "Type Directors"].map((a) => (
                  <span key={a} className="text-xs px-3 py-1 rounded-full border border-white/20 group-hover:border-[#d4ff3d]/50 transition-colors">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Live counter */}
          <Reveal delay={0.05} className="col-span-3 md:col-span-3">
            <motion.div whileHover={{ y: -6 }} className="relative overflow-hidden rounded-3xl bg-[#d4ff3d] p-6 lg:p-8 min-h-[320px] flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest mb-3">Live now</div>
                <div className="flex items-center gap-2">
                  <span className="relative w-2 h-2 rounded-full bg-red-600">
                    <span className="absolute inset-0 rounded-full bg-red-600 animate-ping" />
                  </span>
                  <span className="text-sm font-bold">3 projects shipping</span>
                </div>
              </div>
              <div className="text-5xl lg:text-6xl font-black leading-[0.9] mt-6">
                Making <span className="font-serif italic">now</span>.
              </div>
            </motion.div>
          </Reveal>

          {/* Portrait small */}
          <Reveal delay={0.1} className="col-span-3 md:col-span-3">
            <motion.div whileHover={{ y: -6 }} className="relative overflow-hidden rounded-3xl min-h-[320px]">
              <img src="/images/brand-mockup.jpg" alt="Brand mockup" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-2">Case study</div>
                <div className="text-xl font-black">Meridian Coffee</div>
              </div>
            </motion.div>
          </Reveal>

          {/* Team small */}
          <Reveal delay={0.15} className="col-span-3 md:col-span-4">
            <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-[#f4f1ea] p-6 lg:p-8 min-h-[260px] flex flex-col justify-between">
              <div className="text-xs uppercase tracking-widest text-black/50 mb-4">Our team</div>
              <div>
                <div className="flex -space-x-3 mb-4">
                  {[
                    "https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&h=120&w=120",
                    "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=120&w=120",
                    "https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=120&w=120",
                    "https://images.pexels.com/photos/10836222/pexels-photo-10836222.jpeg?auto=compress&cs=tinysrgb&h=120&w=120",
                  ].map((s, i) => (
                    <img key={i} src={s} className="w-12 h-12 rounded-full border-3 border-[#f4f1ea] object-cover" loading="lazy" decoding="async" />
                  ))}
                  <div className="w-12 h-12 rounded-full bg-[#0b0b0f] text-white flex items-center justify-center text-xs font-bold border-3 border-[#f4f1ea]">+8</div>
                </div>
                <div className="text-2xl font-black leading-tight">12 senior<br />craftspeople</div>
              </div>
            </motion.div>
          </Reveal>

          {/* Global */}
          <Reveal delay={0.2} className="col-span-3 md:col-span-4">
            <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white border border-black/10 p-6 lg:p-8 min-h-[260px] flex flex-col justify-between">
              <div className="text-xs uppercase tracking-widest text-black/50">Global reach</div>
              <div>
                <div className="text-6xl font-black leading-none">48</div>
                <div className="text-black/60 mt-1 mb-4">Countries served</div>
                <div className="flex items-center gap-2 flex-wrap">
                  {["🇺🇸 NY", "🇬🇧 LDN", "🇵🇹 LIS", "🇯🇵 TYO"].map((c) => (
                    <span key={c} className="text-xs px-3 py-1 rounded-full bg-[#f4f1ea]">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Response time */}
          <Reveal delay={0.25} className="col-span-6 md:col-span-4">
            <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-[#0b0b0f] text-white p-6 lg:p-8 min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#d4ff3d] mb-3">Fast response</div>
                <div className="text-5xl font-black leading-none">&lt; 24h</div>
                <div className="text-white/60 mt-2">Average reply time to new inquiries</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1.4 }} className="h-full bg-[#d4ff3d]" />
                </div>
                <div className="text-xs text-white/60">92% same-day</div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
