"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";
import { events } from "@/data/events";
import { masters, testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function TestimonialsTeamEvents() {
  return (
    <Section eyebrow="People and Praise" title="Loved by families, event teams and students." className="bg-[linear-gradient(135deg,#ffffff,#fff1f2)]">
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <motion.article className="border border-gold/20 bg-white/80 p-6 shadow-glow" drag="x" dragConstraints={{ left: 0, right: 0 }} whileTap={{ scale: 0.98 }} key={item.name}>
            <div className="mb-7 flex gap-1 text-gold">
              {Array.from({ length: item.rating }).map((_, index) => <Star className="h-4 w-4 fill-current" key={index} />)}
            </div>
            <p className="font-display text-3xl leading-snug text-kasavu">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-gold">{item.name}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {masters.map((master) => (
          <article className="group grid overflow-hidden border border-gold/20 bg-white/85 shadow-glow md:grid-cols-[0.8fr_1fr]" key={master.name}>
            <div className="relative min-h-80 overflow-hidden grayscale transition duration-500 group-hover:grayscale-0">
              <Image src={master.image} alt={master.name} fill className="object-cover" sizes="(min-width: 768px) 40vw, 90vw" />
            </div>
            <div className="p-7">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Masters</p>
              <h3 className="mt-6 font-display text-4xl text-kasavu">{master.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-kasavu/55">{master.role}</p>
              <p className="mt-6 leading-7 text-kasavu/70">{master.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border border-gold/20 bg-white/85 p-7 shadow-glow">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Upcoming Events</p>
            <h3 className="mt-3 font-display text-4xl text-kasavu">Next on stage</h3>
          </div>
          <Button href="/contact" variant="ghost">Book Us</Button>
        </div>
        {events.length ? (
          <div className="mt-8 grid gap-3">
            {events.map((event) => (
              <div className="flex items-center gap-4 border-t border-gold/15 py-4" key={event.title}>
                <Calendar className="h-5 w-5 text-gold" />
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-kasavu/60">{event.date} - {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 max-w-2xl text-lg text-kasavu/70">No shows scheduled right now. Check back soon or book us for your event.</p>
        )}
      </div>
    </Section>
  );
}
