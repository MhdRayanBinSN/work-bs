"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Music, Users, Palette, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: Calendar,
    title: "Consultation",
    description: "Share your event vision, date and venue. We shape the concept around your story."
  },
  {
    icon: Palette,
    title: "Choreography",
    description: "Custom choreography crafted to your preferred style, music and stage setup."
  },
  {
    icon: Users,
    title: "Rehearsal",
    description: "Guided rehearsals with your family or our professional dancers — polished to perfection."
  },
  {
    icon: Music,
    title: "Showtime",
    description: "We bring the energy, costumes and coordination. You just enjoy the moment."
  }
];

export function ServicesFaq() {
  const [openService, setOpenService] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FBF6F1] py-20 text-kasavu sm:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-gold/[0.06] blur-[80px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[28rem] w-[28rem] rounded-full bg-saffron/[0.05] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* How we work - process steps */}
        <div className="mb-20 sm:mb-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-gold">
            How We Work
          </p>
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-kasavu sm:text-6xl">
            From your vision to a{" "}
            <span className="bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] bg-clip-text italic text-transparent">
              stunning
            </span>{" "}
            performance.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                className="group relative overflow-hidden rounded-[24px] border border-gold/10 bg-white/80 p-7 transition-all duration-300 hover:border-gold/25 hover:shadow-glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={step.title}
              >
                {/* Step number */}
                <div className="absolute right-5 top-5 font-display text-6xl text-gold/[0.07]">
                  0{index + 1}
                </div>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] text-white shadow-glow">
                  <step.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-2xl text-kasavu">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-kasavu/60">
                  {step.description}
                </p>

                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gold/20 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ accordion per service */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-gold">
            Frequently Asked
          </p>
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-kasavu sm:text-5xl">
            Questions about our services
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Service sidebar */}
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1 [scrollbar-width:none]">
              {services.map((service, index) => (
                <button
                  className={`flex items-center gap-3 whitespace-nowrap rounded-2xl px-5 py-3 text-left text-sm font-semibold transition-all duration-300 lg:w-full ${
                    openService === index
                      ? "border border-gold/20 bg-white text-gold shadow-glow"
                      : "text-kasavu/50 hover:bg-white/50 hover:text-kasavu"
                  }`}
                  onClick={() => {
                    setOpenService(index);
                    setOpenFaq(null);
                  }}
                  key={service.slug}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-[11px] font-bold text-gold">
                    0{index + 1}
                  </span>
                  {service.title}
                </button>
              ))}
            </div>

            {/* FAQ content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={services[openService].slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-3"
              >
                {services[openService].faq.map((item, i) => {
                  const faqKey = `${services[openService].slug}-${i}`;
                  const isOpen = openFaq === faqKey;

                  return (
                    <motion.div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-gold/20 bg-white shadow-glow"
                          : "border-gold/10 bg-white/60 hover:border-gold/15"
                      }`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      key={faqKey}
                    >
                      <button
                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                        onClick={() => setOpenFaq(isOpen ? null : faqKey)}
                      >
                        <div className="flex items-center gap-4">
                          <CheckCircle2
                            className={`h-5 w-5 shrink-0 transition ${
                              isOpen ? "text-gold" : "text-gold/30"
                            }`}
                          />
                          <span className="font-semibold text-kasavu">
                            {item.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-gold/50 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="px-5 pb-5 pl-14 text-sm leading-7 text-kasavu/65 sm:px-6 sm:pb-6 sm:pl-[60px]">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <div className="mt-4">
                  <Button href={`/contact?service=${services[openService].slug}`}>
                    Book {services[openService].title}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
