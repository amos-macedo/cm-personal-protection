import { Eye, Handshake, Shield, type LucideIcon } from "lucide-react";
import { about, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { MobileRail } from "./MobileRail";
import { Reveal, RevealGroup, RevealItem } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

const icons: Record<(typeof about.cards)[number]["icon"], LucideIcon> = {
  shield: Shield,
  handshake: Handshake,
  eye: Eye,
};

export function About() {
  return (
    <section id="sobre" className="section-pad bg-paper text-ink">
      <div className="container-cm flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="lg:w-[42%]">
          <SectionLabel className="text-ink/70">{about.label}</SectionLabel>
          <h2 className="mb-6 font-display text-[clamp(2rem,3.5vw,2.625rem)] uppercase">
            {about.title}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-ink/80">{about.text}</p>
          <CtaLink href={primaryCtaHref} tone="outline-dark">
            Solicitar proposta
          </CtaLink>
        </Reveal>

        <div className="lg:w-[58%]">
          <RevealGroup>
            <MobileRail
              label="Nossos pilares"
              tone="light"
              gridClassName="md:grid md:grid-cols-3 md:gap-6"
            >
              {about.cards.map((card) => {
                const Icon = icons[card.icon];
                return (
                  <RevealItem
                    as="li"
                    key={card.title}
                    className="flex min-h-[15.5rem] flex-col items-center border border-ink/15 bg-ink/[0.03] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-ink/30"
                  >
                    <Icon aria-hidden strokeWidth={1.5} className="mb-6 h-10 w-10 text-ink" />
                    <h3 className="mb-4 text-sm font-bold tracking-[0.08em] uppercase [font-stretch:108%]">
                      {card.title}
                    </h3>
                    <p className="text-[0.8125rem] leading-normal text-ink/75">{card.text}</p>
                  </RevealItem>
                );
              })}
            </MobileRail>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
