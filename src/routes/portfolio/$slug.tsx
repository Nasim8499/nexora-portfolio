import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/pages/CaseStudy";

export const Route = createFileRoute("/portfolio/$slug")({
  head: () => ({
    meta: [
      { title: "Case Study — Nexora Work" },
      { name: "description", content: "An in-depth look at the strategy, design and results behind a Nexora client project." },
      { property: "og:title", content: "Case Study — Nexora Work" },
      { property: "og:description", content: "An in-depth look at the strategy, design and results behind a Nexora client project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});
