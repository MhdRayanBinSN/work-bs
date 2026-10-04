import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/blog";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-36">
      <Container className="max-w-4xl py-20">
        <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">{new Date(post.date).toLocaleDateString("en-IN")}</p>
        <h1 className="mt-5 font-display text-6xl leading-none text-kasavu sm:text-8xl">{post.title}</h1>
        <p className="mt-8 text-xl leading-9 text-kasavu/75">{post.excerpt}</p>
        <div className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:text-kasavu prose-p:text-kasavu/75">
          <p>
            Great event choreography starts with clarity: the venue size, the people performing, the emotion of the occasion and the time available for rehearsal. Once those are clear, a dance can feel cinematic without becoming stressful.
          </p>
          <p>
            Brahma Entertainers builds each performance around those details, combining tradition, crowd energy and practical stage direction so the final moment feels polished and personal.
          </p>
        </div>
        <Button className="mt-10" href="/contact">Plan Your Performance</Button>
      </Container>
    </article>
  );
}
