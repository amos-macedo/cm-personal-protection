import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { brand } from "@/content/site";
import { Logo } from "./Logo";
import { EASE } from "./motion-primitives";

const INTRO_EVENT = "cm:intro-done";
const HOLD_MS = 2700;
const WORD_TOP = "CM PERSONAL";
const WORD_BOTTOM = "PROTECTION";

let introFinished = false;

export function useIntroDone() {
  const [done, setDone] = useState(introFinished);
  useEffect(() => {
    if (introFinished) return setDone(true);
    const on = () => setDone(true);
    window.addEventListener(INTRO_EVENT, on);
    return () => window.removeEventListener(INTRO_EVENT, on);
  }, []);
  return done;
}

function Letters({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="flex justify-center overflow-hidden pb-[0.08em]" aria-hidden>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + i * 0.035, ease: EASE }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Intro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const t = window.setTimeout(
      () => {
        setVisible(false);
        introFinished = true;
        window.dispatchEvent(new Event(INTRO_EVENT));
      },
      reduce ? 500 : HOLD_MS,
    );
    return () => {
      window.clearTimeout(t);
      root.style.overflow = "";
    };
  }, [reduce]);

  const finish = () => {
    document.documentElement.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={finish}>
      {visible && (
        <motion.div
          key="intro"
          role="status"
          aria-label={`Carregando ${brand.legalMark}`}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-night"
          exit={reduce ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: reduce ? 0.3 : 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(150_62_28/0.16),transparent)] blur-2xl"
          />

          <motion.div
            className="relative flex flex-col items-center"
            exit={reduce ? { opacity: 0 } : { y: -60, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="relative grid h-36 w-36 place-items-center md:h-44 md:w-44">
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full -rotate-90 text-bone"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeWidth="0.5"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="0.04 0.96"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: -1, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>

              <motion.div
                className="text-bone"
                initial={{ clipPath: "circle(0% at 50% 50%)", scale: 0.85, rotate: -25 }}
                animate={{ clipPath: "circle(75% at 50% 50%)", scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
              >
                <Logo variant="mark" className="w-16 md:w-20" />
              </motion.div>
            </div>

            <div className="mt-10 font-display text-[clamp(1.35rem,4.4vw,2.25rem)] leading-[1.05] tracking-[0.06em] text-bone uppercase">
              <Letters text={WORD_TOP} delay={0.75} />
              <Letters text={WORD_BOTTOM} delay={0.95} />
            </div>

            <motion.span
              aria-hidden
              className="mt-6 block h-px w-14 origin-center bg-signal"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.45, ease: EASE }}
            />
            <motion.p
              className="label mt-5 text-stone"
              initial={{ opacity: 0, y: 8, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
              transition={{ duration: 0.9, delay: 1.55, ease: EASE }}
            >
              Segurança pessoal e privada
            </motion.p>
          </motion.div>

          <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-bone/10">
            <motion.span
              className="block h-full origin-left bg-bone/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (reduce ? 500 : HOLD_MS) / 1000, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
