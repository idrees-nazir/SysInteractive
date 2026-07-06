# SysInteractive Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully static dark-tech agency website for SysInteractive with 5 pages: Home, Services, Portfolio, About, Contact.

**Architecture:** Next.js 16 App Router with static export (`output: 'export'`). All content lives in TypeScript data files. Contact form uses Web3Forms (client-side POST). Deployed via SFTP as static HTML/CSS/JS.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Geist fonts, Web3Forms

## Global Constraints

- Static export only — no API routes, no `use server`, no dynamic server features
- Package manager: npm (no yarn/pnpm)
- Path alias: `@/*` maps to `./src/*`
- Fonts: Geist Sans (body) and Geist Mono (code/tags) — already configured in layout.tsx
- All colors use the spec palette (background `#0a0f1c`, surface `#111827`, accent `#00b4d8`, etc.)
- Mobile-first responsive design using Tailwind breakpoints
- Verify each task visually: `npm run dev` and check in browser at `http://localhost:3000`

---

### Task 1: Foundation — Config, Globals, and Data Files

**Files:**
- Modify: `next.config.ts`
- Modify: `src/app/globals.css`
- Create: `src/data/services.ts`
- Create: `src/data/portfolio.ts`

**Produces:**
- `next.config.ts` with `output: 'export'` and `images: { unoptimized: true }`
- `Service` type and `services` array exported from `src/data/services.ts`
- `Project` type and `projects` array exported from `src/data/portfolio.ts`
- Global CSS variables and base styles matching the dark-tech palette

- [ ] **Step 1: Configure static export**

Replace `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 2: Replace globals.css with dark-tech palette**

Replace `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #0a0f1c;
  --foreground: #f1f5f9;
  --surface: #111827;
  --accent: #00b4d8;
  --accent-hover: #0096c7;
  --text-secondary: #94a3b8;
  --border-subtle: rgba(255, 255, 255, 0.1);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-text-secondary: var(--text-secondary);
  --color-border-subtle: var(--border-subtle);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

- [ ] **Step 3: Create services data**

Create `src/data/services.ts`:

```ts
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, Next.js, Vue, Angular, and more. From landing pages to complex platforms.",
    icon: "globe",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, Swift, and Kotlin.",
    icon: "smartphone",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Scalable server-side solutions with Node.js, Python, Go, Rust, Java, and .NET. REST and GraphQL APIs.",
    icon: "server",
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, containerization, cloud infrastructure on AWS, Azure, and GCP. Kubernetes orchestration.",
    icon: "cloud",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design with wireframing, prototyping, and usability testing. Figma and design systems.",
    icon: "palette",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Tailored software solutions for unique business needs. Desktop apps, automation tools, and system integrations.",
    icon: "code",
  },
];
```

- [ ] **Step 4: Create portfolio data**

Create `src/data/portfolio.ts`:

```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: "web" | "mobile" | "backend" | "devops";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    thumbnail: "/images/portfolio/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    category: "web",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app with workout tracking, progress analytics, and social features.",
    thumbnail: "/images/portfolio/fitness.svg",
    tags: ["React Native", "Node.js", "MongoDB"],
    category: "mobile",
  },
  {
    id: "logistics-api",
    title: "Logistics API",
    description:
      "High-throughput REST API handling 10K+ requests/sec for a logistics company's fleet management.",
    thumbnail: "/images/portfolio/logistics.svg",
    tags: ["Go", "gRPC", "Redis", "Docker"],
    category: "backend",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets, data visualization, and role-based access.",
    thumbnail: "/images/portfolio/dashboard.svg",
    tags: ["React", "D3.js", "Python", "AWS"],
    category: "web",
  },
  {
    id: "banking-app",
    title: "Banking Mobile App",
    description:
      "Secure mobile banking application with biometric auth, transaction history, and bill payments.",
    thumbnail: "/images/portfolio/banking.svg",
    tags: ["Flutter", "Dart", "Firebase", "Kotlin"],
    category: "mobile",
  },
  {
    id: "ci-cd-pipeline",
    title: "Enterprise CI/CD Pipeline",
    description:
      "Automated build, test, and deployment pipeline reducing release cycles from weeks to hours.",
    thumbnail: "/images/portfolio/cicd.svg",
    tags: ["Kubernetes", "Terraform", "GitHub Actions", "AWS"],
    category: "devops",
  },
];
```

- [ ] **Step 5: Create placeholder portfolio thumbnails**

Create SVG placeholder images for portfolio items. Create directory `public/images/portfolio/` and add simple SVG placeholders for each project:

```bash
mkdir -p public/images/portfolio
```

For each portfolio item, create a minimal SVG placeholder (e.g., `public/images/portfolio/ecommerce.svg`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="#111827"/>
  <text x="300" y="200" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="18">E-Commerce Platform</text>
</svg>
```

Create one SVG per project (`ecommerce.svg`, `fitness.svg`, `logistics.svg`, `dashboard.svg`, `banking.svg`, `cicd.svg`) with the project title in each.

- [ ] **Step 6: Verify foundation**

Run: `npm run dev`

Open `http://localhost:3000`. Confirm:
- Page loads with dark background (`#0a0f1c`)
- No build errors in terminal

Run: `npm run build`

Confirm: build succeeds and `out/` directory is created.

- [ ] **Step 7: Commit**

```bash
git add next.config.ts src/app/globals.css src/data/ public/images/
git commit -m "feat: add foundation — static export config, dark theme globals, services and portfolio data"
```

---

### Task 2: UI Primitives — Button, Card, SectionHeading, TechTag

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/TechTag.tsx`

**Produces:**
- `Button` component: `({ children, href, variant?, className? }) => JSX.Element` — variants: `"primary"` (cyan gradient shimmer) and `"outline"` (border only)
- `Card` component: `({ children, className? }) => JSX.Element` — surface-colored with glass-morphism hover
- `SectionHeading` component: `({ title, subtitle? }) => JSX.Element` — large bold heading with optional subtitle
- `TechTag` component: `({ label }) => JSX.Element` — monospace pill-style tag

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```tsx
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-hover shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]",
    outline:
      "border border-border-subtle text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Create Card component**

Create `src/components/ui/Card.tsx`:

```tsx
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Create SectionHeading component**

Create `src/components/ui/SectionHeading.tsx`:

```tsx
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Create TechTag component**

Create `src/components/ui/TechTag.tsx`:

```tsx
type TechTagProps = {
  label: string;
};

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
      {label}
    </span>
  );
}
```

- [ ] **Step 5: Verify primitives**

Temporarily import and render all 4 components in `src/app/page.tsx` to verify they render correctly:

```tsx
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";

export default function Home() {
  return (
    <div className="min-h-screen p-12">
      <SectionHeading title="UI Primitives Test" subtitle="Verifying components" />
      <div className="flex gap-4 mb-8">
        <Button href="#">Primary Button</Button>
        <Button href="#" variant="outline">Outline Button</Button>
      </div>
      <Card>
        <p>Card content with glass-morphism hover</p>
        <div className="mt-4 flex gap-2">
          <TechTag label="React" />
          <TechTag label="TypeScript" />
          <TechTag label="Next.js" />
        </div>
      </Card>
    </div>
  );
}
```

Run: `npm run dev`

Confirm: all components render, cyan accent color works, card hover shows glow, button has shadow glow.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add UI primitives — Button, Card, SectionHeading, TechTag"
```

---

### Task 3: Layout — Navbar, MobileMenu, Footer, Root Layout

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/MobileMenu.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Consumes:** `Button` from `@/components/ui/Button`

**Produces:**
- `Navbar` component: sticky top bar with logo, nav links, CTA, mobile hamburger
- `MobileMenu` component: slide-out menu toggled by hamburger button
- `Footer` component: nav links, social icons, copyright
- Updated root `layout.tsx` wrapping children with Navbar + Footer

- [ ] **Step 1: Create Navbar**

Create `src/components/layout/Navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-xl font-bold text-accent">
          &gt;_ SysInteractive
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/contact">Get in Touch</Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}
```

- [ ] **Step 2: Create MobileMenu**

Create `src/components/layout/MobileMenu.tsx`:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="border-t border-border-subtle bg-background md:hidden">
      <div className="flex flex-col gap-2 px-4 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2">
          <Button href="/contact" className="w-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create Footer**

Create `src/components/layout/Footer.tsx`:

```tsx
import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { href: "https://twitter.com", label: "X / Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="font-mono text-lg font-bold text-accent">
            &gt;_ SysInteractive
          </div>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-accent"
                aria-label={social.label}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} SysInteractive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Update root layout**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SysInteractive — Development Agency",
  description:
    "Full-service software development agency. Web, mobile, backend, DevOps — all languages, all platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify layout**

Run: `npm run dev`

Confirm:
- Sticky navbar with logo, nav links (hidden on mobile), CTA button
- Hamburger icon appears on mobile viewport widths
- Mobile menu opens/closes
- Footer with links, social icons, copyright at page bottom
- Dark background throughout

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add shared layout — Navbar with mobile menu, Footer"
```

---

### Task 4: Home Page — Hero, ServicesOverview, FeaturedPortfolio, TechStack, Testimonials

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/ServicesOverview.tsx`
- Create: `src/components/home/FeaturedPortfolio.tsx`
- Create: `src/components/home/TechStack.tsx`
- Create: `src/components/home/Testimonials.tsx`
- Modify: `src/app/page.tsx`

**Consumes:**
- `Button` from `@/components/ui/Button`
- `Card` from `@/components/ui/Card`
- `SectionHeading` from `@/components/ui/SectionHeading`
- `TechTag` from `@/components/ui/TechTag`
- `services` from `@/data/services`
- `projects` from `@/data/portfolio`

- [ ] **Step 1: Create Hero**

Create `src/components/home/Hero.tsx`:

```tsx
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm text-accent">
          &gt;_ Full-Service Development Agency
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          We Build Software
          <br />
          <span className="text-accent">
            That Scales
            <span className="animate-[blink_1s_steps(1)_infinite]">_</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          From web and mobile to backend and cloud — we deliver end-to-end
          development solutions in every language, on every platform.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Start Your Project</Button>
          <Button href="/portfolio" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create ServicesOverview**

Create `src/components/home/ServicesOverview.tsx`:

```tsx
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const iconMap: Record<string, string> = {
  globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  smartphone: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  server: "M21.75 17.25v-.228a4.328 4.328 0 0 0-.12-.7 4.5 4.5 0 0 0-3.025-3.025 4.328 4.328 0 0 0-.7-.12h-.228M21.75 17.25V21m0-3.75H18M3.75 17.25h.228c.237 0 .473.024.7.12a4.5 4.5 0 0 1 3.025 3.025c.096.227.12.463.12.7v.228M3.75 17.25V21m0-3.75H6m15.75-6.75v-.228a4.328 4.328 0 0 0-.12-.7A4.5 4.5 0 0 0 18.605 6.5a4.328 4.328 0 0 0-.7-.12H17.25m4.5 4.12V6.75m0 3.75H18m-14.25 0h.228c.237 0 .473-.024.7-.12A4.5 4.5 0 0 0 7.703 7.38c.096-.227.12-.463.12-.7V6.45M3.75 10.5V6.75m0 3.75H6",
  cloud: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  palette: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z",
  code: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
};

export function ServicesOverview() {
  const featured = services.slice(0, 4);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end development services across all platforms and languages"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <Card key={service.id}>
              <svg
                className="mb-4 h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={iconMap[service.icon] || iconMap.code}
                />
              </svg>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create FeaturedPortfolio**

Create `src/components/home/FeaturedPortfolio.tsx`:

```tsx
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export function FeaturedPortfolio() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Work"
          subtitle="Recent projects we're proud of"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create TechStack**

Create `src/components/home/TechStack.tsx`:

```tsx
import { SectionHeading } from "@/components/ui/SectionHeading";

const technologies = [
  "JavaScript", "TypeScript", "Python", "Go", "Rust", "Java",
  "C#", "Swift", "Kotlin", "Dart", "Ruby", "PHP",
  "React", "Next.js", "Vue", "Angular", "Node.js", "Django",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
];

export function TechStack() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Our Tech Stack"
          subtitle="We work with the tools that fit the job"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border-subtle bg-surface px-4 py-2 font-mono text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create Testimonials**

Create `src/components/home/Testimonials.tsx`:

```tsx
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "SysInteractive delivered our platform ahead of schedule. Their technical depth across the full stack is rare to find.",
    name: "Sarah Chen",
    company: "TechVenture Inc.",
  },
  {
    quote:
      "From the initial architecture to deployment, they handled everything. Our API handles 10x the traffic we planned for.",
    name: "Marcus Rivera",
    company: "LogiFlow",
  },
  {
    quote:
      "Professional, responsive, and genuinely skilled. They turned our rough concept into a polished product.",
    name: "Emily Nakamura",
    company: "HealthSync",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What Clients Say"
          subtitle="Trusted by teams building ambitious products"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <blockquote className="mb-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-accent">{t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Assemble Home page**

Replace `src/app/page.tsx`:

```tsx
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedPortfolio />
      <TechStack />
      <Testimonials />
    </>
  );
}
```

- [ ] **Step 7: Verify Home page**

Run: `npm run dev`

Confirm at `http://localhost:3000`:
- Hero with tagline, blinking cursor, two CTA buttons
- Services overview showing 4 cards with icons
- Featured portfolio showing 3 project cards with thumbnails, descriptions, tech tags
- Tech stack grid of language/framework names
- Testimonials section with 3 quote cards
- Responsive: check mobile viewport for single-column layout

- [ ] **Step 8: Commit**

```bash
git add src/components/home/ src/app/page.tsx
git commit -m "feat: build Home page — Hero, ServicesOverview, FeaturedPortfolio, TechStack, Testimonials"
```

---

### Task 5: Services Page

**Files:**
- Create: `src/components/services/ServiceCard.tsx`
- Create: `src/components/services/ServiceGrid.tsx`
- Create: `src/app/services/page.tsx`

**Consumes:**
- `Card` from `@/components/ui/Card`
- `SectionHeading` from `@/components/ui/SectionHeading`
- `services` and `Service` from `@/data/services`
- `iconMap` — duplicated from `ServicesOverview.tsx` (extract to shared file if desired, but keep it simple for now)

- [ ] **Step 1: Create ServiceCard**

Create `src/components/services/ServiceCard.tsx`:

```tsx
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";

const iconMap: Record<string, string> = {
  globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  smartphone: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  server: "M21.75 17.25v-.228a4.328 4.328 0 0 0-.12-.7 4.5 4.5 0 0 0-3.025-3.025 4.328 4.328 0 0 0-.7-.12h-.228M21.75 17.25V21m0-3.75H18M3.75 17.25h.228c.237 0 .473.024.7.12a4.5 4.5 0 0 1 3.025 3.025c.096.227.12.463.12.7v.228M3.75 17.25V21m0-3.75H6m15.75-6.75v-.228a4.328 4.328 0 0 0-.12-.7A4.5 4.5 0 0 0 18.605 6.5a4.328 4.328 0 0 0-.7-.12H17.25m4.5 4.12V6.75m0 3.75H18m-14.25 0h.228c.237 0 .473-.024.7-.12A4.5 4.5 0 0 0 7.703 7.38c.096-.227.12-.463.12-.7V6.45M3.75 10.5V6.75m0 3.75H6",
  cloud: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  palette: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z",
  code: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex flex-col">
      <svg
        className="mb-4 h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={iconMap[service.icon] || iconMap.code}
        />
      </svg>
      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
      <p className="leading-relaxed text-text-secondary">
        {service.description}
      </p>
    </Card>
  );
}
```

- [ ] **Step 2: Create ServiceGrid**

Create `src/components/services/ServiceGrid.tsx`:

```tsx
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create Services page**

Create `src/app/services/page.tsx`:

```tsx
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";

export const metadata: Metadata = {
  title: "Services — SysInteractive",
  description:
    "Full-service software development: web, mobile, backend, DevOps, UI/UX, and custom solutions.",
};

export default function ServicesPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need to build, ship, and scale your software"
        />
        <ServiceGrid />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run dev`

Navigate to `http://localhost:3000/services`. Confirm:
- Page title in browser tab: "Services — SysInteractive"
- SectionHeading renders
- 6 service cards in a 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Each card has icon, title, description
- Hover effect works on cards

- [ ] **Step 5: Commit**

```bash
git add src/components/services/ src/app/services/
git commit -m "feat: add Services page with service cards grid"
```

---

### Task 6: Portfolio Page with Category Filtering

**Files:**
- Create: `src/components/portfolio/PortfolioCard.tsx`
- Create: `src/components/portfolio/CategoryFilter.tsx`
- Create: `src/components/portfolio/PortfolioGrid.tsx`
- Create: `src/app/portfolio/page.tsx`

**Consumes:**
- `Card` from `@/components/ui/Card`
- `TechTag` from `@/components/ui/TechTag`
- `SectionHeading` from `@/components/ui/SectionHeading`
- `projects` and `Project` from `@/data/portfolio`

- [ ] **Step 1: Create PortfolioCard**

Create `src/components/portfolio/PortfolioCard.tsx`:

```tsx
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/data/portfolio";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-video">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </Card>
  );
}
```

- [ ] **Step 2: Create CategoryFilter**

Create `src/components/portfolio/CategoryFilter.tsx`:

```tsx
const categories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
];

type CategoryFilterProps = {
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            active === cat.value
              ? "bg-accent text-background"
              : "border border-border-subtle text-text-secondary hover:border-accent hover:text-accent"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create PortfolioGrid**

Create `src/components/portfolio/PortfolioGrid.tsx`:

```tsx
"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";
import { CategoryFilter } from "./CategoryFilter";

export function PortfolioGrid() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <>
      <CategoryFilter active={category} onChange={setCategory} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 4: Create Portfolio page**

Create `src/app/portfolio/page.tsx`:

```tsx
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — SysInteractive",
  description:
    "Explore our portfolio of web, mobile, backend, and DevOps projects.",
};

export default function PortfolioPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Projects we've delivered across industries and tech stacks"
        />
        <PortfolioGrid />
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Verify**

Run: `npm run dev`

Navigate to `http://localhost:3000/portfolio`. Confirm:
- Category filter buttons render (All, Web, Mobile, Backend, DevOps)
- "All" is active by default, showing all 6 projects
- Clicking "Web" filters to only web projects (2 cards)
- Clicking "Mobile" filters to mobile projects (2 cards)
- Each card shows thumbnail, title, description, tech tags
- Grid is responsive

- [ ] **Step 6: Commit**

```bash
git add src/components/portfolio/ src/app/portfolio/
git commit -m "feat: add Portfolio page with category filtering"
```

---

### Task 7: About Page

**Files:**
- Create: `src/components/about/Story.tsx`
- Create: `src/components/about/TeamMember.tsx`
- Create: `src/app/about/page.tsx`

**Consumes:**
- `Card` from `@/components/ui/Card`
- `SectionHeading` from `@/components/ui/SectionHeading`

- [ ] **Step 1: Create Story component**

Create `src/components/about/Story.tsx`:

```tsx
export function Story() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 font-mono text-sm text-accent">&gt;_ Our Story</p>
      <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
        Built by Developers,
        <br />
        <span className="text-accent">for Developers</span>
      </h2>
      <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
        <p>
          SysInteractive was founded with a simple mission: deliver exceptional
          software without the overhead. We&apos;re a team of engineers who care
          deeply about code quality, system design, and shipping products that
          work.
        </p>
        <p>
          We work across every major language and framework — not because
          we chase trends, but because the right tool depends on the problem.
          Whether it&apos;s a high-throughput Go microservice or a polished React
          dashboard, we build what fits.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create TeamMember component**

Create `src/components/about/TeamMember.tsx`:

```tsx
import { Card } from "@/components/ui/Card";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
};

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alex Morgan",
    role: "Lead Engineer",
    bio: "15+ years in full-stack development. Previously at AWS and Stripe.",
  },
  {
    name: "Priya Sharma",
    role: "Mobile Lead",
    bio: "React Native and Flutter specialist. Shipped apps with 1M+ downloads.",
  },
  {
    name: "Daniel Kim",
    role: "DevOps Architect",
    bio: "Kubernetes and cloud infrastructure expert. Certified AWS Solutions Architect.",
  },
];

export function TeamMembers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {teamMembers.map((member) => (
        <Card key={member.name} className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-mono text-xl font-bold text-accent">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="mb-2 text-sm text-accent">{member.role}</p>
          <p className="text-sm text-text-secondary">{member.bio}</p>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create About page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Story } from "@/components/about/Story";
import { TeamMembers } from "@/components/about/TeamMember";

export const metadata: Metadata = {
  title: "About — SysInteractive",
  description:
    "Learn about SysInteractive — our mission, our team, and why we build software differently.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <section className="mb-20">
          <Story />
        </section>

        <section>
          <SectionHeading
            title="The Team"
            subtitle="Small team, big impact"
          />
          <TeamMembers />
        </section>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run dev`

Navigate to `http://localhost:3000/about`. Confirm:
- Story section with agency narrative
- Team section with 3 member cards showing initials, name, role, bio
- Responsive layout

- [ ] **Step 5: Commit**

```bash
git add src/components/about/ src/app/about/
git commit -m "feat: add About page — agency story and team"
```

---

### Task 8: Contact Page with Web3Forms

**Files:**
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/app/contact/page.tsx`
- Modify: `.env.local` — add `NEXT_PUBLIC_WEB3FORMS_KEY`

**Consumes:**
- `SectionHeading` from `@/components/ui/SectionHeading`

**Note:** The Web3Forms access key must be prefixed with `NEXT_PUBLIC_` to be available in client-side code (static export). Get a free key at https://web3forms.com.

- [ ] **Step 1: Add Web3Forms key to env**

Add to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=YOUR_ACCESS_KEY_HERE
```

The user should replace `YOUR_ACCESS_KEY_HERE` with their actual key from https://web3forms.com after signing up with their email.

- [ ] **Step 2: Create ContactForm**

Create `src/components/contact/ContactForm.tsx`:

```tsx
"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Project inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 font-medium text-background transition-all hover:bg-accent-hover disabled:opacity-50 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-green-400">
          Message sent successfully! We&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Create Contact page**

Create `src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SysInteractive",
  description:
    "Get in touch with SysInteractive. Tell us about your project and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? We'd love to hear about it."
        />

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Email
              </h3>
              <a
                href="mailto:hello@sysinteractive.com"
                className="text-lg text-text-secondary transition-colors hover:text-foreground"
              >
                hello@sysinteractive.com
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  X / Twitter
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Response Time
              </h3>
              <p className="text-text-secondary">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run dev`

Navigate to `http://localhost:3000/contact`. Confirm:
- Form renders with Name, Email, Subject, Message fields
- Submit button has cyan glow
- Right column shows email, social links, response time
- Form fields have proper focus states (cyan border)
- Responsive: stacks vertically on mobile

- [ ] **Step 5: Commit**

```bash
git add src/components/contact/ src/app/contact/
git commit -m "feat: add Contact page with Web3Forms integration"
```

---

### Task 9: Scroll Animations and Final Polish

**Files:**
- Create: `src/components/ui/AnimateIn.tsx`
- Modify: `src/components/home/Hero.tsx` — wrap in AnimateIn
- Modify: `src/components/home/ServicesOverview.tsx` — wrap in AnimateIn
- Modify: `src/components/home/FeaturedPortfolio.tsx` — wrap in AnimateIn
- Modify: `src/components/home/TechStack.tsx` — wrap in AnimateIn
- Modify: `src/components/home/Testimonials.tsx` — wrap in AnimateIn

**Produces:**
- `AnimateIn` component: intersection observer wrapper that triggers fade-in-up animation

- [ ] **Step 1: Create AnimateIn component**

Create `src/components/ui/AnimateIn.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimateIn({ children, className = "" }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Wrap Home page sections in AnimateIn**

Modify `src/app/page.tsx`:

```tsx
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <AnimateIn>
        <Hero />
      </AnimateIn>
      <AnimateIn>
        <ServicesOverview />
      </AnimateIn>
      <AnimateIn>
        <FeaturedPortfolio />
      </AnimateIn>
      <AnimateIn>
        <TechStack />
      </AnimateIn>
      <AnimateIn>
        <Testimonials />
      </AnimateIn>
    </>
  );
}
```

- [ ] **Step 3: Verify animations and run final build**

Run: `npm run dev`

Confirm at `http://localhost:3000`:
- Sections fade in as you scroll down the page
- Animation triggers once per section, doesn't re-trigger on scroll back up

Run: `npm run build`

Confirm: `out/` directory is produced with all pages (index.html, services.html, portfolio.html, about.html, contact.html).

Run: `npm run lint`

Confirm: no lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/AnimateIn.tsx src/app/page.tsx
git commit -m "feat: add scroll fade-in animations to Home page sections"
```
