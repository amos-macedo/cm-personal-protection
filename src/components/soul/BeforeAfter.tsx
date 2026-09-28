import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { MaskedLines, Reveal } from "./motion-primitives";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="bg-bone py-[14vh]">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.98] text-ink">
            <MaskedLines lines={["Veja a transformação."]} />
          </h2>
          <Reveal delay={0.12}>
            <p className="max-w-xs text-sm text-graphite">
              Arraste para comparar. Imagens demonstrativas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={wrapRef}
            data-cursor
            className="relative mt-14 aspect-4/3 w-full cursor-ew-resize touch-none overflow-hidden select-none md:aspect-21/9"
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
          >
            <img
              src={afterImg}
              alt="Sorriso depois do tratamento"
              loading="lazy"
              width={1408}
              height={1008}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Sorriso antes do tratamento"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute top-5 left-5 rounded-full border border-bone/60 px-3 py-1 text-[0.62rem] tracking-[0.2em] text-bone uppercase">
              Antes
            </span>
            <span className="absolute top-5 right-5 rounded-full border border-bone/60 px-3 py-1 text-[0.62rem] tracking-[0.2em] text-bone uppercase">
              Depois
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-bone"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/70 bg-petrol/40 text-bone backdrop-blur-sm">
                ⇆
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar antes e depois"
              className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>

        <p className="mt-5 text-xs text-graphite/70">Resultados individuais podem variar.</p>
      </div>
    </section>
  );
}
