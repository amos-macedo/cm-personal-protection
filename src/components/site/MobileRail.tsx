import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Os filhos precisam ser <li>: o seletor [&>li] define a largura e o snap de cada card no mobile.
export function MobileRail({
  children,
  gridClassName,
  label,
  tone = "dark",
}: {
  children: ReactNode;
  gridClassName: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
      setActive(Math.min(count - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);

  const goTo = (i: number) => {
    const el = ref.current;
    const item = el?.children[i] as HTMLElement | undefined;
    if (el && item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={ref}
        aria-label={label}
        className={cn(
          "-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "[&>li]:shrink-0 [&>li]:snap-start max-md:[&>li]:basis-[82%]",
          "md:mx-0 md:overflow-visible md:px-0 md:pb-0 md:[&>li]:shrink",
          gridClassName,
        )}
      >
        {children}
      </ul>

      {count > 1 && (
        <div className="mt-6 flex justify-center gap-1.5 md:hidden">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o item ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-6" : "w-1.5",
                tone === "dark"
                  ? i === active
                    ? "bg-bone"
                    : "bg-bone/30"
                  : i === active
                    ? "bg-ink"
                    : "bg-ink/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
