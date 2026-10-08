import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("label mb-6 flex items-center gap-2.5 text-stone", className)}>
      <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
      {children}
    </span>
  );
}
