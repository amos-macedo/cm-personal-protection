import { Loader } from "./Loader";
import { SmoothScroll } from "./SmoothScroll";
import { Cursor } from "./Cursor";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Manifesto } from "./Manifesto";
import { Concept } from "./Concept";
import { Treatments } from "./Treatments";
import { BeforeAfter } from "./BeforeAfter";
import { Featured } from "./Featured";
import { Experience } from "./Experience";
import { Team } from "./Team";
import { Numbers } from "./Numbers";
import { Testimonials } from "./Testimonials";
import { LocationMap } from "./LocationMap";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { FloatingWhatsapp } from "./FloatingWhatsapp";

export function LandingPage() {
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

        {/* 11. Localização — Mapa interativo, acessos e horários */}
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
