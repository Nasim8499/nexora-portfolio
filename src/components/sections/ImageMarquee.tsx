import { motion, useReducedMotion } from "framer-motion";
import Img from "@/components/Img";

const imgs = [
  "https://images.pexels.com/photos/7078411/pexels-photo-7078411.jpeg?auto=compress&cs=tinysrgb&h=500&w=400",
  "https://images.pexels.com/photos/9845176/pexels-photo-9845176.jpeg?auto=compress&cs=tinysrgb&h=500&w=400",
  "/images/brand-mockup.jpg",
  "https://images.pexels.com/photos/8532943/pexels-photo-8532943.jpeg?auto=compress&cs=tinysrgb&h=500&w=400",
  "/images/creative-workspace.jpg",
  "https://images.pexels.com/photos/33469928/pexels-photo-33469928.jpeg?auto=compress&cs=tinysrgb&h=500&w=400",
  "https://images.pexels.com/photos/8148722/pexels-photo-8148722.jpeg?auto=compress&cs=tinysrgb&h=500&w=400",
  "/images/abstract-shape.jpg",
];

export default function ImageMarquee({ reverse = false }: { reverse?: boolean }) {
  const reduced = useReducedMotion();
  const list = reduced ? imgs : [...imgs, ...imgs];
  return (
    <section className="py-12 bg-[#f4f1ea] overflow-hidden" aria-hidden="true">
      <motion.div
        animate={reduced ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className={`flex gap-4 ${reduced ? "overflow-x-auto no-scrollbar" : ""}`}
      >
        {list.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden">
            <Img
              src={src}
              alt=""
              width={400}
              height={500}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
