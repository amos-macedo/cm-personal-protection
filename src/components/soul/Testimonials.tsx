import { useClient } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/lifestyle-laugh.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

interface Testimonial {
  name: string;
  role: string;
  treatment: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Testimonial[] = [
  {
    name: "Mariana Vasconcelos",
    role: "Arquiteta",
    treatment: "Lentes de Contato em Porcelana",
    avatar: avatar1,
    rating: 5,
    text: "Eu tinha muito receio de o resultado ficar artificial, mas a equipe da clínica me surpreendeu. O teste prévio (mockup) me deu total segurança antes de começar. Meu sorriso ficou natural, iluminado e proporcional ao meu rosto.",
    date: "Há 2 semanas",
  },
  {
    name: "Lucas Albuquerque",
    role: "Empresário",
    treatment: "Ortodontia Estética & Alinhadores",
    avatar: avatar2,
    rating: 5,
    text: "Atendimento de padrão internacional. Toda a equipe é pontual, os consultórios transmitem uma paz indescritível e o planejamento digital 3D me permitiu alinhar os dentes sem ninguém notar na minha rotina.",
    date: "Há 3 semanas",
  },
  {
    name: "Camila Medeiros",
    role: "Advogada",
    treatment: "Clareamento Clínico & Profilaxia",
    avatar: avatar3,
    rating: 5,
    text: "Sempre tive sensibilidade severa em clareamentos anteriores. Aqui o protocolo biológico foi tão suave que não senti dor alguma, e meus dentes clarearam mais de 5 tons. O pós-atendimento é impecável.",
    date: "Há 1 mês",
  },
  {
    name: "Rodrigo Tavares",
    role: "Médico",
    treatment: "Implante Dentário & Reabilitação",
    avatar: avatar4,
    rating: 5,
    text: "Excelente localização com estacionamento fácil. O procedimento cirúrgico guiado por computador foi super rápido, sem inchaço no pós-operatório e devolveu totalmente a minha mastigação.",
    date: "Há 1 mês",
  },
];

export function Testimonials() {
  const { site } = useClient();
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-sand py-[12vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Cabeçalho com Google Reviews Card */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-sage-deep">Experiência Comprovada</p>
            </Reveal>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,4.8rem)] leading-[1] text-ink">
              <MaskedLines lines={["O que nossos", "pacientes contam."]} />
            </h2>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-ink/10 bg-bone p-5 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-ink">{site.rating}</span>
                  <div
                    className="flex text-amber-500 text-sm tracking-tight"
                    aria-label="5 de 5 estrelas"
                  >
                    ★★★★★
                  </div>
                </div>
                <p className="text-xs text-graphite">
                  Excelente no Google · {site.reviews} verificadas
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Grade de Avaliações Detalhadas com Fotos */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((rev, i) => (
            <Reveal key={rev.name} delay={0.08 * i}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-ink/10 bg-bone p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                <div>
                  {/* Cabeçalho do Card: Avatar + Nome + Tag */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={rev.avatar}
                      alt={`Foto de ${rev.name}`}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover border border-ink/10 shadow-xs"
                    />
                    <div>
                      <h3 className="font-display text-lg text-ink leading-tight font-medium">
                        {rev.name}
                      </h3>
                      <p className="text-[0.72rem] text-graphite/70">{rev.role}</p>
                    </div>
                  </div>

                  {/* Estrelas + Tratamento */}
                  <div className="mt-4 flex items-center justify-between border-t border-ink/8 pt-3">
                    <div className="text-amber-500 text-xs tracking-wider" aria-hidden>
                      ★★★★★
                    </div>
                    <span className="rounded-full bg-sand px-2.5 py-0.5 text-[0.65rem] font-medium text-sage-deep">
                      {rev.treatment}
                    </span>
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="mt-3 text-xs leading-relaxed text-graphite">“{rev.text}”</p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-3 text-[0.65rem] text-graphite/60">
                  <span>{rev.date}</span>
                  <span className="flex items-center gap-1 text-sage-deep font-medium">
                    <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    Google verificado
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
