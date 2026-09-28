import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import ctaDark from "@/assets/cta-dark.jpg";
import { whatsappUrl } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-petrol py-[18vh]">
      <motion.img
        src={ctaDark}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-[120%] w-full scale-105 object-cover opacity-45"
        style={reduce ? {} : { y }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petrol via-petrol/80 to-petrol/30" />

      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.5rem)] leading-[0.98] text-bone">
          <MaskedLines
            lines={[
              "Talvez esteja na hora",
              "de olhar para o seu",
              <span key="c" className="italic text-sage">
                sorriso de outro jeito.
              </span>,
            ]}
          />
        </h2>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-md leading-relaxed text-bone/65">
            Converse com a Soul'Encanto e descubra como podemos cuidar do seu sorriso.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10">
            <SoulButton href={whatsappUrl} external tone="light">
              Agendar avaliação
            </SoulButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
