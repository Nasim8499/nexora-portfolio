import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** True on small/touch screens — used to speed up scroll triggers on mobile. */
export function useIsSmallScreen() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const on = () => setSmall(mql.matches);
    on();
    mql.addEventListener("change", on);
    return () => mql.removeEventListener("change", on);
  }, []);
  return small;
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/** Reveal wrapper that plays once on scroll into view */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const small = useIsSmallScreen();
  // Mobile: trigger as soon as a sliver enters the viewport (no negative margin)
  // so sections never read as blank while scrolling.
  const inView = useInView(ref, {
    once,
    margin: small ? "0px 0px 15% 0px" : "-80px",
    amount: small ? 0.01 : 0,
  });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      transition={{ delay: small ? Math.min(delay, 0.15) : delay, duration: small ? 0.45 : undefined }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Split text into words, each animating individually */
export function SplitText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger: staggerVal = 0.06,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const small = useIsSmallScreen();
  const inView = useInView(ref, { once: true, margin: small ? "0px" : "-60px", amount: 0.01 });
  const words = text.split(" ");

  if (reduced) return <span className={`inline-block ${className}`}>{text}</span>;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: small ? 0.55 : 0.9,
              delay: (small ? delay * 0.5 : delay) + i * (small ? staggerVal * 0.6 : staggerVal),
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Individual character float animation */
export function FloatingText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={`inline-block ${className}`}>{text}</span>;
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Letter-by-letter reveal on scroll */
export function CharReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const small = useIsSmallScreen();
  const inView = useInView(ref, { once: true, margin: small ? "0px" : "-40px", amount: 0.01 });
  if (reduced) return <span className={`inline-block ${className}`}>{text}</span>;
  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: small ? 0.35 : 0.5, delay: delay + i * (small ? 0.012 : 0.02) }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export { motion, AnimatePresence, useReducedMotion };
