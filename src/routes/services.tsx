import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Brand, Web & Product Design | Nexora" },
      { name: "description", content: "Brand identity, web design, motion and product engineering services built for ambitious teams." },
      { property: "og:title", content: "Services — Brand, Web & Product Design | Nexora" },
      { property: "og:description", content: "Brand identity, web design, motion and product engineering services built for ambitious teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});
