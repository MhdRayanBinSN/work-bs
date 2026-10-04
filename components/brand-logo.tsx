import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({ className, imageClassName, priority = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block shrink-0 transition hover:scale-[1.02]",
        className
      )}
      aria-label="Brahma Entertainers home"
    >
      <Image
        src="/assets/logo.png"
        alt="Brahma Entertainers logo"
        fill
        priority={priority}
        className={cn("object-contain", imageClassName)}
        sizes="(min-width: 1024px) 96px, 72px"
      />
    </Link>
  );
}
