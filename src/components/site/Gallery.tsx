import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useInView, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

type Album = (typeof gallery.albums)[number];

const INTERVAL = 4800;

function usePageVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return visible;
}

function AlbumCarousel({ album, offset }: { album: Album; offset: number }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 32 });
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [firstCycle, setFirstCycle] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { margin: "-10% 0px" });
  const pageVisible = usePageVisible();
  const reduce = useReducedMotion();

  const autoplay = !reduce;
  const running = autoplay && inView && pageVisible && !hovered && !focused;
  const delay = firstCycle ? INTERVAL + offset : INTERVAL;

  const sync = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
    setFirstCycle(false);
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", sync);
    return () => {
      embla.off("select", sync);
    };
  }, [embla, sync]);

  return (
    <div>
      <h3 className="mb-5 font-display text-[1.75rem] text-ink uppercase">{album.title}</h3>
      <div
        ref={frameRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label={album.title}
        data-cursor="media"
        className="relative overflow-hidden bg-coal"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={() => setFocused(false)}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex touch-pan-y">
            {album.slides.map((slide, i) => (
              <li
                key={slide.caption}
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${album.slides.length}`}
                className="relative aspect-[673/620] min-w-0 shrink-0 basis-full"
              >
                <img
                  src={slide.image}
                  alt={slide.caption}
                  loading="lazy"
                  draggable={false}
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain transition-transform duration-[5000ms] ease-out",
                    i === selected ? "scale-[1.04]" : "scale-100",
                  )}
                />
                <span className="absolute top-5 left-5 rounded-full bg-night/70 px-3 py-1.5 text-xs font-semibold text-bone backdrop-blur-sm">
                  {slide.caption}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {album.slides.map((slide, i) => {
              const active = i === selected;
              return (
                <button
                  key={slide.caption}
                  type="button"
                  aria-label={`Ir para foto ${i + 1}`}
                  aria-current={active}
                  onClick={() => embla?.scrollTo(i)}
                  className={cn(
                    "relative h-1.5 overflow-hidden rounded-full transition-all duration-300",
                    active ? "w-9 bg-bone/35" : "w-1.5 bg-bone/40 hover:bg-bone/70",
                  )}
                >
                  {active && (
                    <span
                      key={`${selected}-${delay}`}
                      aria-hidden
                      className={cn("absolute inset-0 bg-bone", autoplay && "gallery-progress")}
                      style={{
                        animationDuration: `${delay}ms`,
                        animationPlayState: running ? "running" : "paused",
                      }}
                      onAnimationEnd={() => embla?.scrollNext()}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="flex gap-2.5">
            {[
              { label: "Anterior", Icon: ChevronLeft, onClick: () => embla?.scrollPrev() },
              { label: "Próxima", Icon: ChevronRight, onClick: () => embla?.scrollNext() },
            ].map(({ label, Icon, onClick }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={onClick}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/60 bg-night/40 text-bone transition-[background-color,color,transform] duration-200 hover:bg-bone hover:text-ink active:scale-90"
              >
                <Icon aria-hidden className="h-4 w-4" strokeWidth={1.75} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="bastidores" className="section-pad bg-paper text-ink">
      <div className="container-cm">
        <Reveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel className="text-ink/70">{gallery.label}</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] uppercase">
              {gallery.title}
            </h2>
          </div>
          <p className="max-w-[31rem] text-lg leading-relaxed font-light text-ink/80 md:text-xl">
            {gallery.textLead}
            <span className="font-semibold text-signal">{gallery.textAccent}</span>
            {gallery.textTail}
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-7">
          {gallery.albums.map((album, i) => (
            <Reveal key={album.title} delay={0.1 * i}>
              <AlbumCarousel album={album} offset={i * (INTERVAL / 2)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
