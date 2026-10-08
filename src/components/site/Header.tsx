import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, primaryCtaHref } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CtaLink } from "./CtaLink";
import { EASE } from "./motion-primitives";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-[5.375rem] items-center border-b border-bone/10 transition-[background-color,backdrop-filter] duration-300",
          scrolled ? "bg-night/90 backdrop-blur-[16px]" : "bg-night/10",
        )}
      >
        <div className="container-cm flex items-center justify-between gap-6">
          <a href="#inicio" aria-label="CM Personal Protection — início" className="text-bone">
            <Logo className="h-9 md:h-10" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label !tracking-[0.14em] text-fog transition-colors duration-300 hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CtaLink
              href={primaryCtaHref}
              tone="outline"
              arrow={false}
              className="hidden !px-7 !py-3.5 sm:inline-flex"
            >
              Fale conosco
            </CtaLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-bone lg:hidden"
            >
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-night lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-cm flex h-[5.375rem] shrink-0 items-center justify-between border-b border-bone/10">
              <Logo className="h-9 text-bone" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="relative h-11 w-11 text-bone"
              >
                <span className="absolute top-1/2 left-1/2 h-0.5 w-6 -translate-1/2 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-1/2 h-0.5 w-6 -translate-1/2 -rotate-45 bg-current" />
              </button>
            </div>

            <nav
              aria-label="Navegação mobile"
              className="container-cm flex flex-1 flex-col justify-center gap-2 py-10"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: EASE }}
                  className="border-b border-bone/10 py-4 font-display text-2xl text-bone uppercase transition-colors hover:text-signal"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-cm pb-10">
              <CtaLink href={primaryCtaHref} className="w-full" onClick={() => setOpen(false)}>
                Fale conosco
              </CtaLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
