"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const trailImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=300&q=70"
];

export function MarqueeCta() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number; img: string }[]>([]);

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#7F1D1D,#E11D48,#FB7185)] py-20 text-white"
      onMouseMove={(event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const point = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          id: Date.now(),
          img: trailImages[trail.length % trailImages.length]
        };
        setTrail((current) => [...current.slice(-8), point]);
      }}
    >
      {trail.map((point) => (
        <span className="pointer-events-none absolute h-28 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/40 opacity-50" style={{ left: point.x, top: point.y }} key={point.id}>
          <Image src={point.img} alt="" fill className="object-cover" sizes="80px" />
        </span>
      ))}
      <div className="relative z-10 border-y border-white/25 py-4">
        <div className="marquee flex w-max gap-8 whitespace-nowrap font-display text-5xl uppercase text-white/90 sm:text-7xl">
          <span>Weddings - Stage Shows - Margam Kali - Sufi - Oppana - Bollywood -</span>
          <span>Weddings - Stage Shows - Margam Kali - Sufi - Oppana - Bollywood -</span>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-12 flex max-w-7xl flex-wrap items-end justify-between gap-8 px-5 sm:px-8">
        <h2 className="max-w-3xl font-display text-5xl leading-tight sm:text-7xl">Make the entrance feel impossible to forget.</h2>
        <Button href="/contact" variant="dark">Get Quick Quote</Button>
      </div>
    </section>
  );
}
