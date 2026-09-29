import { defaultClient } from "@/data/clients";
import { createSiteConfig } from "@/context/ClientContext";

export { useClient, type SiteConfig } from "@/context/ClientContext";
export { clients, defaultClient, type ClientData } from "@/data/clients";

const defaultSite = createSiteConfig(defaultClient);

export const WHATSAPP_NUMBER = defaultClient.whatsapp;
export const WHATSAPP_MESSAGE = defaultClient.whatsappMessage || "";
export const whatsappUrl = defaultSite.whatsappUrl;
export const site = defaultSite;

export const nav = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Antes e Depois", href: "#transformacoes" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Equipe", href: "#equipe" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
