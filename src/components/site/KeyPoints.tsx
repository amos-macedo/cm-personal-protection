import { images, keyPoints, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";
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

        <Reveal className="mb-16 overflow-hidden border border-bone/12 bg-night">
          <img
            src={images.team}
            alt="Equipe da CM Personal Protection reunida"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover object-[50%_25%] md:aspect-[21/9]"
          />
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyPoints.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={0.06 * i}
              className="group border border-bone/12 bg-night px-6 py-7 transition-colors duration-300 hover:border-bone/30"
            >
              <h3 className="text-[0.8125rem] font-bold tracking-[0.08em] text-bone uppercase [font-stretch:108%]">
                <span className="mr-2 text-signal">{String(i + 1).padStart(2, "0")}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-fog/80">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
