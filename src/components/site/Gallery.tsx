import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { gallery } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";
import { SectionLabel } from "./SectionLabel";

type Album = (typeof gallery.albums)[number];

function AlbumCarousel({ album }: { album: Album }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const sync = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync);
    return () => {
      embla.off("select", sync);
    };
  }, [embla, sync]);

  return (
    <div>
      <h3 className="mb-5 font-display text-[1.75rem] text-ink uppercase">{album.title}</h3>
      <div className="relative overflow-hidden bg-coal">
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex touch-pan-y">
            {album.slides.map((slide) => (
              <li
                key={slide.caption}
                className="relative aspect-[673/620] min-w-0 shrink-0 basis-full"
              >
                <img
                  src={slide.image}
                  alt={slide.caption}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-contain"
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
            {album.slides.map((slide, i) => (
              <button
                key={slide.caption}
                type="button"
                aria-label={`Ir para foto ${i + 1}`}
                onClick={() => embla?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === selected ? "w-7 bg-bone" : "w-1.5 bg-bone/40",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2.5">
            {[
              { label: "Anterior", glyph: "‹", onClick: () => embla?.scrollPrev() },
              { label: "Próxima", glyph: "›", onClick: () => embla?.scrollNext() },
            ].map(({ label, glyph, onClick }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={onClick}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/60 bg-night/40 text-xl leading-none text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                {glyph}
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
              <AlbumCarousel album={album} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
