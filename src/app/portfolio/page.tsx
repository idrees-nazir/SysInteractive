import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — SysInteractive",
  description:
    "A selection of the IT, software, and digital projects we've delivered for clients across industries.",
};

const projects = [
  {
    gradient: "g1",
    category: "IT Management",
    title: "Workflow management platform",
    client: "NorthStar Manufacturing",
    desc: "Consolidated a manufacturer's scattered tools into one monitored platform, cutting resolution time by more than half. Integrated ticketing, asset management, and real-time monitoring into a unified dashboard used by 120+ employees daily.",
    results: ["62% faster resolution", "120+ daily users", "99.8% uptime"],
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "Grafana"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    gradient: "g2",
    category: "Cloud Computing",
    title: "Cloud migration for finance",
    client: "Meridian Financial Services",
    desc: "Moved a financial services firm off aging on-premise servers to a fully managed cloud setup on AWS. Zero downtime during migration, with automated backups, disaster recovery, and compliance-ready infrastructure.",
    results: ["34% cost reduction", "Zero downtime", "SOC 2 compliant"],
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "CloudWatch"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    gradient: "g3",
    category: "Software Development",
    title: "Custom software for logistics",
    client: "Meridian Logistics",
    desc: "Built a real-time dispatch and tracking system that replaced 40 spreadsheets and scaled to thousands of daily jobs. Drivers use a mobile app for route optimization and digital proof-of-delivery.",
    results: ["3,000+ daily jobs", "40 spreadsheets replaced", "28% fuel savings"],
    tech: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps API"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    gradient: "g4",
    category: "Web Development",
    title: "E-commerce rebuild for retail",
    client: "Northgate Retail Group",
    desc: "Rebuilt a slow, outdated storefront on a modern headless commerce stack. Implemented server-side rendering, optimized images, and progressive loading that doubled page speed and lifted online sales significantly.",
    results: ["47% sales increase", "2× page speed", "32% lower bounce rate"],
    tech: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel", "Stripe"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M2 8h20M6 5.5h.01M9 5.5h.01" />
      </svg>
    ),
  },
  {
    gradient: "g5",
    category: "Mobile App",
    title: "Field-service mobile app",
    client: "ProTech Services Inc.",
    desc: "A cross-platform app that put job details, routing, and sign-off in the hands of 200+ field technicians. Offline-first architecture ensures reliability in areas with poor connectivity, with automatic sync when back online.",
    results: ["200+ technicians", "Offline-first", "4.7★ App Store rating"],
    tech: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "Push Notifications"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    gradient: "g6",
    category: "Digital Marketing",
    title: "SEO & content growth",
    client: "HCM Group",
    desc: "A twelve-month SEO and content program that grew a B2B client's organic traffic by 180%. Included technical SEO audit, content strategy, link building, and ongoing performance reporting with monthly optimization.",
    results: ["+180% organic traffic", "Top 3 rankings", "3.2× ROAS"],
    tech: ["Google Analytics", "SEMrush", "WordPress", "Schema Markup", "GTM"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    gradient: "g1",
    category: "Cyber Security",
    title: "Enterprise security overhaul",
    client: "Pacific Healthcare Network",
    desc: "Conducted a full security audit and remediation for a 500-seat healthcare organization. Implemented zero-trust architecture, endpoint detection, and employee security training program achieving HIPAA compliance.",
    results: ["HIPAA compliant", "500+ endpoints secured", "92% threat reduction"],
    tech: ["CrowdStrike", "Okta", "Splunk", "Azure AD", "Fortinet"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    gradient: "g4",
    category: "Web Application",
    title: "SaaS analytics dashboard",
    client: "DataPulse Technologies",
    desc: "Designed and built a multi-tenant analytics platform processing millions of events daily. Real-time dashboards, custom report builder, and role-based access control for enterprise clients across three continents.",
    results: ["5M+ events/day", "Multi-tenant SaaS", "3 continents served"],
    tech: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 15v-4M12 15V8M17 15v-6" />
      </svg>
    ),
  },
  {
    gradient: "g5",
    category: "DevOps",
    title: "CI/CD pipeline automation",
    client: "FinEdge Solutions",
    desc: "Architected a complete CI/CD pipeline replacing manual deployments with automated testing, staging, and zero-downtime releases. Reduced deployment time from 4 hours to 12 minutes with full rollback capability.",
    results: ["12-min deploys", "Zero downtime", "95% fewer incidents"],
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "ArgoCD"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </div>
          <h1>Our Portfolio</h1>
          <p>
            A selection of the IT, software, and digital projects we&apos;ve
            delivered for clients across industries — with real results.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Case studies</span>
            <h2>Projects that made a difference</h2>
            <p>
              Every project starts with a problem worth solving. Here&apos;s how
              we helped organizations modernize, scale, and grow.
            </p>
          </div>
          <div className="portfolio-grid">
            {projects.map((p) => (
              <article className="pf-card reveal" key={p.title}>
                <div className={`pf-thumb ${p.gradient}`}>
                  <span className="cat">{p.category}</span>
                  {p.icon}
                </div>
                <div className="pf-body">
                  <small className="pf-client">{p.client}</small>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pf-results">
                    {p.results.map((r) => (
                      <span key={r} className="pf-metric">{r}</span>
                    ))}
                  </div>
                  <div className="pf-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tchip">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block stats">
        <div className="wrap">
          <div className="stat-grid">
            <div className="s reveal">
              <b>20<span className="plus">+</span></b>
              <span>Years in business</span>
            </div>
            <div className="s reveal">
              <b>130<span className="plus">+</span></b>
              <span>Certified engineers</span>
            </div>
            <div className="s reveal">
              <b>500<span className="plus">+</span></b>
              <span>Projects delivered</span>
            </div>
            <div className="s reveal">
              <b>98<span className="plus">%</span></b>
              <span>Client retention</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Testimonials</span>
            <h2>What clients say about us</h2>
          </div>
          <div className="testi-grid">
            {[
              {
                initials: "AF",
                name: "Abbi Finnegan",
                role: "CEO, Northgate Retail",
                quote:
                  "SysInteractive became an extension of our team overnight. Response times dropped and we finally stopped worrying about downtime.",
              },
              {
                initials: "MD",
                name: "Marianna Dudley",
                role: "Co-Founder, HCM Group",
                quote:
                  "Their team migrated us to the cloud without a single hour of downtime. Clear communication from start to finish.",
              },
              {
                initials: "HB",
                name: "Henley Burch",
                role: "Founder, Meridian Logistics",
                quote:
                  "The custom software they built runs our whole operation now. Delivered on time and still supported months later.",
              },
            ].map((t) => (
              <div className="tcard reveal" key={t.name}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18.5 5.4 21.2 6.7 14.2 1.7 9.4l7-.9z" />
                    </svg>
                  ))}
                </div>
                <p>{t.quote}</p>
                <div className="who">
                  <span className="av">{t.initials}</span>
                  <div>
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Could your project be next?</h2>
            <p>Tell us about it and we&apos;ll show you how we&apos;d approach it.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">
                Request a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a href="tel:+15550102020" className="btn btn-outline-w">
                Call +1 (555) 010-2020
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
