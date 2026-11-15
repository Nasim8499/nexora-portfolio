import { Link } from "@/lib/nav";
import { SplitText, Reveal, motion } from "../lib/motion";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden bg-[#f4f1ea]">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#d4ff3d] blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-200/40 blur-3xl"
      />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        {crumbs.length > 0 && (
          <Reveal>
            <div className="flex items-center gap-2 sm:gap-3 text-xs text-black/50 mb-6">
              <Link to="/" className="hover:text-black">Home</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2 sm:gap-3">
                  <span>/</span>
                  {c.to ? <Link to={c.to} className="hover:text-black">{c.label}</Link> : <span className="text-black font-medium">{c.label}</span>}
                </span>
              ))}
            </div>
          </Reveal>
        )}
        <Reveal>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-black/50 mb-6">
            <span className="w-8 h-px bg-black/50" />
            {eyebrow}
          </div>
        </Reveal>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tight mb-6 sm:mb-8">
          <SplitText text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.3}>
            <p className="text-base sm:text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
