import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import lifestyle from "@/assets/lifestyle-laugh.jpg";
import { MaskedLines } from "./motion-primitives";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);
  const rowX = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);
  const clip = useTransform(scrollYProgress, [0.1, 0.55], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-sand py-[16vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <motion.div
          style={reduce ? {} : { x: rowX }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-[clamp(3rem,13vw,13rem)] leading-[0.88] text-ink"
        >
          <MaskedLines lines={["Sorrir é"]} />
          <motion.span
            className="relative inline-block h-[0.62em] w-[min(30vw,20rem)] overflow-hidden rounded-full"
            style={reduce ? {} : { clipPath: clip }}
          >
            <motion.img
              src={lifestyle}
              alt="Mulher sorrindo naturalmente na luz do fim de tarde"
              loading="lazy"
              width={1408}
              height={1760}
              className="h-full w-full object-cover"
              style={reduce ? {} : { y: imgY, scale: 1.25 }}
            />
          </motion.span>
          <MaskedLines
            delay={0.1}
            lines={[
              <span key="p" className="italic text-sage-deep">
                pessoal.
              </span>,
            ]}
          />
        </motion.div>

        <div className="mt-16 flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-lg leading-relaxed text-graphite"
          >
            Por isso, acreditamos que cada cuidado também deve ser.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
