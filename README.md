# Brahma Dance Studio Next.js Rebuild

A cinematic Next.js App Router site for Brahma Dance Studio, built from `brahma-dance-studio-nextjs-prompts.md`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add production email credentials when the quote form is connected to Resend or SMTP.
5. Deploy.

## Editable content

Most site content lives in:

- `data/services.ts`
- `data/portfolio.ts`
- `data/stats.ts`
- `data/testimonials.ts`
- `data/events.ts`
- `data/blog.ts`

## Placeholder media checklist

Replace the current remote placeholder images with real Brahma assets:

- Hero performance video loop and poster
- Wedding welcome dance photos
- Margam Kali, Oppana, Sufi, Arabic and Bollywood performance photos
- Academy and rehearsal photos
- Master Jacob portrait
- Gallery images and optional YouTube embeds
- Open Graph preview image

## Contact form note

`app/api/quote/route.ts` validates submissions and logs the payload. Add Resend or SMTP credentials there when production email sending is ready.
"# work-bs" 
