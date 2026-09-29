import { createFileRoute } from "@tanstack/react-router";
import { defaultClient } from "@/data/clients";
import { ClientProvider } from "@/context/ClientContext";
import { LandingPage } from "@/components/soul/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: defaultClient.title },
      { name: "description", content: defaultClient.description },
      { property: "og:title", content: defaultClient.title },
      { property: "og:description", content: defaultClient.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ClientProvider client={defaultClient}>
      <LandingPage />
    </ClientProvider>
  );
}
