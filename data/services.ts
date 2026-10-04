export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  styles: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "wedding-events",
    title: "Wedding Dance",
    eyebrow: "Welcome dance, Sufi, Margam Kali, Oppana and Arabic styles",
    description: "Marriages are now filled with fun and joy. A new life should begin with laughter.",
    longDescription:
      "Brahma Entertainers designs wedding welcome dances and family performances that feel personal, polished and celebratory. From graceful Kerala traditions to energetic Bollywood medleys, every sequence is rehearsed around your venue, family and timeline.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    styles: ["Welcome Dance", "Sufi", "Margamkali", "Oppana", "Arabic", "Bollywood"],
    faq: [
      { question: "Can family members join the performance?", answer: "Yes. The choreography can include family, friends and Brahma Entertainers' professional dancers." },
      { question: "How early should we book?", answer: "For wedding season, four to six weeks is ideal so rehearsals and costumes can be planned calmly." }
    ]
  },
  {
    slug: "training-academy",
    title: "Training Classes / Academy",
    eyebrow: "Hip-Hop, Jazz, Funk, Lyrical and Contemporary",
    description: "Technique-focused training for beginners, performers and students preparing for stage.",
    longDescription:
      "The academy blends disciplined training with high-energy practice. Students learn foundations, musicality, performance confidence and stage discipline across contemporary and commercial dance styles.",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1400&q=85",
    styles: ["Hip-Hop", "Jazz", "Funk", "Lyrical", "Contemporary"],
    faq: [
      { question: "Are beginner batches available?", answer: "Yes. Batches can be grouped by age and experience level." },
      { question: "Do students get performance opportunities?", answer: "Students are guided toward stage confidence through showcases and selected event opportunities." }
    ]
  },
  {
    slug: "stage-shows",
    title: "Stage Shows",
    eyebrow: "Large-format performances across South India",
    description: "High-impact stage productions for festivals, launches and public events.",
    longDescription:
      "Brahma Entertainers builds complete stage packages with choreography, dancers, costumes and performance flow. The team adapts to cultural evenings, award nights, college festivals and public celebrations.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1400&q=85",
    styles: ["Bollywood", "Folk Fusion", "Light Dance", "Fire Dance", "Theme Acts"],
    faq: [
      { question: "Can you perform outside Kottayam?", answer: "Yes. Brahma Entertainers performs across Kerala and South India based on event requirements." },
      { question: "Do you provide costumes?", answer: "Costumes and styling can be included in the performance package." }
    ]
  },
  {
    slug: "corporate-events",
    title: "Corporate Shows",
    eyebrow: "Private events, launches and brand celebrations",
    description: "Sharp, professional dance acts that lift the energy of corporate and private events.",
    longDescription:
      "From opening acts to thematic brand performances, Brahma Entertainers crafts clean, punctual and event-ready choreography for corporate stages, destination events and private gatherings.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=85",
    styles: ["Opening Act", "Brand Theme", "Bollywood", "Flash Mob", "Team Celebration"],
    faq: [
      { question: "Can you customize for a brand theme?", answer: "Yes. Music, costumes and choreography can be adapted to the brand or event concept." },
      { question: "How many dancers can you provide?", answer: "Team size is flexible and depends on stage size, budget and performance duration." }
    ]
  },
  {
    slug: "choreo-works",
    title: "Choreo Works",
    eyebrow: "Creative choreography for shows, campaigns and events",
    description: "Let's pair up for choreography that makes the moment memorable.",
    longDescription:
      "Brahma Entertainers collaborates on choreography for event productions, social campaigns, music-led concepts and marketing moments where movement needs to feel distinctive and camera-ready.",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1400&q=85",
    styles: ["Event Choreography", "Music Concepts", "Campaign Acts", "Family Training", "Stage Blocking"],
    faq: [
      { question: "Can you choreograph only, without dancers?", answer: "Yes. Brahma Entertainers can choreograph, train and direct your own team." },
      { question: "Do you help with song selection?", answer: "Yes. Music edits and medley planning can be part of the choreography process." }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
