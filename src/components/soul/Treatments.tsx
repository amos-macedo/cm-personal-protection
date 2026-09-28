import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal, MaskedLines } from "./motion-primitives";
import afterImg from "@/assets/after.jpg";
import materials from "@/assets/materials.jpg";
import hands from "@/assets/hands-detail.jpg";
import chair from "@/assets/clinic-chair.jpg";
import consult from "@/assets/consult.jpg";
import reception from "@/assets/clinic-reception.jpg";
import lifestyle from "@/assets/lifestyle-laugh.jpg";
import hero from "@/assets/hero-smile.jpg";

const treatments = [
  { name: "Estética Dental", desc: "Harmonia entre forma, cor e proporção.", img: afterImg },
  { name: "Clareamento", desc: "Mais luz, respeitando o seu esmalte.", img: lifestyle },
  { name: "Facetas", desc: "Ajustes precisos de formato e simetria.", img: materials },
  { name: "Lentes de contato dental", desc: "Camadas finíssimas, resultado natural.", img: hero },
  { name: "Implantes", desc: "Função e estética devolvidas com planejamento.", img: hands },
  { name: "Ortodontia", desc: "Alinhamento pensado para o seu tempo.", img: chair },
  { name: "Prótese", desc: "Reabilitação confortável e personalizada.", img: reception },
  { name: "Clínica Geral", desc: "Prevenção e acompanhamento contínuo.", img: consult },
];

export function Treatments() {
  const [active, setActive] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const listRef = useRef<HTMLUListElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 28, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 28, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="tratamentos" className="scroll-mt-24 bg-bone py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.98] text-ink">
            <MaskedLines lines={["Um cuidado para", "cada sorriso."]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed text-graphite">
              Cada indicação nasce da sua avaliação. Nada de pacote pronto.
            </p>
          </Reveal>
        </div>

        {/* Desktop: lista editorial com imagem que segue o cursor */}
        <ul
          ref={listRef}
          onMouseMove={onMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-16 hidden border-t border-ink/12 lg:block"
        >
          {treatments.map((t, i) => (
            <li key={t.name} className="border-b border-ink/12">
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                data-cursor
                className={cn(
                  "group flex w-full items-baseline justify-between gap-8 py-7 text-left transition-[opacity,transform,color] duration-500 [transition-timing-function:var(--ease-soul)]",
                  active !== null && active !== i ? "opacity-35" : "opacity-100",
                )}
              >
                <span className="flex items-baseline gap-8">
                  <span className="w-8 text-xs tracking-[0.2em] text-sage-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-[clamp(2rem,3.6vw,3.5rem)] leading-none transition-all duration-500 [transition-timing-function:var(--ease-soul)]",
                      active === i ? "translate-x-4 italic text-sage-deep" : "text-ink",
                    )}
                  >
                    {t.name}
                  </span>
                </span>
                <span className="max-w-xs text-right text-sm text-graphite opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {t.desc}
                </span>
              </button>
            </li>
          ))}

          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="follower"
                className="pointer-events-none absolute top-0 left-0 z-10 h-72 w-56 overflow-hidden"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={treatments[active].img}
                  alt={treatments[active].name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </ul>

        {/* Mobile: acordeão com imagem revelada */}
        <ul className="mt-12 border-t border-ink/12 lg:hidden">
          {treatments.map((t, i) => {
            const open = openMobile === i;
            return (
              <li key={t.name} className="border-b border-ink/12">
                <button
                  onClick={() => setOpenMobile(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={cn(
                      "font-display text-2xl transition-colors duration-400",
                      open ? "italic text-sage-deep" : "text-ink",
                    )}
                  >
                    {t.name}
                  </span>
                  <span className={cn("text-sage-deep transition-transform duration-500", open && "rotate-45")}>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <div className="aspect-3/2 overflow-hidden">
                          <img
                            src={t.img}
                            alt={t.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mt-4 text-sm text-graphite">{t.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
