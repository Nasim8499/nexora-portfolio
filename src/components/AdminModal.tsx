import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeads, BUDGET_VALUE, type LeadStatus } from "../context/LeadsContext";

const USER = "admin";
const PASS = "nucaz2026";

const STATUS_META: Record<LeadStatus, { label: string; dot: string; chip: string }> = {
  new: { label: "New", dot: "bg-[#d4ff3d]", chip: "bg-[#d4ff3d]/15 text-[#d4ff3d] border-[#d4ff3d]/30" },
  contacted: { label: "Contacted", dot: "bg-sky-400", chip: "bg-sky-400/15 text-sky-300 border-sky-400/30" },
  won: { label: "Won", dot: "bg-emerald-400", chip: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30" },
  archived: { label: "Archived", dot: "bg-zinc-500", chip: "bg-white/5 text-white/50 border-white/15" },
};

const ALL_SERVICES = ["Brand", "Website", "Product", "Motion", "Marketing", "Not sure"];
const ALL_BUDGETS = ["< $25k", "$25k – $50k", "$50k – $100k", "$100k+"];

function fmtMoney(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}k`;
  return `$${n}`;
}
function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function timeAgo(iso: string) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

/* ---------------- Login ---------------- */
function Login({ onOk }: { onOk: () => void }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      if (u.trim() === USER && p === PASS) onOk();
      else {
        setErr(true);
        setTimeout(() => setErr(false), 700);
      }
      setBusy(false);
    }, 550);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 sm:p-12 max-w-md mx-auto w-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-[#d4ff3d] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="2.5">
            <rect x="4" y="11" width="16" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4ff3d]">Restricted</div>
          <div className="text-xl font-black">Admin Access</div>
        </div>
      </div>

      <motion.form
        onSubmit={submit}
        animate={err ? { x: [0, -10, 10, -8, 8, 0] } : {}}
        transition={{ duration: 0.45 }}
        className="space-y-5"
      >
        <div>
          <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Username</label>
          <input
            value={u}
            onChange={(e) => setU(e.target.value)}
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4ff3d] transition-colors"
            placeholder="admin"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Password</label>
          <input
            type="password"
            value={p}
            onChange={(e) => setP(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#d4ff3d] transition-colors"
            placeholder="••••••••"
          />
        </div>

        <AnimatePresence>
          {err && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-red-400 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Invalid credentials. Try again.
            </motion.div>
          )}
        </AnimatePresence>

        <button
          disabled={busy}
          className="w-full bg-[#d4ff3d] text-[#0b0b0f] py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {busy ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-[#0b0b0f] border-t-transparent rounded-full"
            />
          ) : (
            "Unlock dashboard"
          )}
        </button>

        <div className="text-center text-xs text-white/30 pt-2">
          Demo credentials — <span className="text-white/60 font-mono">admin</span> /{" "}
          <span className="text-white/60 font-mono">nucaz2026</span>
        </div>
      </motion.form>
    </motion.div>
  );
}

/* ---------------- Dashboard ---------------- */
function Dashboard({ onClose }: { onClose: () => void }) {
  const { leads, setStatus, removeLead, pipeline, markAllSeen } = useLeads();
  const [q, setQ] = useState("");
  const [status, setStatusF] = useState<"all" | LeadStatus>("all");
  const [svc, setSvc] = useState("All");
  const [bud, setBud] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest" | "value" | "name">("newest");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [exported, setExported] = useState(false);

  useEffect(() => { markAllSeen(); }, [markAllSeen]);

  const filtered = useMemo(() => {
    let out = leads.filter((l) => {
      const hay = `${l.ref} ${l.name} ${l.email} ${l.company} ${l.message} ${l.services.join(" ")}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (status !== "all" && l.status !== status) return false;
      if (svc !== "All" && !l.services.includes(svc)) return false;
      if (bud !== "All" && l.budget !== bud) return false;
      return true;
    });
    out = [...out].sort((a, b) => {
      if (sort === "newest") return +new Date(b.createdAt) - +new Date(a.createdAt);
      if (sort === "oldest") return +new Date(a.createdAt) - +new Date(b.createdAt);
      if (sort === "value") return (BUDGET_VALUE[b.budget] ?? 0) - (BUDGET_VALUE[a.budget] ?? 0);
      return a.name.localeCompare(b.name);
    });
    return out;
  }, [leads, q, status, svc, bud, sort]);

  const counts = useMemo(
    () => ({
      all: leads.length,
      new: leads.filter((l) => l.status === "new").length,
      contacted: leads.filter((l) => l.status === "contacted").length,
      won: leads.filter((l) => l.status === "won").length,
      archived: leads.filter((l) => l.status === "archived").length,
    }),
    [leads]
  );

  const exportCsv = () => {
    const headers = ["Ref", "Date", "Name", "Email", "Company", "Services", "Budget", "Status", "Message"];
    const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = filtered.map((l) =>
      [l.ref, fmtDate(l.createdAt), l.name, l.email, l.company, l.services.join("; "), l.budget, l.status, l.message]
        .map(esc)
        .join(",")
    );
    const csv = [headers.map(esc).join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nexora-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
    setTimeout(() => setExported(false), 2200);
  };

  const reset = () => { setQ(""); setStatusF("all"); setSvc("All"); setBud("All"); setSort("newest"); };
  const active = q !== "" || status !== "all" || svc !== "All" || bud !== "All";

  const stats = [
    { label: "Total leads", value: String(counts.all), accent: "from-indigo-500 to-violet-500", sub: "all time" },
    { label: "New / unworked", value: String(counts.new), accent: "from-[#d4ff3d] to-lime-300", sub: "needs reply", dark: true },
    { label: "Open pipeline", value: fmtMoney(pipeline), accent: "from-rose-500 to-orange-400", sub: "est. value" },
    { label: "Won this year", value: String(counts.won), accent: "from-emerald-500 to-teal-400", sub: "closed deals" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-5 sm:px-8 py-5 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="w-2.5 h-6 rounded-full bg-rose-500" />
            <span className="w-2.5 h-6 rounded-full bg-indigo-500" />
            <span className="w-2.5 h-6 rounded-full bg-[#d4ff3d]" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-black leading-none">Lead Console</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Live · synced</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="relative inline-flex items-center gap-2 bg-[#d4ff3d] text-[#0b0b0f] px-3 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">{exported ? "Downloaded!" : "Export CSV"}</span>
            <span className="sm:hidden">CSV</span>
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll body */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-4"
            >
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${s.accent} opacity-25 blur-2xl`} />
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${s.accent} mb-3`} />
              <div className={`text-2xl sm:text-3xl font-black leading-none ${s.dark ? "text-[#d4ff3d]" : "text-white"}`}>{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">{s.label}</div>
              <div className="text-[10px] text-white/25 mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="space-y-3 mb-5">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name, email, company, ref or message…"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-10 py-3 text-sm text-white outline-none focus:border-[#d4ff3d] transition-colors placeholder:text-white/30"
              />
              {q && (
                <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
                </button>
              )}
            </div>
            <select value={svc} onChange={(e) => setSvc(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4ff3d] text-white">
              <option className="bg-[#0b0b0f]" value="All">All services</option>
              {ALL_SERVICES.map((s) => <option key={s} className="bg-[#0b0b0f]" value={s}>{s}</option>)}
            </select>
            <select value={bud} onChange={(e) => setBud(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4ff3d] text-white">
              <option className="bg-[#0b0b0f]" value="All">All budgets</option>
              {ALL_BUDGETS.map((b) => <option key={b} className="bg-[#0b0b0f]" value={b}>{b}</option>)}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4ff3d] text-white">
              <option className="bg-[#0b0b0f]" value="newest">Newest</option>
              <option className="bg-[#0b0b0f]" value="oldest">Oldest</option>
              <option className="bg-[#0b0b0f]" value="value">Highest value</option>
              <option className="bg-[#0b0b0f]" value="name">Name A–Z</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(["all", "new", "contacted", "won", "archived"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusF(s)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  status === s ? "bg-white text-[#0b0b0f] border-white" : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
                }`}
              >
                {s === "all" ? "All" : STATUS_META[s].label}
                <span className={`ml-1.5 ${status === s ? "text-black/40" : "text-white/30"}`}>{counts[s]}</span>
              </button>
            ))}
            {active && (
              <button onClick={reset} className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#d4ff3d] hover:underline">
                Clear filters
              </button>
            )}
            <span className="ml-auto text-xs text-white/40">
              Showing <span className="text-white font-semibold">{filtered.length}</span> of {leads.length}
            </span>
          </div>
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 mx-auto flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-lg font-bold mb-1">No leads match</div>
            <div className="text-sm text-white/40 mb-5">Try adjusting your search or filters.</div>
            <button onClick={reset} className="text-sm text-[#d4ff3d] hover:underline">Reset all filters</button>
          </div>
        ) : (
          <div className="space-y-2">
            {/* header row (desktop) */}
            <div className="hidden lg:grid grid-cols-12 gap-3 px-4 pb-2 text-[10px] uppercase tracking-widest text-white/30">
              <div className="col-span-2">Ref / Date</div>
              <div className="col-span-3">Contact</div>
              <div className="col-span-3">Services</div>
              <div className="col-span-2">Budget</div>
              <div className="col-span-2 text-right">Status</div>
            </div>

            <AnimatePresence initial={false}>
              {filtered.map((l, i) => (
                <motion.div
                  key={l.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(expanded === l.id ? null : l.id)}
                    className="w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 px-4 py-4 items-center"
                  >
                    <div className="lg:col-span-2">
                      <div className="font-mono text-xs text-[#d4ff3d]">{l.ref}</div>
                      <div className="text-[11px] text-white/35 mt-0.5">{timeAgo(l.createdAt)}</div>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="font-semibold text-sm">{l.name}</div>
                      <div className="text-xs text-white/45 truncate">{l.company || l.email}</div>
                    </div>
                    <div className="lg:col-span-3 flex flex-wrap gap-1">
                      {l.services.slice(0, 3).map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 border border-white/10">{s}</span>
                      ))}
                      {l.services.length > 3 && <span className="text-[10px] text-white/40">+{l.services.length - 3}</span>}
                    </div>
                    <div className="lg:col-span-2 text-sm text-white/70">{l.budget || "—"}</div>
                    <div className="lg:col-span-2 flex lg:justify-end items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${STATUS_META[l.status].chip}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_META[l.status].dot}`} />
                        {STATUS_META[l.status].label}
                      </span>
                      <motion.span animate={{ rotate: expanded === l.id ? 180 : 0 }} className="text-white/30">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expanded === l.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/10"
                      >
                        <div className="p-4 sm:p-5 grid md:grid-cols-3 gap-5 bg-white/[0.02]">
                          <div className="md:col-span-2">
                            <div className="text-[10px] uppercase tracking-widest text-white/35 mb-2">Brief</div>
                            <p className="text-sm text-white/75 leading-relaxed">{l.message || "No message provided."}</p>
                            <div className="grid grid-cols-2 gap-4 mt-5">
                              <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/35 mb-1">Email</div>
                                <a href={`mailto:${l.email}`} className="text-sm text-[#d4ff3d] hover:underline break-all">{l.email}</a>
                              </div>
                              <div>
                                <div className="text-[10px] uppercase tracking-widest text-white/35 mb-1">Submitted</div>
                                <div className="text-sm text-white/70">{fmtDate(l.createdAt)}</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] uppercase tracking-widest text-white/35 mb-2">Update status</div>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {(["new", "contacted", "won", "archived"] as LeadStatus[]).map((s) => (
                                <button
                                  key={s}
                                  onClick={() => setStatus(l.id, s)}
                                  className={`text-xs font-semibold py-2 rounded-lg border transition-all ${
                                    l.status === s ? STATUS_META[s].chip : "bg-white/5 border-white/10 text-white/50 hover:border-white/30"
                                  }`}
                                >
                                  {STATUS_META[s].label}
                                </button>
                              ))}
                            </div>
                            <button
                              onClick={() => removeLead(l.id)}
                              className="w-full text-xs font-semibold py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                              Delete lead
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Shell ---------------- */
export default function AdminModal() {
  const { adminOpen, setAdminOpen } = useLeads();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = adminOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [adminOpen]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setAdminOpen(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [setAdminOpen]);

  return (
    <AnimatePresence>
      {adminOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6"
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setAdminOpen(false)}
          />
          <motion.div
            initial={{ scale: 0.94, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl h-[92vh] sm:h-[88vh] bg-[#0b0b0f] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#d4ff3d]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative flex-1 flex flex-col min-h-0">
              {authed ? (
                <Dashboard onClose={() => setAdminOpen(false)} />
              ) : (
                <div className="flex-1 flex items-center justify-center overflow-y-auto">
                  <Login onOk={() => setAuthed(true)} />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
