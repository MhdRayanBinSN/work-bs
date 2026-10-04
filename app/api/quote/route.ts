import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  eventType: z.string(),
  date: z.string(),
  location: z.string(),
  dancers: z.coerce.number(),
  styles: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string()
});

export async function POST(request: Request) {
  const payload = schema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid quote request" }, { status: 400 });
  }

  // Add RESEND_API_KEY or SMTP credentials here when production email is ready.
  console.log("Quote request for dancebrahma@gmail.com", payload.data);

  return NextResponse.json({ ok: true });
}
