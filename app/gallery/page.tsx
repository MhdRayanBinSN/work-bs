import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Wedding dance, stage show, Margam Kali, Oppana, Sufi and academy gallery from Brahma Dance Studio."
};

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <GalleryGrid />
    </div>
  );
}
