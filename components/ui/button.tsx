import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBase = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  icon?: boolean;
};

type LinkButton = ButtonBase & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;
type NativeButton = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const styles = {
  primary: "bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] text-white shadow-glow hover:brightness-110",
  ghost: "border border-gold/40 bg-white/70 text-gold hover:border-gold hover:bg-rose-50",
  dark: "bg-kasavu text-white hover:bg-crimson"
};

export function Button(props: LinkButton | NativeButton) {
  const { children, variant = "primary", className, icon = true } = props;
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ease-brahma focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-night",
    styles[variant],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, children: linkChildren, variant: linkVariant, className: linkClassName, icon: linkIcon, ...anchorProps } = props;
    void linkChildren;
    void linkVariant;
    void linkClassName;
    void linkIcon;
    return (
      <Link className={classes} href={href} {...anchorProps}>
        <span>{children}</span>
        {icon ? <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
      </Link>
    );
  }

  const nativeProps = props as NativeButton;
  const { children: buttonChildren, variant: buttonVariant, className: buttonClassName, icon: buttonIcon, href: buttonHref, ...buttonProps } = nativeProps;
  void buttonChildren;
  void buttonVariant;
  void buttonClassName;
  void buttonIcon;
  void buttonHref;

  return (
    <button className={classes} {...buttonProps}>
      <span>{children}</span>
      {icon ? <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </button>
  );
}
