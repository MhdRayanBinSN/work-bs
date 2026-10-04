"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 0.92]);
  const radius = useTransform(scrollY, [0, 600], [0, 28]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <motion.div className="absolute inset-0" style={{ scale, borderRadius: radius }}>
        <Image
          src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=2400&q=90"
          alt="Dance performance under vivid stage lighting"
          fill
          priority
          unoptimized
          className="object-cover object-[70%_50%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,246,247,0.86)_32%,rgba(255,241,242,0.38)_62%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_38%,rgba(225,29,72,0.16),transparent_34rem)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 32 }).map((_, index) => (
          <motion.span
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: [0, 1, 0], y: -120 }}
            transition={{ duration: 6 + (index % 5), repeat: Infinity, delay: index * 0.2 }}
            style={{ left: `${(index * 37) % 100}%`, top: `${30 + ((index * 19) % 60)}%` }}
            key={index}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-end px-5 pb-12 sm:px-8">
        <motion.p
          className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-gold"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Est. 2010 - Kottayam, Kerala
        </motion.p>
        <h1 className="max-w-6xl font-display text-5xl leading-[0.95] text-kasavu sm:text-7xl lg:text-8xl">
          {"Every Love Story Is Beautiful".split(" ").map((word, index) => (
            <motion.span
              className="mr-3 inline-block overflow-hidden"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              key={word}
            >
              {word}
            </motion.span>
          ))}
          <br />
          <span>But Yours Should Be </span>
          <span className="relative bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] bg-clip-text italic text-transparent">
            Unique
            <svg className="absolute -bottom-2 left-0 h-5 w-full text-saffron" viewBox="0 0 260 26" fill="none" aria-hidden="true">
              <motion.path d="M4 19C59 5 145 4 256 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.9 }} />
            </svg>
          </span>
        </h1>
        
        <div className="mt-8 flex max-w-4xl flex-wrap items-center gap-4">
          <Button className="whitespace-nowrap" href="/contact">Book Your Wedding Dance</Button>
          <Button className="whitespace-nowrap px-6" href="/gallery" variant="ghost" data-cursor="PLAY" icon={false}>
            <span className="inline-flex items-center gap-3">
              <Play className="h-4 w-4 shrink-0" />
              Watch Showreel
            </span>
          </Button>
        </div>
        <div className="mt-16 flex items-end justify-between text-xs uppercase tracking-[0.28em] text-kasavu/55">
          <span>Scroll</span>
          <span className="hidden sm:inline">Welcome Dance - Margam Kali - Oppana - Sufi</span>
        </div>
      </div>
    </section>
  );
}
