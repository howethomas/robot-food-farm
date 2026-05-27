# Robot Food Farm

A personal publishing system exploring conversations as infrastructure.

This is v0.1: a single, static-exportable Next.js homepage that demonstrates the signature interaction of the site — a toggle between the human view and the machine (vCon) view of the same page.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build a static site

```bash
npm run build
```

The static site is emitted to `out/`. You can serve it with any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, plain nginx).

## What is here

- `app/page.tsx` — the homepage prose and section nav
- `app/layout.tsx` — global frame, fonts, paper background
- `app/globals.css` — typography, RFC rule, machine block styling
- `components/ViewAsVcon.tsx` — the human/machine toggle, with copy and download
- `lib/homepageVcon.ts` — the vCon-style representation of the page itself

## Next steps

- Section pages: `/parties`, `/dialog`, `/analysis`, `/attachments`
- Per-essay vCons with signatures
- MDX content pipeline
- Downloadable vCon archives
