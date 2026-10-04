"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { filters, portfolio, type PortfolioItem } from "@/data/portfolio";
import { Section } from "@/components/ui/section";

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const items = useMemo(() => {
    const filtered = activeFilter === "All" ? portfolio : portfolio.filter((item) => item.category === activeFilter);
    return preview ? filtered.slice(0, 8) : filtered;
  }, [activeFilter, preview]);

  return (
    <Section eyebrow="Portfolio" title={preview ? "Moments from weddings, stages and academy floors." : "Explore Brahma Entertainers' performance archive."} className="bg-night">
      <div className="mb-9 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            className={`shrink-0 border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${activeFilter === filter ? "border-gold bg-gold text-night" : "border-gold/25 text-kasavu/70 hover:border-gold"}`}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.button
              layout
              className="group relative mb-4 block w-full overflow-hidden border border-gold/15 bg-white/5 text-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: Math.min(index * 0.03, 0.24) }}
              onClick={() => setLightbox(item)}
              data-cursor="VIEW"
              key={item.id}
            >
              <div className={`${index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[5/4]" : "aspect-square"} relative`}>
                <Image src={item.src} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 90vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />
                <p className="absolute bottom-4 left-4 right-4 translate-y-5 font-display text-3xl text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div className="fixed inset-0 z-[95] bg-white/95 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-kasavu" onClick={() => setLightbox(null)} aria-label="Close gallery">
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto grid h-full max-w-6xl place-items-center">
              <div className="w-full">
                <div className="relative mx-auto aspect-video max-h-[76vh] overflow-hidden border border-gold/20">
                  <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" sizes="90vw" />
                </div>
                <p className="mt-4 text-center font-display text-4xl text-kasavu">{lightbox.title}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
