import { Link } from "@/lib/nav";
import { motion } from "framer-motion";
import { FloatingText } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-[#f4f1ea] pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 font-black text-3xl tracking-tight mb-6">
              <span className="inline-block w-9 h-9 rounded-full bg-[#d4ff3d] relative">
                <span className="absolute inset-1.5 rounded-full bg-[#0b0b0f]" />
                <span className="absolute inset-3 rounded-full bg-[#d4ff3d]" />
              </span>
              nexora<span className="text-[#d4ff3d]">.</span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              An independent creative studio building bold identities, digital products,
              and campaigns for ambitious teams worldwide.
            </p>
            <form className="flex items-center gap-2 max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#d4ff3d]"
              />
              <button className="bg-[#d4ff3d] text-[#0b0b0f] px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-5">Studio</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/about" className="hover:text-[#d4ff3d]">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#d4ff3d]">Work</Link></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Careers</a></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Press</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/services" className="hover:text-[#d4ff3d]">Services</Link></li>
              <li><Link to="/blog" className="hover:text-[#d4ff3d]">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4ff3d]">Contact</Link></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Awards</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-5">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li>hello@nexora.studio</li>
              <li>+1 (212) 555 — 0198</li>
              <li>221 Broome St, NY 10002</li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {["IG", "IN", "TW", "BE"].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-xs font-bold hover:bg-[#d4ff3d] hover:text-[#0b0b0f] hover:border-[#d4ff3d]"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="text-center text-[22vw] font-black leading-[0.85] tracking-tighter text-[#d4ff3d]/10 select-none">
            <FloatingText text="NEXORA" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 pt-8">
          <div>© 2026 Nexora Studio. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#d4ff3d]">Privacy</a>
            <a href="#" className="hover:text-[#d4ff3d]">Terms</a>
            <a href="#" className="hover:text-[#d4ff3d]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
