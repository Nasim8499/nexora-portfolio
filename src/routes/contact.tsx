import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nexora — Start a Project" },
      { name: "description", content: "Tell us about your project. We reply within one business day and scope work fast." },
      { property: "og:title", content: "Contact Nexora — Start a Project" },
      { property: "og:description", content: "Tell us about your project. We reply within one business day and scope work fast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});
