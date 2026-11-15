import PageHeader from "../components/PageHeader";
import AboutIntro from "../components/sections/AboutIntro";
import TeamGrid from "../components/sections/TeamGrid";
import StatsLime from "../components/sections/StatsLime";
import Approach from "../components/sections/Approach";
import Awards from "../components/sections/Awards";
import Testimonials from "../components/sections/Testimonials";
import Marquee from "../components/sections/Marquee";
import CTA from "../components/sections/CTA";
import { Reveal, SplitText, motion, slideRight, slideLeft } from "../lib/motion";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built for the long game."
        subtitle="Ten years, four cities, hundreds of projects — a small team of designers, strategists and engineers making work we're proud to sign."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variants={slideRight}>
            <img
              src="https://images.pexels.com/photos/7181109/pexels-photo-7181109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
              alt="Studio"
              className="rounded-3xl aspect-square object-cover w-full"
            loading="lazy" decoding="async" />
          </Reveal>
          <Reveal variants={slideLeft}>
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-black/50" />
              Our story
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              <SplitText text="Started in a Brooklyn loft in 2015 with two laptops and one" />
              <span className="font-serif italic"> stubborn idea.</span>
            </h2>
            <div className="space-y-5 text-black/70 leading-relaxed text-lg">
              <p>
                What began as a two-person freelance duo has grown into a distributed studio of
                twelve — but we still work like we did on day one: small teams, direct access,
                real accountability.
              </p>
              <p>
                We've stayed intentionally small so partners lead every project. No juniors
                learning on your dime, no accounts team you never see again. Just senior craft.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutIntro />
      <Approach />
      <StatsLime />

      {/* Timeline */}
      <section className="py-28 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                Milestones
              </div>
            </Reveal>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              <SplitText text="A decade in" />
              <span className="font-serif italic"> ten moments.</span>
            </h2>
          </div>
          <div className="relative border-l-2 border-black/10 ml-4">
            {[
              { y: "2015", t: "Nexora founded in Brooklyn", d: "Two designers, a loft, a coffee machine." },
              { y: "2017", t: "First Awwwards SOTD", d: "For a small architecture studio site." },
              { y: "2018", t: "Grew to five", d: "Added engineering & motion in-house." },
              { y: "2020", t: "Went distributed", d: "Opened London and Lisbon nodes." },
              { y: "2022", t: "First seven-figure project", d: "SaaS rebrand + product launch." },
              { y: "2024", t: "Book published", d: "Craft at Scale — Princeton Architectural Press." },
              { y: "2025", t: "Tokyo office", d: "Fourth city, first Asia-Pacific clients." },
              { y: "2026", t: "10th anniversary", d: "Still stubborn. Still small. Still shipping." },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <motion.div className="pl-10 pb-10 relative">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d4ff3d] border-4 border-[#0b0b0f]" />
                  <div className="text-xs font-mono text-black/50 mb-2">{m.y}</div>
                  <h3 className="text-2xl font-bold mb-1">{m.t}</h3>
                  <p className="text-black/60">{m.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee words={["Craft", "Curiosity", "Honesty", "Care", "Rigor", "Play"]} variant="lime" />
      <TeamGrid />
      <Awards />
      <Testimonials />
      <CTA />
    </>
  );
}
