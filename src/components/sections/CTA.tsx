import { Link } from "@/lib/nav";
import { Reveal, SplitText, FloatingText, motion } from "../../lib/motion";

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-[#d4ff3d]/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-black/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0b0b0f]" />
            Let's build something remarkable
          </div>
        </Reveal>

        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tight mb-10 sm:mb-12">
          <SplitText text="Have a" />
          <span className="font-serif italic"> <FloatingText text="project" /></span>
          <br />
          <SplitText text="in mind?" delay={0.3} />
        </h2>

        <Reveal delay={0.4}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-[#0b0b0f] text-white pl-8 pr-3 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform"
          >
            hello@nexora.studio
            <span className="w-12 h-12 rounded-full bg-[#d4ff3d] flex items-center justify-center text-[#0b0b0f]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-black/60">
            {["New York", "London", "Lisbon", "Tokyo"].map((c) => (
              <div key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b0b0f]" />
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
