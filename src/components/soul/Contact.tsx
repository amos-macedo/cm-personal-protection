import { site, whatsappUrl } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 bg-bone py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.98] text-ink">
          <MaskedLines lines={["Vamos conversar?"]} />
        </h2>

        <dl className="mt-16 grid gap-10 border-t border-ink/12 pt-10 md:grid-cols-3">
          <Reveal>
            <dt className="eyebrow text-graphite">WhatsApp</dt>
            <dd className="mt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:link-underline-on font-display text-3xl text-ink"
              >
                {site.phoneDisplay}
              </a>
            </dd>
            <p className="mt-2 text-sm text-graphite/80">{site.hoursWeekday}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <dt className="eyebrow text-graphite">Onde estamos</dt>
            <dd className="mt-3">
              <a
                href="#localizacao"
                className="link-underline hover:link-underline-on font-display text-2xl text-ink"
              >
                {site.addressComplement}
              </a>
            </dd>
            <p className="mt-2 text-sm text-graphite/80">
              {site.addressStreet} — {site.neighborhood}
              <br />
              {site.cityState}
            </p>
            <a
              href="#localizacao"
              className="mt-3 inline-block text-xs tracking-wider text-sage-deep uppercase font-medium hover:underline"
            >
              Ver mapa interativo ↓
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <dt className="eyebrow text-graphite">Instagram</dt>
            <dd className="mt-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:link-underline-on font-display text-3xl text-ink"
              >
                {site.instagramHandle}
              </a>
            </dd>
            <p className="mt-2 text-sm text-graphite/80">Acompanhe nossos casos e bastidores</p>
          </Reveal>
        </dl>
      </div>
    </section>
  );
}
