import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora — Independent Digital Design Agency" },
      { name: "description", content: "Nexora is a creative studio building brands, sites and digital products with strategy, design and motion." },
      { property: "og:title", content: "Nexora — Independent Digital Design Agency" },
      { property: "og:description", content: "Nexora is a creative studio building brands, sites and digital products with strategy, design and motion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/images/hero-portrait.jpg", fetchPriority: "high" },
    ],
  }),
  component: Home,
});
