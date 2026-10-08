import { primaryCtaHref, vip } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

export function VipProtection() {
  return (
    <section id="vip" className="section-pad bg-ink">
      <div className="container-cm flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="lg:w-1/2">
          <img
            src={vip.image}
            alt="Equipe CM Personal Protection na segurança pessoal de @priscila_zillo"
            loading="lazy"
            className="aspect-video w-full object-cover object-[50%_20%]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center lg:w-1/2">
          <SectionLabel>{vip.label}</SectionLabel>
          <h2 className="mb-6 font-display text-[clamp(2rem,3.5vw,2.625rem)] text-bone uppercase">
            {vip.title}
          </h2>
          <p className="mb-8 text-lg font-light text-fog">{vip.text}</p>
          <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {vip.contexts.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-light text-fog">
                <span aria-hidden className="block h-px w-4 shrink-0 bg-stone" />
                {item}
              </li>
            ))}
          </ul>
          <CtaLink href={primaryCtaHref} tone="outline" className="w-full">
            Falar com um especialista
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
