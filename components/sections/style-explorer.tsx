"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const styles = [
  {
    name: "Welcome Dance",
    desc: "A polished entrance performance that sets the mood for weddings, receptions and family celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Wedding Dance",
    desc: "Personalized wedding choreography for couples, families and professional dance-team entrances.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "DJ",
    desc: "High-energy DJ-led entertainment packages for receptions, parties and late-night celebrations.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Instrumental Fusion",
    desc: "Live instrumental atmosphere blended with movement, ideal for premium wedding and corporate stages.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Singers",
    desc: "Vocal performances curated for ceremonies, receptions, stage programs and elegant event moments.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "EMcee",
    desc: "Confident event hosting to keep the program smooth, warm and connected from start to finish.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Mohiniyattam",
    desc: "Graceful classical Kerala movement with soft expression, poise and traditional stage presence.",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Margamkali",
    desc: "A graceful Kerala Christian tradition arranged with clean formations for weddings and cultural stages.",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Sufi Dance",
    desc: "Circular motion, luminous costumes and devotional intensity for a showpiece moment.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Oppana",
    desc: "Rhythmic, celebratory and elegant, shaped for bridal entrances and festive family performances.",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=1600&q=85"
  }
];

export function StyleExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = styles[activeIndex];

  return (
    <section
      className="relative min-h-screen overflow-hidden py-24"
      onWheel={(event) => {
        if (Math.abs(event.deltaY) < 18) return;
        setActiveIndex((current) => {
          if (event.deltaY > 0) return Math.min(current + 1, styles.length - 1);
          return Math.max(current - 1, 0);
        });
      }}
    >
      <Image src={active.image} alt={active.name} fill unoptimized className="object-cover" sizes="100vw" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(225,29,72,0.24),rgba(255,255,255,0.9)_44%,rgba(255,255,255,0.98))]"
        key={active.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-gold">Dance Style Explorer</p>
          <div className="grid max-h-[66vh] gap-2 overflow-y-auto pr-3 [scrollbar-width:thin]">
            {styles.map((style, index) => (
              <button
                className={`text-left font-display text-4xl leading-none transition sm:text-6xl ${active.name === style.name ? "text-gold" : "text-kasavu/35 hover:text-kasavu"}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                key={style.name}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-end">
          <motion.div className="max-w-xl border border-gold/20 bg-white/85 p-7 shadow-glow backdrop-blur" key={active.desc} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h2 className="font-display text-5xl text-kasavu">{active.name}</h2>
            <p className="mt-4 text-lg leading-8 text-kasavu/75">{active.desc}</p>
            <Button className="mt-7" href={`/contact?style=${encodeURIComponent(active.name)}`}>Book This Style</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
