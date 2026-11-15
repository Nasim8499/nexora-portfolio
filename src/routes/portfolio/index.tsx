import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/pages/Portfolio";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Work — Selected Projects by Nexora" },
      { name: "description", content: "A selected portfolio of brand identities, websites and digital products designed and built by Nexora." },
      { property: "og:title", content: "Work — Selected Projects by Nexora" },
      { property: "og:description", content: "A selected portfolio of brand identities, websites and digital products designed and built by Nexora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
