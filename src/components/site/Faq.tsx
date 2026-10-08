import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-bone text-ink">
      <div className="container-cm">
        <Reveal>
          <h2 className="mb-16 text-center font-display text-[clamp(2rem,3.5vw,2.625rem)] uppercase">
            Perguntas frequentes
          </h2>
        </Reveal>

        <ul className="mx-auto max-w-[50rem]">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={item.q} delay={0.04 * i} className="border-b border-ink/12">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-semibold">{item.q}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "relative h-4 w-4 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2",
                        isOpen ? "bg-signal" : "bg-ink",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2",
                        isOpen ? "bg-signal" : "bg-ink",
                      )}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[0.9375rem] leading-relaxed text-ink/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
