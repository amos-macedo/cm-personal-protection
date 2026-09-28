import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "solid" | "outline" | "light";

const tones: Record<Tone, string> = {
  solid:
    "border-petrol text-bone before:bg-petrol hover:text-bone hover:before:bg-petrol-soft",
  outline:
    "border-current text-ink before:bg-ink hover:text-bone",
  light:
    "border-bone/70 text-bone before:bg-bone hover:text-petrol",
};

export function SoulButton({
  children,
  href,
  onClick,
  tone = "outline",
  className,
  external,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: Tone;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const base = cn(
    "group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full border px-7 py-3.5 text-[0.72rem] font-medium tracking-[0.2em] uppercase transition-colors duration-500",
    "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 before:[transition-timing-function:var(--ease-soul)] hover:before:scale-y-100",
    tone === "solid" && "before:scale-y-100",
    tones[tone],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block translate-x-0 transition-transform duration-500 [transition-timing-function:var(--ease-soul)] group-hover:translate-x-1.5"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={base}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
