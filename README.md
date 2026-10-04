# Shreyas Grand — Hotel Website (React + Vite + Tailwind)
## Run
`npm install` → `npm run dev` · Production: `npm run build` → `npm run preview`
## Deploy to Vercel
Push to GitHub → Import in Vercel (Framework: Vite, build `npm run build`, output `dist`). `vercel.json` handles SPA routing. Optional env vars: see `.env.example` (`VITE_FORM_ENDPOINT` = Formspree/other POST endpoint; if empty, enquiries open WhatsApp).
## Edit content
All content is in `src/data/`: `hotel.js` (phone, email, address, links, timings, banquet, nearby, rating), `rooms.js` (prices, sizes, beds, amenities), `menu.js` (PLACEHOLDER menu), `gallery.js`.
Executive King/Twin bed types are flagged "please verify" — the old site was inconsistent.
## Images
Add real photos (WebP) to `public/images/` using the names in the data files (hotel-exterior, executive-king, executive-twin, suite, royal-suite, restaurant, banquet, lobby, food-1, food-placeholder, plus `-2` variants). Missing images show a branded fallback. Update `og:image` in `index.html` if needed.
## Before launch
Verify canonical domain in `index.html`/`sitemap.xml`, add social URLs in `hotel.js`, replace menu placeholders.
