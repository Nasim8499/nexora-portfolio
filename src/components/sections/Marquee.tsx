const defaults = ["Brand Strategy", "Web Design", "Motion", "Product", "Identity", "Direction", "Development", "Campaigns"];

export default function Marquee({
  words = defaults,
  variant = "light",
  reverse = false,
}: {
  words?: string[];
  variant?: "light" | "dark" | "lime";
  reverse?: boolean;
}) {
  const items = [...words, ...words, ...words];
  const bg =
    variant === "dark"
      ? "bg-[#0b0b0f] text-[#f4f1ea] border-white/10"
      : variant === "lime"
      ? "bg-[#d4ff3d] text-[#0b0b0f] border-black/10"
      : "bg-[#f4f1ea] text-[#0b0b0f] border-black/10";
  const dot = variant === "dark" ? "bg-[#d4ff3d]" : variant === "lime" ? "bg-[#0b0b0f]" : "bg-[#0b0b0f]";
  return (
    <section className={`marquee py-6 sm:py-8 border-y overflow-hidden ${bg}`} aria-label={words.join(", ")}>
      {/* Visible, animated track is decorative — the text above is exposed to AT */}
      <div
        aria-hidden="true"
        className={`marquee-track flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8">
            <span className="font-serif italic text-4xl sm:text-5xl md:text-7xl">{w}</span>
            <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${dot}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
