"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/data/stats";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const story =
  "Brahma Entertainers is one of the leading dance companies, formed in 2010 at Kottayam, Kerala. The creator, director and mastermind Master Jacob's ultimate passion for dance is how Brahma Entertainers became a leading entertainment team in South India.";

export function AboutStory() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <Section eyebrow="About Brahma Entertainers" title="Cinematic stage energy, rooted in Kerala heritage." className="bg-night">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-3xl leading-snug text-kasavu/35 sm:text-5xl">
            {story.split(" ").map((word, index) => (
              <motion.span
                className="mr-2 inline-block"
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ delay: index * 0.012 }}
                key={`${word}-${index}`}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div className="border border-gold/20 p-5" key={stat.label}>
                <p className="font-display text-4xl text-gold">{stat.value}{stat.suffix}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-kasavu/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button className="mt-9" href="/about" variant="ghost">Read More</Button>
        </div>
        <div className="relative min-h-[540px]">
          {[
            "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=900&q=80"
          ].map((src, index) => (
            <motion.div
              className="absolute overflow-hidden border border-gold/20 bg-night shadow-glow"
              style={{ width: "58%", height: "52%", left: `${index * 18}%`, top: `${index * 18}%` }}
              initial={{ clipPath: "inset(20% 20% 20% 20%)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.14, duration: 0.8 }}
              key={src}
            >
              <Image src={src} alt="Brahma Entertainers performance moment" fill className="object-cover" sizes="(min-width: 1024px) 32vw, 80vw" />
            </motion.div>
          ))}
          <motion.div className="absolute bottom-0 right-0 grid h-36 w-36 place-items-center rounded-full border border-gold/40 text-center text-[10px] uppercase tracking-[0.22em] text-gold" style={{ rotate }}>
            Brahma Entertainers - Since 2010 -
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
