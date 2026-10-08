import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type CursorState = "idle" | "link" | "text" | "media";

const SIZE = 80;
const SCALE: Record<CursorState, number> = { idle: 0.2, link: 0.5, text: 0.68, media: 0.16 };
const TEXT_SELECTOR = "p, h1, h2, h3, h4, li, dt, dd, figcaption, blockquote, label";
const LINK_SELECTOR = "a, button, [role='button'], [data-cursor='link']";
const MEDIA_SELECTOR = "img, picture, video, [data-cursor='media']";

function resolveState(el: Element | null): CursorState {
  const media = el?.closest(MEDIA_SELECTOR);
  const link = el?.closest(LINK_SELECTOR);
  if (link && link !== media && (!media || media.contains(link))) return "link";
  if (media) return "media";
  if (el?.closest(TEXT_SELECTOR)) return "text";
  return "idle";
}

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<CursorState>("idle");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    // Posição escrita direto no DOM: sem mola nem re-render, o círculo fica colado no ponteiro.
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setVisible(true);
      setState(resolveState(e.target as Element | null));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] will-change-transform"
      style={{ transform: "translate3d(-200px, -200px, 0)" }}
    >
      {/* hue-rotate(180deg) preserva o laranja da marca; mix-blend-difference o trocaria por azul */}
      <motion.span
        className={cn(
          "block -translate-1/2 rounded-full",
          state === "media"
            ? "bg-bone shadow-[0_0_0_6px_rgb(18_15_8/0.35)]"
            : "backdrop-invert backdrop-hue-rotate-180",
        )}
        initial={false}
        animate={{
          width: visible ? SIZE * SCALE[state] : 0,
          height: visible ? SIZE * SCALE[state] : 0,
        }}
        transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
