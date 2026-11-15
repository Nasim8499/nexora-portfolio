import { Reveal } from "../../lib/motion";

const logos = ["Vercel", "Notion", "Linear", "Framer", "Stripe", "Figma", "Loom", "Raycast"];

export default function Logos() {
  return (
    <section className="py-16 bg-white border-y border-black/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-black/50 mb-10">
            <span className="w-8 h-px bg-black/40" />
            Trusted by category-defining teams
            <span className="w-8 h-px bg-black/40" />
          </div>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {logos.map((l, i) => (
            <Reveal key={l} delay={i * 0.05}>
              <span className="text-3xl md:text-4xl font-black tracking-tight text-black/60 hover:text-black transition-colors cursor-default">
                {l}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
