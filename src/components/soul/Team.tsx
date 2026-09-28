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
    <section className="bg-sand py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.8rem)] leading-[1] text-ink">
          <MaskedLines lines={["Quem cuida de você."]} />
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <figure className="group">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="h-full w-full object-cover grayscale-[0.25] transition-all duration-[1.3s] [transition-timing-function:var(--ease-soul)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-5 flex items-end justify-between border-t border-ink/12 pt-4">
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
