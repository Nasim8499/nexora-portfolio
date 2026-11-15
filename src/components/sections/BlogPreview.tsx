import { Link } from "@/lib/nav";
import { Reveal, SplitText, motion } from "../../lib/motion";
import { posts } from "../../data/site";

export default function BlogPreview() {
  const items = posts.slice(0, 3);
  return (
    <section className="py-20 lg:py-32 bg-[#f4f1ea]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/60 mb-6">
                <span className="w-8 h-px bg-black/60" />
                Journal
              </div>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <SplitText text="Ideas &" />
              <span className="font-serif italic"> field notes</span>
              <SplitText text="." delay={0.3} />
            </h2>
          </div>
          <Reveal delay={0.3}>
            <Link to="/blog" className="inline-flex self-start items-center gap-2 border border-black/20 rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#0b0b0f] hover:text-white transition-all">
              All Articles
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to="/blog" className="group block">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  loading="lazy" decoding="async" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-[#d4ff3d] text-[#0b0b0f] px-3 py-1.5 rounded-full font-semibold">{p.tag}</span>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-black/50 mb-3">
                  <span>{p.date}</span>
                  <span className="w-1 h-1 rounded-full bg-black/30" />
                  <span>{p.read}</span>
                </div>
                <h3 className="text-2xl font-bold leading-snug group-hover:text-black/60 transition-colors">{p.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
