import { motion, useReducedMotion } from "motion/react";
import { whatsappUrl } from "@/content/site";
import { useIntroDone } from "./Intro";
import { EASE } from "./motion-primitives";

function WhatsappGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.89 9.89m8.42-18.32A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.31-1.65a11.86 11.86 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.4" />
    </svg>
  );
}

export function FloatingWhatsapp() {
  const ready = useIntroDone();
  const reduce = useReducedMotion();
  if (!whatsappUrl) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={ready ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
      transition={{ delay: 1.6, duration: 0.7, ease: EASE }}
      className="group fixed right-5 bottom-5 z-40 flex items-center md:right-8 md:bottom-8"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-full bg-night/85 px-4 py-2 text-xs font-semibold whitespace-nowrap text-bone opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Fale no WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-bone text-ink shadow-[0_14px_34px_-10px_rgb(0_0_0/0.7)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        {!reduce && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-bone/40 [animation-duration:2.6s]"
          />
        )}
        <WhatsappGlyph className="relative h-6 w-6" />
      </span>
    </motion.a>
  );
}
