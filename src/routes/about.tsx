import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexora — The Studio Behind the Work" },
      { name: "description", content: "Meet the strategists, designers and engineers shaping Nexora's approach to brand and product work." },
      { property: "og:title", content: "About Nexora — The Studio Behind the Work" },
      { property: "og:description", content: "Meet the strategists, designers and engineers shaping Nexora's approach to brand and product work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});
