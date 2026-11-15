import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import Logos from "../components/sections/Logos";
import BentoGrid from "../components/sections/BentoGrid";
import AboutIntro from "../components/sections/AboutIntro";
import StickyServices from "../components/sections/StickyServices";
import FeaturedWork from "../components/sections/FeaturedWork";
import HorizontalScroll from "../components/sections/HorizontalScroll";
import Process from "../components/sections/Process";
import StatsLime from "../components/sections/StatsLime";
import ImageMarquee from "../components/sections/ImageMarquee";
import WhyUs from "../components/sections/WhyUs";
import Spotlight from "../components/sections/Spotlight";
import TeamGrid from "../components/sections/TeamGrid";
import Awards from "../components/sections/Awards";
import Testimonials from "../components/sections/Testimonials";
import BigQuote from "../components/sections/BigQuote";
import Showreel from "../components/sections/Showreel";
import Approach from "../components/sections/Approach";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import BlogPreview from "../components/sections/BlogPreview";
import Newsletter from "../components/sections/Newsletter";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Logos />
      <BentoGrid />
      <AboutIntro />
      <StickyServices />
      <FeaturedWork />
      <Marquee words={["Strategy", "Design", "Motion", "Build", "Launch", "Grow"]} variant="dark" reverse />
      <HorizontalScroll />
      <Showreel />
      <Process />
      <StatsLime />
      <ImageMarquee />
      <WhyUs />
      <Spotlight />
      <TeamGrid />
      <BigQuote />
      <Awards />
      <Testimonials />
      <Approach />
      <ImageMarquee reverse />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <Newsletter />
      <CTA />
    </>
  );
}
