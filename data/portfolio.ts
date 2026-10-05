export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  videoUrl?: string;
};

// Add or replace category images in public/assets/portfolio/<category>/ and update the paths here.
const portfolioCategoryImages: Record<string, string[]> = {
  "Wedding Dance": [
    "/assets/portfolio/wedding-dance/1.jpeg",
    "/assets/portfolio/wedding-dance/2.jpeg",
    "/assets/portfolio/wedding-dance/1.jpeg"
  ],
  "Stage Shows": [
    "/assets/portfolio/stage/1.jpeg",
    "/assets/portfolio/stage/1.jpeg",
    "/assets/portfolio/stage/1.jpeg"
  ],
  "Training Class": [
    "/assets/portfolio/training/1.jpeg",
    "/assets/portfolio/training/1.jpeg",
    "/assets/portfolio/training/1.jpeg"
  ],
  "Margam Kali": [
    "/assets/portfolio/margam-kali/1.jpeg",
    "/assets/portfolio/margam-kali/1.jpeg",
    "/assets/portfolio/margam-kali/1.jpeg"
  ],
  Sufi: [
    "/assets/portfolio/sufi/1.jpeg",
    "/assets/portfolio/sufi/1.jpeg",
    "/assets/portfolio/sufi/1.jpeg"
  ],
  Oppana: [
    "/assets/portfolio/oppana/1.jpeg",
    "/assets/portfolio/oppana/1.jpeg",
    "/assets/portfolio/oppana/1.jpeg"
  ],
  Arabic: [
    "/assets/portfolio/arabic/1.jpeg",
    "/assets/portfolio/arabic/1.jpeg",
    "/assets/portfolio/arabic/1.jpeg"
  ],
  "Fire Dance": [
    "/assets/portfolio/fire-dance/1.jpeg",
    "/assets/portfolio/fire-dance/1.jpeg",
    "/assets/portfolio/fire-dance/1.jpeg"
  ]
};

const fallbackPortfolioImages = [
  "/assets/wedding_welcome/img1.jpeg",
  "/assets/wedding_welcome/img2.jpeg",
  "/assets/wedding_welcome/img3.jpeg",
  "/assets/wedding_welcome/img4.jpeg"
];

function getPortfolioImage(category: string, index: number) {
  const images = portfolioCategoryImages[category] ?? fallbackPortfolioImages;
  return images[index % images.length];
}

export const filters = ["All", "Wedding Dance", "Stage Shows", "Training Class", "Margam Kali", "Sufi", "Oppana", "Arabic", "Fire Dance"];

export const portfolio: PortfolioItem[] = [
  "Stage Shows",
  "Margam Kali",
  "Training Session",
  "Dandya",
  "Welcome Dance",
  "Wedding Dance",
  "Mexican Dance",
  "Light Dance",
  "Sufi Dance",
  "Fire Dance",
  "Melody Performance",
  "Arabic Dance",
  "Oppana",
  "Pair Dance",
  "Kerala Wedding Dance",
  "Bollywood Night",
  "Corporate Launch",
  "Academy Showcase",
  "Festive Fusion",
  "Family Surprise",
  "Stage Finale",
  "Traditional Welcome",
  "Sufi Circle",
  "Arabic Ensemble"
].map((title, index) => ({
  id: `${index + 1}`,
  title,
  category:
    title.includes("Wedding") || title.includes("Welcome")
      ? "Wedding Dance"
      : title.includes("Stage") || title.includes("Bollywood") || title.includes("Launch")
        ? "Stage Shows"
        : title.includes("Sufi")
          ? "Sufi"
          : title.includes("Oppana")
            ? "Oppana"
            : title.includes("Arabic")
              ? "Arabic"
              : title.includes("Fire")
                ? "Fire Dance"
                : title.includes("Margam")
                  ? "Margam Kali"
                  : "Training Class",
  src: getPortfolioImage(
    title.includes("Wedding") || title.includes("Welcome")
      ? "Wedding Dance"
      : title.includes("Stage") || title.includes("Bollywood") || title.includes("Launch")
        ? "Stage Shows"
        : title.includes("Sufi")
          ? "Sufi"
          : title.includes("Oppana")
            ? "Oppana"
            : title.includes("Arabic")
              ? "Arabic"
              : title.includes("Fire")
                ? "Fire Dance"
                : title.includes("Margam")
                  ? "Margam Kali"
                  : "Training Class",
    index
  ),
  videoUrl: index % 7 === 0 ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : undefined
}));
