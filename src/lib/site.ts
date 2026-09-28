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
  phoneClean: "5583982249995",
  email: "contato@soulencanto.com.br",
  instagramHandle: "@soulencanto.odonto",
  instagramUrl: "https://instagram.com/soulencanto.odonto",
  addressStreet: "Av. Pref. Severino Bezerra Cabral, 1050",
  addressComplement: "Complexo Heron Marinho — Torre B, Sala 608",
  neighborhood: "Catolé",
  cityState: "Campina Grande — PB",
  cep: "58410-185",
  fullAddress:
    "Av. Pref. Severino Bezerra Cabral, 1050 — Heron Marinho, Torre B, Sala 608 — Catolé, Campina Grande - PB",
  hoursWeekday: "Segunda a Sexta: 08h às 19h",
  hoursWeekend: "Sábado: 08h às 12h",
  rating: "4,9",
  reviews: "+180 avaliações",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Complexo+Heron+Marinho+Campina+Grande+PB",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0772274488667!2d-35.87158762417757!3d-7.232047871021462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e5e6e34458f%3A0xe108d3ef711b7dfb!2sComplexo%20Heron%20Marinho!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
};

export const nav = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Antes e Depois", href: "#transformacoes" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Equipe", href: "#equipe" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
