import type { Metadata } from "next";
import { ContactQuote } from "@/components/sections/contact-quote";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a quick quote from Brahma Dance Studio for weddings, stage shows, corporate events and choreography."
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactQuote />
    </div>
  );
}
