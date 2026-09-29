import { useState } from "react";
import { useClient } from "@/lib/site";
import { MaskedLines, Reveal } from "./motion-primitives";
import { SoulButton } from "./SoulButton";

export function LocationMap() {
  const { site, whatsappUrl } = useClient();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="localizacao" className="scroll-mt-24 bg-sand py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-sage-deep">Localização privilegiada</p>
            </Reveal>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98] text-ink">
              <MaskedLines lines={["Fácil acesso em", `${site.city}.`]} />
            </h2>
          </div>

          <Reveal delay={0.12}>
            <p className="max-w-sm text-sm leading-relaxed text-graphite">
              Estrutura moderna em {site.neighborhood}, com estacionamento privativo e
              total acessibilidade para receber você com excelência.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Informações detalhadas */}
          <div className="flex flex-col justify-between rounded-xl border border-ink/10 bg-bone p-8 md:p-12 lg:col-span-5">
            <div className="space-y-8">
              <div>
                <span className="eyebrow text-sage-deep">Endereço</span>
                <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                  {site.addressComplement}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {site.addressStreet}
                  <br />
                  {site.neighborhood} — {site.cityState}
                  <br />
                  <span className="text-xs text-graphite/70">CEP: {site.cep}</span>
                </p>
              </div>

              <div className="border-t border-ink/10 pt-6">
                <span className="eyebrow text-sage-deep">Horários de Atendimento</span>
                <ul className="mt-3 space-y-2 text-sm text-graphite">
                  <li className="flex items-center justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium text-ink">{site.hoursWeekday}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sábado</span>
                    <span className="font-medium text-ink">{site.hoursWeekend}</span>
                  </li>
                  <li className="flex items-center justify-between text-graphite/60">
                    <span>Domingo e Feriados</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-ink/10 pt-6">
                <span className="eyebrow text-sage-deep">Comodidades</span>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs tracking-wide text-graphite uppercase">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                    Estacionamento rotativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                    Acessibilidade plena
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                    Recepção climatizada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
                    Segurança 24h
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-8">
              <SoulButton
                href={site.googleMapsDirectionsUrl}
                external
                tone="solid"
                ariaLabel="Traçar rota no Google Maps"
              >
                Como Chegar
              </SoulButton>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:link-underline-on text-xs tracking-[0.16em] text-petrol uppercase font-medium"
              >
                Tirar dúvidas no WhatsApp →
              </a>
            </div>
          </div>

          {/* Mapa Interativo */}
          <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-ink/10 bg-clay shadow-[var(--shadow-soft)] sm:min-h-[460px] lg:col-span-7 lg:min-h-full">
            {!mapLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-sand/80 p-6 text-center backdrop-blur-xs">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-petrol/20 border-t-petrol" />
                <p className="eyebrow mt-4 text-graphite">Carregando mapa interativo...</p>
              </div>
            )}

            <iframe
              src={site.googleMapsEmbedUrl}
              title={`Localização de ${site.name} no Google Maps`}
              width="100%"
              height="100%"
              className="h-full min-h-[380px] w-full border-0 lg:min-h-[520px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
            />

            {/* Badge flutuante sobre o mapa */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-lg border border-ink/10 bg-bone/95 p-4 shadow-md backdrop-blur-md">
              <p className="font-display text-lg text-ink leading-tight">{site.name}</p>
              <p className="text-xs text-graphite mt-0.5">Complexo Heron Marinho — Catolé</p>
              <p className="text-[0.7rem] text-sage-deep font-medium mt-1">
                Fácil estacionamento no subsolo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
