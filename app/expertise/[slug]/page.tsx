import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { ContactQuote } from "@/components/sections/contact-quote";
import { ServiceSubsectionGallery } from "@/components/sections/service-subsection-gallery";
import { services, getService } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.longDescription
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const detailItems = service.subSections ?? service.styles.map((style) => ({
    title: style,
    description: "A polished Brahma Entertainers arrangement that can be adapted to your music, venue and performer count.",
    image: service.image
  }));

  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden pt-36">
        <Image src={service.image} alt={service.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,241,242,0.78),rgba(255,255,255,0.42))]" />
        <Container className="relative z-10 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">{service.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-6xl leading-none text-kasavu sm:text-8xl">{service.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-kasavu/75">{service.longDescription}</p>
          <Button className="mt-8" href="/contact">Get Quote</Button>
        </Container>
      </section>

      <Section eyebrow="Service Details" title={`${service.title} options designed around your stage, family and audience.`}>
        <ServiceSubsectionGallery items={detailItems} serviceImage={service.image} serviceTitle={service.title} />
      </Section>

      <GalleryGrid preview />

      <Section eyebrow="FAQ" title="Common questions">
        <div className="grid gap-4">
          {service.faq.map((item) => (
            <details className="group border border-gold/20 bg-white/5 p-6" key={item.question}>
              <summary className="cursor-pointer font-display text-2xl text-kasavu">{item.question}</summary>
              <p className="mt-4 text-kasavu/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <div className="sticky bottom-0 z-30 border-y border-gold/20 bg-white/90 py-4 backdrop-blur">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl text-kasavu">Ready to plan {service.title}?</p>
          <Button href="/contact">Get Quote</Button>
        </Container>
      </div>
      <ContactQuote />
    </>
  );
}
