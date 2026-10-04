export const posts = [
  {
    slug: "wedding-welcome-dance-kerala",
    title: "How To Plan A Wedding Welcome Dance In Kerala",
    excerpt: "A calm guide to choosing styles, rehearsals and stage flow for a memorable family entrance.",
    date: "2026-10-04"
  },
  {
    slug: "margam-kali-stage-performance",
    title: "Why Margam Kali Still Feels Powerful On Stage",
    excerpt: "Tradition, formation and rhythm come together beautifully in a modern event setting.",
    date: "2026-10-04"
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
