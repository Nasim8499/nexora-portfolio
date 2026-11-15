import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [n, setN] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setN(100);
      setDone(true);
      return;
    }
    const t0 = performance.now();
    const dur = window.matchMedia("(max-width: 767px)").matches ? 700 : 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && !reduced && (
        <motion.div
          role="status"
          aria-label="Loading"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0b0b0f] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[#d4ff3d] text-xs uppercase tracking-[0.4em] mb-6"
            >
              Nexora Studio
            </motion.div>
            <div className="text-[22vw] md:text-[10rem] font-black text-white leading-none tracking-tighter">
              {String(n).padStart(3, "0")}
            </div>
            <div className="mt-8 w-64 md:w-96 h-px bg-white/20 mx-auto overflow-hidden">
              <motion.div className="h-full bg-[#d4ff3d]" style={{ width: `${n}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
