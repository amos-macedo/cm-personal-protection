import { useState } from "react";
import { cn } from "@/lib/utils";
import { useClient } from "@/lib/site";
import { Reveal, MaskedLines } from "./motion-primitives";
import afterImg from "@/assets/after.jpg";
import materials from "@/assets/materials.jpg";
import hands from "@/assets/hands-detail.jpg";
import chair from "@/assets/clinic-chair.jpg";
import consult from "@/assets/consult.jpg";
import lifestyle from "@/assets/lifestyle-laugh.jpg";

interface Treatment {
  id: string;
  name: string;
  shortTag: string;
  desc: string;
  details: string[];
  img: string;
}

const treatments: Treatment[] = [
  {
    id: "lentes",
    name: "Lentes & Facetas",
    shortTag: "Estética",
    desc: "Lâminas cerâmicas ultrafinas desenvolvidas para harmonizar cor, formato e proporção, preservando a estrutura natural do esmalte.",
    details: [
      "Mimetismo óptico natural",
      "Planejamento digital com mockup",
      "Alta durabilidade e brilho",
    ],
    img: materials,
  },
  {
    id: "clareamento",
    name: "Clareamento Dental",
    shortTag: "Luminosidade",
    desc: "Técnicas combinadas (consultório + moldeira personalizada) que removem manchas profundas respeitando a biologia e sensibilidade do dente.",
    details: [
      "Zero agressão ao esmalte",
      "Resultados duradouros e seguros",
      "Acompanhamento individual",
    ],
    img: lifestyle,
  },
  {
    id: "implantes",
    name: "Implantes & Prótese",
    shortTag: "Reabilitação",
    desc: "Recuperação funcional e estética completa com cirurgia guiada por computador, garantindo estabilidade e conforto mastigatório.",
    details: [
      "Cirurgia guiada minimamente invasiva",
      "Biocompatibilidade total",
      "Cargas imediatas planejadas",
    ],
    img: hands,
  },
  {
    id: "ortodontia",
    name: "Ortodontia Estética",
    shortTag: "Alinhamento",
    desc: "Alinhadores transparentes sob medida e aparelhos modernos que corrigem a posição dos dentes de forma discreta e eficiente.",
    details: [
      "Alinhadores praticamente invisíveis",
      "Planejamento 3D do sorriso",
      "Removíveis para alimentação",
    ],
    img: chair,
  },
  {
    id: "harmonizacao",
    name: "Estética do Sorriso",
    shortTag: "Harmonia",
    desc: "Gengivoplastia e remodelação de contornos para valorizar a proporção entre gengiva, lábios e dentes.",
    details: [
      "Equilíbrio da linha do sorriso",
      "Técnicas a laser com rápida cicatrização",
      "Design facial integrado",
    ],
    img: afterImg,
  },
  {
    id: "prevencao",
    name: "Prevenção & Geral",
    shortTag: "Saúde Bucal",
    desc: "Profilaxia guiada, diagnóstico preventivo por imagem e restaurações estéticas para manter seu sorriso saudável por toda a vida.",
    details: [
      "Check-up preventivo digital",
      "Remoção biológica de cálculo",
      "Cuidado contínuo e sem dor",
    ],
    img: consult,
  },
];

export function Treatments() {
  const { site, whatsappUrl } = useClient();
  const [active, setActive] = useState<number>(0);

  return (
    <section id="tratamentos" className="scroll-mt-24 bg-bone py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-sage-deep">Especialidades dedicadas</p>
            </Reveal>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,4.8rem)] leading-[1] text-ink">
              <MaskedLines lines={["Um cuidado para", "cada sorriso."]} />
            </h2>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-graphite">
              Cada indicação nasce de uma avaliação minuciosa. Clique nos painéis para explorar cada
              especialidade.
            </p>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP: Accordion Horizontal Interativo                  */}
        {/* ======================================================== */}
        <div className="mt-14 hidden h-[520px] w-full flex-row gap-3 lg:flex">
          {treatments.map((t, i) => {
            const isExpanded = active === i;

            return (
              <div
                key={t.id}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalhes de ${t.name}`}
                aria-expanded={isExpanded}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={cn(
                  "relative h-full overflow-hidden rounded-xl transition-[flex] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",
                  isExpanded
                    ? "flex-[3.8] cursor-default shadow-xl"
                    : "flex-1 cursor-pointer hover:shadow-md group",
                )}
              >
                {/* Imagem de Fundo */}
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out",
                    isExpanded ? "scale-100" : "scale-105 group-hover:scale-110",
                  )}
                />

                {/* Camada de Gradiente / Sobreposição */}
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-500",
                    isExpanded
                      ? "bg-gradient-to-t from-petrol/95 via-petrol/60 to-petrol/20"
                      : "bg-petrol/65 group-hover:bg-petrol/45",
                  )}
                />

                {/* Conteúdo do Painel Expandido */}
                {isExpanded ? (
                  <div className="relative flex h-full flex-col justify-between p-8 text-bone animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow rounded-full border border-bone/20 bg-bone/10 px-3.5 py-1 text-sage backdrop-blur-xs">
                        {String(i + 1).padStart(2, "0")} — {t.shortTag}
                      </span>
                      <span className="text-xs text-bone/50 tracking-widest uppercase">
                        {site.name}
                      </span>
                    </div>

                    <div className="max-w-xl">
                      <h3 className="font-display text-3xl xl:text-4xl text-bone leading-tight">
                        {t.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-bone/85">{t.desc}</p>

                      <ul className="mt-5 space-y-1.5 border-t border-bone/15 pt-4 text-xs text-bone/80">
                        {t.details.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-sage" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-[0.68rem] font-medium tracking-[0.18em] text-petrol uppercase transition-colors hover:bg-sage hover:text-petrol"
                        >
                          Agendar este tratamento
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Conteúdo do Painel Compacto */
                  <div className="relative flex h-full flex-col justify-between p-5 text-bone">
                    <span className="font-mono text-xs font-semibold text-sage/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex flex-col items-center justify-end pb-4">
                      <span className="[writing-mode:vertical-rl] rotate-180 font-display text-xl tracking-wider text-bone/95 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1">
                        {t.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE: Accordion Vertical Fluido                        */}
        {/* ======================================================== */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {treatments.map((t, i) => {
            const isExpanded = active === i;

            return (
              <div
                key={t.id}
                className={cn(
                  "overflow-hidden rounded-sm border border-ink/10 transition-all duration-400",
                  isExpanded ? "bg-petrol text-bone shadow-md" : "bg-bone text-ink",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActive(isExpanded ? -1 : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-mono text-xs tracking-wider",
                        isExpanded ? "text-sage" : "text-sage-deep",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl leading-none">{t.name}</span>
                  </div>

                  <span
                    className={cn(
                      "text-xl transition-transform duration-400",
                      isExpanded ? "rotate-45 text-sage" : "text-graphite",
                    )}
                  >
                    +
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6">
                    <div className="aspect-16/9 w-full overflow-hidden rounded-lg mb-4">
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-bone/85">{t.desc}</p>

                    <ul className="mt-3 space-y-1.5 border-t border-bone/15 pt-3 text-xs text-bone/80">
                      {t.details.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-sage" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex w-full items-center justify-center rounded-full bg-bone px-5 py-3 text-center text-[0.68rem] font-medium tracking-[0.18em] text-petrol uppercase"
                      >
                        Agendar avaliação no WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
