"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Images, X } from "lucide-react";
import type { ServiceSubSection } from "@/data/services";

type ServiceSubsectionGalleryProps = {
  items: ServiceSubSection[];
  serviceImage: string;
  serviceTitle: string;
};

export function ServiceSubsectionGallery({ items, serviceImage, serviceTitle }: ServiceSubsectionGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const normalizedItems = useMemo(
    () =>
      items.map((item, index) => {
        const primaryImage = item.image ?? serviceImage;
        const nearbyImages = items
          .slice(index + 1)
          .concat(items.slice(0, index))
          .map((nearby) => nearby.image)
          .filter((image): image is string => Boolean(image));

        return {
          ...item,
          image: primaryImage,
          gallery: item.gallery?.length ? item.gallery : [primaryImage, ...nearbyImages, serviceImage].slice(0, 5)
        };
      }),
    [items, serviceImage]
  );

  const activeItem = activeIndex === null ? null : normalizedItems[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeIndex]);

  const moveGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    gallery.scrollBy({ left: direction === "left" ? -420 : 420, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {normalizedItems.map((item, index) => (
          <button
            className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 text-left shadow-[0_16px_48px_rgba(225,29,72,0.06)] transition hover:-translate-y-1 ${
              activeIndex === index ? "border-crimson/60 shadow-glow" : "border-gold/20 hover:border-crimson/35"
            }`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            key={item.title}
          >
            <div className="-mx-6 -mt-6 mb-6 overflow-hidden bg-rose-50">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={`${item.title} by Brahma Entertainers`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-crimson/65">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="mt-4 font-display text-3xl text-kasavu">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-kasavu/70">{item.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-crimson">
              <Images className="h-4 w-4" />
              View Images
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} image gallery`}
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute right-4 top-4 z-10 grid h-14 w-14 place-items-center rounded-full border border-crimson/20 bg-white text-kasavu shadow-[0_12px_40px_rgba(15,15,15,0.08)] transition hover:border-crimson hover:text-crimson sm:right-7 sm:top-7"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(null);
              }}
              aria-label="Close gallery"
            >
              <X className="h-7 w-7" />
            </button>

            <div className="w-full max-w-[1500px]" onClick={(event) => event.stopPropagation()}>
              <div className="relative">
                <button
                  className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-crimson shadow-[0_10px_32px_rgba(15,15,15,0.12)] backdrop-blur transition hover:bg-crimson hover:text-white sm:-left-6"
                  type="button"
                  onClick={() => moveGallery("left")}
                  aria-label="Scroll gallery left"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div ref={galleryRef} className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none]">
                  {activeItem.gallery.map((image, index) => (
                    <div className="relative h-[62vh] min-h-[360px] w-full shrink-0 snap-center overflow-hidden bg-rose-50 shadow-[0_26px_90px_rgba(15,15,15,0.12)] sm:h-[72vh]" key={`${activeItem.title}-${image}-${index}`}>
                      <Image
                        src={image}
                        alt={`${activeItem.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-crimson shadow-[0_10px_32px_rgba(15,15,15,0.12)] backdrop-blur transition hover:bg-crimson hover:text-white sm:-right-6"
                  type="button"
                  onClick={() => moveGallery("right")}
                  aria-label="Scroll gallery right"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="pt-5 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson/55">{serviceTitle}</p>
                <h3 className="mt-1 font-display text-4xl text-kasavu sm:text-5xl">{activeItem.title}</h3>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
