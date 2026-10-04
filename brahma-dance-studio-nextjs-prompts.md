# Brahma Dance Studio: Next.js Rebuild Prompts

Reference site: https://brahmadancestudio.com/

Paste these prompts **one at a time, in order** into Claude Code, Cursor, or v0. Test each step before moving to the next.

---

## Before You Start

- The current site images are small (310×310) and old. For an award-style result, get **new high-res photos** and **short performance video clips** (MP4/WebM). Motion and big imagery carry most of the "wow."
- The existing site has typos ("Experties", "Braham") and placeholder text ("Morlem ipsum", "Coming Soon"). These prompts fix them.
- Existing contact details used in the prompts:
  - Phone: +91 96330 18835 / +91 96563 18835
  - Email: dancebrahma@gmail.com
  - Address: Brahma Dance Studio, Changanasserry, Kottayam
  - Hours: All days 9:00 AM – 8:00 PM, Sunday open
  - Social: Instagram `brahmadancestudio`, Facebook `Brahmalovers`, YouTube, Twitter `dancebrahma`

---

## Prompt 0: Project Setup and Design System

```
Create a Next.js 14+ (App Router, TypeScript) project for "Brahma Dance Studio",
a professional dance company in Kottayam, Kerala (est. 2010) specialising in
wedding welcome dances, Margam Kali, Oppana, Sufi, Arabic, Bollywood, stage
shows, corporate events, choreography and dance academy classes.

Stack: Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, Lenis (smooth scroll),
Three.js via @react-three/fiber + drei (only where specified), next/image,
next/font, Zod + React Hook Form.

Design direction: "Cinematic stage meets Kerala heritage".
- Palette: deep black (#0A0A0A) background, warm gold (#D4A853), temple-lamp
  saffron (#E8782A), kasavu cream (#F5EBD7), accent crimson (#9E1B32).
- Typography: a high-contrast serif display font (e.g. Playfair Display or
  Fraunces) for headings at very large sizes, plus a clean sans (Inter or
  DM Sans) for body. Load via next/font.
- Subtle film-grain overlay, gold hairline borders, generous whitespace.
- Set up CSS variables, a Tailwind theme, a reusable <Section>, <Container>,
  <Button> (magnetic variant), and a motion config with shared easing
  (cubic-bezier(0.76, 0, 0.24, 1)).
- Respect prefers-reduced-motion everywhere.

Set up folder structure: /app, /components/ui, /components/sections,
/lib, /data (typed content files), /public/media.
Initialise Lenis smooth scroll in a client provider synced with GSAP ticker.
```

---

## Prompt 1: Preloader, Custom Cursor, and Navigation

```
Build the global shell:

1. PRELOADER: full-screen black screen, the "BRAHMA" wordmark letters stagger
   in with a gold mask-reveal, a counter 0→100, then the screen splits into two
   curtains that slide apart like a stage curtain opening. Play once per session
   (sessionStorage).

2. CUSTOM CURSOR: small gold dot + trailing ring with spring physics. Ring grows
   and shows "VIEW" / "PLAY" / "DRAG" text when hovering gallery items, videos,
   or sliders. Hide on touch devices.

3. NAVBAR: transparent, hides on scroll down and reappears on scroll up, gets a
   blurred glass background after scrolling. Links: Home, About, Services
   (mega-menu), Gallery, Blog, Contact, plus a "Get Quick Quote" magnetic button.
   Services mega-menu: Wedding Dance (Welcome Dance, Sufi, Margamkali, Oppana,
   Arabic Styles), Stage Shows (Bollywood), Training Classes/Academy,
   Corporate Events, Entertainment/Manpower, Choreo Works.
   Mobile: full-screen overlay menu with large serif links that stagger in and
   a rotating "BRAHMA" text circle.

4. Top utility bar: +91 9633018835, dancebrahma@gmail.com, social icons
   (Instagram, Facebook, YouTube, Twitter).

5. Floating WhatsApp button (+91 9656318835, prefilled message "I would like to
   know about your services.") with a gentle pulse.

6. PAGE TRANSITIONS between routes using a gold wipe.
```

---

## Prompt 2: Hero Section

```
Build an award-level hero section.

- Full-viewport background video loop (placeholder poster + <video> muted
  autoplay playsInline) with dark gradient overlay.
- Giant headline split into words/letters, animated in with GSAP SplitText-style
  stagger: "Every Love Story Is Beautiful" on line 1, and
  "But Yours Should Be *Unique*" on line 2 where "Unique" is italic gold with
  an animated underline brush stroke.
- Sub copy: "Professional Dance Team In South India".
- Rotating word ticker beside the headline cycling through:
  Welcome Dance · Margam Kali · Oppana · Sufi · Bollywood · Stage Shows.
- Two CTAs: "Book Your Wedding Dance" (magnetic) and "Watch Showreel"
  (opens a fullscreen video modal).
- Parallax: the background moves slower than the foreground on mouse move and
  on scroll. Add a floating gold dust particle layer (canvas or R3F points).
- Bottom: scroll indicator and a "Est. 2010 · Kottayam, Kerala" label.
- On scroll, the hero scales down into a rounded card as the next section
  slides over it.
```

---

## Prompt 3: About Section (Storytelling)

```
Build an About section using scroll-driven storytelling (GSAP ScrollTrigger).

Content: "BRAHMA is one of the leading dance companies, formed in 2010 at
Kottayam, Kerala. The creator, director and mastermind Master Jacob's ultimate
passion for dance is how BRAHMA became a leading dance studio in South India."

- Pinned section where large text reveals word by word (opacity 0.15 → 1) as
  the user scrolls.
- Alongside it, 3 overlapping photos with different parallax speeds and clip-path
  reveals.
- Animated stats counters: "15+ Years", "1000+ Performances", "50+ Dancers",
  "5 Dance Forms" (use placeholder numbers I can edit in /data/stats.ts).
- A circular rotating text badge "BRAHMA DANCE STUDIO • SINCE 2010 •" that
  spins faster on scroll velocity.
- "Read More" link to /about with an arrow that slides on hover.
```

---

## Prompt 4: Services (Signature Innovative Element)

```
Build the "Our Expertise" services section as a horizontal scroll gallery
pinned with ScrollTrigger.

Cards (each links to its own page):
1. Wedding Dance: "Marriages are now filled with fun and joy. A new life should
   begin with laughter."
2. Training Classes / Academy: Hip-Hop, Jazz, Funk, Lyrical, Contemporary.
3. Stage Shows: performances across South India.
4. Choreo Works: "Let's Pair Up", choreography for events and marketing.
5. Corporate Shows: dance acts for corporate and private events.

Behaviour:
- Vertical scroll converts to horizontal movement through tall cards (portrait,
  rounded, 4:5).
- Each card: image with a hover reveal that swaps to a looping video preview,
  big outlined number (01–05), title in serif, a "Read More" arrow button.
- Cards tilt in 3D toward the cursor (vanilla-tilt-style, implemented with
  Framer Motion) and have a spotlight gradient following the mouse.
- Active card scales up, others dim slightly.
- A progress bar with gold fill at the bottom.
- Mobile fallback: swipeable carousel with snap scrolling.
```

---

## Prompt 5: Portfolio / Gallery with Filters

```
Build an interactive portfolio gallery for /gallery and a preview on the home page.

- Filter tabs: All, Wedding Dance, Stage Shows, Training Class, Margam Kali,
  Sufi, Oppana, Arabic, Fire Dance. Use Framer Motion layout animations so items
  reflow smoothly when filtering.
- Masonry grid with varying aspect ratios, items fade/scale in on scroll
  with stagger.
- Hover: image zooms slightly, a title slides up (e.g. "Wedding Welcome Dance"),
  cursor changes to "VIEW".
- Click opens a full-screen lightbox with shared-element transition (image
  expands from its grid position), keyboard arrows, swipe, thumbnails and an
  optional YouTube embed for video items.
- Data from /data/portfolio.ts typed as {id, title, category, src, videoUrl?}.
  Seed with ~24 items using these titles: Stage Shows, Margam Kali, Training
  Session, Dandya, Welcome Dance, Wedding Dance, Mexican Dance, Light Dance,
  Sufi Dance, Fire Dance, Melody Performance, Arabic Dance, Oppana, Pair Dance,
  Kerala Wedding Dance.
- Use next/image with blur placeholders and responsive sizes.
```

---

## Prompt 6: Interactive 3D / Creative "Wow" Elements

```
Add three innovative signature elements:

1. DANCE STYLE EXPLORER: a section where a list of dance styles (Margam Kali,
   Oppana, Sufi, Bollywood, Arabic, Hip-Hop) sits on the left in huge type.
   Hovering/selecting one changes the full-bleed background media with a
   WebGL ripple/distortion transition (react-three-fiber shader on a plane
   with displacement) and shows a short description + "Book this style" CTA.

2. IMAGE TRAIL: in the CTA section, moving the mouse leaves a trail of dance
   photos that fade out behind the cursor.

3. MARQUEE: infinite scrolling text band "WEDDINGS • STAGE SHOWS • MARGAM KALI •
   SUFI • OPPANA • BOLLYWOOD •" that reverses direction and speeds up with scroll
   velocity, with outlined and filled text alternating.

Keep all WebGL lazy loaded (next/dynamic, ssr:false) with a lightweight fallback.
```

---

## Prompt 7: Testimonials, Team, and Events

```
Build:

TESTIMONIALS: draggable carousel with large quote marks, avatar, name, and
star rating. Use these:
- Prasanth Alexander: "Fantastic Team and Awesome Dancers and Hardworking group..."
- Veena Nair: "Absolutely amazing, the instructors are awesome and very positive
  and encouraging, the atmosphere is just perfect..."
- Martin Prakakt: "Phenomenal dancers! Good dance studio having versatile
  dancers. Hip hop, contemporary, Bollywood..."
Auto-advance with a progress ring, pause on hover, drag with momentum.

OUR MASTERS: cards for Mr. Jacob G Mathew (Director / Choreographer, CEO &
Founder, works on TV dance shows and films) and "Chief Choreographer (coming
soon)". Photo with grayscale → colour on hover, social links slide in,
name reveals with a mask animation.

UPCOMING EVENTS: a clean event list component that reads from /data/events.ts.
Empty state should be elegant: "No shows scheduled right now. Check back soon or
book us for your event" with a CTA (don't show lorem ipsum).
```

---

## Prompt 8: Contact and Quote Form

```
Build the contact section and /contact page:

- Multi-step "Get Quick Quote" form with animated progress:
  Step 1: Event type (Wedding / Stage Show / Corporate / Academy / Choreography)
  Step 2: Date, location, number of dancers, preferred styles
  Step 3: Name, phone, email, message
  Step 4: Success animation (confetti in gold).
- Validate with Zod + React Hook Form. Submit to a Next.js route handler that
  sends email (Resend or Nodemailer) to dancebrahma@gmail.com, and offers a
  "Continue on WhatsApp" button with the prefilled details.
- Info panel: Call +91 96330 18835 / +91 96563 18835, Email, Hours
  "All days 9:00 AM – 8:00 PM, Sunday open", Address "Brahma Dance Studio,
  Changanasserry, Kottayam".
- Embedded Google Map styled dark/gold, with a custom marker.
- Footer with giant "LET'S DANCE" text that reveals on scroll, nav links,
  services links, socials, and the tags "dancers in kerala" and
  "wedding dancers kerala".
```

---

## Prompt 9: Inner Pages

```
Create the remaining routes using shared layout components and the same
animation language:
/about, /services, /expertise/[slug] (wedding-events, stage-shows,
corporate-events, choreo-works, training-academy), /gallery, /blog,
/blog/[slug] (MDX), /contact.

Each service page: full-bleed hero with title, long description, sub-style
cards (e.g. Welcome Dance, Sufi, Margamkali, Oppana, Arabic for weddings),
a gallery strip, FAQ accordion, testimonial, and a sticky "Get Quote" CTA.
Content comes from /data/services.ts so I can edit it without touching JSX.
```

---

## Prompt 10: SEO, Performance, and Accessibility

```
Polish for production:
- Metadata API per page. Title: "Professional Wedding Dancers In Kerala | Brahma
  Dance Studio". Description focused on wedding welcome dance, Margam Kali,
  Bollywood, corporate events, choreography and stage shows. OG/Twitter images.
- JSON-LD LocalBusiness + PerformingGroup schema with address, phone, hours,
  social profiles.
- sitemap.ts, robots.ts, canonical URLs.
- Local SEO keywords: wedding dancers Kerala, dance team Kottayam, Margam Kali
  team Kerala, welcome dance for wedding Kerala.
- Optimise: next/image everywhere, video preload="none" below the fold,
  dynamic imports for GSAP/Three, font display swap, target Lighthouse 90+ on
  mobile.
- Accessibility: keyboard focus styles, aria labels, reduced-motion fallbacks,
  AA contrast, alt text.
- Add 301 redirects from old WordPress URLs (/expertise/wedding-events, /about,
  /gallery, /blog-small, /contact-2, /portfolio/*) so existing Google rankings
  are preserved.
```

---

## Prompt 11: Final Review Pass

```
Review the whole project: fix layout shifts, check responsiveness at 360, 768,
1280 and 1920px, remove console errors, make sure animations don't fire twice
in React strict mode, clean up ScrollTrigger instances on unmount, and give me
a README with run/deploy (Vercel) instructions plus a checklist of the
placeholder images and videos I need to replace.
```

---

## Tips for Better Results

- Run **one prompt at a time** and test it before moving on. Long all-in-one prompts produce messy code.
- If something looks off, describe the exact problem (e.g. "the horizontal scroll jitters on iOS") instead of re-running the whole prompt.
- Keep the old URLs mapped with redirects (Prompt 10), or you'll lose the SEO ranking the current site has.
- For inspiration, browse **Awwwards** and **Godly** for "dance," "theatre," or "wedding" sites, and tell the AI which specific effects you like.
- Keep all editable content (services, portfolio, events, stats) in `/data` files so non-developers can update the site easily.
