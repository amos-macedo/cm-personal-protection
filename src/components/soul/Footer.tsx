import { nav, useClient } from "@/lib/site";

export function Footer() {
  const { site, whatsappUrl } = useClient();
  return (
    <footer className="bg-petrol pt-[10vh] pb-10">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <p className="font-display text-[clamp(3rem,13vw,12rem)] leading-[0.85] text-bone">
          {site.name}
        </p>
        <p className="eyebrow mt-4 text-bone/45">{site.tagline}</p>

        <div className="mt-20 grid gap-10 border-t border-bone/15 pt-10 md:grid-cols-3">
          <nav aria-label="Rodapé" className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline hover:link-underline-on w-fit text-sm text-bone/70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-bone/70">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline hover:link-underline-on w-fit"
            >
              WhatsApp {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline hover:link-underline-on w-fit"
            >
              Instagram {site.instagramHandle}
            </a>
            <a
              href="#localizacao"
              className="link-underline hover:link-underline-on w-fit text-sage"
            >
              {site.addressComplement}
            </a>
            <span>
              {site.addressStreet} — {site.city}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-bone/40 md:text-right">
            © {new Date().getFullYear()} {site.name} — {site.tagline}.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
