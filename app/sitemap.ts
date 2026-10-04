import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brahmadancestudio.com";
  const routes = ["", "/about", "/services", "/gallery", "/blog", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  return [
    ...routes,
    ...services.map((service) => ({ url: `${base}/expertise/${service.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) }))
  ];
}
