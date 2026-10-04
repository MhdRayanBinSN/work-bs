"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/section";

export function ServicesShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanScrollLeft(scroller.scrollLeft > 8);
    setCanScrollRight(scroller.scrollLeft < maxScroll - 8);
  };

  useEffect(() => {
    updateScrollState();
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const move = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cardWidth = Math.min(420, scroller.clientWidth * 0.86);
    scroller.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <Section id="services" eyebrow="Our Expertise" title="Signature performances built for unforgettable entrances." className="bg-[linear-gradient(135deg,#fff5f5,#ffffff_45%,#ffe4e6)]">
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-crimson/20 bg-white text-crimson shadow-[0_12px_34px_rgba(225,29,72,0.12)] transition enabled:hover:-translate-x-1 enabled:hover:bg-crimson enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
          type="button"
          onClick={() => move("left")}
          disabled={!canScrollLeft}
          aria-label="Show previous expertise cards"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-crimson/20 bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] text-white shadow-[0_12px_34px_rgba(225,29,72,0.22)] transition enabled:hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-35"
          type="button"
          onClick={() => move("right")}
          disabled={!canScrollRight}
          aria-label="Show next expertise cards"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div ref={scrollerRef} className="scroll-smooth overflow-x-auto pb-6 [scrollbar-width:none]">
        <div className="flex min-w-max gap-5">
          {services.map((service, index) => (
            <motion.article
              className="group relative h-[520px] w-[320px] overflow-hidden border border-gold/25 bg-night shadow-glow sm:w-[390px]"
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              data-cursor="VIEW"
              key={service.slug}
            >
              <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="390px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute left-6 top-6 font-display text-7xl text-white/15">0{index + 1}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-4xl text-white">{service.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/80">{service.description}</p>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-rose-200" href={`/expertise/${service.slug}`}>
                  Read More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-4 h-1 overflow-hidden bg-kasavu/10">
        <motion.div className="h-full bg-gold" initial={{ width: "15%" }} whileInView={{ width: "100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} />
      </div>
    </Section>
  );
}
