import { ShieldCheck } from "lucide-react";
import { brand, leadership } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

export function Leadership() {
  return (
    <section id="direcao" className="section-pad bg-night">
      <div className="container-cm flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="lg:w-[45%]">
          <div className="relative">
            <img
              src={leadership.image}
              alt={`${leadership.name}, ${leadership.role} da ${brand.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[50%_30%]"
            />
            <div className="absolute right-4 bottom-4 max-w-[calc(100%-2rem)] rounded-[14px] border border-bone/12 bg-night/70 px-5 py-4 shadow-[0_10px_30px_rgb(0_0_0/0.45)] backdrop-blur-[14px] md:right-5 md:bottom-5 md:max-w-[78%] md:px-[22px]">
              <p className="flex items-center gap-2.5 font-bold text-bone">
                <ShieldCheck aria-hidden className="h-[18px] w-[18px] shrink-0" strokeWidth={1.6} />
                {leadership.role}
              </p>
              <p className="label mt-1.5 !tracking-[0.14em] text-stone">{brand.name}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:w-[55%]">
          <SectionLabel>{leadership.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] text-bone uppercase">
            {leadership.name}
          </h2>
          <p className="mt-3 mb-8 text-lg font-bold tracking-[0.1em] text-stone uppercase [font-stretch:108%]">
            {leadership.role}
          </p>
          <div className="space-y-5 text-lg leading-relaxed font-light text-fog md:text-xl">
            {leadership.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="my-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-bone/12 py-8">
            {leadership.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-[2rem] leading-none text-bone">{stat.value}</dd>
                <dd className="label mt-3 !text-[0.625rem] text-stone">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mb-10 flex flex-wrap gap-2.5">
            {leadership.tags.map((tag) => (
              <li
                key={tag}
                className="border border-bone/25 px-3 py-2 text-[0.6875rem] tracking-[0.08em] text-fog uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>

          <CtaLink href={leadership.instagram} tone="outline">
            Instagram
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
