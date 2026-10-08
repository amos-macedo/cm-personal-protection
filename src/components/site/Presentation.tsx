import { FileText } from "lucide-react";
import { brand } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";

export function Presentation() {
  return (
    <section aria-label="Apresentação empresarial" className="bg-ink py-20">
      <Reveal className="container-cm flex flex-col items-center text-center">
        <h2 className="mb-10 max-w-3xl font-display text-[clamp(1.5rem,2.6vw,1.875rem)] text-bone uppercase">
          Clique aqui <span className="text-signal">↓</span> para visualizar nossa apresentação
          empresarial
        </h2>
        <CtaLink
          href={brand.presentationPdf}
          newTab
          icon={<FileText aria-hidden className="h-4 w-4" strokeWidth={1.75} />}
        >
          Visualizar apresentação
        </CtaLink>
      </Reveal>
    </section>
  );
}
