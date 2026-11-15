import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.08 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0b0b0f] text-[#d4ff3d] shadow-xl flex items-center justify-center group"
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-y-0.5 transition-transform">
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
            <defs>
              <path id="btt" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fill="#d4ff3d" fontSize="9" letterSpacing="1.5" fontWeight="700" opacity="0.5">
              <textPath href="#btt">BACK TO TOP • BACK TO TOP • </textPath>
            </text>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
