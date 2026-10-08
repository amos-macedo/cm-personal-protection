import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import heroCover from "@/assets/cm/hero-cover.webp";
import { hero, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { useIntroDone } from "./Intro";
import { EASE } from "./motion-primitives";

const fadeUp = (delay: number, ready: boolean) => ({
  initial: { opacity: 0, y: 14 },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const reduce = useReducedMotion();
  const ready = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 18, mass: 0.8 });
  const sy = useSpring(py, { stiffness: 40, damping: 18, mass: 0.8 });
  const portraitX = useTransform(sx, (v) => v * -14);
  const portraitY = useTransform(sy, (v) => v * -10);
  const glowX = useTransform(sx, (v) => v * 40);
  const glowY = useTransform(sy, (v) => v * 30);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollPortraitY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const scrollPortraitScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.08]);
  const scrollPortraitOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const scrollContentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -70]);
  const scrollContentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night pt-[5.375rem] lg:min-h-[53rem] lg:items-center"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 -left-1/4 -z-10 h-[90%] w-[70%]"
        style={{ x: glowX, y: glowY }}
      >
        <div className="cm-glow h-full w-full rounded-full bg-[radial-gradient(closest-side,rgb(150_62_28/0.22),transparent)] blur-2xl" />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ y: scrollPortraitY, scale: scrollPortraitScale, opacity: scrollPortraitOpacity }}
      >
        <motion.div
          className="absolute top-[5.375rem] right-0 aspect-[1100/2019] h-[62%] sm:h-[70%] lg:top-auto lg:right-[5%] lg:bottom-0 lg:h-[74%] xl:right-[8%] xl:h-[84%]"
          style={{ x: portraitX, y: portraitY }}
          initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
          animate={
            ready
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 28, filter: "blur(14px)" }
          }
          transition={{ duration: 1.8, delay: 0.35, ease: EASE }}
        >
          <div className="pointer-events-none absolute -inset-[30%]">
            <div className="cm-backlight-warm absolute inset-0 bg-[radial-gradient(ellipse_42%_36%_at_50%_40%,rgb(206_120_60/0.75),rgb(150_62_28/0.25)_50%,transparent_75%)] blur-3xl" />
            <div className="cm-backlight-cool absolute inset-0 bg-[radial-gradient(ellipse_42%_36%_at_50%_40%,rgb(236_231_222/0.4),rgb(236_231_222/0.1)_50%,transparent_75%)] blur-3xl" />
          </div>
          <img
            src={heroCover}
            alt=""
            fetchPriority="high"
            className="cm-breathe relative h-full w-full object-cover [mask-image:radial-gradient(ellipse_50%_54%_at_50%_44%,black_45%,transparent_100%)]"
          />
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/70 to-transparent lg:bg-gradient-to-r lg:from-night lg:via-night/30 lg:to-transparent"
      />

      <motion.div
        className="container-cm relative pt-16 pb-14 lg:py-16"
        style={{ y: scrollContentY, opacity: scrollContentOpacity }}
      >
        <div className="lg:w-[62%]">
          <h1 className="mb-6 font-display text-[clamp(2.25rem,5.2vw,4.25rem)] text-bone uppercase">
            {hero.titleLines.map((line, i) => (
              <motion.span key={line} className="block" {...fadeUp(0.45 + i * 0.12, ready)}>
                {i === hero.titleLines.length - 1 ? (
                  <>
                    {line.replace(/\.$/, "").split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="whitespace-nowrap">
                      <span className="relative inline-block">
                        {line.replace(/\.$/, "").split(" ").at(-1)}
                        <motion.span
                          aria-hidden
                          className="absolute -bottom-[0.06em] left-0 h-[0.07em] w-full origin-left overflow-hidden bg-signal"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: ready ? 1 : 0 }}
                          transition={{ duration: 1.1, delay: 1.15, ease: EASE }}
                        >
                          {ready && !reduce && (
                            <span className="cm-underline-gleam absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgb(245_242_236/0.85),transparent)]" />
                          )}
                        </motion.span>
                      </span>
                      <span className="text-signal">.</span>
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mb-12 max-w-[36rem] text-lg leading-relaxed font-light text-fog"
            {...fadeUp(0.7, ready)}
          >
            {hero.lead}
          </motion.p>

          <motion.div className="mb-16 flex flex-col gap-4 sm:flex-row" {...fadeUp(0.8, ready)}>
            <CtaLink href={primaryCtaHref}>Solicitar proposta</CtaLink>
            <CtaLink href="#contato" tone="outline" arrow={false}>
              Fale conosco
            </CtaLink>
          </motion.div>

          <motion.ul
            className="flex flex-wrap gap-x-8 gap-y-3 border-t border-bone/12 pt-6"
            {...fadeUp(0.9, ready)}
          >
            {hero.micro.map((item) => (
              <li key={item} className="label !text-[0.625rem] !tracking-[0.15em] text-stone">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

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
