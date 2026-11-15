import { Link } from "@/lib/nav";
import { Reveal, SplitText, motion } from "../../lib/motion";
import { services } from "../../data/site";

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                What we do
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-3xl">
              <SplitText text="Services built for" />
              <span className="font-serif italic"> ambitious </span>
              <SplitText text="brands." delay={0.3} />
            </h2>
          </div>
          <Reveal delay={0.4}>
            <Link
              to="/services"
              className="inline-flex self-start items-center gap-2 border border-black/20 rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#0b0b0f] hover:text-white hover:border-[#0b0b0f] transition-all"
            >
              All Capabilities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#f4f1ea] p-8 rounded-3xl hover:bg-[#0b0b0f] hover:text-[#f4f1ea] transition-colors duration-500 cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-mono text-black/40 group-hover:text-[#d4ff3d]">/ {s.n}</span>
                  <div className="w-12 h-12 rounded-full bg-[#0b0b0f] group-hover:bg-[#d4ff3d] flex items-center justify-center transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-[#0b0b0f]" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-black/60 group-hover:text-white/60 mb-8 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-black/15 group-hover:border-white/20">{t}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
