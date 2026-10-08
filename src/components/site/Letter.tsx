import { brand, contact, letter } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

export function Letter() {
  return (
    <section id="compromisso" className="bg-paper pb-20 text-ink lg:pb-[6.875rem]">
      <div className="container-cm">
        <Reveal className="grid gap-12 border border-ink/12 bg-bone/60 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-16">
          <div>
            <SectionLabel className="text-ink/70">{letter.label}</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.625rem)] uppercase">
              {letter.title}
            </h2>
            <div className="my-8 h-px bg-ink/12" />
            <p className="text-lg text-ink">{brand.legalMark}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Segurança pessoal e privada
              <br />
              {contact.city}
            </p>
            <CtaLink href={brand.presentationPdf} tone="outline-dark" newTab className="mt-8">
              Ver apresentação
            </CtaLink>
          </div>

          <div className="text-lg leading-[1.9] font-light text-ink/85">
            <p className="mb-6">{letter.greeting}</p>
            <div className="space-y-6">
              {letter.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 text-sm leading-relaxed text-ink/70">
              <p className="mb-2 text-base tracking-[0.04em] text-ink uppercase">Atenciosamente,</p>
              <p>{brand.name}</p>
              <p>{contact.city}</p>
              <p>
                Contato:{" "}
                <a href={`mailto:${contact.email}`} className="underline-offset-4 hover:underline">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
