import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tones = {
  light: "bg-bone text-ink hover:bg-fog",
  signal: "bg-signal text-paper hover:bg-signal-deep",
  outline: "border border-bone/55 text-bone hover:bg-bone hover:text-ink",
  "outline-dark": "border border-ink/55 text-ink hover:bg-ink hover:text-bone",
};

export function CtaLink({
  href,
  children,
  tone = "light",
  arrow = true,
  icon,
  className,
  newTab,
  onClick,
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
  newTab?: boolean;
  onClick?: () => void;
}) {
  const external = newTab || /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full whitespace-nowrap px-8 py-4 text-xs font-bold tracking-[0.08em] uppercase [font-stretch:108%] transition-all duration-300 hover:-translate-y-0.5",
        tones[tone],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          strokeWidth={2}
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
