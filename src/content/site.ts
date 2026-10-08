import corridor from "@/assets/cm/corridor.webp";
import vipPortrait from "@/assets/cm/vip-portrait.webp";
import team from "@/assets/cm/team.webp";
import clientPedroSobral from "@/assets/cm/client-pedrosobral.webp";
import clientTiagoTessmann from "@/assets/cm/client-tiagotessmann.webp";
import clientPriscilaZillo from "@/assets/cm/client-priscilazillo.webp";
import clientIcaroDeCarvalho from "@/assets/cm/client-icarodecarvalho.webp";
import clientBeRudolph from "@/assets/cm/client-berudolph.webp";
import vipParceiro from "@/assets/cm/vip-parceiro.webp";
import vipSubido from "@/assets/cm/vip-subido.webp";
import eventoNovoMercadoEquipe from "@/assets/cm/evento-novo-mercado-equipe.webp";
import eventoEquipeCompleta from "@/assets/cm/evento-equipe-completa.webp";
import eventoOperacaoPalco from "@/assets/cm/evento-operacao-palco.webp";
import perfilObservacao from "@/assets/cm/perfil-observacao.webp";

export const brand = {
  name: "CM Personal Protection",
  legalMark: "CM Personal Protection®",
  tagline: "Especializado em segurança privada",
  title: "CM Personal Protection® | Segurança pessoal e privada",
  description:
    "Segurança privada e pessoal para eventos ao vivo, empresas e artistas: avaliação de riscos, planejamento, equipe especializada e discrição. Base em São Paulo.",
} as const;

// TODO: confirmar o Instagram oficial. Canais vazios não são renderizados.
export const contact = {
  whatsapp: "5524999927165",
  whatsappMessage:
    "Olá! Vim pelo site da CM Personal Protection e gostaria de solicitar uma proposta.",
  phoneDisplay: "(24) 99992-7165",
  email: "cmpersonalprotection@gmail.com",
  instagram: "",
  city: "São Paulo",
};

export const whatsappUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : null;

const proposalBrief = [
  "Olá, equipe CM Personal Protection.",
  "",
  "Gostaria de solicitar uma proposta de segurança.",
  "",
  "Evento ou empresa:",
  "Data(s):",
  "Local:",
  "Público estimado:",
  "Quem precisa de proteção:",
].join("\n");

export const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Solicitação de proposta — CM Personal Protection",
)}&body=${encodeURIComponent(proposalBrief)}`;

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
  lead: "Segurança privada para eventos ao vivo, empresas e artistas — da avaliação de riscos à operação, com discrição em cada detalhe.",
  micro: ["Eventos ao vivo", "Empresas", "Artistas e personalidades"],
};

export const about = {
  label: "Sobre nós",
  title: "Segurança privada para grandes eventos, empresas e artistas.",
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
    image: perfilObservacao,
    position: "45% 35%",
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
    image: eventoNovoMercadoEquipe,
    position: "42% 30%",
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
  label: "Segurança pessoal VIP",
  title: "Proteção para quem está no centro do seu evento.",
  text: "Palestrantes, artistas e executivos são figuras públicas. A segurança pessoal especializada garante a integridade física, a privacidade e a tranquilidade deles — e a do público ao redor.",
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
  title: "Do primeiro contato ao fim do evento.",
  steps: [
    {
      title: "Contato",
      text: "Você nos conta o evento, o público e quem precisa de proteção.",
      image: vipPortrait,
      position: "50% 25%",
    },
    {
      title: "Avaliação",
      text: "Analisamos o tipo de evento, o perfil dos participantes e o ambiente.",
      image: corridor,
      position: "50% 35%",
    },
    {
      title: "Planejamento",
      text: "Proposta personalizada com prevenção, controle de acesso, triagem e protocolos de emergência.",
      image: clientTiagoTessmann,
      position: "60% 30%",
    },
    {
      title: "Operação",
      text: "Equipe em campo durante todo o evento, em coordenação com as autoridades locais.",
      image: eventoOperacaoPalco,
      position: "55% 45%",
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
        { image: clientPedroSobral, caption: "Subido ao Vivo · @pedrosobral" },
        { image: clientTiagoTessmann, caption: "Extremo ao Vivo · @tiagotessmann" },
        { image: clientIcaroDeCarvalho, caption: "O Novo Mercado ao Vivo · @icarode.carvalho" },
        { image: eventoNovoMercadoEquipe, caption: "O Novo Mercado ao Vivo · Equipe CM" },
        { image: eventoEquipeCompleta, caption: "Equipe CM Personal Protection" },
      ],
    },
    {
      title: "VIP",
      slides: [
        { image: clientBeRudolph, caption: "@berudolph" },
        { image: clientPriscilaZillo, caption: "@priscila_zillo" },
        { image: vipSubido, caption: "Subido ao Vivo" },
        { image: vipParceiro, caption: "Segurança pessoal VIP" },
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
  title: "O que está em jogo no seu evento.",
  text: "Quando o evento recebe figuras públicas, a segurança pessoal especializada deixa de ser opcional.",
  items: [
    {
      title: "Proteção contra ameaças físicas",
      text: "Fãs excessivamente entusiasmados, stalkers, paparazzi invasivos ou indivíduos com intenções maliciosas: a segurança pessoal especializada ajuda a prevenir, identificar e neutralizar essas ameaças.",
    },
    {
      title: "Multidões e controle de acesso",
      text: "Gerenciar o público em eventos, aparições e locais movimentados, garantindo a segurança de todos e evitando situações de caos ou pânico.",
    },
    {
      title: "Gerenciamento de crises",
      text: "Uma equipe treinada para agir rapidamente em emergências, coordenar com as autoridades competentes e garantir o bem-estar do VIP.",
    },
    {
      title: "Foco no palco",
      text: "Seu convidado se concentra na apresentação, sem a preocupação constante com a própria segurança.",
    },
    {
      title: "Imagem profissional",
      text: "Contratar segurança especializada demonstra profissionalismo e responsabilidade diante dos riscos de reunir público e figuras públicas.",
    },
    {
      title: "Segurança sob medida",
      text: "Cada evento e cada convidado têm necessidades específicas, e o plano de segurança é adaptado a elas.",
    },
  ],
};

export const faq = [
  {
    q: "Vocês fazem a segurança de eventos ao vivo?",
    a: "Sim. Esse é o nosso foco: já atuamos em eventos como Protagon, O Novo Mercado ao Vivo, Subido ao Vivo e Extremo ao Vivo, cuidando da segurança das figuras públicas e do público.",
  },
  {
    q: "Quantos profissionais serão necessários para o meu evento?",
    a: "Depende da avaliação de riscos: consideramos o tipo de evento, o perfil dos participantes e o ambiente para desenvolver um plano de segurança personalizado.",
  },
  {
    q: "Vocês atendem empresas e artistas?",
    a: "Sim. Somos especializados em segurança privada de grandes empresas, personalidades, artistas e grandes eventos.",
  },
  {
    q: "Os profissionais são qualificados?",
    a: "Sim. Nossa equipe é composta por profissionais qualificados, com ampla experiência em segurança pessoal, técnicas avançadas de segurança, gerenciamento de multidões, primeiros socorros e gerenciamento de crises.",
  },
  {
    q: "Que tecnologia pode ser utilizada?",
    a: "Sistemas de vigilância por vídeo, detecção de metais, controle de acesso eletrônico e outros dispositivos de segurança de última geração, de acordo com as necessidades do evento.",
  },
  {
    q: "A segurança vai incomodar o público e os convidados?",
    a: "Não. Atuamos com profissionalismo e confidencialidade em todos os momentos, garantindo a segurança sem causar intrusão ou desconforto aos participantes do evento.",
  },
  {
    q: "Como solicitar uma proposta?",
    a: "Chame no WhatsApp (24) 99992-7165 ou envie um e-mail com data, local, porte do público e quem precisa de proteção. Com essas informações, elaboramos uma proposta personalizada para o seu evento.",
  },
];

export const finalCta = {
  title: "Conte-nos sobre o seu evento.",
  text: "Envie data, local, porte do público e quem precisa de proteção. Elaboramos uma proposta personalizada e confidencial.",
};
