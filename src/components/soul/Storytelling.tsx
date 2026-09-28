import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import hands from "@/assets/hands-detail.jpg";

const steps = [
  { n: "01", title: "Entender", text: "Antes de qualquer tratamento, ouvimos." },
  { n: "02", title: "Planejar", text: "Cada detalhe é pensado para o seu caso." },
  { n: "03", title: "Cuidar", text: "Porque uma boa experiência também faz parte do tratamento." },
];

function Step({
  index,
  progress,
  step,
}: {
  index: number;
  progress: MotionValue<number>;
  step: (typeof steps)[number];
}) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <span className="font-display text-6xl text-sage/70">{step.n}</span>
      <h3 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-none text-bone">
        {step.title}
      </h3>
      <p className="mt-6 max-w-sm text-lg leading-relaxed text-bone/65">{step.text}</p>
    </motion.div>
  );
}

export function Storytelling() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.3]);
  const imgX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-4%", "3%"]);
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reduce) {
    return (
      <section className="bg-petrol px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[110rem] space-y-16">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="font-display text-5xl text-sage/70">{s.n}</span>
              <h3 className="mt-3 font-display text-5xl text-bone">{s.title}</h3>
              <p className="mt-4 max-w-sm text-bone/65">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[280vh] bg-petrol">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="mx-auto grid h-full max-w-[110rem] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
          <div className="relative order-2 h-[44vh] md:order-1 md:h-[52vh]">
            {steps.map((s, i) => (
              <Step key={s.n} index={i} progress={scrollYProgress} step={s} />
            ))}
          </div>

          <div className="order-1 h-[38vh] overflow-hidden md:order-2 md:h-[76vh]">
            <motion.img
              src={hands}
              alt="Mãos do dentista com instrumentos de precisão"
              loading="lazy"
              width={1408}
              height={1760}
              className="h-full w-full object-cover"
              style={{ scale: imgScale, x: imgX }}
            />
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-8 h-px bg-bone/15 md:inset-x-10">
          <motion.div className="h-full bg-sage" style={{ width: barWidth }} />
        </div>
      </div>
    </section>
  );
}
