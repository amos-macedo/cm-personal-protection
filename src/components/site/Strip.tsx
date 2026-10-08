import { strip } from "@/content/site";
import { Logo } from "./Logo";
import { Reveal } from "./motion-primitives";

export function Strip() {
  return (
    <section aria-label="Especialidade" className="relative overflow-hidden bg-coal">
      <div className="container-cm flex min-h-[13.125rem] flex-col justify-center gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-0">
        <Reveal className="md:w-[35%]">
          <h2 className="font-display text-2xl leading-[1.2] text-bone uppercase">{strip.title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:w-[45%]">
          <p className="text-[0.9375rem] font-light text-fog">{strip.text}</p>
        </Reveal>
        <div aria-hidden className="hidden justify-end text-bone/15 md:flex md:w-[20%]">
          <Logo variant="mark" className="h-[6.25rem]" />
        </div>
      </div>
    </section>
  );
}
