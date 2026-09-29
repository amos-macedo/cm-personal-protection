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

  "Dra. Tereza Vilar": {
    slug: "dra-tereza-vilar",
    name: "Dra. Tereza Vilar",
    tagline: "Odontologia Estética & Reabilitação Oral",
    title: "Dra. Tereza Vilar — Odontologia Estética e Reabilitadora",
    description:
      "Atendimento odontológico com foco em estética, reabilitação oral e cuidado personalizado em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 98617-2304",
    phoneDisplay: "(83) 98617-2304",
    whatsapp: "5583986172304",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com a Dra. Tereza Vilar.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Doutor Pedro Firmino, 144",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-070",
      full: "Rua Doutor Pedro Firmino, 144 — 3º andar, sala 37 — Centro, Patos - PB, CEP: 58700-070",
    },
    hoursWeekday: "",
    hoursWeekend: "Sábado: 08h às 14h",
    rating: "5,0",
    reviews: "4 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Doutor+Pedro+Firmino,+144,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Doutor+Pedro+Firmino,+144,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Dra. Lilly Medeiros": {
    slug: "dra-lilly-medeiros",
    name: "Dra. Lilly Medeiros",
    tagline: "Odontologia Estética & Transformação do Sorriso",
    title: "Dra. Lilly Medeiros — Odontologia Estética em Patos",
    description:
      "Odontologia estética com foco em facetas, lentes em resina e tratamentos personalizados em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99916-4117",
    phoneDisplay: "(83) 99916-4117",
    whatsapp: "5583999164117",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com a Dra. Lilly Medeiros.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 99",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-085",
      full: "Rua Bossuet Wanderley, 99 — Apto 01, Centro, Patos - PB, CEP: 58700-085",
    },
    hoursWeekday: "Segunda a Sexta: 07h30 às 12h e 14h às 17h30",
    hoursWeekend: "Sábado: 07h30 às 12h",
    rating: "5,0",
    reviews: "8 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+99,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+99,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Santê": {
    slug: "sante-clinica-odontologica",
    name: "Santê",
    tagline: "Clínica Odontológica Especializada",
    title: "Santê — Clínica Odontológica Especializada",
    description: "Clínica odontológica especializada com atendimento personalizado em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 3421-4110",
    phoneDisplay: "(83) 3421-4110",
    whatsapp: "558334214110",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Santê.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 369",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-410",
      full: "Rua Bossuet Wanderley, 369 — Centro, Patos - PB, CEP: 58700-410",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 18h",
    hoursWeekend: "Sábado: 08h às 12h",
    rating: "5,0",
    reviews: "153 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+369,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+369,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Inove Clínica Odontológica": {
    slug: "inove-clinica-odontologica",
    name: "Inove Clínica Odontológica",
    tagline: "Cuidado, Tecnologia & Saúde Bucal",
    title: "Inove Clínica Odontológica — Patos",
    description:
      "Clínica odontológica com atendimento personalizado para cuidar da saúde e estética do sorriso em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 98624-5271",
    phoneDisplay: "(83) 98624-5271",
    whatsapp: "5583986245271",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Inove Clínica Odontológica.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Pedro Firmino, 107",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-070",
      full: "Rua Pedro Firmino, 107 — Centro, Patos - PB, CEP: 58700-070",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 12h e 15h às 19h",
    hoursWeekend: "Sábado: 08h às 12h",
    rating: "5,0",
    reviews: "94 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Pedro+Firmino,+107,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Pedro+Firmino,+107,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Centro Odontológico Mais Sorrisos": {
    slug: "mais-sorrisos",
    name: "Centro Odontológico Mais Sorrisos",
    tagline: "Saúde & Estética do Sorriso",
    title: "Mais Sorrisos — Centro Odontológico em Patos",
    description:
      "Atendimento odontológico completo para cuidar da saúde, estética e bem-estar do seu sorriso em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99611-5984",
    phoneDisplay: "(83) 99611-5984",
    whatsapp: "5583996115984",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta no Centro Odontológico Mais Sorrisos.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Leôncio Wanderley, 281",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-120",
      full: "Rua Leôncio Wanderley, 281 — Centro, Patos - PB, CEP: 58700-120",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 17h",
    hoursWeekend: "Sábado: 08h às 12h",
    rating: "4,6",
    reviews: "11 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Leoncio+Wanderley,+281,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Leoncio+Wanderley,+281,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Clínica HE Saúde": {
    slug: "clinica-he-saude",
    name: "Clínica HE Saúde",
    tagline: "Odontopediatria & Cuidado Especializado",
    title: "Clínica HE Saúde — Cuidado Odontológico em Patos",
    description:
      "Clínica com atendimento odontológico e foco especial em odontopediatria, acolhimento e cuidado personalizado.",
    logo: "/logo.svg",
    phone: "(83) 98119-4234",
    phoneDisplay: "(83) 98119-4234",
    whatsapp: "5583981194234",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Clínica HE Saúde.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 866",
      neighborhood: "Brasília",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-410",
      full: "Rua Bossuet Wanderley, 866 — Sala 2, Brasília, Patos - PB, CEP: 58700-410",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 12h e 14h às 18h",
    hoursWeekend: "Sábado: 08h às 13h",
    rating: "5,0",
    reviews: "46 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+866,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+866,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Odonto Select": {
    slug: "odonto-select",
    name: "Odonto Select",
    tagline: "Odontologia Especializada",
    title: "Odonto Select — Odontologia Especializada em Patos",
    description:
      "Clínica odontológica especializada com atendimento em diferentes áreas da odontologia em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99674-1140",
    phoneDisplay: "(83) 99674-1140",
    whatsapp: "5583996741140",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Odonto Select.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 365",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-410",
      full: "Rua Bossuet Wanderley, 365 — Centro, Patos - PB, CEP: 58700-410",
    },
    hoursWeekday: "Segunda a Sexta: 09h às 19h",
    hoursWeekend: "Fechado",
    rating: "4,7",
    reviews: "6 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+365,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+365,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Dental Solutions": {
    slug: "dental-solutions",
    name: "Dental Solutions",
    tagline: "Odontologia & Cuidado Especializado",
    title: "Dental Solutions — Odontologia em Patos",
    description:
      "Atendimento odontológico personalizado para cuidar da saúde e estética do sorriso em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99817-5877",
    phoneDisplay: "(83) 99817-5877",
    whatsapp: "5583998175877",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na Dental Solutions.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 176",
      neighborhood: "Brasília",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-410",
      full: "Rua Bossuet Wanderley, 176 — Brasília, Patos - PB, CEP: 58700-410",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 17h30",
    hoursWeekend: "Sábado: 08h às 12h",
    rating: "4,7",
    reviews: "7 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+176,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+176,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "AE Odontologia & Estética": {
    slug: "ae-odontologia-estetica",
    name: "AE Odontologia & Estética",
    tagline: "Odontologia & Estética do Sorriso",
    title: "AE Odontologia & Estética — Patos",
    description:
      "Atendimento odontológico com foco em saúde, estética e cuidado personalizado em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99931-4312",
    phoneDisplay: "(83) 99931-4312",
    whatsapp: "5583999314312",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na AE Odontologia & Estética.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Rua Bossuet Wanderley, 344",
      neighborhood: "Centro",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-410",
      full: "Rua Bossuet Wanderley, 344 — Centro, Patos - PB, CEP: 58700-410",
    },
    hoursWeekday: "Segunda a Sexta: 08h às 20h",
    hoursWeekend: "Fechado",
    rating: "4,9",
    reviews: "55 avaliações",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Bossuet+Wanderley,+344,+Centro,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Rua+Bossuet+Wanderley,+344,+Centro,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

  "Dr. Mauricio Nunes": {
    slug: "dr-mauricio-nunes",
    name: "Dr. Mauricio Nunes",
    tagline: "Odontologia Integrada",
    title: "Dr. Mauricio Nunes — Odontologia em Patos",
    description:
      "Atendimento odontológico personalizado para cuidar da saúde e do sorriso em Patos - PB.",
    logo: "/logo.svg",
    phone: "(83) 99624-0140",
    phoneDisplay: "(83) 99624-0140",
    whatsapp: "5583996240140",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com o Dr. Mauricio Nunes.",
    instagram: "",
    instagramUrl: "",
    address: {
      street: "Avenida Rio Branco, 580-754",
      neighborhood: "Brasília",
      city: "Patos",
      state: "PB",
      cityState: "Patos — PB",
      cep: "58700-330",
      full: "Avenida Rio Branco, 580-754 — Brasília, Patos - PB, CEP: 58700-330",
    },
    hoursWeekday: "",
    hoursWeekend: "",
    rating: "5,0",
    reviews: "1 avaliação",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Av.+Rio+Branco,+580-754,+Brasília,+Patos+-+PB",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Av.+Rio+Branco,+580-754,+Brasília,+Patos+-+PB&t=&z=16&ie=UTF8&iwloc=&output=embed",
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
  if (clients[sanitized]) return clients[sanitized];
  return Object.values(clients).find((c) => c.slug.toLowerCase() === sanitized);
}
