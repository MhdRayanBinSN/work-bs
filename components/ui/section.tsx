import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...props} />;
}

export function Section({
  eyebrow,
  title,
  children,
  className,
  id
}: {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-12 max-w-4xl">
            {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-gold">{eyebrow}</p> : null}
            {title ? <h2 className="font-display text-4xl leading-tight text-kasavu sm:text-6xl">{title}</h2> : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
