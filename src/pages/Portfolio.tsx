import { useMemo, useState } from "react";
import { Link } from "@/lib/nav";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/site";

import Marquee from "../components/sections/Marquee";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

const filters = ["All", "Brand", "Web", "Product", "Motion", "Packaging"];

export default function Portfolio() {
  const [f, setF] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(
    () => (f === "All" ? projects : projects.filter((p) => p.discipline.includes(f))),
    [f]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    filters.slice(1).forEach((k) => (c[k] = projects.filter((p) => p.discipline.includes(k)).length));
    return c;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow={`Portfolio · ${projects.length} case studies`}
        title="Selected work, 2015 — now."
        subtitle="A curated slice of the 240+ projects we've shipped. Filter by discipline or dive into a full case study."
        crumbs={[{ label: "Portfolio" }]}
      />

      {/* Filter bar */}
      <section className="py-4 bg-white/90 backdrop-blur-xl sticky top-16 sm:top-20 z-30 border-y border-black/5">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setF(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  f === cat ? "text-white" : "text-black/60 hover:text-black bg-[#f4f1ea]"
                }`}
              >
                {f === cat && (
                  <motion.span layoutId="pfpill" className="absolute inset-0 bg-[#0b0b0f] rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <span className="relative z-10">
                  {cat}
                  <span className={`ml-1.5 ${f === cat ? "text-white/40" : "text-black/30"}`}>{counts[cat]}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1 bg-[#f4f1ea] rounded-full p-1">
            {(["grid", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${view === v ? "bg-[#0b0b0f] text-white" : "text-black/40 hover:text-black"}`}
                aria-label={v}
              >
                {v === "grid" ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="8" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /><rect x="13" y="13" width="8" height="8" rx="2" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1.5" /><rect x="3" y="10.5" width="18" height="3" rx="1.5" /><rect x="3" y="17" width="18" height="3" rx="1.5" /></svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 sm:py-16 bg-[#f4f1ea]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key={`grid-${f}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 gap-5 lg:gap-6"
              >
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={`/portfolio/${p.slug}`} className="group relative block overflow-hidden rounded-[26px] aspect-[4/3]">
                      <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.07]" loading="lazy" decoding="async" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-black/35 to-black/85`} />
                      <div className="absolute inset-0 rounded-[26px] border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: p.accent }} />

                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full">{p.category}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{p.year}</span>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                            {p.discipline.map((d) => (
                              <span key={d} className="text-[9px] uppercase tracking-wider text-black font-bold px-2 py-0.5 rounded-full" style={{ background: p.accent }}>{d}</span>
                            ))}
                          </div>
                          <div className="flex items-end justify-between gap-4">
                            <div className="min-w-0">
                              <h3 className="text-3xl sm:text-4xl font-black text-white leading-none mb-2">{p.title}</h3>
                              <p className="text-white/60 text-sm line-clamp-2 max-w-md">{p.excerpt}</p>
                            </div>
                            <motion.div whileHover={{ rotate: 45 }} className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500" style={{ background: p.accent }}>
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8"><path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div key={`list-${f}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-black/10">
                {filtered.map((p, i) => (
                  <motion.div key={p.slug} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link to={`/portfolio/${p.slug}`} className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-black/10 hover:bg-white px-4 -mx-4 rounded-2xl transition-colors">
                      <div className="col-span-2 sm:col-span-1 font-mono text-xs text-black/40">{String(i + 1).padStart(2, "0")}</div>
                      <div className="col-span-10 sm:col-span-4">
                        <h3 className="text-xl sm:text-3xl font-black group-hover:translate-x-2 transition-transform">{p.title}</h3>
                      </div>
                      <div className="col-span-8 sm:col-span-3 flex flex-wrap gap-1.5">
                        {p.discipline.map((d) => (<span key={d} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f4f1ea] border border-black/10">{d}</span>))}
                      </div>
                      <div className="col-span-2 sm:col-span-2 text-xs text-black/50">{p.year}</div>
                      <div className="col-span-2 flex justify-end">
                        <span className="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: p.accent }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.8"><path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <div className="text-2xl font-black mb-2">No projects in this discipline yet.</div>
              <button onClick={() => setF("All")} className="text-sm underline">Show all work</button>
            </div>
          )}
        </div>
      </section>

      <Marquee words={["Craft", "Concept", "Code", "Motion", "Systems", "Story"]} variant="lime" />
      <Testimonials />
      <CTA />
    </>
  );
}
