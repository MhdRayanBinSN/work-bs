import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { SiteNav } from "@/components/site-nav";
import { SitePreloader } from "@/components/site-preloader";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteFooter } from "@/components/site-footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brahmadancestudio.com"),
  title: {
    default: "Professional Wedding Dancers In Kerala | Brahma Dance Studio",
    template: "%s | Brahma Dance Studio"
  },
  description:
    "Brahma Dance Studio in Kottayam, Kerala offers wedding welcome dance, Margam Kali, Bollywood, corporate events, choreography and stage shows.",
  openGraph: {
    title: "Professional Wedding Dancers In Kerala | Brahma Dance Studio",
    description:
      "Cinematic wedding dances, stage shows, academy classes and choreography from Brahma Dance Studio.",
    url: "https://brahmadancestudio.com",
    siteName: "Brahma Dance Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Wedding Dancers In Kerala | Brahma Dance Studio",
    description: "Wedding welcome dance, Margam Kali, Bollywood, choreography and stage shows in Kerala."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PerformingGroup"],
    name: "Brahma Dance Studio",
    url: "https://brahmadancestudio.com",
    telephone: ["+91 96330 18835", "+91 96563 18835"],
    email: "dancebrahma@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brahma Dance Studio",
      addressLocality: "Changanasserry",
      addressRegion: "Kottayam",
      addressCountry: "IN"
    },
    openingHours: "Mo-Su 09:00-20:00",
    sameAs: [
      "https://instagram.com/brahmadancestudio",
      "https://facebook.com/Brahmalovers",
      "https://twitter.com/dancebrahma"
    ]
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <AppProviders>
          <SitePreloader />
          <CustomCursor />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </AppProviders>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
