import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { method } from "@/content/site";
import { cn } from "@/lib/utils";
import { EASE, Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

const steps = method.steps;
const pad = (n: number) => String(n).padStart(2, "0");

function Heading() {
  return (
    <>
      <SectionLabel className="text-ink/70">{method.label}</SectionLabel>
      <h2 className="max-w-[34rem] font-display text-[clamp(2rem,3.5vw,2.625rem)] uppercase">
        {method.title}
      </h2>
    </>
  );
}

function PinnedSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (travel * (i + 0.5)) / steps.length, behavior: "smooth" });
  };

  const step = steps[active] ?? steps[0]!;

  return (
    <div
      ref={ref}
      className="relative hidden lg:motion-safe:block"
      style={{ height: `${steps.length * 85 + 20}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center pt-[5.375rem]">
        <div className="container-cm grid grid-cols-12 items-center gap-16">
          <div className="col-span-5">
            <Heading />

            <ol className="relative mt-12 pl-8">
              <span aria-hidden className="absolute top-1 bottom-1 left-0 w-px bg-ink/12" />
              <motion.span
                aria-hidden
                className="absolute top-1 bottom-1 left-0 w-px origin-top bg-signal"
                style={{ scaleY: scrollYProgress }}
              />
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title} className="py-3">
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={isActive ? "step" : undefined}
                      className="group flex w-full items-baseline gap-5 text-left"
                    >
                      <span
                        className={cn(
                          "font-display text-sm tabular-nums transition-colors duration-300",
                          isActive ? "text-signal" : "text-ink/30",
                        )}
                      >
                        {pad(i + 1)}
                      </span>
                      <span
                        className={cn(
                          "font-display text-xl uppercase transition-colors duration-300",
                          isActive ? "text-ink" : "text-ink/30 group-hover:text-ink/60",
                        )}
                      >
                        {s.title}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden pl-10 text-[0.9375rem] leading-relaxed text-ink/75"
                        >
                          <span className="block max-w-sm pt-2">{s.text}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="col-span-7">
            <div
              data-cursor="media"
              className="relative aspect-[5/4] max-h-[68vh] w-full overflow-hidden bg-ink"
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={step.title}
                  src={step.image}
                  alt=""
                  style={{ objectPosition: step.position }}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              </AnimatePresence>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent"
              />
              <div className="absolute right-8 bottom-7 left-8 flex items-end justify-between gap-6 text-bone">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={step.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="font-display text-2xl uppercase"
                  >
                    {step.title}
                  </motion.p>
                </AnimatePresence>
                <p className="font-display text-sm text-bone/70 tabular-nums">
                  <span className="text-[2.5rem] leading-none text-bone">{pad(active + 1)}</span> /{" "}
                  {pad(steps.length)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedSteps() {
  return (
    <div className="section-pad lg:motion-safe:hidden">
      <div className="container-cm">
        <Reveal className="mb-16">
          <Heading />
        </Reveal>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-ink/12 lg:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.1 * (i + 1)} className="relative z-[2]">
              <span className="mb-6 inline-block bg-bone pr-4 font-display text-[2rem] leading-none">
                {pad(i + 1)}
                <span className="text-signal">.</span>
              </span>
              <h3 className="mb-4 text-base font-bold tracking-[0.06em] uppercase [font-stretch:108%]">
                {s.title}
              </h3>
              <p className="text-sm text-ink/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Method() {
  return (
    <section id="processo" className="bg-bone text-ink">
      <PinnedSteps />
      <StackedSteps />
    </section>
  );
}
