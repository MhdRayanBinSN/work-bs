export type ServiceSubSection = {
  title: string;
  description: string;
  image?: string;
  gallery?: string[];
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  styles: string[];
  subSections?: ServiceSubSection[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "dance",
    title: "Dance",
    eyebrow: "Welcome Dance, Wedding Dance, Mohiniyattam, Margamkali, Sufi Dance and Oppana",
    description: "Traditional, classical and wedding-focused dance performances shaped for your celebration.",
    longDescription:
      "Brahma Entertainers designs dance performances that feel personal, polished and rooted in the occasion. From graceful wedding welcomes to Kerala traditions and devotional stage pieces, each act is planned around your venue, music, costume mood and audience.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    styles: ["Welcome Dance", "Wedding Dance", "Mohiniyattam", "Margamkali", "Sufi Dance", "Oppana"],
    subSections: [
      {
        title: "Welcome Dance",
        description: "A graceful opening performance for guest arrivals, bride and groom entries, receptions and premium event welcomes.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Wedding Dance",
        description: "Custom choreography for couples, families and friends with rehearsed formations, clean music edits and stage-ready presentation.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Mohiniyattam",
        description: "Elegant classical Kerala dance with expressive storytelling, refined costume styling and a calm ceremonial presence.",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Margamkali",
        description: "A vibrant traditional group act suited for wedding stages, cultural evenings and Kerala-themed celebrations.",
        image: "https://images.unsplash.com/photo-1526894198609-10b3cdf45c52?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Sufi Dance",
        description: "A soulful whirling performance with devotional energy, flowing costumes and dramatic lighting-friendly movement.",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Oppana",
        description: "A festive bridal celebration act with rhythmic claps, expressive group formations and a joyful Kerala wedding mood.",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
      }
    ],
    faq: [
      { question: "Can family members join the performance?", answer: "Yes. The choreography can include family, friends and Brahma Entertainers' professional dancers." },
      { question: "Can we mix classical and wedding dance styles?", answer: "Yes. Brahma Entertainers can combine traditional, classical and modern segments into one smooth performance flow." }
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
    eyebrow: "DJ, Instrumental Fusion, Singers and EMcee for complete stage programs",
    description: "High-impact stage entertainment for festivals, launches, receptions and public events.",
    longDescription:
      "Brahma Entertainers builds complete stage show packages with music, hosting, live performance flow and audience energy. The team adapts to cultural evenings, award nights, college festivals, receptions and public celebrations.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1400&q=85",
    styles: ["DJ", "Instrumental Fusion", "Singers", "EMcee"],
    subSections: [
      {
        title: "DJ",
        description: "Energetic DJ sets for receptions, after-parties and stage events with music flow planned around the crowd.",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Instrumental Fusion",
        description: "Live instrumental moments that blend traditional and contemporary sounds for premium entries and show highlights.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Singers",
        description: "Vocal performances for melody sets, event openings, dedications and full-stage entertainment blocks.",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "EMcee",
        description: "Confident event hosting to connect performances, manage audience energy and keep the program moving smoothly.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80"
      }
    ],
    faq: [
      { question: "Can stage show services be booked together?", answer: "Yes. DJ, singers, instrumental fusion and EMcee can be combined into one coordinated stage package." },
      { question: "Can you perform outside Kottayam?", answer: "Yes. Brahma Entertainers performs across Kerala and South India based on event requirements." }
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
