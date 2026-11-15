import { Reveal, SplitText, motion } from "../../lib/motion";

export default function BigQuote() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#d4ff3d] text-[#0b0b0f] overflow-hidden">
      <div className="absolute inset-0 noise opacity-40" />
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border-2 border-black/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-8">
            <span className="w-8 h-px bg-black" />
            Our philosophy
            <span className="w-8 h-px bg-black" />
          </div>
        </Reveal>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight max-w-6xl mx-auto">
          <SplitText text="Great design isn't about" />{" "}
          <span className="font-serif italic">looking</span>{" "}
          <SplitText text="different — it's about" delay={0.2} />{" "}
          <span className="font-serif italic">making</span>{" "}
          <SplitText text="a difference." delay={0.4} />
        </h2>
        <Reveal delay={0.6}>
          <div className="mt-12 inline-flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
              alt="Amara"
              className="w-14 h-14 rounded-full object-cover border-2 border-black"
            loading="lazy" decoding="async" />
            <div className="text-left">
              <div className="font-bold">Amara Okafor</div>
              <div className="text-xs uppercase tracking-widest">Founder, Nexora</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
