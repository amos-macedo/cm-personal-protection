import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import afterImg from "@/assets/after.jpg";
import { useClient } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";

export function Featured() {
  const { whatsappUrl } = useClient();
  return (
    <section id="destaque" className="scroll-mt-24 bg-clay py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-petrol/70">Em destaque — Estética do sorriso</p>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagem com proporção contida e equilibrada */}
          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <div className="group relative mx-auto max-w-lg lg:max-w-none overflow-hidden rounded-xl border border-ink/10 bg-sand shadow-lg">
                <div className="aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={afterImg}
                    alt="Detalhe de um sorriso natural após tratamento estético"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 rounded-lg border border-bone/20 bg-petrol/90 px-3.5 py-1.5 backdrop-blur-md">
                  <p className="text-[0.68rem] tracking-[0.18em] text-bone uppercase font-medium">
                    Planejamento Digital & Mimetismo Natural
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Conteúdo alinhado com respiro */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.05] text-ink">
              <MaskedLines
                lines={[
                  "Pequenos detalhes.",
                  <span key="b" className="italic text-petrol">
                    Grandes mudanças na forma
                  </span>,
                  <span key="c" className="italic text-petrol">
                    como você se sente.
                  </span>,
                ]}
              />
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-graphite">
                Proporção, translucidez e microtextura planejadas sob medida para o seu rosto. Não
                acreditamos em sorrisos padronizados ou artificiais, mas no resgate da sua confiança
                com naturalidade.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-6 space-y-2.5 border-y border-ink/10 py-5 text-sm text-graphite">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                  Preservação máxima da estrutura biológica dental
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                  Visualização digital prévia (mockup) antes de iniciar
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                  Cerâmicas e resinas de alta resistência e durabilidade
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-6">
                <SoulButton href={whatsappUrl} external tone="solid">
                  Quero conhecer
                </SoulButton>
                <span className="text-xs text-graphite/70">Avaliação individualizada</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
