import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Notes on Design & Craft | Nexora" },
      { name: "description", content: "Essays and field notes on branding, design systems, motion and building on the web." },
      { property: "og:title", content: "Journal — Notes on Design & Craft | Nexora" },
      { property: "og:description", content: "Essays and field notes on branding, design systems, motion and building on the web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});
