import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import consult from "@/assets/consult.jpg";
import materials from "@/assets/materials.jpg";
import { useClient } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";

const pillars = [
  { word: "Escuta", note: "Antes do diagnóstico, a conversa." },
  { word: "Precisão", note: "Planejamento técnico, sem improviso." },
  { word: "Cuidado", note: "Do primeiro contato ao acompanhamento." },
];

export function Concept() {
  const { site } = useClient();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section ref={ref} id="clinica" className="relative scroll-mt-24 bg-bone py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-sage-deep">Mais do que odontologia</p>
        </Reveal>

        <div className="mt-10 grid gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <div className="aspect-4/5 overflow-hidden rounded-xl border border-ink/10 shadow-md md:aspect-3/2 lg:aspect-4/5">
              <motion.img
                src={consult}
                alt="Dentista ouvindo uma paciente durante a avaliação"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full scale-110 object-cover"
                style={reduce ? {} : { y: bigY }}
              />
            </div>

            <motion.div
              className="absolute -right-4 -bottom-16 hidden w-44 overflow-hidden rounded-lg border border-ink/10 shadow-[var(--shadow-lift)] lg:block"
              style={reduce ? {} : { y: smallY }}
            >
              <img
                src={materials}
                alt="Escala de cor e instrumentos odontológicos sobre linho"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.02] text-ink">
              <MaskedLines lines={["Cuidado que começa", "antes do tratamento."]} />
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md leading-relaxed text-graphite">
                Na {site.name}, cada detalhe da experiência importa. Do primeiro contato ao
                acompanhamento do tratamento, buscamos tornar o cuidado odontológico mais próximo,
                confortável e personalizado.
              </p>
            </Reveal>

            <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.word} delay={0.12 * i}>
                  <div className="flex items-baseline gap-6 py-5">
                    <span className="font-display text-2xl text-sage-deep">0{i + 1}</span>
                    <div>
                      <p className="font-display text-2xl text-ink">{p.word}</p>
                      <p className="mt-1 text-sm text-graphite">{p.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
