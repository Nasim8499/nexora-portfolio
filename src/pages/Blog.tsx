import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { posts } from "../data/site";
import { Reveal, motion, AnimatePresence } from "../lib/motion";
import Newsletter from "../components/sections/Newsletter";
import CTA from "../components/sections/CTA";

const cats = ["All", "Design", "Strategy", "Engineering", "Motion", "E-commerce", "Culture"];

export default function Blog() {
  const [f, setF] = useState("All");
  const filtered = f === "All" ? posts : posts.filter((p) => p.tag === f);
  const featured = posts[0];
  const rest = filtered.slice(f === "All" ? 1 : 0);

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Ideas, essays and field notes."
        subtitle="Long-form and short from the studio. What we're learning, building and unlearning."
        crumbs={[{ label: "Journal" }]}
      />

      {/* Featured */}
      {f === "All" && (
        <section className="pb-16 bg-[#f4f1ea]">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
            <Reveal>
              <a href="#" className="grid lg:grid-cols-2 gap-10 group items-center">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <motion.img src={featured.img} alt="" className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} loading="lazy" decoding="async" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-[#d4ff3d] text-[#0b0b0f] px-3 py-1.5 rounded-full font-semibold">Featured</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-black/50 mb-4">
                    <span>{featured.tag}</span>
                    <span className="w-1 h-1 rounded-full bg-black/30" />
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-black/30" />
                    <span>{featured.read}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black leading-tight group-hover:text-black/60 transition-colors">{featured.title}</h2>
                  <p className="text-lg text-black/60 mt-6 max-w-lg leading-relaxed">
                    Every template looks like every other template. Here's why bespoke bespoke design
                    is quietly becoming a competitive edge again.
                  </p>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="py-8 bg-white sticky top-20 z-30 border-y border-black/5">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-wrap gap-2">
          {cats.map((cat) => (
            <button key={cat} onClick={() => setF(cat)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${f === cat ? "bg-[#0b0b0f] text-white" : "bg-[#f4f1ea] text-black hover:bg-black/10"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#f4f1ea]">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <a href="#" className="group block">
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-5">
                      <motion.img src={p.img} alt="" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }} loading="lazy" decoding="async" />
                      <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-[#d4ff3d] text-[#0b0b0f] px-3 py-1.5 rounded-full font-semibold">{p.tag}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-black/50 mb-3">
                      <span>{p.date}</span>
                      <span className="w-1 h-1 rounded-full bg-black/30" />
                      <span>{p.read}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-black/60 transition-colors">{p.title}</h3>
                  </a>
                </Reveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
