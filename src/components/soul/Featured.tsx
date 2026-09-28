import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import afterImg from "@/assets/after.jpg";
import { whatsappUrl } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";

export function Featured() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const width = useTransform(scrollYProgress, [0, 0.5], ["62%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={ref} className="bg-clay py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-petrol/60">Em destaque — Estética do sorriso</p>
        </Reveal>

        <motion.div
          className="mt-10 ml-auto overflow-hidden"
          style={reduce ? { width: "100%" } : { width }}
        >
          <div className="aspect-16/10 md:aspect-21/9">
            <motion.img
              src={afterImg}
              alt="Detalhe de um sorriso após tratamento estético"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
              style={reduce ? {} : { scale }}
            />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] text-ink lg:col-span-7">
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

          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-sm leading-relaxed text-graphite">
                Proporção, cor e textura ajustadas ao seu rosto — não a um modelo padrão.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div>
                <SoulButton href={whatsappUrl} external tone="solid">
                  Quero conhecer
                </SoulButton>
                <p className="mt-6 text-xs text-graphite/70">
                  Cada tratamento é indicado e planejado individualmente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
