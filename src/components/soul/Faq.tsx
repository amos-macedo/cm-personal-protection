import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "É uma conversa antes de qualquer procedimento: entendemos sua queixa, avaliamos clinicamente e apresentamos as possibilidades com valores e etapas.",
  },
  {
    q: "Quais tratamentos são realizados?",
    a: "Estética dental, clareamento, facetas, lentes de contato dental, implantes, ortodontia, prótese e clínica geral.",
  },
  {
    q: "A clínica atende crianças?",
    a: "Sim. O atendimento infantil é feito com tempo e linguagem próprios, respeitando o ritmo de cada criança.",
  },
  {
    q: "Quais formas de pagamento estão disponíveis?",
    a: "Dinheiro, PIX, cartões de débito e crédito, com opções de parcelamento conforme o plano de tratamento. (Confirmar condições atuais.)",
  },
  {
    q: "Como faço para agendar?",
    a: `Pelo WhatsApp ${site.phoneDisplay}. Respondemos em horário comercial e confirmamos o melhor horário para você.`,
  },
  {
    q: "Onde a clínica está localizada?",
    a: `${site.city}. ${site.address}`,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-bone py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-tight text-ink lg:col-span-4">
            <MaskedLines lines={["Perguntas", "frequentes."]} />
          </h2>

          <ul className="lg:col-span-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="li" key={f.q} delay={0.05 * i}>
                  <div className="border-b border-ink/12 first:border-t">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "font-display text-xl transition-colors duration-500 md:text-2xl",
                          isOpen ? "text-sage-deep" : "text-ink",
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "shrink-0 text-lg text-sage-deep transition-transform duration-500 [transition-timing-function:var(--ease-soul)]",
                          isOpen && "rotate-45",
                        )}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 leading-relaxed text-graphite">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
