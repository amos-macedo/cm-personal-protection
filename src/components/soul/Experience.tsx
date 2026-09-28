import reception from "@/assets/clinic-reception.jpg";
import chair from "@/assets/clinic-chair.jpg";
import materials from "@/assets/materials.jpg";
import { MaskedLines, Reveal } from "./motion-primitives";

const experiences = [
  {
    tag: "01 — Ambiente",
    title: "Recepção acolhedora e privativa",
    desc: "Luz natural, design biofílico e silêncio. Um espaço pensado para reduzir o ritmo e a ansiedade antes mesmo do primeiro contato clínico.",
    img: reception,
    alt: "Recepção da clínica com iluminação acolhedora e decoração minimalista",
  },
  {
    tag: "02 — Atendimento",
    title: "Consultórios confortáveis",
    desc: "Salas individuais com tecnologia silenciosa e ergonomia avançada, proporcionando conforto contínuo durante cada etapa do seu tratamento.",
    img: chair,
    alt: "Consultório odontológico moderno com cadeira ergonômica e vista agradável",
  },
  {
    tag: "03 — Precisão",
    title: "Biomateriais e rigor técnico",
    desc: "Protocolos biológicos estritos, instrumentais esterilizados em rastreabilidade cirúrgica e cerâmicas de padrão internacional.",
    img: materials,
    alt: "Escala de cor e materiais odontológicos de alta precisão sobre linho",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-sand py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-sage-deep">Experiência Soul'Encanto</p>
            </Reveal>
            <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.2rem,4.4vw,4.5rem)] leading-[1.02] text-ink">
              <MaskedLines lines={["A diferença está", "em cada detalhe."]} />
            </h2>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-graphite">
              O silêncio certo, a luz certa, o tempo necessário. Ambientes planejados para
              transformar sua percepção sobre ir ao dentista.
            </p>
          </Reveal>
        </div>

        {/* Grade equilibrada com max-widths e respiro */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.tag} delay={0.08 * i}>
              <div className="group flex flex-col h-full rounded-xl border border-ink/10 bg-bone p-5 shadow-xs transition-shadow duration-500 hover:shadow-md">
                <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-sand">
                  <img
                    src={exp.img}
                    alt={exp.alt}
                    loading="lazy"
                    width={1408}
                    height={1056}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="eyebrow text-sage-deep">{exp.tag}</span>
                    <h3 className="mt-2 font-display text-2xl text-ink leading-snug">
                      {exp.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-graphite">{exp.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
