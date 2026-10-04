import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { StyleExplorer } from "@/components/sections/style-explorer";
import { ContactQuote } from "@/components/sections/contact-quote";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding dances, stage shows, corporate events, choreography and academy classes by Brahma Dance Studio."
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24">
        <ServicesShowcase />
      </div>
      <StyleExplorer />
      <ContactQuote />
    </>
  );
}
