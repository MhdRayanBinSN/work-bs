"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const styles = [
  {
    name: "Welcome Dance",
    category: "Wedding",
    desc: "A polished entrance performance that sets the tone for weddings, receptions and family celebrations.",
    tags: ["Entrance", "Group", "Custom"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Wedding Dance",
    category: "Wedding",
    desc: "Personalized choreography for couples, families and professional dance-team wedding moments.",
    tags: ["Couple", "Family", "Premium"],
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "DJ",
    category: "Entertainment",
    desc: "High-energy DJ-led entertainment packages for receptions, parties and late-night celebrations.",
    tags: ["Party", "Live", "Crowd"],
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Instrumental Fusion",
    category: "Live Music",
    desc: "Live instrumental atmosphere blended with movement for refined wedding and corporate stages.",
    tags: ["Live", "Fusion", "Elegant"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Singers",
    category: "Live Music",
    desc: "Curated vocal performances for ceremonies, receptions, stage programs and intimate event moments.",
    tags: ["Solo", "Live", "Melody"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "EMcee",
    category: "Hosting",
    desc: "Warm, confident event hosting that keeps the program connected, clear and moving smoothly.",
    tags: ["Host", "Program", "Flow"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Mohiniyattam",
    category: "Classical",
    desc: "Graceful Kerala classical movement with soft expression, poise and traditional stage presence.",
    tags: ["Classical", "Solo", "Kerala"],
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Margamkali",
    category: "Traditional",
    desc: "A graceful Kerala Christian tradition arranged with clean formations for weddings and cultural stages.",
    tags: ["Group", "Traditional", "Kerala"],
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Sufi Dance",
    category: "Stage",
    desc: "Circular motion, luminous styling and devotional intensity for a memorable showpiece performance.",
    tags: ["Stage", "Visual", "Group"],
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Oppana",
    category: "Wedding",
    desc: "Rhythmic, celebratory and elegant choreography shaped for bridal entrances and festive families.",
    tags: ["Wedding", "Festive", "Group"],
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=1600&q=85"
  }
];

export function StyleExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const active = styles[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      {
        root: null,
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.25, 0.45, 0.65]
      }
    );

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  function jumpTo(index: number) {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="relative overflow-hidden bg-[#FBF6F1] py-20 text-kasavu sm:py-28">
      <div className="absolute -right-32 top-20 h-[34rem] w-[34rem] rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute left-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-gold">Dance Style Explorer</p>
          <h2 className="max-w-xl font-display text-5xl leading-none text-kasavu sm:text-6xl">
            Scroll through everything Brahma Entertainers can bring to stage.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {styles.map((style, index) => (
              <button
                className={`rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition ${
                  activeIndex === index
                    ? "border-gold bg-gold text-white"
                    : "border-gold/20 bg-white/50 text-kasavu/60 hover:border-gold hover:text-gold"
                }`}
                onClick={() => jumpTo(index)}
                key={style.name}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-glow">
            <div className="relative aspect-[4/5] max-h-[58vh] min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  className="absolute inset-0"
                  key={active.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Image
                    src={active.image}
                    alt={`${active.name} service`}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                {active.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(styles.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-4xl">{active.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{active.desc}</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gold/15 lg:block">
            <motion.div
              className="w-px bg-gold"
              animate={{ height: `${((activeIndex + 1) / styles.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="grid gap-5 lg:pl-12">
            {styles.map((style, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.article
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  data-index={index}
                  className={`group relative min-h-[220px] rounded-[24px] border p-6 transition duration-300 sm:p-7 ${
                    isActive
                      ? "border-gold/35 bg-white/85 shadow-glow"
                      : "border-gold/10 bg-white/45 hover:border-gold/25 hover:bg-white/70"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  onMouseEnter={() => setActiveIndex(index)}
                  key={style.name}
                >
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                        {String(index + 1).padStart(2, "0")} / {style.category}
                      </p>
                      <h3 className={`mt-3 font-display text-4xl leading-tight transition sm:text-5xl ${isActive ? "text-gold" : "text-kasavu"}`}>
                        {style.name}
                      </h3>
                    </div>
                    <ArrowUpRight className={`h-6 w-6 transition ${isActive ? "rotate-45 text-gold" : "text-kasavu/30 group-hover:text-gold"}`} />
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-kasavu/70">{style.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {style.tags.map((tag) => (
                      <span className="rounded-full border border-gold/15 bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isActive ? (
                    <div className="mt-6">
                      <Button href={`/contact?style=${encodeURIComponent(style.name)}`}>Book This Style</Button>
                    </div>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
