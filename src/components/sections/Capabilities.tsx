import { Reveal, SplitText, motion } from "../../lib/motion";

const cats = [
  { title: "Brand", items: ["Positioning", "Naming", "Identity", "Guidelines", "Voice", "Sonic"] },
  { title: "Digital", items: ["Websites", "Ecommerce", "Web Apps", "Landing Pages", "Micro-sites", "CMS"] },
  { title: "Product", items: ["UX Research", "Wireframes", "UI Design", "Design Systems", "Prototypes", "Testing"] },
  { title: "Motion", items: ["Brand Films", "Product Reels", "3D", "Animation", "Interactive", "AR"] },
];

export default function Capabilities() {
  return (
    <section className="py-20 lg:py-32 bg-[#0b0b0f] text-[#f4f1ea]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d4ff3d] mb-6">
              <span className="w-8 h-px bg-[#d4ff3d]" />
              Full capabilities
            </div>
          </Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            <SplitText text="Everything under" />
            <span className="font-serif italic text-[#d4ff3d]"> one roof.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-3xl font-black mb-6">{c.title}</h3>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <motion.li
                      key={it}
                      whileHover={{ x: 6 }}
                      className="text-white/70 hover:text-[#d4ff3d] cursor-pointer flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
