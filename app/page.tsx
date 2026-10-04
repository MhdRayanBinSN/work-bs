import { Hero } from "@/components/sections/hero";
import { AboutStory } from "@/components/sections/about-story";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { StyleExplorer } from "@/components/sections/style-explorer";
import { TestimonialsTeamEvents } from "@/components/sections/testimonials-team-events";
import { MarqueeCta } from "@/components/sections/marquee-cta";
import { ContactQuote } from "@/components/sections/contact-quote";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStory />
      <ServicesShowcase />
      <GalleryGrid preview />
      <StyleExplorer />
      <TestimonialsTeamEvents />
      <MarqueeCta />
      <ContactQuote />
    </>
  );
}
