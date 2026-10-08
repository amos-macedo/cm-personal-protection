import { images, keyPoints, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { MobileRail } from "./MobileRail";
import { CurtainImage, Reveal, RevealGroup, RevealItem } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

export function KeyPoints() {
  return (
    <section id="essencial" className="section-pad bg-ink">
      <div className="container-cm">
        <Reveal className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
          <SectionLabel className="justify-center">{keyPoints.label}</SectionLabel>
          <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.25rem)] text-bone uppercase">
            {keyPoints.title}
          </h2>
          <p className="mb-10 text-lg font-light text-fog md:text-xl">{keyPoints.text}</p>
          <CtaLink href={primaryCtaHref} tone="outline">
            Solicitar proposta
          </CtaLink>
        </Reveal>

        <CurtainImage
          src={images.team}
          alt="Equipe da CM Personal Protection reunida"
          className="mb-16 aspect-[16/9] border border-bone/12 bg-night md:aspect-[21/9]"
          imgClassName="object-[50%_25%]"
        />

        <RevealGroup>
          <MobileRail
            label="Pontos-chave da segurança pessoal"
            gridClassName="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"
          >
            {keyPoints.items.map((item) => (
              <RevealItem
                as="li"
                key={item.title}
                className="group border border-bone/12 bg-night px-6 py-7 transition-colors duration-300 hover:border-bone/30"
              >
                <h3 className="flex items-center gap-2.5 text-[0.8125rem] font-bold tracking-[0.08em] text-bone uppercase [font-stretch:108%]">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-signal" />
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-fog/80">{item.text}</p>
              </RevealItem>
            ))}
          </MobileRail>
        </RevealGroup>
      </div>
    </section>
  );
}
