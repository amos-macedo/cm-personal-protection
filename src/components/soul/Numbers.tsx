import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./motion-primitives";

/** PLACEHOLDER — números ilustrativos, confirmar com a clínica. */
const stats = [
  { value: 10, suffix: "+", label: "anos de experiência" },
  { value: 2000, suffix: "+", label: "pacientes", format: (n: number) => n.toLocaleString("pt-BR") },
  { value: 4.9, suffix: "", label: "avaliação média", decimals: 1 },
  { value: 100, suffix: "%", label: "atenção aos detalhes" },
];

function Counter({
  value,
  decimals = 0,
  format,
  run,
}: {
  value: number;
  decimals?: number;
  format?: (n: number) => string;
  run: boolean;
}) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!run || reduce) {
      if (reduce) setN(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value, reduce]);

  const rounded = decimals ? n.toFixed(decimals).replace(".", ",") : Math.round(n);
  return <>{format && !decimals ? format(Math.round(n)) : rounded}</>;
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="bg-petrol py-[12vh]">
      <div ref={ref} className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div className="border-l border-bone/15 pl-6">
                <p className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-none text-bone">
                  <Counter
                    value={s.value}
                    decimals={s.decimals}
                    format={s.format}
                    run={inView}
                  />
                  {s.suffix}
                </p>
                <p className="mt-3 text-xs tracking-[0.18em] text-bone/55 uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
