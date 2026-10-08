import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/content/site";

export function FloatingWhatsapp() {
  if (!whatsappUrl) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-paper shadow-[0_18px_40px_-12px_rgb(220_56_36/0.6)] transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <MessageCircle aria-hidden className="h-6 w-6" strokeWidth={1.75} />
    </motion.a>
  );
}
