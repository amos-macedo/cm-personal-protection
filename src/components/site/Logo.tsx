import type { CSSProperties } from "react";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";

const variants = {
  full: { src: "/logo-full.png", ratio: "1200 / 276" },
  mark: { src: "/logo-mark.png", ratio: "512 / 518" },
};

export function Logo({
  variant = "full",
  className,
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const { src, ratio } = variants[variant];
  const style: CSSProperties = {
    aspectRatio: ratio,
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    WebkitMaskPosition: "left center",
  };

  return (
    <span
      role="img"
      aria-label={brand.legalMark}
      className={cn("logo-mask block", className)}
      style={style}
    />
  );
}
