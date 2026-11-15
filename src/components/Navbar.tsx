import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "@/lib/nav";
import { motion, AnimatePresence } from "framer-motion";
import AdminButton from "./AdminButton";

const links = [
  { label: "Home", to: "/", num: "01" },
  { label: "About", to: "/about", num: "02" },
  { label: "Services", to: "/services", num: "03" },
  { label: "Portfolio", to: "/portfolio", num: "04" },
  { label: "Blog", to: "/blog", num: "05" },
  { label: "Contact", to: "/contact", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f4f1ea]/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-tight z-10">
            <motion.span
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="inline-block w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0b0b0f] relative"
            >
              <span className="absolute inset-1.5 rounded-full bg-[#d4ff3d]" />
              <span className="absolute inset-3 rounded-full bg-[#0b0b0f]" />
            </motion.span>
            nexora<span className="text-[#0b0b0f]">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur border border-black/5 rounded-full p-1.5 shadow-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium px-5 py-2 rounded-full transition-colors ${
                    isActive ? "text-white" : "text-black/70 hover:text-black"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="navpill"
                        className="absolute inset-0 bg-[#0b0b0f] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <AdminButton />
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#0b0b0f] text-[#f4f1ea] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4ff3d] hover:text-[#0b0b0f] transition-colors"
            >
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-11 h-11 rounded-full bg-[#0b0b0f] text-white flex items-center justify-center z-[80]"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={open ? { rotate: 45, y: 4, backgroundColor: "#d4ff3d" } : { rotate: 0, y: 0 }}
                  className="w-4 h-[2px] bg-white block"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -4, backgroundColor: "#d4ff3d" } : { rotate: 0, y: 0 }}
                  className="w-4 h-[2px] bg-white block"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — full screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] lg:hidden bg-[#0b0b0f] text-white flex flex-col"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4ff3d]/20 blur-3xl" />

            <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-10 relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#d4ff3d] mb-8">Menu</div>
              <div className="space-y-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-white/10 py-3"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs text-white/40 font-mono">{l.num}</span>
                        <span className="text-4xl sm:text-5xl font-black group-hover:text-[#d4ff3d] group-hover:translate-x-2 transition-all inline-block">
                          {l.label}
                        </span>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 group-hover:text-[#d4ff3d]">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-8"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Internal</div>
                <AdminButton compact />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 grid grid-cols-2 gap-4"
              >
                <div className="border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</div>
                  <div className="text-sm font-semibold text-[#d4ff3d]">hello@nexora.studio</div>
                </div>
                <div className="border border-white/10 rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Call</div>
                  <div className="text-sm font-semibold text-[#d4ff3d]">+1 212 555 0198</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex items-center gap-3"
              >
                {["IG", "IN", "TW", "BE"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-xs font-bold hover:bg-[#d4ff3d] hover:text-[#0b0b0f] hover:border-[#d4ff3d]">
                    {s}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
