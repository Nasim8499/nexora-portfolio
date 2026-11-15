import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Reveal, SplitText, motion } from "../lib/motion";
import FAQ from "../components/sections/FAQ";
import { useLeads, type Lead } from "../context/LeadsContext";

const budgets = ["< $25k", "$25k – $50k", "$50k – $100k", "$100k+"];
const svcs = ["Brand", "Website", "Product", "Motion", "Marketing", "Not sure"];

export default function Contact() {
  const { addLead, setAdminOpen, leads } = useLeads();
  const [sent, setSent] = useState<Lead | null>(null);
  const [busy, setBusy] = useState(false);
  const [f, setF] = useState({ name: "", email: "", company: "", message: "" });
  const [svc, setSvc] = useState<string[]>([]);
  const [bud, setBud] = useState("");

  const toggle = (s: string) => setSvc(svc.includes(s) ? svc.filter((x) => x !== s) : [...svc, s]);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      const lead = addLead({
        name: f.name,
        email: f.email,
        company: f.company,
        services: svc.length ? svc : ["Not sure"],
        budget: bud || "< $25k",
        message: f.message,
      });
      setSent(lead);
      setBusy(false);
    }, 900);
  };

  const reset = () => {
    setSent(null);
    setF({ name: "", email: "", company: "", message: "" });
    setSvc([]);
    setBud("");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        subtitle="Tell us a little about your project and we'll reply within one business day. Every brief syncs straight into our lead console."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form / success */}
          <div className="lg:col-span-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden bg-[#0b0b0f] text-white rounded-3xl p-8 sm:p-12"
              >
                <div className="absolute inset-0 bg-grid-dark opacity-25" />
                <motion.div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#d4ff3d]/20 blur-3xl"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="relative text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="w-20 h-20 rounded-full bg-[#d4ff3d] mx-auto flex items-center justify-center mb-6"
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0b0b0f" strokeWidth="3">
                      <motion.path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                      />
                    </svg>
                  </motion.div>

                  <h3 className="text-3xl sm:text-5xl font-black mb-3">Brief received.</h3>
                  <p className="text-white/60 max-w-md mx-auto mb-8">
                    Thanks {sent.name.split(" ")[0] || "there"} — a partner reads every message. Expect a reply within one business day.
                  </p>

                  {/* Live sync receipt */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-8"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex w-2.5 h-2.5">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-[#d4ff3d] opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#d4ff3d]" />
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#d4ff3d] font-bold">Synced live</span>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/15" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-widest text-white/40">Reference</div>
                      <div className="font-mono text-sm text-white">{sent.ref}</div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/15" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-widest text-white/40">Queue position</div>
                      <div className="font-mono text-sm text-white">#{leads.length} of {leads.length}</div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setAdminOpen(true)}
                      className="inline-flex items-center gap-2 bg-[#d4ff3d] text-[#0b0b0f] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
                    >
                      View in lead console
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button onClick={reset} className="text-sm text-white/60 hover:text-white underline underline-offset-4">
                      Submit another brief
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="bg-[#f4f1ea] rounded-3xl p-6 sm:p-10 lg:p-12 space-y-7">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-black/50">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                  </span>
                  Live intake · syncs to console instantly
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-2">Your name *</label>
                    <input required value={f.name} onChange={set("name")} className="w-full bg-transparent border-b-2 border-black/20 focus:border-[#0b0b0f] outline-none py-2.5 text-lg font-medium" placeholder="Jane Cooper" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-2">Email *</label>
                    <input type="email" required value={f.email} onChange={set("email")} className="w-full bg-transparent border-b-2 border-black/20 focus:border-[#0b0b0f] outline-none py-2.5 text-lg font-medium" placeholder="jane@company.com" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-2">Company</label>
                  <input value={f.company} onChange={set("company")} className="w-full bg-transparent border-b-2 border-black/20 focus:border-[#0b0b0f] outline-none py-2.5 text-lg font-medium" placeholder="Cooper & Co." />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-3">Services needed</label>
                  <div className="flex flex-wrap gap-2">
                    {svcs.map((s) => (
                      <motion.button
                        type="button"
                        key={s}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => toggle(s)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          svc.includes(s) ? "bg-[#0b0b0f] text-white" : "bg-white text-black border border-black/10 hover:border-black/40"
                        }`}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-3">Budget range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <motion.button
                        type="button"
                        key={b}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => setBud(b)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          bud === b ? "bg-[#d4ff3d] text-black" : "bg-white text-black border border-black/10 hover:border-black/40"
                        }`}
                      >
                        {b}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-black/50 block mb-2">Tell us about your project</label>
                  <textarea rows={5} value={f.message} onChange={set("message")} className="w-full bg-transparent border-b-2 border-black/20 focus:border-[#0b0b0f] outline-none py-2.5 text-base resize-none" placeholder="A few sentences is fine…" />
                </div>

                <button
                  disabled={busy}
                  className="inline-flex items-center gap-3 bg-[#0b0b0f] text-white pl-7 pr-2.5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#d4ff3d] hover:text-[#0b0b0f] transition-colors disabled:opacity-60"
                >
                  {busy ? "Sending…" : "Send brief"}
                  <span className="w-10 h-10 rounded-full bg-[#d4ff3d] text-[#0b0b0f] flex items-center justify-center">
                    {busy ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-[#0b0b0f] border-t-transparent rounded-full"
                      />
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal>
              <div className="bg-[#0b0b0f] text-white rounded-3xl p-7">
                <div className="text-[10px] uppercase tracking-widest text-[#d4ff3d] mb-3">Direct</div>
                <h4 className="text-2xl sm:text-3xl font-black mb-3">
                  <SplitText text="Skip the form." />
                </h4>
                <p className="text-white/60 mb-5 leading-relaxed text-sm">A partner reads every message.</p>
                <a href="mailto:hello@nexora.studio" className="text-lg font-semibold text-[#d4ff3d] hover:underline break-all">hello@nexora.studio</a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-black/50">Console status</div>
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                  </span>
                </div>
                <div className="text-4xl font-black">{leads.length}</div>
                <div className="text-sm text-black/50 mt-1 mb-4">Total briefs in queue</div>
                <button onClick={() => setAdminOpen(true)} className="w-full text-xs font-bold uppercase tracking-wider bg-[#f4f1ea] hover:bg-[#0b0b0f] hover:text-white py-3 rounded-full transition-colors">
                  Open lead console
                </button>
              </div>
            </Reveal>

            {[
              { c: "New York", a: "221 Broome St, NY 10002", t: "+1 (212) 555 — 0198" },
              { c: "London", a: "12 Redchurch St, E2 7DP", t: "+44 20 7946 0123" },
              { c: "Lisbon", a: "R. da Boavista 88, 1200-070", t: "+351 21 456 7890" },
              { c: "Tokyo", a: "3-1-1 Nishi-Shibuya, 150-0043", t: "+81 3 6432 1234" },
            ].map((o, i) => (
              <Reveal key={o.c} delay={0.15 + i * 0.05}>
                <div className="border-t border-black/10 pt-4">
                  <div className="text-[10px] uppercase tracking-widest text-black/50 mb-1.5">{o.c}</div>
                  <div className="text-sm text-black/70">{o.a}</div>
                  <div className="text-sm text-black/70 mt-0.5">{o.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
