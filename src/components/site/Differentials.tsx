import { Cctv, Lock, Radar, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { differentials } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./motion-primitives";

const icons: Record<(typeof differentials.items)[number]["icon"], LucideIcon> = {
  "shield-check": ShieldCheck,
  radar: Radar,
  cctv: Cctv,
  lock: Lock,
  users: Users,
};

export function Differentials() {
  return (
    <section id="diferenciais" className="section-pad bg-paper text-ink">
      <div className="container-cm">
        <Reveal>
          <h2 className="mb-16 max-w-[25rem] font-display text-[clamp(1.75rem,3vw,2.25rem)] uppercase">
            {differentials.title}
          </h2>
        </Reveal>

        <RevealGroup>
          <ul className="grid grid-cols-2 border-y border-ink/12 md:grid-cols-3 lg:grid-cols-5">
            {differentials.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <RevealItem
                  as="li"
                  key={item.title}
                  className="group flex flex-col items-center border-ink/12 px-6 py-12 text-center max-lg:border-b max-md:odd:border-r md:max-lg:[&:not(:nth-child(3n))]:border-r lg:border-r lg:px-8 lg:last:border-r-0"
                >
                  <Icon
                    aria-hidden
                    strokeWidth={1}
                    className="mb-6 h-12 w-12 text-ink transition-colors duration-300 group-hover:text-signal"
                  />
                  <h3 className="text-[0.8125rem] leading-[1.4] font-bold tracking-[0.06em] uppercase [font-stretch:108%]">
                    {item.title}
                  </h3>
                </RevealItem>
              );
            })}
          </ul>
        </RevealGroup>
      </div>
    </section>
  );
}
