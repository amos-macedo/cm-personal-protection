import { useState } from "react";
import { primaryCtaHref, services } from "@/content/site";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

type Service = (typeof services)[number];

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicos" className="section-pad border-t border-bone/12 bg-ink">
      <div className="container-cm">
        <Reveal className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Serviços</SectionLabel>
            <h2 className="max-w-[31rem] font-display text-[clamp(1.75rem,3vw,2.25rem)] text-bone uppercase">
              Soluções completas para sua segurança
            </h2>
          </div>
          <CtaLink href={primaryCtaHref} tone="outline" className="self-start md:self-auto">
            Solicitar proposta
          </CtaLink>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={0.08 * i}>
              <button
                type="button"
                onClick={() => setSelected(service)}
                aria-label={`${service.title} — ver detalhes`}
                className="group relative flex h-[22rem] w-full flex-col justify-end overflow-hidden rounded-[2px] border border-bone/16 bg-coal px-6 py-8 text-left transition-all duration-500 [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2.5 hover:border-bone/40 hover:shadow-[0_20px_40px_rgb(0_0_0/0.8)] lg:h-[26.25rem]"
              >
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: service.position }}
                  className="absolute inset-0 z-[1] h-full w-full object-cover brightness-[0.7] grayscale transition-[transform,filter] duration-[800ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:brightness-90 group-hover:grayscale-0"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgb(11_9_5/0.1)_0%,rgb(11_9_5/0.95)_80%)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,rgb(11_9_5/0)_0%,rgb(11_9_5/0.85)_90%)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[4] border border-transparent transition-all duration-500 group-hover:inset-2 group-hover:border-bone/10"
                />
                <span className="relative z-[3] translate-y-[15px] transition-transform duration-500 group-hover:translate-y-0">
                  <span className="relative mb-3 inline-block text-sm font-bold tracking-[0.06em] text-bone uppercase [font-stretch:108%]">
                    {service.title}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-[width] duration-500 group-hover:w-full" />
                  </span>
                  <span className="block text-[0.8125rem] leading-normal font-light text-fog opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    {service.summary}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          data-lenis-prevent
          className="max-h-[90svh] max-w-[min(56rem,calc(100%-2rem))] gap-0 overflow-y-auto rounded-[2px] border-bone/15 bg-coal p-0 sm:grid-cols-2"
        >
          {selected && (
            <>
              <div className="relative h-52 sm:h-full sm:min-h-[26rem]">
                <img
                  src={selected.image}
                  alt=""
                  style={{ objectPosition: selected.position }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-7 md:p-10">
                <SectionLabel>Serviço</SectionLabel>
                <DialogTitle className="font-display text-2xl leading-tight text-bone uppercase">
                  {selected.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-fog">
                    {selected.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </DialogDescription>
                <CtaLink href={primaryCtaHref} className="mt-8" onClick={() => setSelected(null)}>
                  Solicitar proposta
                </CtaLink>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
