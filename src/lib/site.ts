/**
 * Soul'Encanto — dados editáveis da clínica.
 * Substitua os valores marcados como PLACEHOLDER pelos dados reais.
 */

export const WHATSAPP_NUMBER = "5583982249995";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer a Soul'Encanto e agendar uma avaliação.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const site = {
  name: "Soul'Encanto",
  tagline: "Consultório Odontológico",
  city: "Campina Grande — PB",
  phoneDisplay: "(83) 98224-9995",
  instagramHandle: "@oralvittaodontologia", // PLACEHOLDER — confirmar perfil oficial
  instagramUrl: "https://instagram.com/oralvittaodontologia", // PLACEHOLDER
  address: "Endereço a confirmar — Campina Grande, PB", // PLACEHOLDER
  rating: "4,9", // PLACEHOLDER — avaliação do Google
  reviews: "+20 avaliações", // PLACEHOLDER
};

export const nav = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];
