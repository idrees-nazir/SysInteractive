# SysInteractive Website Design Spec

## Overview

SysInteractive is a development agency offering software development services across all programming languages. The website is a fully static marketing site built with Next.js 16, TypeScript, React 19, and Tailwind CSS v4. Deployed via SFTP to shared hosting.

## Architecture

- **Rendering:** Fully static export (`output: 'export'` in `next.config.ts`)
- **Deployment:** `npm run build` produces an `out/` directory uploaded via SFTP
- **No backend, no database, no auth**
- **Contact form:** Web3Forms (free tier) — POST to their API, access key in `.env.local`

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, services overview, featured portfolio, tech stack, testimonials |
| Services | `/services` | Grid of all service offerings with descriptions |
| Portfolio | `/portfolio` | Project showcase, filterable by category/language |
| About | `/about` | Agency story, team, mission |
| Contact | `/contact` | Web3Forms-powered form + direct email/social links |

### Shared Layout

- Sticky top navbar: logo (left), nav links (center), CTA button (right)
- Mobile: hamburger menu with slide-out or dropdown
- Footer: nav links, social icons, copyright

### Home Page Sections

1. **Hero** — Bold tagline, subtitle, primary CTA button. Terminal-style blinking cursor motif.
2. **Services Overview** — 3-4 icon cards summarizing top services, link to full Services page.
3. **Featured Portfolio** — 2-3 highlighted projects from portfolio data.
4. **Tech Stack** — Logo/icon grid of supported languages and technologies.
5. **Testimonials** — Client quotes with name/company attribution.

### Services Page

Grid of service cards. Each card has an icon, title, and description. Services include: Web Development, Mobile Development, Backend/API Development, DevOps & Cloud, UI/UX Design, Custom Software.

### Portfolio Page

Project cards with thumbnail, title, description, and tech tags. Category filter bar at top (All, Web, Mobile, Backend, etc.). Cards are display-only (no detail page) — full info is visible on the card itself.

### About Page

Agency story section, optional team member cards (photo, name, role), mission/values statement.

### Contact Page

Form fields: Name, Email, Subject, Message. Submit via Web3Forms API. Success/error feedback inline. Below the form: direct email address, social media links.

## Visual Design

### Color Palette

| Role | Value |
|------|-------|
| Background (primary) | `#0a0f1c` |
| Surface / Card | `#111827` |
| Accent (primary) | `#00b4d8` (electric cyan) |
| Accent (hover) | `#0096c7` |
| Text (primary) | `#f1f5f9` |
| Text (secondary) | `#94a3b8` |
| Border (subtle) | `rgba(255,255,255,0.1)` |

### Typography

- **Font:** Geist Sans (ships with Next.js) for body, Geist Mono for code/tech labels
- **Headings:** Bold, large (3xl-6xl), tight tracking
- **Body:** Regular weight, generous line height (1.6-1.75)

### Visual Effects

- Glass-morphism on card hover: `backdrop-blur` + slight transparency + border glow
- Fade-in-up animation on scroll for each section
- Gradient shimmer on CTA buttons
- Monospace styling for tech tags and terminal-style accents
- Subtle gradient overlays on hero background

### Responsive

- Mobile-first with Tailwind breakpoints
- Single-column on mobile, multi-column grid on md+
- Hamburger menu on mobile, full nav on desktop

## Data Architecture

### `src/data/services.ts`

```ts
type Service = {
  id: string;
  title: string;
  description: string;
  icon: string; // Tailwind-compatible icon name or SVG component reference
}
```

### `src/data/portfolio.ts`

```ts
type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // path in /public/images/portfolio/
  tags: string[]; // e.g. ["React", "Node.js", "PostgreSQL"]
  category: string; // "web" | "mobile" | "backend" | "devops"
  link?: string; // external URL if applicable
}
```

### Contact Form

- Web3Forms API: `https://api.web3forms.com/submit`
- Access key stored as `WEB3FORMS_ACCESS_KEY` in `.env.local`
- Client-side POST, no API route needed

## Component Structure

```
src/
├── app/
│   ├── layout.tsx          # Shared navbar + footer
│   ├── page.tsx            # Home
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   └── TechTag.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── FeaturedPortfolio.tsx
│   │   ├── TechStack.tsx
│   │   └── Testimonials.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   └── ServiceGrid.tsx
│   ├── portfolio/
│   │   ├── PortfolioCard.tsx
│   │   ├── PortfolioGrid.tsx
│   │   └── CategoryFilter.tsx
│   ├── about/
│   │   ├── Story.tsx
│   │   └── TeamMember.tsx
│   └── contact/
│       └── ContactForm.tsx
└── data/
    ├── services.ts
    └── portfolio.ts
```

## Deployment

1. `npm run build` (produces `out/` directory)
2. Upload `out/` contents via SFTP to the web root on `access-5017163353.webspace-host.com`
3. SFTP credentials in `.env.local` (gitignored)
