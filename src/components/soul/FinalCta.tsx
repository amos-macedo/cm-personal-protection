import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import ctaDark from "@/assets/cta-dark.jpg";
import { site, whatsappUrl } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="contato"
      ref={ref}
      className="scroll-mt-24 relative isolate overflow-hidden bg-petrol py-[14vh]"
    >
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-petrol via-petrol/85 to-petrol/40" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-sage">Agende seu horário</p>
            </Reveal>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.98] text-bone">
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

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg leading-relaxed text-bone/70 text-base">
                Converse com a Soul'Encanto e descubra como podemos cuidar do seu sorriso com
                escuta, precisão e naturalidade.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <SoulButton href={whatsappUrl} external tone="light">
                  Agendar avaliação
                </SoulButton>
                <a
                  href={`tel:${site.phoneClean}`}
                  className="link-underline hover:link-underline-on text-xs tracking-widest text-bone/75 uppercase py-3 px-2 font-medium"
                >
                  Ligue: {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="rounded-xl border border-bone/15 bg-bone/5 p-6 backdrop-blur-md lg:col-span-4">
            <span className="eyebrow text-sage">Atendimento</span>
            <p className="mt-2 text-sm text-bone font-medium">{site.hoursWeekday}</p>
            <p className="text-xs text-bone/60 mt-0.5">{site.hoursWeekend}</p>
            <div className="mt-4 border-t border-bone/10 pt-3">
              <span className="eyebrow text-sage">Endereço</span>
              <p className="mt-1 text-xs leading-relaxed text-bone/75">
                {site.addressComplement}
                <br />
                {site.addressStreet} — {site.cityState}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
