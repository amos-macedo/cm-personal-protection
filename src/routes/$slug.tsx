import { createFileRoute } from "@tanstack/react-router";
import { getClientBySlug } from "@/data/clients";
import { ClientProvider } from "@/context/ClientContext";
import { LandingPage } from "@/components/soul/LandingPage";
import { ClientNotFound } from "@/components/soul/ClientNotFound";

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const client = getClientBySlug(params.slug);
    if (!client) {
      return {
        meta: [{ title: "Clínica não encontrada | 404" }],
      };
    }
    return {
      meta: [
        { title: client.title },
        { name: "description", content: client.description },
        { property: "og:title", content: client.title },
        { property: "og:description", content: client.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SlugComponent,
});

function SlugComponent() {
  const { slug } = Route.useParams();
  const client = getClientBySlug(slug);

  if (!client) {
    return <ClientNotFound />;
  }

  return (
    <ClientProvider client={client}>
      <LandingPage />
    </ClientProvider>
  );
}
