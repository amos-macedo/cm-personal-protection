import { strip } from "@/content/site";
import { ScrollWords } from "./motion-primitives";

export function Strip() {
  return (
    <section aria-label="Especialidade" className="relative overflow-hidden bg-coal">
      <div className="container-cm flex min-h-[13.125rem] flex-col justify-center gap-6 py-12 md:flex-row md:items-center md:justify-between md:gap-16 md:py-0">
        <ScrollWords
          as="h2"
          text={strip.title}
          offset={["start 0.95", "start 0.55"]}
          className="font-display text-2xl leading-[1.2] text-bone uppercase md:w-[38%]"
        />
        <ScrollWords
          text={strip.text}
          offset={["start 0.85", "start 0.35"]}
          className="text-[0.9375rem] font-light text-fog md:w-[52%]"
        />
      </div>
    </section>
  );
}
