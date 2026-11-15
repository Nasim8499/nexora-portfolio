import { motion, AnimatePresence } from "framer-motion";
import { useLeads } from "../context/LeadsContext";

export default function AdminButton({ compact = false }: { compact?: boolean }) {
  const { unseen, pulse, setAdminOpen, leads } = useLeads();
  const total = leads.length;

  return (
    <motion.button
      onClick={() => setAdminOpen(true)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center gap-2 rounded-full font-semibold transition-colors ${
        compact
          ? "bg-white/5 border border-white/15 text-white px-4 py-2.5 text-sm w-full justify-center"
          : "bg-white/60 backdrop-blur border border-black/10 text-black px-3.5 py-2 text-xs hover:bg-white"
      }`}
      aria-label="Open admin panel"
    >
      {/* pulse ring */}
      <AnimatePresence>
        {pulse && (
          <motion.span
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#d4ff3d]"
          />
        )}
      </AnimatePresence>

      <span className="relative flex items-center gap-2">
        <span className="relative flex w-2 h-2">
          <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping ${pulse ? "bg-[#84cc16]" : "bg-emerald-500"}`} />
          <span className={`relative inline-flex w-2 h-2 rounded-full ${pulse ? "bg-[#84cc16]" : "bg-emerald-500"}`} />
        </span>
        <span className={compact ? "" : "hidden xl:inline"}>Admin</span>
        <span
          className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-black ${
            unseen > 0 ? "bg-[#d4ff3d] text-[#0b0b0f]" : compact ? "bg-white/15 text-white" : "bg-[#0b0b0f] text-white"
          }`}
        >
          {total}
        </span>
      </span>

      {/* new-lead badge */}
      <AnimatePresence>
        {unseen > 0 && (
          <motion.span
            initial={{ scale: 0, y: -6 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-[#f4f1ea]"
          >
            +{unseen}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
