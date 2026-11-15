export type Project = {
  slug: string;
  title: string;
  category: string;
  discipline: string[];
  year: string;
  client: string;
  location: string;
  duration: string;
  team: string;
  services: string[];
  img: string;
  gallery: string[];
  excerpt: string;
  color: string;
  accent: string;
  challenge: string;
  approach: string;
  outcome: string;
  results: { n: string; l: string }[];
  quote: { text: string; name: string; role: string };
  deliverables: string[];
  stack: string[];
};

const P = (s: string, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${s}/pexels-photo-${s}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const projects: Project[] = [
  {
    slug: "halden-studio",
    title: "Halden Studio",
    category: "Brand · Web",
    discipline: ["Brand", "Web"],
    year: "2025",
    client: "Halden Architecture",
    location: "New York, USA",
    duration: "10 weeks",
    team: "4 people",
    services: ["Brand Identity", "Website", "Art Direction", "Photography"],
    img: P("7078411"),
    gallery: [P("7078411"), "/images/brand-mockup.jpg", P("9845176"), "/images/creative-workspace.jpg"],
    excerpt: "A radical rebrand for a New York architecture studio bridging analog craft and digital rigor.",
    color: "from-amber-500/25",
    accent: "#f59e0b",
    challenge:
      "Halden had a 22-year portfolio of remarkable buildings and a brand that looked like a 2009 WordPress theme. Prospects couldn't tell them apart from three competitors on the same block, and the founders were personally rewriting every proposal deck from scratch.",
    approach:
      "We ran a two-week discovery: 14 stakeholder interviews, a competitive audit of 30 studios, and a full content inventory. That produced a single organising idea — 'Buildings that behave like landscapes' — which drove a typographic identity built on a custom-drawn serif, a monochrome palette punctuated by raw material photography, and a website designed as a curated exhibition rather than a portfolio dump.",
    outcome:
      "The new identity rolled out across web, print, signage and proposal templates. Inbound leads quadrupled within two quarters, and the studio has since been shortlisted for three AIA awards using the new collateral.",
    results: [
      { n: "4×", l: "Inbound leads" },
      { n: "312%", l: "Conversion lift" },
      { n: "62%", l: "Faster sales cycle" },
    ],
    quote: {
      text: "Nexora rebuilt our brand from the ground up and delivered a system our whole team can actually use. Sales cycles shortened noticeably within the first quarter.",
      name: "Elena Marchetti",
      role: "Managing Partner, Halden",
    },
    deliverables: ["Brand strategy", "Logotype & wordmark", "Custom serif", "Website (12 pages)", "Proposal system", "Signage spec"],
    stack: ["Next.js", "Sanity CMS", "Vercel", "GSAP"],
  },
  {
    slug: "kova-financial",
    title: "Kova Financial",
    category: "Product · Identity",
    discipline: ["Product", "Brand"],
    year: "2025",
    client: "Kova Inc.",
    location: "London, UK",
    duration: "16 weeks",
    team: "5 people",
    services: ["Product Design", "Identity", "Design System", "Motion"],
    img: P("9845176"),
    gallery: [P("9845176"), P("7181116"), "/images/abstract-shape.jpg", P("7181111")],
    excerpt: "Consumer-friendly banking product with a warm, human interface language.",
    color: "from-blue-500/25",
    accent: "#3b82f6",
    challenge:
      "Kova had strong engineering but no design leadership. The app worked, but felt like a spreadsheet with rounded corners. Churn in the first 30 days sat at 41% and the team had no shared design language.",
    approach:
      "We embedded with their product team for four months. First we built a design system from first principles — 240 tokens, 48 components, full dark mode. Then we redesigned the three flows that mattered most: onboarding, first transfer, and the savings dashboard. Everything was prototyped and tested with 22 real users before a single line of production code.",
    outcome:
      "30-day churn dropped from 41% to 17%. The design system is now maintained by Kova's own team and has shipped 60+ features without our involvement — exactly the outcome we design for.",
    results: [
      { n: "−58%", l: "30-day churn" },
      { n: "2.4×", l: "Activation rate" },
      { n: "48", l: "System components" },
    ],
    quote: {
      text: "The most senior team we've ever worked with. They pushed back where it mattered and delivered work that made our board pay attention.",
      name: "David Chen",
      role: "Founder & CEO, Kova",
    },
    deliverables: ["Design system", "iOS & Android UI", "Onboarding flow", "Motion spec", "Brand refresh", "Figma library"],
    stack: ["Figma", "React Native", "Storybook", "Rive"],
  },
  {
    slug: "meridian-coffee",
    title: "Meridian Coffee",
    category: "Packaging · Brand",
    discipline: ["Brand", "Packaging"],
    year: "2024",
    client: "Meridian Roasters",
    location: "Lisbon, Portugal",
    duration: "8 weeks",
    team: "3 people",
    services: ["Brand", "Packaging", "E-commerce", "Photography"],
    img: P("8532943"),
    gallery: [P("8532943"), "/images/brand-mockup.jpg", P("11741328"), P("8148722")],
    excerpt: "Specialty coffee brand built around single-origin storytelling and typographic identity.",
    color: "from-orange-500/25",
    accent: "#f97316",
    challenge:
      "Meridian roasted some of the best coffee in Portugal and sold it in unbranded kraft bags. On a shelf next to well-designed competitors they were invisible, and their online store converted at 0.8%.",
    approach:
      "We built the identity around the coordinates of each origin farm — a typographic system where the meridian line becomes the visual signature. Twelve SKUs, each with its own colour derived from the roast profile. We shot all photography in-house and rebuilt the Shopify store around a 'meet the farm' narrative.",
    outcome:
      "Meridian is now stocked in 140 cafés across Iberia. Online conversion went from 0.8% to 3.4%, and average order value rose 41% as customers began buying multi-origin bundles.",
    results: [
      { n: "4.2×", l: "Online conversion" },
      { n: "+41%", l: "Avg order value" },
      { n: "140", l: "Retail stockists" },
    ],
    quote: {
      text: "We went from a bag people ignored to a bag people photograph. That's the whole story.",
      name: "Tomás Ferreira",
      role: "Founder, Meridian",
    },
    deliverables: ["Brand identity", "12 SKU packaging", "Shopify store", "Product photography", "Café collateral"],
    stack: ["Shopify", "Liquid", "Klaviyo", "Illustrator"],
  },
  {
    slug: "nomad-os",
    title: "Nomad OS",
    category: "SaaS · Product",
    discipline: ["Product", "Web"],
    year: "2024",
    client: "Nomad Labs",
    location: "Remote",
    duration: "14 weeks",
    team: "5 people",
    services: ["Product Design", "Web App", "Marketing Site", "Brand"],
    img: P("7181116"),
    gallery: [P("7181116"), P("7181109"), "/images/creative-workspace.jpg", P("7181111")],
    excerpt: "A distributed operating system for remote-first companies, from onboarding to office day.",
    color: "from-purple-500/25",
    accent: "#a855f7",
    challenge:
      "Nomad had product-market fit but a marketing site that explained nothing. Visitors bounced at 78% and the sales team spent every demo re-explaining the core concept from scratch.",
    approach:
      "We rewrote the entire narrative around a single question — 'What if your company had an operating system?' Then we built an interactive product tour into the homepage so visitors could experience the product before signing up. Every section was designed to answer one objection, in order.",
    outcome:
      "Bounce rate fell to 34%, demo requests tripled, and the sales team now opens calls with 'so you've seen the tour' instead of a 20-minute explainer.",
    results: [
      { n: "3×", l: "Demo requests" },
      { n: "−56%", l: "Bounce rate" },
      { n: "94", l: "Lighthouse score" },
    ],
    quote: {
      text: "From strategy to launch, everything felt considered. Our new site converts three times better and finally reflects the company we've become.",
      name: "Sofia Reyes",
      role: "Head of Growth, Nomad OS",
    },
    deliverables: ["Marketing site", "Interactive tour", "App UI refresh", "Brand narrative", "Component library"],
    stack: ["Next.js", "Framer Motion", "Tailwind", "Contentful"],
  },
  {
    slug: "vela-fashion",
    title: "Vela Fashion",
    category: "E-commerce · Brand",
    discipline: ["Brand", "Web"],
    year: "2024",
    client: "Vela Studio",
    location: "Milan, Italy",
    duration: "9 weeks",
    team: "4 people",
    services: ["Brand", "Shopify", "Campaign", "Art Direction"],
    img: P("33469928"),
    gallery: [P("33469928"), "/images/hero-portrait.jpg", P("11741328"), "/images/brand-mockup.jpg"],
    excerpt: "Minimalist fashion label with a fully custom Shopify build and editorial launch campaign.",
    color: "from-pink-500/25",
    accent: "#ec4899",
    challenge:
      "A capsule label launching with 11 pieces and no existing audience. They needed a brand that felt established from day one and a store that could handle a launch-day surge without falling over.",
    approach:
      "Editorial-first. We treated the store as a magazine — full-bleed photography, oversized type, no product grid on the homepage. The identity is a single custom ligature that appears on every garment label. We shot the launch campaign in a disused Milan tram depot over two days.",
    outcome:
      "Sold out the entire first drop in 11 days. The campaign was picked up by three fashion publications and the brand now has a 34,000-strong mailing list built entirely from launch traffic.",
    results: [
      { n: "11 days", l: "To sell out drop 01" },
      { n: "34k", l: "Email list built" },
      { n: "6.1%", l: "Store conversion" },
    ],
    quote: {
      text: "A real partner, not a vendor. They stayed with us through launch and were still shipping fixes at midnight the day we went live.",
      name: "Marcus Bello",
      role: "Co-founder, Vela",
    },
    deliverables: ["Brand identity", "Custom Shopify theme", "Launch campaign", "Lookbook", "Email templates"],
    stack: ["Shopify Hydrogen", "React", "Klaviyo", "Cloudinary"],
  },
  {
    slug: "orbital-labs",
    title: "Orbital Labs",
    category: "Product · Motion",
    discipline: ["Motion", "Web", "Product"],
    year: "2024",
    client: "Orbital Labs",
    location: "Tokyo, Japan",
    duration: "12 weeks",
    team: "5 people",
    services: ["Web Design", "3D", "Motion", "Development"],
    img: P("8148722"),
    gallery: ["/images/abstract-shape.jpg", P("8148722"), P("9845176"), P("7078411")],
    excerpt: "An interactive marketing site for a space-tech startup, featuring WebGL and cinematic motion.",
    color: "from-indigo-500/25",
    accent: "#6366f1",
    challenge:
      "Orbital builds satellite constellation software. Their pitch was brilliant in a room and incomprehensible on a screen. They needed a site that made an abstract technical product feel tangible to non-engineer investors.",
    approach:
      "We built a real-time WebGL orbit viewer as the homepage hero — visitors can drag to rotate an accurate constellation model and click any satellite to see live telemetry. Everything else on the page is quiet by comparison, which makes the interaction land harder.",
    outcome:
      "The site became their primary fundraising asset. It won FWA Site of the Day, and their Series B deck now opens by simply loading the homepage on screen.",
    results: [
      { n: "FWA", l: "Site of the Day" },
      { n: "5m 12s", l: "Avg session time" },
      { n: "$40M", l: "Series B raised" },
    ],
    quote: {
      text: "They turned the hardest part of our pitch into the easiest. Investors get it in ten seconds now.",
      name: "Priya Nair",
      role: "CTO, Orbital Labs",
    },
    deliverables: ["Marketing site", "WebGL orbit viewer", "Motion system", "3D asset pipeline", "Investor microsite"],
    stack: ["Three.js", "React Three Fiber", "GLSL", "Next.js"],
  },
  {
    slug: "atlas-health",
    title: "Atlas Health",
    category: "Product · Brand",
    discipline: ["Product", "Brand"],
    year: "2023",
    client: "Atlas Medical Group",
    location: "Berlin, Germany",
    duration: "18 weeks",
    team: "6 people",
    services: ["Product Design", "Brand", "Design System", "Research"],
    img: P("7181111"),
    gallery: [P("7181111"), P("7181109"), "/images/creative-workspace.jpg", P("7181116")],
    excerpt: "Patient-first healthcare platform serving 400,000 people across the DACH region.",
    color: "from-teal-500/25",
    accent: "#14b8a6",
    challenge:
      "Atlas served 400,000 patients through an interface built in 2011. Older users abandoned appointment booking at 67%, and the support team fielded 900 calls a week that the product should have handled.",
    approach:
      "Accessibility-led design. We ran usability sessions with patients aged 58–84, redesigned every flow to WCAG AAA, and introduced a plain-language content system reviewed by a clinical linguist. Type scales up to 24px base. Nothing relies on colour alone.",
    outcome:
      "Booking abandonment dropped to 19%. Support call volume fell by two-thirds. The platform is now the reference accessibility case study for German digital health procurement.",
    results: [
      { n: "−72%", l: "Booking abandonment" },
      { n: "−66%", l: "Support calls" },
      { n: "AAA", l: "WCAG compliance" },
    ],
    quote: {
      text: "They designed for our hardest users first, and everyone else benefited. That reframing changed how we build.",
      name: "Dr. Ines Krüger",
      role: "Chief Digital Officer, Atlas",
    },
    deliverables: ["Accessible design system", "Patient portal", "Clinician dashboard", "Content guidelines", "Research report"],
    stack: ["Figma", "Vue 3", "Nuxt", "Axe DevTools"],
  },
  {
    slug: "forge-collective",
    title: "Forge Collective",
    category: "Brand · Motion",
    discipline: ["Brand", "Motion"],
    year: "2023",
    client: "Forge Collective",
    location: "Los Angeles, USA",
    duration: "7 weeks",
    team: "3 people",
    services: ["Brand Identity", "Motion", "Brand Film", "Sonic"],
    img: P("11741328"),
    gallery: [P("11741328"), "/images/abstract-shape.jpg", P("8148722"), "/images/brand-mockup.jpg"],
    excerpt: "A kinetic identity for a creative talent collective — built to move before it ever sits still.",
    color: "from-rose-500/25",
    accent: "#f43f5e",
    challenge:
      "Forge represents 40 directors, photographers and animators. A static logo was never going to work — the brand needed to feel like the work it represents while staying coherent across 40 wildly different portfolios.",
    approach:
      "We designed the identity in After Effects before Illustrator. The mark is a kinetic system: a set of rules for how forms deform, collide and settle. Every artist gets a generated variant seeded from their name. We also commissioned a three-note sonic logo.",
    outcome:
      "The identity has appeared on every Forge title card since launch. Roster applications rose 5× in the first quarter, and the system has generated over 400 unique artist marks without manual design work.",
    results: [
      { n: "5×", l: "Roster applications" },
      { n: "400+", l: "Generated variants" },
      { n: "3", l: "Design awards" },
    ],
    quote: {
      text: "They gave us a brand that behaves like our work — restless, precise, never the same twice.",
      name: "Jordan Reyes",
      role: "Executive Producer, Forge",
    },
    deliverables: ["Kinetic identity", "Generative mark system", "Brand film (90s)", "Sonic logo", "Motion guidelines"],
    stack: ["After Effects", "Houdini", "Cavalry", "p5.js"],
  },
];

export const services = [
  { n: "01", title: "Brand Identity", desc: "Naming, logos, visual systems and guidelines that scale from a card to a billboard.", tags: ["Logo", "Guidelines", "Naming", "Voice"] },
  { n: "02", title: "Web Design & Dev", desc: "Marketing sites, ecommerce and web apps engineered for speed, SEO and conversions.", tags: ["Next.js", "Shopify", "Webflow", "Framer"] },
  { n: "03", title: "Product Design", desc: "UX research, design systems and interfaces for SaaS products people love using.", tags: ["UX", "UI", "Systems"] },
  { n: "04", title: "Motion & 3D", desc: "Cinematic brand films, product animations and interactive 3D experiences for the modern web.", tags: ["After Effects", "Blender", "WebGL"] },
  { n: "05", title: "Digital Marketing", desc: "Content, paid campaigns and marketing automation that turn attention into revenue.", tags: ["SEO", "Paid", "Content"] },
  { n: "06", title: "Creative Direction", desc: "Long-term partnerships to lead your creative output — campaigns, launches and culture.", tags: ["Retainer", "Advisory"] },
];

export const team = [
  { name: "Amara Okafor", role: "Founder & Creative Director", img: "https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=650", bio: "15 years across brand and product. Previously Pentagram, Wolff Olins.", tags: ["Brand", "Strategy"] },
  { name: "Julian Voss", role: "Design Partner", img: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=650", bio: "Typographer turned product lead. Obsessive about spacing and states.", tags: ["Product", "Type"] },
  { name: "Riya Malhotra", role: "Head of Strategy", img: "https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=650", bio: "Ex-consultant who defected to the creative side. Runs every discovery.", tags: ["Strategy", "Research"] },
  { name: "Marcus Bello", role: "Engineering Lead", img: "https://images.pexels.com/photos/10836222/pexels-photo-10836222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=650", bio: "Ships fast, deletes faster. Cares deeply about Lighthouse scores.", tags: ["Next.js", "WebGL"] },
];

export const posts = [
  { slug: "end-of-templates", tag: "Design", date: "Feb 12, 2026", title: "The end of the template era: bespoke is winning again", read: "6 min", img: P("8148722", 900, 600) },
  { slug: "brand-brief", tag: "Strategy", date: "Jan 28, 2026", title: "How to write a brand brief that actually gets used", read: "8 min", img: P("11741328", 900, 600) },
  { slug: "next-15-notes", tag: "Engineering", date: "Jan 09, 2026", title: "We shipped 12 sites on Next.js 15 — here's what changed", read: "5 min", img: P("7181111", 900, 600) },
  { slug: "motion-basics", tag: "Motion", date: "Dec 18, 2025", title: "Motion principles every designer should learn in a weekend", read: "7 min", img: P("7078411", 900, 600) },
  { slug: "shopify-2026", tag: "E-commerce", date: "Dec 04, 2025", title: "Shopify in 2026: what's actually worth building custom", read: "9 min", img: P("8532943", 900, 600) },
  { slug: "hiring-well", tag: "Culture", date: "Nov 22, 2025", title: "Hiring well when you're a small studio", read: "4 min", img: P("7181116", 900, 600) },
];
