import type { Metadata } from "next";
import Image from "next/image";
import { AboutStory } from "@/components/sections/about-story";
import { TestimonialsTeamEvents } from "@/components/sections/testimonials-team-events";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Brahma Dance Studio, founded in 2010 in Kottayam, Kerala."
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden pt-36">
        <Image src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=85" alt="Dance studio stage" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,241,242,0.78),rgba(255,255,255,0.65))]" />
        <Container className="relative z-10 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">Since 2010</p>
          <h1 className="mt-5 max-w-5xl font-display text-6xl leading-none text-kasavu sm:text-8xl">A Kottayam studio with a South India stage presence.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-kasavu/75">Master Jacob&apos;s passion for dance shaped Brahma into a professional team for weddings, cultural performances, choreography and academy training.</p>
          <Button className="mt-8" href="/contact">Start a Project</Button>
        </Container>
      </section>
      <AboutStory />
      <TestimonialsTeamEvents />
    </>
  );
}
