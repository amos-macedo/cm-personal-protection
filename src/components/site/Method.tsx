import { method } from "@/content/site";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

export function Method() {
  return (
    <section id="processo" className="section-pad bg-bone text-ink">
      <div className="container-cm">
        <Reveal>
          <SectionLabel className="text-ink/70">{method.label}</SectionLabel>
          <h2 className="mb-16 max-w-[34rem] font-display text-[clamp(2rem,3.5vw,2.625rem)] uppercase">
            {method.title}
          </h2>
        </Reveal>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-ink/12 lg:block"
          />
          {method.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={0.1 * (i + 1)} className="relative z-[2]">
              <span className="mb-6 inline-block bg-bone pr-4 font-display text-[2rem] leading-none">
                {String(i + 1).padStart(2, "0")}
                <span className="text-signal">.</span>
              </span>
              <h3 className="mb-4 text-base font-bold tracking-[0.06em] uppercase [font-stretch:108%]">
                {step.title}
              </h3>
              <p className="text-sm text-ink/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
