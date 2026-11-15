import { Reveal, SplitText, slideLeft, slideRight } from "../../lib/motion";

export default function AboutIntro() {
  return (
    <section className="py-20 lg:py-32 relative bg-[#f4f1ea]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
                <span className="w-8 h-px bg-black/50" />
                About the studio
              </div>
            </Reveal>
            <Reveal variants={slideRight}>
              <div className="sticky top-32">
                <img
                  src="https://images.pexels.com/photos/7181109/pexels-photo-7181109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=600"
                  alt="Studio"
                  className="rounded-3xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy" decoding="async" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <SplitText text="We're a full-service creative studio helping" />
              <span className="font-serif italic text-[#0b0b0f]/90"> visionary founders </span>
              <SplitText text="turn ideas into iconic brands, digital experiences and lasting momentum." delay={0.3} />
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {[
                { title: "Independent by design", body: "Founder-owned since day one. No shareholders, no red tape — just focused work with clients who care." },
                { title: "Small team, senior craft", body: "Every project is led by a partner. No juniors learning on your dime, no handoffs, no drift." },
                { title: "Strategy first", body: "We start with the business problem. Beautiful outputs only matter if they move the numbers." },
                { title: "Built to last", body: "Systems, not one-offs. We build brands and products that scale with you for years." },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1} variants={slideLeft}>
                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b0b0f]" />
                      <h3 className="text-lg font-semibold">{f.title}</h3>
                    </div>
                    <p className="text-black/60 leading-relaxed">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
