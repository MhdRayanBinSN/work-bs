"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { services } from "@/data/services";
import { studio, whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcons } from "@/components/social-icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 24);
      setHidden(current > last && current > 220);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-gold/15 bg-night/60 text-xs text-kasavu/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <a className="inline-flex items-center gap-2" href={`tel:${studio.phonePrimary.replace(/\s/g, "")}`}>
            <Phone className="h-3.5 w-3.5 text-gold" />
            {studio.phonePrimary}
          </a>
          <a className="hidden items-center gap-2 sm:inline-flex" href={`mailto:${studio.email}`}>
            <Mail className="h-3.5 w-3.5 text-gold" />
            {studio.email}
          </a>
          <SocialIcons className="hidden md:flex" />
        </div>
      </div>

      <motion.header
        className={`fixed left-0 right-0 top-8 z-40 transition ${scrolled ? "bg-night/75 shadow-glow backdrop-blur-xl" : "bg-transparent"}`}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <BrandLogo className="h-16 w-16" priority />

          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div className="group relative" key={item.href}>
                  <Link className="text-sm uppercase tracking-[0.22em] text-kasavu/80 transition hover:text-gold" href={item.href}>
                    {item.label}
                  </Link>
                  <div className="invisible absolute left-1/2 top-8 w-[560px] -translate-x-1/2 rounded border border-gold/20 bg-night/95 p-5 opacity-0 shadow-glow transition group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <Link className="rounded border border-white/10 p-4 transition hover:border-gold/60 hover:bg-gold/10" href={`/expertise/${service.slug}`} key={service.slug}>
                          <span className="block font-display text-xl text-kasavu">{service.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-kasavu/60">{service.eyebrow}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link className="text-sm uppercase tracking-[0.22em] text-kasavu/80 transition hover:text-gold" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Button className="whitespace-nowrap px-6" href="/contact">Get Quick Quote</Button>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-kasavu lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <a
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-night shadow-glow"
        href={whatsappUrl()}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-[80] bg-night p-6 text-kasavu lg:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.55 }}>
            <div className="flex items-center justify-between">
              <BrandLogo className="h-20 w-20" />
              <button className="grid h-11 w-11 place-items-center rounded-full border border-gold/30" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 grid gap-5">
              {nav.map((item, index) => (
                <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.05 }} key={item.href}>
                  <Link className="font-display text-5xl" href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="spin-slow absolute bottom-8 left-6 h-32 w-32 rounded-full border border-gold/30 p-7 text-center text-xs uppercase tracking-[0.25em] text-gold">
              Brahma Dance Studio
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
