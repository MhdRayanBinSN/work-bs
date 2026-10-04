import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { studio } from "@/lib/utils";
import { Container } from "@/components/ui/section";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcons } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-[linear-gradient(180deg,#ffffff,#fff1f2)] py-16 text-kasavu">
      <Container>
        <p className="font-display text-7xl leading-none text-gold/20 sm:text-9xl lg:text-[10rem]">LET&apos;S DANCE</p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-center gap-5">
              <BrandLogo className="h-28 w-28 rounded-2xl" />
              <h2 className="font-display text-4xl">Brahma Entertainers</h2>
            </div>
            <p className="mt-4 max-w-xl text-kasavu/70">Professional dance team in South India for wedding welcome dances, stage shows, corporate events, choreography and academy classes.</p>
            <div className="mt-6 grid gap-2 text-sm text-kasavu/75">
              <a className="inline-flex items-center gap-2" href={`tel:${studio.phonePrimary.replace(/\s/g, "")}`}><Phone className="h-4 w-4 text-gold" />{studio.phonePrimary} / {studio.phoneSecondary}</a>
              <a className="inline-flex items-center gap-2" href={`mailto:${studio.email}`}><Mail className="h-4 w-4 text-gold" />{studio.email}</a>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />{studio.address}</span>
            </div>
            <SocialIcons className="mt-6" />
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Navigate</h3>
            <div className="grid gap-3 text-kasavu/70">
              {["About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                <Link href={`/${item.toLowerCase()}`} key={item}>{item}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Services</h3>
            <div className="grid gap-3 text-kasavu/70">
              {services.map((service) => (
                <Link href={`/expertise/${service.slug}`} key={service.slug}>{service.title}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gold/15 pt-6 text-xs uppercase tracking-[0.22em] text-kasavu/50">
          <p>Copyright 2026 Brahma Entertainers</p>
          <p>dancers in kerala / wedding dancers kerala</p>
        </div>
      </Container>
    </footer>
  );
}
