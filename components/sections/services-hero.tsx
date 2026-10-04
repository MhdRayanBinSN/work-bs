"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.children[activeIndex] as HTMLElement;
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50/60 to-white pb-8 pt-32 sm:pt-36 sm:pb-16">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[40rem] w-[40rem] rounded-full bg-gold/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full bg-saffron/[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Service tabs - inspired by SurveySparrow's SmartReach AI / SpotChecks / CogniVue tabs */}
        <div className="relative mb-12 sm:mb-16">
          <div
            ref={tabsRef}
            className="relative inline-flex flex-wrap gap-1 rounded-full border border-gold/15 bg-white/80 p-1.5 shadow-[0_2px_20px_rgba(225,29,72,0.08)] backdrop-blur-sm"
          >
            {services.map((service, index) => (
              <button
                className={`relative z-10 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 sm:px-6 sm:py-3 sm:text-[13px] ${
                  activeIndex === index
                    ? "text-white"
                    : "text-kasavu/60 hover:text-gold"
                }`}
                onClick={() => setActiveIndex(index)}
                key={service.slug}
              >
                {service.title}
              </button>
            ))}
            {/* Animated pill background */}
            <motion.div
              className="absolute top-1.5 h-[calc(100%-12px)] rounded-full bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)]"
              animate={indicatorStyle}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          </div>
        </div>

        {/* Main content area - SurveySparrow-inspired layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Soft container like SurveySparrow's rounded card area */}
            <div className="relative overflow-hidden rounded-[32px] border border-gold/10 bg-gradient-to-br from-white via-rose-50/40 to-white p-6 shadow-[0_8px_60px_rgba(225,29,72,0.08)] sm:p-10 lg:p-14">
              {/* Subtle decorative grid dots */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(circle, #E11D48 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }} />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                {/* Left text content */}
                <div>
                  <motion.p
                    className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Sparkles className="h-3 w-3" />
                    {active.eyebrow}
                  </motion.p>

                  <h1 className="mt-5 font-display text-4xl leading-[1.08] text-kasavu sm:text-5xl lg:text-6xl">
                    {active.description.split(".")[0]}.
                    <br />
                    <span className="relative mt-1 inline-block bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] bg-clip-text italic text-transparent">
                      {active.title}.
                      <svg
                        className="absolute -bottom-1 left-0 h-3 w-full text-saffron/50"
                        viewBox="0 0 260 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <motion.path
                          d="M4 12C59 3 145 2 256 8"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 0.7 }}
                        />
                      </svg>
                    </span>
                  </h1>

                  <motion.p
                    className="mt-6 max-w-lg text-base leading-7 text-kasavu/65 sm:text-lg sm:leading-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {active.longDescription}
                  </motion.p>

                  {/* Style tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.styles.map((style, i) => (
                      <motion.span
                        className="rounded-full border border-gold/15 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold/80"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.04 }}
                        key={style}
                      >
                        {style}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button href={`/expertise/${active.slug}`}>
                      Know More
                    </Button>
                    <Button
                      href="/contact"
                      variant="ghost"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                {/* Right image panel - floating card like SurveySparrow's product preview */}
                <div className="relative">
                  {/* Glow behind the card */}
                  <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-gold/10 via-saffron/5 to-transparent blur-2xl" />

                  <motion.div
                    className="relative overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_24px_80px_rgba(225,29,72,0.12)]"
                    initial={{ scale: 0.95, rotateY: -8 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="relative aspect-[4/5] max-h-[560px]">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(min-width: 1024px) 40vw, 90vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Floating number badge */}
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 font-display text-xl text-gold shadow-lg backdrop-blur-sm">
                        0{activeIndex + 1}
                      </div>

                      {/* Bottom info bar inside the image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                            {active.eyebrow}
                          </p>
                          <h3 className="mt-1 font-display text-2xl text-white">
                            {active.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#B91C1C,#E11D48)] shadow-glow"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
