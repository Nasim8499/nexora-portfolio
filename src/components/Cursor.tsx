import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const onPointer = () => setFinePointer(mql.matches);
    onPointer();
    mql.addEventListener("change", onPointer);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      mql.removeEventListener("change", onPointer);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  // Decorative only: skip for reduced-motion users, touch devices and
  // keyboard-only navigation.
  if (reduced || !finePointer) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[999] pointer-events-none hidden lg:block mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[998] pointer-events-none hidden lg:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hover ? 1.4 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="w-10 h-10 rounded-full border border-[#0b0b0f]/30" />
      </motion.div>
    </>
  );
}
