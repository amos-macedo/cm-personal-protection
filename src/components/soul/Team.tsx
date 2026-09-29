import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import { MaskedLines, Reveal } from "./motion-primitives";

/** PLACEHOLDER — dados fictícios, substituir pelos profissionais reais. */
const people = [
  {
    name: "Dra. Mariana Almeida",
    role: "Cirurgiã-Dentista",
    cro: "CRO-PB 00000",
    img: team1,
    alt: "Retrato editorial de cirurgiã-dentista",
  },
  {
    name: "Dr. Rafael Nogueira",
    role: "Implantodontia e Prótese",
    cro: "CRO-PB 00000",
    img: team2,
    alt: "Retrato editorial de dentista especialista em implantes",
  },
];

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-sand py-[12vh]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[1] text-ink">
          <MaskedLines lines={["Quem cuida de você."]} />
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <figure className="group mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-ink/10 bg-bone shadow-xs transition-shadow duration-500 hover:shadow-md">
                <div className="aspect-4/5 w-full overflow-hidden rounded-t-xl bg-sand">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="h-full w-full object-cover grayscale-[0.25] transition-all duration-[1.3s] [transition-timing-function:var(--ease-soul)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="flex items-end justify-between p-6">
                  <div>
                    <p className="font-display text-2xl text-ink">{p.name}</p>
                    <p className="mt-1 text-sm text-graphite">{p.role}</p>
                  </div>
                  <p className="text-xs tracking-[0.18em] text-graphite/70 uppercase">{p.cro}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
