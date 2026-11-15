import { Reveal, SplitText, FloatingText } from "../../lib/motion";

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-24 bg-[#d4ff3d] text-[#0b0b0f] relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-6">
                <span className="w-8 h-px bg-[#0b0b0f]" />
                <FloatingText text="Signal, not noise" />
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
              <SplitText text="One email," />
              <br />
              <span className="font-serif italic">every Sunday.</span>
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div>
              <p className="text-black/70 text-lg mb-8 leading-relaxed">
                Curated links, our own writing, and the occasional job or client opening.
                12,400 designers, founders and marketers subscribe.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-black/10 rounded-full px-6 py-4 text-base placeholder:text-black/40 focus:outline-none focus:border-[#0b0b0f]"
                />
                <button className="bg-[#0b0b0f] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0b0b0f] transition-colors">
                  Subscribe
                </button>
              </form>
              <div className="flex items-center gap-2 text-xs text-black/50 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b0b0f]" />
                No spam. Unsubscribe anytime.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
