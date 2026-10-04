import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const studio = {
  phonePrimary: "+91 96330 18835",
  phoneSecondary: "+91 96563 18835",
  email: "dancebrahma@gmail.com",
  address: "Brahma Entertainers, Changanasserry, Kottayam",
  hours: "All days 9:00 AM - 8:00 PM, Sunday open",
  whatsapp: "919656318835",
  socials: {
    instagram: "https://instagram.com/brahmadancestudio",
    facebook: "https://facebook.com/Brahmalovers",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com/dancebrahma"
  }
};

export function whatsappUrl(message = "I would like to know about your services.") {
  return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;
}
