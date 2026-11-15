import { Link } from "@/lib/nav";
import { Reveal, SplitText, slideLeft, slideRight, motion } from "../../lib/motion";

export default function Spotlight() {
  return (
    <section className="py-20 lg:py-32 bg-[#f4f1ea] relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variants={slideRight}>
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/7078411/pexels-photo-7078411.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900"
                alt="Case study"
                className="rounded-3xl w-full aspect-square object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              loading="lazy" decoding="async" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#d4ff3d] flex items-center justify-center shadow-xl"
              >
                <div className="text-center leading-tight">
                  <div className="text-2xl font-black">+312%</div>
                  <div className="text-[10px] uppercase tracking-widest">Conversions</div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal variants={slideLeft}>
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-black/50" />
              Case study spotlight
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-8">
              <SplitText text="How Halden Studio grew" />
              <span className="font-serif italic"> 4×</span>
              <SplitText text=" in a single quarter." delay={0.3} />
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-10 max-w-lg">
              A full rebrand and new website that clarified their positioning, tripled inbound leads,
              and gave the sales team a story worth telling.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { n: "4×", l: "Inbound leads" },
                { n: "312%", l: "Conversion lift" },
                { n: "62%", l: "Faster sales cycle" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="text-3xl font-black">{m.n}</div>
                  <div className="text-xs text-black/50 uppercase tracking-widest mt-1">{m.l}</div>
                </div>
              ))}
            </div>

            <Link
              to="/portfolio/halden-studio"
              className="inline-flex items-center gap-3 bg-[#0b0b0f] text-white px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#d4ff3d] hover:text-[#0b0b0f] transition-colors"
            >
              Read case study
              <span className="w-7 h-7 rounded-full bg-white text-[#0b0b0f] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
