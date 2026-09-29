export interface ClientAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  cityState: string;
  cep: string;
  full: string;
}

export interface ClientColors {
  petrol: string; // Tom escuro primário da marca
  petrolSoft?: string; // Tom escuro intermediário
  sage: string; // Tom de destaque / acento
  sageDeep: string; // Tom de destaque escuro
  bone?: string; // Tom de fundo principal
  sand?: string; // Tom de fundo secundário
  clay?: string; // Superfície neutra / cartões
  ink?: string; // Cor principal de tipografia
  graphite?: string; // Cor secundária de tipografia
}

export interface ClientData {
  slug: string;
  name: string;
  tagline: string;
  title: string;
  description: string;
  logo?: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // apenas dígitos com DDI e DDD
  whatsappMessage?: string;
  instagram: string;
  instagramUrl: string;
  address: ClientAddress;
  hoursWeekday: string;
  hoursWeekend: string;
  rating: string;
  reviews: string;
  googleMapsDirectionsUrl?: string;
  googleMapsEmbedUrl?: string;
  colors: ClientColors;
}

export const clients: Record<string, ClientData> = {
  soulencanto: {
    slug: "soulencanto",
    name: "Soul'Encanto",
    tagline: "Consultório Odontológico",
    title: "Soul'Encanto — Consultório Odontológico em Campina Grande",
    description:
      "Odontologia de excelência com propósito em Campina Grande - PB. Estética dental, implantes, facetas, ortodontia e uma experiência acolhedora e personalizada.",
    logo: "/logo.svg",
    phone: "(83) 98224-9995",
    phoneDisplay: "(83) 98224-9995",
    whatsapp: "5583982249995",
    whatsappMessage: "Olá! Gostaria de conhecer a Soul'Encanto e agendar uma avaliação.",
    instagram: "@soulencanto.odonto",
    instagramUrl: "https://instagram.com/soulencanto.odonto",
    address: {
      street: "R. Duque de Caxias, 523",
      neighborhood: "Prata",
      city: "Campina Grande",
      state: "PB",
      cityState: "Campina Grande — PB",
      cep: "58400-506",
      full: "R. Duque de Caxias, 523 — Prata, Campina Grande - PB, CEP: 58400-506",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 19h",
    hoursWeekend: "Sábado: 08h às 12h",
    rating: "4,9",
    reviews: "+180 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=R.+Duque+de+Caxias,+523+-+Prata,+Campina+Grande+-+PB,+58400-506",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=R.+Duque+de+Caxias,+523+-+Prata,+Campina+Grande+-+PB,+58400-506&t=&z=16&ie=UTF8&iwloc=&output=embed",
    colors: {
      petrol: "oklch(0.258 0.039 212)",
      petrolSoft: "oklch(0.355 0.042 210)",
      sage: "oklch(0.795 0.031 148)",
      sageDeep: "oklch(0.545 0.043 152)",
      bone: "oklch(0.973 0.008 85)",
      sand: "oklch(0.928 0.018 82)",
      clay: "oklch(0.868 0.026 78)",
      graphite: "oklch(0.39 0.008 260)",
      ink: "oklch(0.205 0.01 250)",
    },
  },

  "cliente-a": {
    slug: "cliente-a",
    name: "Odonto Alpha",
    tagline: "Clínica Integrada & Estética Oral",
    title: "Odonto Alpha — Odontologia de Alta Performance",
    description:
      "Referência em lentes cerâmicas, cirurgia guiada e reabilitação oral estética em Campina Grande - PB.",
    logo: "/logo.svg",
    phone: "(83) 98888-1111",
    phoneDisplay: "(83) 98888-1111",
    whatsapp: "5583988881111",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Odonto Alpha.",
    instagram: "@odontoalpha.cg",
    instagramUrl: "https://instagram.com/odontoalpha.cg",
    address: {
      street: "Av. Manoel Tavares, 1200",
      neighborhood: "Alto Branco",
      city: "Campina Grande",
      state: "PB",
      cityState: "Campina Grande — PB",
      cep: "58401-500",
      full: "Av. Manoel Tavares, 1200 — Alto Branco, Campina Grande - PB, CEP: 58401-500",
    },
    hoursWeekday: "Segunda a Sexta: 07h30 às 19h30",
    hoursWeekend: "Sábado: 08h às 13h",
    rating: "5,0",
    reviews: "+220 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Av.+Manoel+Tavares,+1200+-+Campina+Grande+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Av.+Manoel+Tavares,+1200+-+Alto+Branco,+Campina+Grande+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
    // Identidade Visual Azul Safira & Gelo Editorial
    colors: {
      petrol: "oklch(0.25 0.065 255)",
      petrolSoft: "oklch(0.35 0.07 250)",
      sage: "oklch(0.80 0.04 220)",
      sageDeep: "oklch(0.48 0.075 250)",
      bone: "oklch(0.98 0.005 240)",
      sand: "oklch(0.935 0.015 240)",
      clay: "oklch(0.875 0.022 235)",
      graphite: "oklch(0.38 0.012 260)",
      ink: "oklch(0.18 0.018 255)",
    },
  },

  "cliente-b": {
    slug: "cliente-b",
    name: "Studio Dental Bela Vista",
    tagline: "Harmonia & Arquitetura do Sorriso",
    title: "Studio Dental Bela Vista — Sorrisos Naturais e Harmoniosos",
    description:
      "Excelência em clareamento biológico, lentes de contato e harmonização orofacial em João Pessoa - PB.",
    logo: "/logo.svg",
    phone: "(83) 97777-2222",
    phoneDisplay: "(83) 97777-2222",
    whatsapp: "5583977772222",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação no Studio Dental Bela Vista.",
    instagram: "@studiodentalbv",
    instagramUrl: "https://instagram.com/studiodentalbv",
    address: {
      street: "Av. Gov. Flávio Ribeiro Coutinho, 500",
      neighborhood: "Manaíra",
      city: "João Pessoa",
      state: "PB",
      cityState: "João Pessoa — PB",
      cep: "58037-000",
      full: "Av. Gov. Flávio Ribeiro Coutinho, 500 — Manaíra, João Pessoa - PB, CEP: 58037-000",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 20h",
    hoursWeekend: "Sábado: 08h às 14h",
    rating: "4,9",
    reviews: "+150 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Av.+Gov.+Flavio+Ribeiro+Coutinho,+500+-+Manaira,+Joao+Pessoa+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Av.+Gov.+Flavio+Ribeiro+Coutinho,+500+-+Manaira,+Joao+Pessoa+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
    // Identidade Visual Verde Esmeralda & Champanhe Dourado
    colors: {
      petrol: "oklch(0.24 0.045 155)",
      petrolSoft: "oklch(0.33 0.05 155)",
      sage: "oklch(0.81 0.045 105)",
      sageDeep: "oklch(0.50 0.06 130)",
      bone: "oklch(0.978 0.008 95)",
      sand: "oklch(0.932 0.016 90)",
      clay: "oklch(0.88 0.022 85)",
      graphite: "oklch(0.38 0.01 100)",
      ink: "oklch(0.18 0.012 140)",
    },
  },
};

export const defaultClient: ClientData = clients["soulencanto"]!;

/**
 * Busca segura por slug:
 * Sanitiza o input permitindo apenas letras, números e hífens.
 * Nunca retorna dados arbitrários que não estejam previamente cadastrados.
 */
export function getClientBySlug(rawSlug?: string | null): ClientData | undefined {
  if (!rawSlug) return undefined;
  const sanitized = String(rawSlug).trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
  return clients[sanitized];
}
