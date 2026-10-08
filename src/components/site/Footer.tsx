import { brand, contactChannels, nav, services } from "@/content/site";
import { Logo } from "./Logo";

const linkClass = "text-[0.9375rem] font-light text-fog transition-colors hover:text-bone";
const headingClass = "mb-6 text-xs font-bold tracking-[0.16em] text-bone uppercase";

export function Footer() {
  return (
    <footer className="bg-night">
      <div className="container-cm grid gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-10 text-bone" />
          <p className="mt-8 text-sm leading-relaxed text-stone">
            Segurança pessoal e privada.
            <br />
            Proteção com discrição.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className={headingClass}>Navegação</p>
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={headingClass}>Serviços</p>
          <ul className="space-y-4">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#servicos" className={linkClass}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headingClass}>Contato</p>
          <ul className="space-y-4">
            {contactChannels.map(({ label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className={`${linkClass} break-all`}
                >
                  {value}
                </a>
              </li>
            ))}
            <li>
              <a
                href={brand.presentationPdf}
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
              >
                Apresentação (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-cm border-t border-bone/10 py-8">
        <p className="text-xs text-stone/80">
          © {new Date().getFullYear()} {brand.legalMark}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
