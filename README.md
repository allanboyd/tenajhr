# Janet Mathenge — People & Culture Website

A polished personal brand website for Janet Mathenge, built with **Next.js 14 (App Router)**, **TypeScript**, **CSS Modules**, and **Framer Motion**.

## Quick start (Docker)

```bash
docker compose up --build
```
Starts Postgres + the app, runs migrations, and seeds initial content. Then open:
- Public site: http://localhost:3000
- Admin CMS: http://localhost:3000/admin (default `admin` / `changeme` — override via env)

## Quick start (local dev)

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.local.example .env.local
```
Fill in `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `AUTH_SECRET`, and (optionally) Formspree.

### 3. Set up the database
```bash
docker compose up -d db        # or run your own Postgres
npx prisma migrate dev          # create tables
npx prisma db seed              # seed initial content
```

### 4. Run the dev server
```bash
npm run dev
```

## Admin CMS

`/admin` is a dashboard styled to match the public landing page (same maroon/cream palette, Cormorant display font). It manages:

- **Blog posts** — full CRUD with slug, excerpt, HTML body, accent color, icon, publish toggle
- **Services** — service offerings with bullet items
- **Philosophy** — short principle/body pairs
- **Impact** — outcome bullets

Public sections fetch from Postgres at request time, so changes appear immediately. If the database is unreachable, public pages fall back to the static seed data in `src/data/`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # CSS custom properties + reset
├── components/
│   ├── Nav.tsx / .module.css      # Fixed nav with smooth scroll + mobile menu
│   ├── Footer.tsx / .module.css   # 4-column footer
│   └── FadeIn.tsx                 # Framer Motion scroll reveal wrapper
├── sections/
│   ├── Hero.tsx / .module.css         # Full-bleed hero with photo
│   ├── About.tsx / .module.css        # Bio + experience
│   ├── Journey.tsx / .module.css      # Interactive career timeline
│   ├── Sections.tsx / .module.css     # Services, Impact, Philosophy
│   ├── Blog.tsx / .module.css         # Articles grid + modal reader
│   ├── Showcase.tsx / .module.css     # Interactive HR tools (4 demos)
│   └── Contact.tsx / .module.css      # Contact form with Formspree
└── data/
    ├── blog.ts       # Blog post content
    ├── journey.ts    # Career history data
    └── content.ts    # Services, philosophy, impact data
```

---

## Customization

### Colors
Edit the CSS custom properties in `src/app/globals.css`:
```css
:root {
  --maroon: #7B1D1D;
  --gold: #C9913D;
  /* ... */
}
```

### Content
All content lives in `src/data/`. Edit the TypeScript files to update copy, add blog posts, or change career entries — no need to touch component files.

### Adding a new blog post
Open `src/data/blog.ts` and add a new entry to the `BLOG_POSTS` array following the `BlogPost` interface.

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```
Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` as an environment variable in the Vercel dashboard.

### Other platforms
Run `npm run build` and deploy the `.next` folder. Requires a Node.js runtime.

---

## Tech Stack

| Tech | Usage |
|------|-------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| CSS Modules | Scoped component styles |
| Framer Motion | Scroll animations |
| Formspree | Contact form backend |
| next/image | Optimized image delivery |
| next/font | Cormorant Garamond + DM Sans |
