"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, MapPin, Phone } from "lucide-react";
import { studio, whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const schema = z.object({
  eventType: z.string().min(1, "Choose an event type"),
  date: z.string().min(1, "Pick a date"),
  location: z.string().min(2, "Add the event location"),
  dancers: z.coerce.number().min(1, "Add at least one dancer"),
  styles: z.string().min(2, "Tell us a preferred style"),
  name: z.string().min(2, "Add your name"),
  phone: z.string().min(8, "Add a valid phone number"),
  email: z.string().email("Add a valid email"),
  message: z.string().min(8, "Add a short message")
});

type QuoteInput = z.input<typeof schema>;
type QuoteForm = z.output<typeof schema>;

const eventTypes = ["Wedding", "Stage Show", "Corporate", "Academy", "Choreography"];

export function ContactQuote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<QuoteInput, unknown, QuoteForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      eventType: "Wedding",
      dancers: 6,
      styles: "",
      name: "",
      phone: "",
      email: "",
      location: "",
      date: "",
      message: ""
    }
  });

  const makeWhatsAppMessage = () => {
    const details = form.getValues();
    return `Hi Brahma Dance Studio, I would like a quote for ${details.eventType} on ${details.date} at ${details.location}. Preferred styles: ${details.styles}. Name: ${details.name}, phone: ${details.phone}.`;
  };

  async function submit(values: QuoteForm) {
    setError("");
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setError("Something went wrong. Please try WhatsApp or call us directly.");
      return;
    }

    setSubmitted(true);
    setStep(4);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Get a quick quote for your event." className="bg-night">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form className="border border-gold/20 bg-white/85 p-6 shadow-glow sm:p-8" onSubmit={form.handleSubmit(submit)}>
          <div className="mb-8 h-1 bg-kasavu/10">
            <div className="h-full bg-gold transition-all" style={{ width: `${(step / 4) * 100}%` }} />
          </div>

          {step === 1 ? (
            <div>
              <h3 className="font-display text-4xl">Event type</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {eventTypes.map((type) => (
                  <label className="cursor-pointer border border-gold/20 p-4 has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-night" key={type}>
                    <input className="sr-only" type="radio" value={type} {...form.register("eventType")} />
                    {type}
                  </label>
                ))}
              </div>
              <Button className="mt-8" type="button" onClick={() => setStep(2)}>Next</Button>
            </div>
          ) : null}

          {step === 2 ? (
            <div>
              <h3 className="font-display text-4xl">Event details</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Input label="Date" type="date" {...form.register("date")} />
                <Input label="Location" {...form.register("location")} />
                <Input label="Number of dancers" type="number" {...form.register("dancers")} />
                <Input label="Preferred styles" {...form.register("styles")} />
              </div>
              <div className="mt-8 flex gap-3">
                <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                <Button type="button" onClick={() => setStep(3)}>Next</Button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <h3 className="font-display text-4xl">Your details</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Input label="Name" {...form.register("name")} />
                <Input label="Phone" {...form.register("phone")} />
                <Input label="Email" type="email" {...form.register("email")} />
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-gold">Message</span>
                  <textarea className="min-h-32 w-full border border-gold/20 bg-white p-4 text-kasavu outline-none focus:border-gold" {...form.register("message")} />
                </label>
              </div>
              <FieldErrors errors={form.formState.errors} />
              {error ? <p className="mt-4 text-sm text-saffron">{error}</p> : null}
              <div className="mt-8 flex gap-3">
                <Button type="button" variant="ghost" onClick={() => setStep(2)}>Back</Button>
                <Button type="submit">Submit Quote</Button>
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold text-night">
                <Check className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-display text-5xl text-kasavu">Request received</h3>
              <p className="mx-auto mt-4 max-w-xl text-kasavu/70">We have saved your quote request. Continue on WhatsApp for the fastest response.</p>
              <Button className="mt-8" href={whatsappUrl(makeWhatsAppMessage())}>Continue on WhatsApp</Button>
              {submitted ? <p className="mt-4 text-xs uppercase tracking-[0.22em] text-gold">Red confetti moment unlocked</p> : null}
            </div>
          ) : null}
        </form>

        <aside className="border border-gold/20 bg-[linear-gradient(135deg,#B91C1C,#E11D48,#FB7185)] p-7 text-white shadow-glow">
          <h3 className="font-display text-4xl">Studio info</h3>
          <div className="mt-6 grid gap-5 text-sm">
            <p className="flex gap-3"><Phone className="h-5 w-5" />{studio.phonePrimary} / {studio.phoneSecondary}</p>
            <p>{studio.email}</p>
            <p>{studio.hours}</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5" />{studio.address}</p>
          </div>
          <div className="mt-8 aspect-[4/3] overflow-hidden border border-white/30 bg-white text-kasavu">
            <iframe
              className="h-full w-full grayscale invert"
              title="Brahma Dance Studio map"
              loading="lazy"
              src="https://www.google.com/maps?q=Changanasserry%20Kottayam%20Kerala&output=embed"
            />
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-gold">{label}</span>
      <input className="h-12 w-full border border-gold/20 bg-white px-4 text-kasavu outline-none focus:border-gold" {...props} />
    </label>
  );
}

function FieldErrors({ errors }: { errors: Record<string, { message?: string } | undefined> }) {
  const messages = Object.values(errors).map((error) => error?.message).filter(Boolean);
  if (!messages.length) return null;
  return (
    <ul className="mt-5 grid gap-1 text-sm text-saffron">
      {messages.map((message) => <li key={message}>{message}</li>)}
    </ul>
  );
}
