import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import reception from "@/assets/clinic-reception.jpg";
import chair from "@/assets/clinic-chair.jpg";
import materials from "@/assets/materials.jpg";
import hands from "@/assets/hands-detail.jpg";
import { MaskedLines, Reveal } from "./motion-primitives";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yA = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["16%", "-6%"]);
  const xIn = useTransform(scrollYProgress, [0.1, 0.6], ["18%", "0%"]);

  return (
    <section ref={ref} id="experiencia" className="scroll-mt-24 overflow-hidden bg-sand py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.2rem,5.4vw,5.2rem)] leading-[1] text-ink">
          <MaskedLines lines={["Você vai perceber a", "diferença nos detalhes."]} />
        </h2>

        <div className="mt-20 grid grid-cols-12 gap-x-5 gap-y-16">
          <motion.figure
            className="col-span-12 md:col-span-7"
            style={reduce ? {} : { y: yA }}
          >
            <div className="aspect-3/2 overflow-hidden">
              <img
                src={reception}
                alt="Recepção da clínica com luz natural e tons quentes"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full w-full object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-soul)] hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-xs tracking-[0.16em] text-graphite uppercase">
              Recepção — respirar antes de começar
            </figcaption>
          </motion.figure>

          <motion.figure
            className="col-span-8 md:col-span-4 md:col-start-9 md:-mt-24"
            style={reduce ? {} : { y: yB }}
          >
            <div className="aspect-4/5 overflow-hidden">
              <img
                src={chair}
                alt="Sala de atendimento minimalista com luz suave"
                loading="lazy"
                width={1408}
                height={1760}
                className="h-full w-full object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-soul)] hover:scale-105"
              />
            </div>
          </motion.figure>

          <Reveal className="col-span-12 md:col-span-4 md:col-start-2" delay={0.05}>
            <p className="font-display text-2xl leading-snug text-petrol md:text-3xl">
              O silêncio certo, a luz certa, o tempo certo.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite">
              Ambientes pensados para reduzir a ansiedade antes mesmo da primeira palavra.
            </p>
          </Reveal>

          <motion.figure
            className="col-span-12 md:col-span-6 md:col-start-7"
            style={reduce ? {} : { x: xIn, y: yC }}
          >
            <div className="aspect-3/2 overflow-hidden">
              <img
                src={materials}
                alt="Materiais e escala de cor sobre tecido natural"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-soul)] hover:scale-105"
              />
            </div>
          </motion.figure>

          <motion.figure
            className="col-span-10 md:col-span-5"
            style={reduce ? {} : { y: yB }}
          >
            <div className="aspect-4/5 overflow-hidden md:aspect-3/4">
              <img
                src={hands}
                alt="Detalhe das mãos do profissional durante o atendimento"
                loading="lazy"
                width={1408}
                height={1760}
                className="h-full w-full object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-soul)] hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-xs tracking-[0.16em] text-graphite uppercase">
              Precisão — cada movimento explicado
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
