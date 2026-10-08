import heroPortrait from "@/assets/cm/hero-portrait.webp";
import lightTrails from "@/assets/cm/light-trails.webp";
import corridor from "@/assets/cm/corridor.webp";
import vipPortrait from "@/assets/cm/vip-portrait.webp";
import team from "@/assets/cm/team.webp";
import clientPedroSobral from "@/assets/cm/client-pedrosobral.webp";
import clientTiagoTessmann from "@/assets/cm/client-tiagotessmann.webp";
import clientPriscilaZillo from "@/assets/cm/client-priscilazillo.webp";
import clientIcaroDeCarvalho from "@/assets/cm/client-icarodecarvalho.webp";
import clientBeRudolph from "@/assets/cm/client-berudolph.webp";

export const brand = {
  name: "CM Personal Protection",
  legalMark: "CM Personal Protection®",
  tagline: "Especializado em segurança privada",
  title: "CM Personal Protection® | Segurança pessoal e privada",
  description:
    "Serviço especializado em segurança pessoal para garantir a proteção e tranquilidade dos nossos clientes. Segurança privada de grandes empresas, personalidades, artistas e grandes eventos.",
  presentationPdf: "/cm-personal-protection-apresentacao.pdf",
} as const;

// TODO: confirmar WhatsApp e Instagram oficiais. Canais vazios não são renderizados;
// com `whatsapp` preenchido os CTAs passam a abrir o WhatsApp e o botão flutuante aparece.
export const contact = {
  whatsapp: "",
  whatsappMessage:
    "Olá! Vim pelo site da CM Personal Protection e gostaria de solicitar uma proposta.",
  phoneDisplay: "",
  email: "cmpersonalprotection@gmail.com",
  instagram: "",
  city: "São Paulo",
};

export const whatsappUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : null;

export const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Solicitação de proposta — CM Personal Protection",
)}`;

export const primaryCtaHref = whatsappUrl ?? mailtoUrl;

type Channel = { label: string; value: string; href: string };

export const contactChannels: Channel[] = [
  whatsappUrl && {
    label: "WhatsApp",
    value: contact.phoneDisplay || "Iniciar conversa",
    href: whatsappUrl,
  },
  contact.email && { label: "E-mail", value: contact.email, href: mailtoUrl },
  contact.instagram && {
    label: "Instagram",
    value: `@${contact.instagram}`,
    href: `https://instagram.com/${contact.instagram}`,
  },
].filter((c): c is Channel => Boolean(c));

export const images = {
  heroPortrait,
  lightTrails,
  corridor,
  vipPortrait,
  team,
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Direção", href: "#direcao" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  titleLines: ["Sua segurança é", "nossa prioridade."],
  lead: "Oferecemos um serviço especializado em segurança pessoal para garantir a proteção e tranquilidade dos nossos clientes.",
  micro: ["Segurança pessoal", "Personalidades e artistas", "Grandes eventos"],
};

export const about = {
  label: "Sobre nós",
  title: "Proteção e tranquilidade para nossos clientes.",
  text: "Nossa equipe é composta por profissionais altamente treinados e experientes no campo da segurança, com um foco específico em segurança pessoal em diversas situações, incluindo eventos.",
  cards: [
    {
      title: "Proteção",
      text: "Garantir a proteção e a tranquilidade dos nossos clientes.",
      icon: "shield",
    },
    {
      title: "Compromisso",
      text: "Segurança pessoal de alta qualidade, adaptada a cada cliente e evento.",
      icon: "handshake",
    },
    {
      title: "Discrição",
      text: "Profissionalismo e confidencialidade em todos os momentos.",
      icon: "eye",
    },
  ] as const,
};

export const services = [
  {
    id: "riscos",
    title: "Avaliação de Riscos",
    summary: "Análise do tipo de evento, do perfil dos participantes e do ambiente.",
    body: [
      "Realizamos uma avaliação abrangente dos riscos envolvidos, levando em consideração fatores como o tipo de evento, o perfil dos participantes e o ambiente.",
      "Com essa análise, podemos desenvolver um plano de segurança personalizado para atender às necessidades específicas do evento.",
    ],
    image: heroPortrait,
    position: "55% 22%",
  },
  {
    id: "planejamento",
    title: "Planejamento de Segurança",
    summary: "Prevenção, controle de acesso, triagem e protocolos de emergência.",
    body: [
      "Com base na avaliação de riscos, elaboramos um plano detalhado de segurança, incluindo estratégias de prevenção, controle de acesso, triagem de participantes, monitoramento por câmeras, coordenação com as autoridades locais e protocolos de emergência.",
      "Nosso objetivo é garantir a segurança efetiva durante todo o evento.",
    ],
    image: clientTiagoTessmann,
    position: "68% 30%",
  },
  {
    id: "equipe",
    title: "Equipe Especializada",
    summary: "Gerenciamento de multidões, primeiros socorros e gestão de crises.",
    body: [
      "Nossa equipe é composta por profissionais qualificados, com ampla experiência em segurança pessoal. Eles possuem técnicas avançadas de segurança, gerenciamento de multidões, primeiros socorros e gerenciamento de crises.",
      "Nossos especialistas trabalharão em estreita colaboração com você para garantir uma experiência segura.",
    ],
    image: clientPedroSobral,
    position: "35% 30%",
  },
  {
    id: "tecnologia",
    title: "Tecnologia Avançada",
    summary: "Vigilância por vídeo, detecção de metais e controle de acesso eletrônico.",
    body: [
      "Utilizamos tecnologia de ponta para reforçar a segurança pessoal nos eventos.",
      "Isso pode incluir o uso de sistemas de vigilância por vídeo, detecção de metais, controle de acesso eletrônico e outros dispositivos de segurança de última geração, de acordo com as necessidades do evento.",
    ],
    image: corridor,
    position: "50% 40%",
  },
  {
    id: "discricao",
    title: "Discrição e Profissionalismo",
    summary: "Segurança sem intrusão ou desconforto aos participantes.",
    body: [
      "Nossa equipe entende a importância da discrição e da proteção da privacidade dos nossos clientes.",
      "Atuamos com profissionalismo e confidencialidade em todos os momentos, garantindo a segurança sem causar intrusão ou desconforto aos participantes do evento.",
    ],
    image: vipPortrait,
    position: "50% 25%",
  },
];

export const strip = {
  title: "Somos especializados em segurança privada.",
  text: "De grandes empresas, personalidades, artistas e grandes eventos — com discrição, planejamento e profissionais preparados.",
};

export const differentials = {
  title: "Por que escolher a CM Personal Protection?",
  items: [
    { title: "Profissionais altamente treinados", icon: "shield-check" },
    { title: "Avaliação de riscos", icon: "radar" },
    { title: "Tecnologia de ponta", icon: "cctv" },
    { title: "Discrição e confidencialidade", icon: "lock" },
    { title: "Atendimento personalizado", icon: "users" },
  ] as const,
};

export const vip = {
  image: clientPriscilaZillo,
  label: "Segurança pessoal",
  title: "Proteção para figuras públicas e VIPs.",
  text: "A segurança pessoal para figuras públicas ou VIP (Very Important Person) é uma necessidade essencial para garantir a integridade física, a privacidade e a tranquilidade dos indivíduos em questão.",
  contexts: [
    "eventos",
    "aparições públicas",
    "locais movimentados",
    "controle de acesso",
    "gerenciamento de multidões",
    "triagem de participantes",
    "monitoramento por câmeras",
    "protocolos de emergência",
  ],
};

export const method = {
  label: "Nosso processo",
  title: "Segurança planejada para cada cliente.",
  steps: [
    {
      title: "Contato",
      text: "Entendemos suas necessidades específicas de segurança pessoal.",
    },
    {
      title: "Avaliação",
      text: "Analisamos o tipo de evento, o perfil dos participantes e o ambiente.",
    },
    {
      title: "Planejamento",
      text: "Elaboramos uma proposta e um plano de segurança personalizados.",
    },
    {
      title: "Operação",
      text: "Garantimos a segurança efetiva durante todo o evento, com discrição.",
    },
  ],
};

export const leadership = {
  label: "Direção",
  name: "Cledjan Medeiros",
  role: "Diretor de Segurança Privada",
  paragraphs: [
    "Gestor de Segurança e Diretor de Segurança Privada da CM Personal Protection, em São Paulo.",
    "Responsável pela logística de segurança de experts do mercado digital, com atuação em missões como Protagon, O Novo Mercado ao Vivo, Subido ao Vivo e Extremo ao Vivo.",
    "À frente de uma equipe de profissionais altamente treinados, com foco específico em segurança pessoal em diversas situações, incluindo eventos.",
  ],
  stats: [
    { value: "5", label: "Autoridades do digital" },
    { value: "4", label: "Eventos ao vivo" },
    { value: "SP", label: "Base de atuação" },
  ],
  tags: [
    "Avaliação de riscos",
    "Gerenciamento de multidões",
    "Primeiros socorros",
    "Gerenciamento de crises",
    "Controle de acesso",
    "Protocolos de emergência",
  ],
  instagram: "https://www.instagram.com/medeiros_cx",
  image: vipPortrait,
};

export const gallery = {
  label: "Quem confia",
  title: "Bastidores da operação.",
  textLead: "Algumas das ",
  textAccent: "autoridades do marketing digital",
  textTail: " que fizemos a segurança pessoal.",
  albums: [
    {
      title: "Eventos ao vivo",
      slides: [
        { image: clientPedroSobral, caption: "@pedrosobral" },
        { image: clientTiagoTessmann, caption: "@tiagotessmann" },
        { image: clientIcaroDeCarvalho, caption: "@icarode.carvalho" },
        { image: team, caption: "Equipe CM Personal Protection" },
      ],
    },
    {
      title: "VIP",
      slides: [
        { image: clientBeRudolph, caption: "@berudolph" },
        { image: clientPriscilaZillo, caption: "@priscila_zillo" },
        { image: heroPortrait, caption: "Segurança pessoal" },
        { image: corridor, caption: "CM Personal Protection" },
      ],
    },
  ],
};

export const letter = {
  label: "Nosso compromisso",
  title: "Sua segurança é nossa prioridade.",
  greeting: "A quem possa interessar,",
  paragraphs: [
    "Estamos comprometidos em fornecer um serviço de segurança pessoal de alta qualidade, adaptado às necessidades individuais de cada cliente e evento.",
    "É importante ressaltar que cada VIP tem necessidades específicas de segurança pessoal, e uma equipe especializada pode adaptar seus serviços de acordo com essas necessidades individuais.",
    "A segurança pessoal desempenha um papel crucial na preservação da integridade e na garantia de uma vida pessoal e profissional tranquila e segura.",
    "Entre em contato conosco para discutir suas necessidades específicas e elaboraremos uma proposta personalizada para atender às suas expectativas de segurança pessoal em eventos.",
  ],
};

export const keyPoints = {
  label: "Segurança pessoal",
  title: "Por que ela é essencial.",
  text: "Aqui estão alguns pontos-chave que destacam a importância do uso de segurança pessoal.",
  items: [
    {
      title: "Proteção contra ameaças físicas",
      text: "Fãs excessivamente entusiasmados, stalkers, paparazzi invasivos ou indivíduos com intenções maliciosas: a segurança pessoal especializada ajuda a prevenir, identificar e neutralizar essas ameaças.",
    },
    {
      title: "Multidões e controle de acesso",
      text: "Gerenciar e controlar multidões em eventos, aparições públicas ou locais movimentados, evitando situações de caos ou pânico.",
    },
    {
      title: "Gerenciamento de crises",
      text: "Uma equipe treinada para agir rapidamente em emergências, coordenar com as autoridades competentes e garantir o bem-estar do VIP.",
    },
    {
      title: "Confiança e bem-estar",
      text: "Concentrar-se nas atividades profissionais e pessoais sem a preocupação constante com a própria segurança.",
    },
    {
      title: "Imagem profissional",
      text: "Uma medida de profissionalismo e responsabilidade diante dos desafios e riscos associados à fama.",
    },
    {
      title: "Segurança sob medida",
      text: "Cada VIP tem necessidades específicas, e uma equipe especializada adapta seus serviços a elas.",
    },
  ],
};

export const faq = [
  {
    q: "Por que eu realmente preciso de segurança pessoal?",
    a: "A segurança pessoal para figuras públicas ou VIPs é uma necessidade essencial para garantir a integridade física, a privacidade e a tranquilidade. Ela ajuda a prevenir, identificar e neutralizar ameaças, gerenciar multidões e agir com rapidez em situações de crise.",
  },
  {
    q: "Quantos profissionais serão necessários para o meu caso?",
    a: "Depende da avaliação de riscos: consideramos o tipo de evento, o perfil dos participantes e o ambiente para desenvolver um plano de segurança personalizado.",
  },
  {
    q: "Os profissionais são qualificados?",
    a: "Sim. Nossa equipe é composta por profissionais qualificados, com ampla experiência em segurança pessoal, técnicas avançadas de segurança, gerenciamento de multidões, primeiros socorros e gerenciamento de crises.",
  },
  {
    q: "A segurança pode acompanhar eventos e aparições públicas?",
    a: "Sim. Atuamos em eventos, aparições públicas e locais movimentados, garantindo a segurança de todos os envolvidos e evitando situações de caos ou pânico.",
  },
  {
    q: "A proteção pode ser estendida ao meu círculo mais próximo?",
    a: "Sim. A segurança pessoal especializada protege o VIP e seu círculo mais próximo, incluindo seus entes queridos.",
  },
  {
    q: "Que tecnologia pode ser utilizada?",
    a: "Sistemas de vigilância por vídeo, detecção de metais, controle de acesso eletrônico e outros dispositivos de segurança de última geração, de acordo com as necessidades do evento.",
  },
  {
    q: "Como fica a minha privacidade?",
    a: "Atuamos com profissionalismo e confidencialidade em todos os momentos, garantindo a segurança sem causar intrusão ou desconforto.",
  },
];

export const finalCta = {
  title: "Vamos discutir as suas necessidades?",
  text: "Entre em contato conosco e elaboraremos uma proposta personalizada para atender às suas expectativas de segurança pessoal.",
};
