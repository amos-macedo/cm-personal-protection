import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 44, scale: 0.97, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </Comp>
  );
}

export function CurtainImage({
  src,
  alt,
  className,
  imgClassName,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-cursor="media"
      className={cn("relative overflow-hidden", className)}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-cover", imgClassName)}
        initial={reduce ? false : { scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      {children}
    </motion.div>
  );
}

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.18, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

export function ScrollWords({
  text,
  className,
  as: Tag = "p",
  offset = ["start 0.9", "start 0.45"],
}: {
  text: string;
  className?: string;
  as?: "p" | "h2";
  offset?: ScrollOffset;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {reduce ? (
        text
      ) : (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden>
            {words.map((w, i) => (
              <ScrollWord
                key={i}
                word={w}
                index={i}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </span>
        </>
      )}
    </Tag>
  );
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const target = Number(value);
  const numeric = Number.isFinite(target) && value.trim() !== "";
  const [display, setDisplay] = useState(numeric && !reduce ? "0" : value);

  useEffect(() => {
    if (!numeric || reduce || !inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, numeric, reduce, target]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      {display}
    </span>
  );
}
