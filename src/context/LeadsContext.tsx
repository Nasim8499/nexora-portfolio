import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LeadStatus = "new" | "contacted" | "won" | "archived";

export type Lead = {
  id: string;
  ref: string;
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
};

const KEY = "nexora_leads_v1";

const BUDGET_VALUE: Record<string, number> = {
  "< $25k": 18000,
  "$25k – $50k": 37500,
  "$50k – $100k": 75000,
  "$100k+": 140000,
};

const seed: Lead[] = [
  {
    id: "ld_1041",
    ref: "NX-1041",
    name: "Elena Marchetti",
    email: "elena@haldenstudio.com",
    company: "Halden Studio",
    services: ["Brand", "Website"],
    budget: "$50k – $100k",
    message:
      "We're rebranding ahead of our Series A and need a full identity plus a new marketing site. Timeline is tight — hoping to launch in Q2.",
    status: "won",
    createdAt: new Date(Date.now() - 86400000 * 26).toISOString(),
  },
  {
    id: "ld_1042",
    ref: "NX-1042",
    name: "David Chen",
    email: "d.chen@kovafinancial.io",
    company: "Kova Financial",
    services: ["Product", "Brand"],
    budget: "$100k+",
    message:
      "Consumer banking app. We have engineering but no design leadership. Looking for a long-term product design partner.",
    status: "contacted",
    createdAt: new Date(Date.now() - 86400000 * 14).toISOString(),
  },
  {
    id: "ld_1043",
    ref: "NX-1043",
    name: "Sofia Reyes",
    email: "sofia@nomados.app",
    company: "Nomad OS",
    services: ["Website", "Motion"],
    budget: "$25k – $50k",
    message:
      "Marketing site refresh with some 3D hero moments. Our current site converts terribly and looks five years old.",
    status: "contacted",
    createdAt: new Date(Date.now() - 86400000 * 9).toISOString(),
  },
  {
    id: "ld_1044",
    ref: "NX-1044",
    name: "Marcus Bello",
    email: "marcus@velafashion.co",
    company: "Vela Fashion",
    services: ["Brand", "Marketing"],
    budget: "< $25k",
    message:
      "Small capsule label launching this autumn. Need packaging, a Shopify theme and a launch campaign.",
    status: "new",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "ld_1045",
    ref: "NX-1045",
    name: "Priya Nair",
    email: "priya@orbitallabs.space",
    company: "Orbital Labs",
    services: ["Motion", "Website", "Product"],
    budget: "$100k+",
    message:
      "Space-tech startup. We want something genuinely cinematic — WebGL, interactive orbit viewer, the works.",
    status: "new",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "ld_1046",
    ref: "NX-1046",
    name: "Tomás Ferreira",
    email: "tomas@meridiancoffee.pt",
    company: "Meridian Coffee",
    services: ["Not sure"],
    budget: "< $25k",
    message: "Exploring options for a packaging refresh. Early stage, just gathering quotes.",
    status: "archived",
    createdAt: new Date(Date.now() - 86400000 * 41).toISOString(),
  },
];

type Ctx = {
  leads: Lead[];
  addLead: (l: Omit<Lead, "id" | "ref" | "status" | "createdAt">) => Lead;
  setStatus: (id: string, s: LeadStatus) => void;
  removeLead: (id: string) => void;
  unseen: number;
  markAllSeen: () => void;
  pulse: boolean;
  pipeline: number;
  adminOpen: boolean;
  setAdminOpen: (v: boolean) => void;
};

const LeadsContext = createContext<Ctx | null>(null);

export function LeadsProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>(seed);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLeads(JSON.parse(raw) as Lead[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);
  const [unseen, setUnseen] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(leads));
    } catch {
      /* ignore */
    }
  }, [leads, hydrated]);

  const addLead: Ctx["addLead"] = useCallback((data) => {
    const num = 1047 + Math.floor(Math.random() * 900);
    const lead: Lead = {
      ...data,
      id: `ld_${Date.now()}`,
      ref: `NX-${num}`,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    setLeads((p) => [lead, ...p]);
    setUnseen((n) => n + 1);
    setPulse(true);
    setTimeout(() => setPulse(false), 6000);
    return lead;
  }, []);

  const setStatus = useCallback((id: string, s: LeadStatus) => {
    setLeads((p) => p.map((l) => (l.id === id ? { ...l, status: s } : l)));
  }, []);

  const removeLead = useCallback((id: string) => {
    setLeads((p) => p.filter((l) => l.id !== id));
  }, []);

  const markAllSeen = useCallback(() => setUnseen(0), []);

  const pipeline = useMemo(
    () =>
      leads
        .filter((l) => l.status === "new" || l.status === "contacted")
        .reduce((sum, l) => sum + (BUDGET_VALUE[l.budget] ?? 0), 0),
    [leads]
  );

  const value: Ctx = {
    leads,
    addLead,
    setStatus,
    removeLead,
    unseen,
    markAllSeen,
    pulse,
    pipeline,
    adminOpen,
    setAdminOpen,
  };

  return <LeadsContext.Provider value={value}>{children}</LeadsContext.Provider>;
}

export function useLeads() {
  const c = useContext(LeadsContext);
  if (!c) throw new Error("useLeads must be used inside LeadsProvider");
  return c;
}

export { BUDGET_VALUE };
