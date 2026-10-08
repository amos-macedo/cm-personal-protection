import { Intro } from "./Intro";
import { SmoothScroll } from "./SmoothScroll";
import { Cursor } from "./Cursor";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Strip } from "./Strip";
import { Differentials } from "./Differentials";
import { VipProtection } from "./VipProtection";
import { Method } from "./Method";
import { Leadership } from "./Leadership";
import { Gallery } from "./Gallery";
import { Letter } from "./Letter";
import { KeyPoints } from "./KeyPoints";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsapp } from "./FloatingWhatsapp";

export function HomePage() {
  return (
    <>
      <Intro />
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Strip />
        <Differentials />
        <VipProtection />
        <Method />
        <Leadership />
        <Gallery />
        <Letter />
        <KeyPoints />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
