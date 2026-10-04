"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500+", label: "Events Performed" },
  { value: "12+", label: "Years of Experience" },
  { value: "10+", label: "Dance Styles" },
  { value: "50+", label: "Professional Dancers" }
];

function AnimatedCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <p className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
        {label}
      </p>
    </motion.div>
  );
}

export function ServicesTrust() {
  return (
    <section className="relative overflow-hidden bg-kasavu py-16 sm:py-20">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(185,28,28,0.25),transparent_50%,rgba(225,29,72,0.15))]" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #FB7185 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedCounter
              value={stat.value}
              label={stat.label}
              index={index}
              key={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
