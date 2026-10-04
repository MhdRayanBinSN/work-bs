import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesTrust } from "@/components/sections/services-trust";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ServicesFaq } from "@/components/sections/services-faq";
import { ContactQuote } from "@/components/sections/contact-quote";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding dances, stage shows, corporate events, choreography and academy classes by Brahma Entertainers."
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesTrust />
      <ServicesGrid />
      <ServicesFaq />
      <ContactQuote />
    </>
  );
}
