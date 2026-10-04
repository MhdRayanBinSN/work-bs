export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  videoUrl?: string;
};

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=900&q=80"
];

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
  src: images[index % images.length],
  videoUrl: index % 7 === 0 ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : undefined
}));
