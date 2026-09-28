import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsapp() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 900));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Falar no WhatsApp com a Soul'Encanto"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed right-5 bottom-5 z-[70] flex items-center gap-3 rounded-full bg-petrol px-5 py-4 text-bone shadow-[var(--shadow-lift)] transition-colors duration-500 hover:bg-sage-deep md:right-8 md:bottom-8"
        >
          <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.69-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.2-8.25 8.2Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31s-.86.85-.86 2.07.89 2.4 1.01 2.56c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase">Agendar</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
