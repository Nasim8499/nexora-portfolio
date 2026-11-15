import Marquee from "./Marquee";

export default function PressStrip() {
  return (
    <div>
      <Marquee words={["Featured in Fast Company", "Awwwards SOTD", "Design Week", "It's Nice That", "Communication Arts", "Brand New"]} variant="lime" />
    </div>
  );
}
