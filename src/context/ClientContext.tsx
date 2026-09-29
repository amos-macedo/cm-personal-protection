import { createContext, useContext, type ReactNode } from "react";
import { type ClientData, defaultClient } from "@/data/clients";

export interface SiteConfig {
  name: string;
  tagline: string;
  title: string;
  description: string;
  city: string;
  phoneDisplay: string;
  phoneClean: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  addressStreet: string;
  addressComplement: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  fullAddress: string;
  hoursWeekday: string;
  hoursWeekend: string;
  rating: string;
  reviews: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  whatsappUrl: string;
  colors: ClientData["colors"];
}

export function createSiteConfig(client: ClientData): SiteConfig {
  const whatsappUrl = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(
    client.whatsappMessage || "Olá! Gostaria de conhecer a clínica e agendar uma avaliação.",
  )}`;

  return {
    name: client.name,
    tagline: client.tagline,
    title: client.title,
    description: client.description,
    city: client.address.cityState,
    phoneDisplay: client.phoneDisplay,
    phoneClean: client.whatsapp,
    email: `contato@${client.slug}.com.br`,
    instagramHandle: client.instagram,
    instagramUrl: client.instagramUrl,
    addressStreet: client.address.street,
    addressComplement: client.address.neighborhood,
    neighborhood: client.address.neighborhood,
    cityState: client.address.cityState,
    cep: client.address.cep,
    fullAddress: client.address.full,
    hoursWeekday: client.hoursWeekday || "Segunda a Sexta: 08h às 18h",
    hoursWeekend: client.hoursWeekend || "Sábado: Sob agendamento",
    rating: client.rating,
    reviews: client.reviews,
    googleMapsDirectionsUrl:
      client.googleMapsDirectionsUrl ||
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(client.address.full)}`,
    googleMapsEmbedUrl:
      client.googleMapsEmbedUrl ||
      `https://maps.google.com/maps?q=${encodeURIComponent(client.address.full)}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    whatsappUrl,
    colors: client.colors,
  };
}

export interface ClientContextValue {
  client: ClientData;
  site: SiteConfig;
  whatsappUrl: string;
}

const defaultSite = createSiteConfig(defaultClient);

export const ClientContext = createContext<ClientContextValue>({
  client: defaultClient,
  site: defaultSite,
  whatsappUrl: defaultSite.whatsappUrl,
});

export function ClientProvider({
  client,
  children,
}: {
  client: ClientData;
  children: ReactNode;
}) {
  const site = createSiteConfig(client);

  return (
    <ClientContext.Provider value={{ client, site, whatsappUrl: site.whatsappUrl }}>
      {/* Aplicação dinâmica e reativa das cores do cliente via variáveis CSS no :root */}
      <style>{`
        :root {
          --petrol: ${client.colors.petrol};
          --petrol-soft: ${client.colors.petrolSoft || client.colors.petrol};
          --sage: ${client.colors.sage};
          --sage-deep: ${client.colors.sageDeep};
          ${client.colors.bone ? `--bone: ${client.colors.bone};` : ""}
          ${client.colors.sand ? `--sand: ${client.colors.sand};` : ""}
          ${client.colors.clay ? `--clay: ${client.colors.clay};` : ""}
          ${client.colors.ink ? `--ink: ${client.colors.ink};` : ""}
          ${client.colors.graphite ? `--graphite: ${client.colors.graphite};` : ""}
        }
      `}</style>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient(): ClientContextValue {
  return useContext(ClientContext);
}
