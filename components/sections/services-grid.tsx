"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Soft background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/40 via-white to-rose-50/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-gold">
            All Services
          </p>
          <h2 className="font-display text-4xl leading-tight text-kasavu sm:text-6xl">
            Everything we offer,{" "}
            <span className="bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] bg-clip-text italic text-transparent">
              at a glance.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              key={service.slug}
            >
              <Link
                href={`/expertise/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gold/10 bg-white shadow-[0_2px_20px_rgba(225,29,72,0.04)] transition-all duration-300 hover:border-gold/25 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Service number */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gold backdrop-blur-sm">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold/70">
                    {service.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl text-kasavu transition-colors group-hover:text-gold sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-kasavu/55">
                    {service.description}
                  </p>

                  {/* Styles chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.styles.slice(0, 3).map((style) => (
                      <span
                        className="rounded-full border border-gold/10 bg-rose-50/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gold/60"
                        key={style}
                      >
                        {style}
                      </span>
                    ))}
                    {service.styles.length > 3 && (
                      <span className="rounded-full border border-gold/10 bg-rose-50/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gold/60">
                        +{service.styles.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors group-hover:text-crimson">
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
