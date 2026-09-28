import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-700 [transition-timing-function:var(--ease-soul)]",
          scrolled
            ? "border-b border-ink/8 bg-bone/80 py-3 backdrop-blur-md"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={cn(
              "font-display text-xl leading-none transition-colors duration-500 md:text-2xl",
              scrolled ? "text-ink" : "text-bone",
            )}
          >
            {site.name}
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => onNav(item.href)}
                className={cn(
                  "link-underline hover:link-underline-on text-[0.78rem] tracking-[0.12em] transition-colors duration-500",
                  scrolled ? "text-graphite hover:text-ink" : "text-bone/80 hover:text-bone",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "hidden rounded-full border px-5 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-500 md:inline-block",
                scrolled
                  ? "border-ink/25 text-ink hover:bg-petrol hover:text-bone hover:border-petrol"
                  : "border-bone/50 text-bone hover:bg-bone hover:text-petrol",
              )}
            >
              Agendar avaliação
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className={cn(
                "flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden",
                scrolled ? "text-ink" : "text-bone",
              )}
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-petrol px-6 py-6 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-bone">{site.name}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="text-[0.7rem] tracking-[0.2em] text-bone/70 uppercase"
              >
                Fechar
              </button>
            </div>

            <nav aria-label="Navegação mobile" className="mt-auto mb-auto flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => onNav(item.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-bone/12 py-4 text-left font-display text-4xl text-bone"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-bone px-6 py-4 text-center text-[0.7rem] tracking-[0.2em] text-petrol uppercase"
            >
              Agendar avaliação
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
