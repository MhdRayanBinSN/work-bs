import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/blog";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Blog",
  description: "Planning notes and ideas from Brahma Dance Studio."
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="Blog" title="Ideas for weddings, stages and dance training.">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link className="group border border-gold/20 bg-white/5 p-7" href={`/blog/${post.slug}`} key={post.slug}>
              <p className="text-xs uppercase tracking-[0.24em] text-gold">{new Date(post.date).toLocaleDateString("en-IN")}</p>
              <h2 className="mt-5 font-display text-4xl text-kasavu">{post.title}</h2>
              <p className="mt-4 leading-7 text-kasavu/65">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-gold">
                Read <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
