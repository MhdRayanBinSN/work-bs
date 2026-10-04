import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { studio } from "@/lib/utils";
import { cn } from "@/lib/utils";

const socialLinks = [
  { href: studio.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: studio.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: studio.socials.youtube, label: "YouTube", Icon: Youtube },
  { href: studio.socials.twitter, label: "Twitter", Icon: Twitter }
];

export function SocialIcons({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          className={cn(
            "grid h-8 w-8 place-items-center text-gold transition hover:text-crimson",
            iconClassName
          )}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noreferrer"
          key={label}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
