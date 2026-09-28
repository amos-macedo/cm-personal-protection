import { site } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";

/** PLACEHOLDER — depoimentos fictícios, substituir por avaliações reais. */
const quotes = [
  {
    text: "Fui muito bem recebida desde o primeiro contato. Toda a equipe foi cuidadosa e explicou cada etapa do tratamento.",
    author: "Mariana",
  },
  {
    text: "O atendimento é muito diferente do que eu estava acostumado. Me senti realmente ouvido.",
    author: "Lucas",
  },
];

export function Testimonials() {
  return (
    <section className="bg-bone py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.02] text-ink">
              <MaskedLines lines={["Quem vive a", "experiência, conta."]} />
            </h2>
            <Reveal delay={0.12}>
              <div className="mt-10 flex items-baseline gap-4">
                <span aria-hidden className="text-sage-deep">
                  ★★★★★
                </span>
                <span className="font-display text-3xl text-ink">{site.rating}</span>
                <span className="text-sm text-graphite">no Google · {site.reviews}</span>
              </div>
            </Reveal>
          </div>

          <ul className="lg:col-span-7">
            {quotes.map((q, i) => (
              <Reveal as="li" key={q.author} delay={0.1 * i}>
                <figure className="border-t border-ink/12 py-10">
                  <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl">
                    “{q.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-xs tracking-[0.2em] text-graphite uppercase">
                    — {q.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
