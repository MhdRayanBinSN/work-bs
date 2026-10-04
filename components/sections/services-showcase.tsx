"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/section";

export function ServicesShowcase() {
  return (
    <Section id="services" eyebrow="Our Expertise" title="Signature performances built for unforgettable entrances." className="bg-[linear-gradient(135deg,#fff5f5,#ffffff_45%,#ffe4e6)]">
      <div className="overflow-x-auto pb-6 [scrollbar-width:none]">
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
