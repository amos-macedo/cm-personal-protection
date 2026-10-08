import { contact, contactChannels, finalCta, primaryCtaHref } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";

export function Contact() {
  const rows = [
    ...contactChannels.map((c) => ({ label: c.label, value: c.value, href: c.href })),
    { label: "Base de atuação", value: contact.city, href: undefined },
  ];

  return (
    <section id="contato" className="section-pad bg-coal">
      <div className="container-cm grid gap-12 lg:grid-cols-[1.1fr_1fr_auto] lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="mb-6 max-w-[32rem] font-display text-[clamp(2rem,3.5vw,2.625rem)] text-bone uppercase">
            {finalCta.title}
          </h2>
          <p className="max-w-[25rem] text-xl leading-relaxed font-light text-fog">
            {finalCta.text}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6">
            {rows.map((row) => (
              <div key={row.label}>
                <dt className="mb-1 text-[0.6875rem] font-bold tracking-[0.12em] text-stone uppercase">
                  {row.label}
                </dt>
                <dd className="text-[0.9375rem] text-bone">
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="transition-colors hover:text-signal"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <CtaLink href={primaryCtaHref} tone="outline" arrow={false}>
            Solicitar proposta confidencial
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
