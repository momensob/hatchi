# Hatchi Specialty Coffee
Next.js 15 + TypeScript. Run: `npm install && npm run dev`. Deploy: push to GitHub, import in Vercel (no config needed).

## Where to edit
- `data/siteConfig.ts`: Instagram URL, Google Maps URL + embed URL, coordinates, phone, WhatsApp, email, form endpoint, site domain (`url`, also used by sitemap/robots/SEO).
- `data/instagram.ts`: paste reel/post URLs.
- `data/events.ts`: add an event; the next upcoming one shows automatically. Empty = "Something is brewing."
- `data/products.ts`: drinks and origins. Set `featured:true` on one origin for "Currently brewing". Verify origin details against your bags.
- Photos: `public/images/{hero,coffee,events,gallery}`; your 16 uploads are in gallery/01-16.jpg (hero = 16, Kintamani bag = 01). Captions in `data/gallery.ts`.
- Contact form: set `formEndpoint` (e.g. Formspree) for real submissions; without it, it opens the visitor's email app. Honeypot field included.
