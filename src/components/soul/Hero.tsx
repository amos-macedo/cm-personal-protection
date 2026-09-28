import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import heroSmile from "@/assets/hero-smile.jpg";
import { MaskedLines } from "./motion-primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const veil = useTransform(scrollYProgress, [0, 1], [0.45, 0.8]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] overflow-hidden bg-petrol">
      <motion.div
        className="absolute inset-0"
        style={reduce ? {} : { scale, y: imageY }}
      >
        <img
          src={heroSmile}
          alt="Retrato de uma paciente sorrindo com luz natural"
          width={1600}
          height={1920}
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_35%]"
        />
        <motion.div
          className="absolute inset-0 bg-petrol"
          style={reduce ? { opacity: 0.45 } : { opacity: veil }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol/85 via-petrol/10 to-petrol/45" />
      </motion.div>

      <motion.div
        className="relative flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20"
        style={reduce ? {} : { y: contentY, opacity: contentOpacity }}
      >
        <div className="mx-auto w-full max-w-[110rem]">
          <motion.p
            className="eyebrow text-sage"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Odontologia com propósito
          </motion.p>

          <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.9rem,8.6vw,8.5rem)] leading-[0.94] text-bone">
            <MaskedLines
              delay={1.6}
              lines={[
                "Seu sorriso também",
                <span key="2" className="italic text-sage">
                  conta quem você é.
                </span>,
              ]}
            />
          </h1>

          <motion.div
            className="mt-10 flex flex-col gap-8 border-t border-bone/15 pt-8 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-bone/70">
              Cuidado, precisão e uma experiência pensada para você.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() =>
                  document.querySelector("#clinica")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-3 rounded-full border border-bone/50 px-7 py-3.5 text-[0.7rem] tracking-[0.2em] text-bone uppercase transition-colors duration-500 hover:bg-bone hover:text-petrol"
              >
                Conhecer a Soul'Encanto
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-3 text-[0.65rem] tracking-[0.24em] text-bone/45 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            <span>Scroll para descobrir</span>
            <motion.span
              animate={reduce ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
