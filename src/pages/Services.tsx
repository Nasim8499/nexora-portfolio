import PageHeader from "../components/PageHeader";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Capabilities from "../components/sections/Capabilities";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import Marquee from "../components/sections/Marquee";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import { Reveal, SplitText, motion } from "../lib/motion";

const deliverables = [
  { icon: "◆", t: "Discovery workshop", d: "Half-day session to align on goals, users and constraints." },
  { icon: "◇", t: "Strategy document", d: "Positioning, messaging, and creative brief in one place." },
  { icon: "◐", t: "Design system", d: "Figma library with tokens, components, and usage docs." },
  { icon: "◑", t: "Production files", d: "Editable source files for every asset we produce." },
  { icon: "◒", t: "Code handoff", d: "Clean, documented codebase in the framework of your choice." },
  { icon: "◓", t: "Launch playbook", d: "Go-to-market checklist and rollout timeline." },
  { icon: "◔", t: "Care plan", d: "Optional monthly retainer for updates and support." },
  { icon: "◕", t: "Quarterly reviews", d: "Every 90 days: performance, opportunities, roadmap." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Big thinking, careful making."
        subtitle="A full-service studio built to move fast without breaking taste. Six core capabilities, one integrated team."
        crumbs={[{ label: "Services" }]}
      />
      <Services />
      <Process />
      <Capabilities />

      {/* Deliverables */}
      <section className="py-28 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                Deliverables
              </div>
            </Reveal>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              <SplitText text="What you actually" />
              <span className="font-serif italic"> receive.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.05}>
                <motion.div whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-[#f4f1ea] hover:bg-[#0b0b0f] hover:text-white transition-colors h-full">
                  <div className="text-3xl mb-4">{d.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{d.t}</h4>
                  <p className="text-black/60 group-hover:text-white/60 text-sm leading-relaxed">{d.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee words={["Brand", "Web", "Product", "Motion", "Marketing", "Direction"]} variant="dark" />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
