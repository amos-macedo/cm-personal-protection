import { motion, useReducedMotion } from "motion/react";
import { hero, images, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night pt-[5.375rem] lg:min-h-[53rem]"
    >
      <motion.img
        src={images.corridor}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_35%]"
        initial={{ scale: 1.12 }}
        animate={reduce ? { scale: 1.12 } : { scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-night/70" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgb(255_255_255/0.02)_0%,transparent_60%)]"
      />

      <div className="container-cm relative py-16">
        <div className="lg:w-[74%] lg:pr-12">
          <h1 className="mb-6 font-display text-[clamp(2.25rem,5.2vw,4.25rem)] text-bone uppercase">
            {hero.titleLines.map((line, i) => (
              <motion.span key={line} className="block" {...fadeUp(0.1 + i * 0.1)}>
                {i === hero.titleLines.length - 1 ? (
                  <>
                    {line.replace(/\.$/, "")}
                    <span className="text-signal">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mb-12 max-w-[40rem] text-lg leading-relaxed font-light text-fog"
            {...fadeUp(0.3)}
          >
            {hero.lead}
          </motion.p>

          <motion.div className="mb-16 flex flex-col gap-4 sm:flex-row" {...fadeUp(0.4)}>
            <CtaLink href={primaryCtaHref}>Solicitar proposta</CtaLink>
            <CtaLink href="#contato" tone="outline" arrow={false}>
              Fale conosco
            </CtaLink>
          </motion.div>

          <motion.ul
            className="flex flex-wrap gap-x-8 gap-y-3 border-t border-bone/12 pt-6"
            {...fadeUp(0.5)}
          >
            {hero.micro.map((item) => (
              <li key={item} className="label !text-[0.625rem] !tracking-[0.15em] text-stone">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute top-1/2 right-6 hidden -translate-y-1/2 rotate-180 items-center gap-4 [writing-mode:vertical-rl] lg:flex"
      >
        <span className="block h-[60px] w-px bg-stone" />
        <span className="text-[0.625rem] tracking-[0.25em] text-stone uppercase">
          CM Personal Protection
        </span>
      </div>
    </section>
  );
}
