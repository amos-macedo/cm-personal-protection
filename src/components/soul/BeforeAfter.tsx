import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import facetasBefore from "@/assets/facetas-before.jpg";
import facetasAfter from "@/assets/facetas-after.jpg";
import ortoBefore from "@/assets/orto-before.jpg";
import ortoAfter from "@/assets/orto-after.jpg";
import clareamentoBefore from "@/assets/clareamento-before.jpg";
import clareamentoAfter from "@/assets/clareamento-after.jpg";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

interface CaseItem {
  id: string;
  category: string;
  title: string;
  complaint: string;
  solution: string;
  duration: string;
  before: string;
  after: string;
}

const allCases: CaseItem[] = [
  {
    id: "lentes-01",
    category: "Lentes & Facetas",
    title: "Harmonização de Proporção e Fechamento de Diastemas",
    complaint: "Espaçamentos visíveis entre os dentes e bordas desgastadas.",
    solution: "Facetas cerâmicas ultrafinas com mimetismo óptico de esmalte natural.",
    duration: "3 sessões clínicas",
    before: beforeImg,
    after: afterImg,
  },
  {
    id: "facetas-02",
    category: "Estética Cerâmica",
    title: "Reabilitação Estética com Textura Natural",
    complaint: "Dentes escurecidos e assimetria acentuada no arco superior.",
    solution: "Lentes de porcelana feldspática de alta luminosidade e contorno gengival.",
    duration: "4 sessões clínicas",
    before: facetasBefore,
    after: facetasAfter,
  },
  {
    id: "ortodontia",
    category: "Ortodontia Estética",
    title: "Correção de Alinhamento e Oclusão",
    complaint: "Apinhamento severo e desvio da linha média do sorriso.",
    solution: "Alinhamento ortodôntico guiado, preservando a harmonia facial.",
    duration: "10 meses de acompanhamento",
    before: ortoBefore,
    after: ortoAfter,
  },
  {
    id: "clareamento",
    category: "Clareamento Clínico",
    title: "Clareamento Profissional com Zero Sensibilidade",
    complaint: "Manchas profundas causadas por café e envelhecimento do esmalte.",
    solution: "Protocolo biológico associando laser em consultório e moldeira personalizada.",
    duration: "2 sessões em consultório + 14 dias caseiro",
    before: clareamentoBefore,
    after: clareamentoAfter,
  },
];

/**
 * Componente reutilizável de comparação interativa
 * Permite revelar o resultado tanto passando o mouse (hover/move) quanto arrastando
 */
function InteractiveCompareCard({
  before,
  after,
  title,
  tag,
  desc,
  aspectRatio = "aspect-16/10",
  showBadges = true,
}: {
  before: string;
  after: string;
  title: string;
  tag?: string;
  desc?: string;
  aspectRatio?: string;
  showBadges?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offset = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offset / rect.width) * 100));
    setPos(percentage);
  }, []);

  return (
    <div className="flex flex-col h-full rounded-xl border border-ink/10 bg-sand p-4 shadow-xs transition-shadow duration-500 hover:shadow-md">
      <div
        ref={containerRef}
        onMouseMove={(e) => updatePosition(e.clientX)}
        onMouseDown={() => {
          isDragging.current = true;
        }}
        onMouseUp={() => {
          isDragging.current = false;
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) updatePosition(e.touches[0].clientX);
        }}
        className={cn(
          "relative w-full cursor-ew-resize overflow-hidden rounded-lg bg-bone select-none touch-none",
          aspectRatio,
        )}
      >
        {/* Imagem DEPOIS (Base) */}
        <img
          src={after}
          alt={`Resultado depois — ${title}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />

        {/* Imagem ANTES (Sobreposição com clip) */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`Resultado antes — ${title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Badges de Antes e Depois */}
        {showBadges && (
          <>
            <span className="absolute top-3 left-3 z-10 rounded-full border border-bone/40 bg-petrol/85 px-3 py-1 text-[0.6rem] font-semibold tracking-wider text-bone uppercase backdrop-blur-xs">
              Antes
            </span>
            <span className="absolute top-3 right-3 z-10 rounded-full border border-bone/40 bg-sage px-3 py-1 text-[0.6rem] font-semibold tracking-wider text-petrol uppercase backdrop-blur-xs">
              Depois
            </span>
          </>
        )}

        {/* Linha Divisória e Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone shadow-md"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone bg-petrol text-bone shadow-sm text-[0.7rem] font-bold">
            ⇆
          </div>
        </div>

        {/* Guia discreta de instrução */}
        <div className="pointer-events-none absolute bottom-2 inset-x-0 text-center">
          <span className="rounded-full bg-ink/60 px-3 py-0.5 text-[0.62rem] text-bone backdrop-blur-xs">
            Passe o mouse para revelar
          </span>
        </div>
      </div>

      {(tag || title || desc) && (
        <div className="mt-4 flex flex-1 flex-col justify-between">
          <div>
            {tag && <span className="eyebrow text-sage-deep">{tag}</span>}
            <h4 className="mt-1 font-display text-xl text-ink leading-snug">{title}</h4>
            {desc && <p className="mt-2 text-xs leading-relaxed text-graphite">{desc}</p>}
          </div>

          <div className="mt-4 border-t border-ink/10 pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline hover:link-underline-on text-[0.68rem] tracking-[0.16em] text-petrol uppercase font-medium"
            >
              Consultar sobre este caso →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function BeforeAfter() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const activeCase: CaseItem = allCases[selectedCase] ?? (allCases[0] as CaseItem);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section id="transformacoes" className="scroll-mt-24 bg-bone py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-sage-deep">Casos Clínicos Reais</p>
            </Reveal>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,4.8rem)] leading-[1] text-ink">
              <MaskedLines lines={["Transformações reais,", "sorrisos autênticos."]} />
            </h2>
          </div>

          <Reveal delay={0.12}>
            <p className="max-w-sm text-sm leading-relaxed text-graphite">
              Passe o mouse ou arraste o divisor sobre qualquer caso para comparar a transformação
              do antes para o depois em tempo real.
            </p>
          </Reveal>
        </div>

        {/* Seletor de Casos Principais */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {allCases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCase(i);
                setPos(50);
              }}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300",
                selectedCase === i
                  ? "bg-petrol text-bone shadow-sm"
                  : "bg-sand text-graphite hover:bg-sand/80 hover:text-ink",
              )}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* CASO PRINCIPAL EM DESTAQUE INTERATIVO                    */}
        {/* ======================================================== */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <div
                ref={wrapRef}
                onMouseMove={(e) => setFromClientX(e.clientX)}
                onPointerDown={(e) => {
                  dragging.current = true;
                  setFromClientX(e.clientX);
                }}
                className="relative aspect-16/10 w-full cursor-ew-resize overflow-hidden rounded-xl border border-ink/10 bg-sand shadow-xl select-none touch-none"
              >
                {/* Imagem DEPOIS */}
                <img
                  src={activeCase.after}
                  alt={`Depois — ${activeCase.title}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                />

                {/* Imagem ANTES */}
                <div
                  className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                >
                  <img
                    src={activeCase.before}
                    alt={`Antes — ${activeCase.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 rounded-full border border-bone/40 bg-petrol/85 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-bone uppercase">
                    Antes
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 rounded-full border border-bone/40 bg-sage px-4 py-1.5 backdrop-blur-md">
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-petrol uppercase">
                    Depois
                  </span>
                </div>

                {/* Divisor */}
                <div
                  className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone shadow-2xl"
                  style={{ left: `${pos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-bone bg-petrol text-bone shadow-lg">
                    <span className="text-xs font-bold tracking-tight">⇆</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={pos}
                  onChange={(e) => setPos(Number(e.target.value))}
                  aria-label="Controle de comparação antes e depois"
                  className="absolute inset-x-0 bottom-0 h-12 w-full cursor-ew-resize opacity-0"
                />
              </div>
            </Reveal>

            <div className="mt-3 flex items-center justify-between text-xs text-graphite">
              <span>Passe o mouse ou arraste para comparar</span>
              <span className="font-mono text-sage-deep font-semibold">{Math.round(pos)}%</span>
            </div>
          </div>

          {/* Ficha Técnica */}
          <div className="flex flex-col justify-between rounded-xl border border-ink/10 bg-sand p-7 md:p-8 lg:col-span-4">
            <div>
              <span className="eyebrow text-sage-deep">{activeCase.category}</span>
              <h3 className="mt-2 font-display text-2xl text-ink leading-snug">
                {activeCase.title}
              </h3>

              <div className="mt-6 space-y-4 border-t border-ink/10 pt-5 text-xs leading-relaxed text-graphite">
                <div>
                  <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                    Queixa do Paciente:
                  </span>
                  <p>{activeCase.complaint}</p>
                </div>

                <div>
                  <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                    Solução Executada:
                  </span>
                  <p>{activeCase.solution}</p>
                </div>

                <div>
                  <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                    Duração Estimada:
                  </span>
                  <p className="font-medium text-petrol">{activeCase.duration}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <SoulButton
                href={whatsappUrl}
                external
                tone="solid"
                ariaLabel="Agendar consulta para avaliação"
              >
                Avaliar meu caso
              </SoulButton>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DEMAIS CASOS — TODOS COM REVELAÇÃO INTERATIVA AO PASSAR O MOUSE */}
        {/* ======================================================== */}
        <div className="mt-16 border-t border-ink/10 pt-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="eyebrow text-sage-deep">Mais Casos Interativos</p>
              <h3 className="mt-2 font-display text-3xl text-ink">
                Passe o cursor sobre os casos abaixo
              </h3>
            </div>
            <p className="text-xs text-graphite/70 mt-2 md:mt-0">
              O resultado se revela conforme você move o mouse
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {allCases
              .slice(1)
              .concat(allCases.slice(0, 1))
              .map((c) => (
                <InteractiveCompareCard
                  key={c.id}
                  before={c.before}
                  after={c.after}
                  tag={c.category}
                  title={c.title}
                  desc={c.solution}
                />
              ))}
          </div>
        </div>

        {/* Disclaimer Ético */}
        <p className="mt-10 text-center text-[0.72rem] text-graphite/60 max-w-2xl mx-auto">
          * Imagens de procedimentos reais realizados na clínica. Os resultados sofrem variações de
          acordo com a anatomia, cor base e saúde biológica de cada paciente.
        </p>
      </div>
    </section>
  );
}
