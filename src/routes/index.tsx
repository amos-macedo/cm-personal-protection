import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/soul/Loader";
import { SmoothScroll } from "@/components/soul/SmoothScroll";
import { Cursor } from "@/components/soul/Cursor";
import { Header } from "@/components/soul/Header";
import { Hero } from "@/components/soul/Hero";
import { Manifesto } from "@/components/soul/Manifesto";
import { Concept } from "@/components/soul/Concept";
import { Storytelling } from "@/components/soul/Storytelling";
import { Treatments } from "@/components/soul/Treatments";
import { Featured } from "@/components/soul/Featured";
import { BeforeAfter } from "@/components/soul/BeforeAfter";
import { Experience } from "@/components/soul/Experience";
import { Testimonials } from "@/components/soul/Testimonials";
import { Team } from "@/components/soul/Team";
import { Numbers } from "@/components/soul/Numbers";
import { Faq } from "@/components/soul/Faq";
import { FinalCta } from "@/components/soul/FinalCta";
import { Contact } from "@/components/soul/Contact";
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
        <Hero />
        <Manifesto />
        <Concept />
        <Storytelling />
        <Treatments />
        <Featured />
        <BeforeAfter />
        <Experience />
        <Testimonials />
        <Team />
        <Numbers />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
