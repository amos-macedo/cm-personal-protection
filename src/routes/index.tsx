import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/soul/Loader";
import { SmoothScroll } from "@/components/soul/SmoothScroll";
import { Cursor } from "@/components/soul/Cursor";
import { Header } from "@/components/soul/Header";
import { Hero } from "@/components/soul/Hero";
import { Manifesto } from "@/components/soul/Manifesto";
import { Concept } from "@/components/soul/Concept";
import { Treatments } from "@/components/soul/Treatments";
import { BeforeAfter } from "@/components/soul/BeforeAfter";
import { Featured } from "@/components/soul/Featured";
import { Experience } from "@/components/soul/Experience";
import { Team } from "@/components/soul/Team";
import { Numbers } from "@/components/soul/Numbers";
import { Testimonials } from "@/components/soul/Testimonials";
import { LocationMap } from "@/components/soul/LocationMap";
import { Faq } from "@/components/soul/Faq";
import { FinalCta } from "@/components/soul/FinalCta";
import { Footer } from "@/components/soul/Footer";
import { FloatingWhatsapp } from "@/components/soul/FloatingWhatsapp";

const title = "Soul'Encanto — Consultório Odontológico em Campina Grande";
const description =
  "Odontologia com propósito em Campina Grande - PB. Estética dental, implantes, ortodontia e um cuidado que começa antes do tratamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        {/* 1. Hero — Acolhimento e CTA imediato */}
        <Hero />

        {/* 2. Manifesto — Transição poética ("Sorrir é pessoal") */}
        <Manifesto />

        {/* 3. A Clínica / Conceito — Filosofia da escuta e precisão biológica */}
        <Concept />

        {/* 4. Especialidades — Accordion Horizontal Interativo */}
        <Treatments />

        {/* 5. Transformações — Casos Clínicos Antes & Depois com revelação interativa */}
        <BeforeAfter />

        {/* 6. Destaque Estético — Filosofia de preservação e mockups */}
        <Featured />

        {/* 7. Experiência — Conhecer os consultórios e espaços da clínica */}
        <Experience />

        {/* 8. Equipe — Os cirurgiões-dentistas especialistas */}
        <Team />

        {/* 9. Números — Autoridade e métricas comprovadas */}
        <Numbers />

        {/* 10. Depoimentos — Prova social enriquecida com fotos e estrelas do Google */}
        <Testimonials />

        {/* 11. Localização — Mapa interativo no Heron Marinho, acessos e horários */}
        <LocationMap />

        {/* 12. Dúvidas Frequentes — Quebra de objeções pré-agendamento */}
        <Faq />

        {/* 13. Chamada Final — Convite definitivo para transformação com WhatsApp */}
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
