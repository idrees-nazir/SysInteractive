import Link from "next/link";
import TechSlider from "@/components/ui/TechSlider";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TypeWriter from "@/components/ui/TypeWriter";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <span className="badge">
              <span className="pip" />
              Trusted IT partner since 2005
            </span>
            <h1>
              Modern IT solutions that keep your business{" "}<TypeWriter />
            </h1>
            <p className="lead">
              SysInteractive delivers IT management, cybersecurity, cloud,
              custom software, and digital marketing — backed by certified
              engineers and round-the-clock support.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary">
                Request a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
            <div className="hero-trust">
              <div className="tt">
                <b>130+</b>
                <small>Certified engineers</small>
              </div>
              <div className="tt">
                <b>500+</b>
                <small>Projects delivered</small>
              </div>
              <div className="tt">
                <b>99.9%</b>
                <small>Uptime guarantee</small>
              </div>
            </div>
          </div>

          <div className="hero-vis reveal">
            <div className="hero-img-wrap">
              <img
                src="/images/hero/hero-dashboard.jpg"
                alt="Analytics dashboard showing real-time business metrics"
                className="hero-img"
              />
              <div className="hero-img-overlay" />
            </div>
            <div className="chip-float">
              <span className="ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <b>SOC 2 secured</b>
                <small>Enterprise-grade</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE STRIP ===== */}
      <section className="pull-up">
        <div className="wrap">
          <div className="feat-grid">
            <div className="feat reveal">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 11-3-3m0 0-3 3m3-3v9" />
                  <path d="M2 13l3 3m0 0 3-3m-3 3V7" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Certified IT expertise</h3>
              <p>
                A deep bench of certified engineers across networks, security,
                and cloud — matched to your stack, not a script.
              </p>
            </div>
            <div className="feat reveal">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>24/7 IT support</h3>
              <p>
                A monitored help desk that never sleeps. Issues are caught,
                triaged, and resolved before they reach your team.
              </p>
            </div>
            <div className="feat reveal">
              <div className="fi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
              <h3>Tailored solutions</h3>
              <p>
                Every engagement starts with your goals. We design and build
                around how your business actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="block">
        <div className="wrap about-grid">
          <div className="about-vis reveal">
            <img
              src="/images/about/office-team.jpg"
              alt="SysInteractive team collaborating in modern office"
              className="about-photo"
            />
            <div className="about-badge">
              <b>20 yrs</b>
              <small>Delivering IT since 2005</small>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">About us</span>
            <h2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.7rem)", margin: ".9rem 0 1.1rem" }}>
              Your preferred IT &amp; technology partner
            </h2>
            <p className="body-p">
              For nearly two decades, businesses have trusted SysInteractive
              to manage, secure, and modernize their technology. From
              day-to-day support to full-scale software builds, one
              accountable team handles it all.
            </p>
            <p className="body-p">
              Our engineers really get to know your operation, so the
              solutions we recommend fit your real needs, not a generic
              playbook.
            </p>
            <ul className="checklist">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Committed to reliable, high-quality IT services
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Delivered by experts across every critical system
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Focused on the true needs of your business
              </li>
            </ul>
            <Link href="/about" className="btn btn-primary">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Our services</span>
            <h2>Solutions &amp; focus areas</h2>
            <p>
              A full spectrum of IT services under one roof, so you have a
              single, accountable partner for every layer of your technology.
            </p>
          </div>
          <div className="svc-grid">
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>IT Management</h3>
              <p>
                Proactive monitoring, maintenance, and a 24/7 help desk that
                keeps your systems healthy and your team productive.
              </p>
              <Link href="/services" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Cyber Security</h3>
              <p>
                Risk assessments, threat protection, and compliance support
                that keep your data and reputation safe.
              </p>
              <Link href="/services" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3>Cloud Computing</h3>
              <p>
                Migration, management, and cost optimization across AWS,
                Azure, and Google Cloud with zero downtime.
              </p>
              <Link href="/services" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Software Development</h3>
              <p>
                Custom web and mobile applications built by senior engineers,
                from first prototype to production and beyond.
              </p>
              <Link href="/development" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
              </div>
              <h3>DevOps &amp; Infrastructure</h3>
              <p>
                CI/CD pipelines, automation, and infrastructure-as-code that
                make deployments fast, safe, and repeatable.
              </p>
              <Link href="/services" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M7 15v-4M12 15V8M17 15v-6" />
                </svg>
              </div>
              <h3>Data &amp; Analytics</h3>
              <p>
                Data pipelines, dashboards, and BI that turn the information
                you already have into confident decisions.
              </p>
              <Link href="/services" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link href="/services" className="btn btn-primary">
              View all services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WEB & MOBILE DEVELOPMENT ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Web &amp; mobile development</span>
            <h2>Websites and apps, built to perform</h2>
            <p>
              From marketing sites to complex platforms and native mobile
              apps, we design, build, and maintain digital products that are
              fast, secure, and easy to grow.
            </p>
          </div>
          <div className="dev-duo">
            <div className="dev-card reveal">
              <div className="dh">
                <span className="di">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M2 8h20M6 5.5h.01M9 5.5h.01" />
                  </svg>
                </span>
                <h3>Website Development</h3>
              </div>
              <p>
                Responsive, SEO-ready websites and web applications built on
                modern frameworks — quick to load, simple to manage, and
                made to convert.
              </p>
              <ul className="dev-feats">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Corporate &amp; marketing sites
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Web apps &amp; customer portals
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  E-commerce &amp; online stores
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  CMS &amp; headless builds
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Performance &amp; SEO optimization
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Accessibility built in
                </li>
              </ul>
              <div className="dev-tech">
                <span className="tchip">React</span>
                <span className="tchip">Next.js</span>
                <span className="tchip">WordPress</span>
                <span className="tchip">Node.js</span>
                <span className="tchip">Tailwind</span>
                <span className="tchip">Shopify</span>
              </div>
            </div>
            <div className="dev-card reveal">
              <div className="dh">
                <span className="di">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="7" y="2" width="10" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                </span>
                <h3>Mobile App Development</h3>
              </div>
              <p>
                Native and cross-platform mobile apps that feel great on
                every device — from concept and design through App Store
                launch and ongoing updates.
              </p>
              <ul className="dev-feats">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  iOS &amp; Android native apps
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Cross-platform builds
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  App Store &amp; Play deployment
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Push, offline &amp; real-time
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Secure API integrations
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Maintenance &amp; updates
                </li>
              </ul>
              <div className="dev-tech">
                <span className="tchip">React Native</span>
                <span className="tchip">Flutter</span>
                <span className="tchip">Swift</span>
                <span className="tchip">Kotlin</span>
                <span className="tchip">Firebase</span>
                <span className="tchip">GraphQL</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link href="/development" className="btn btn-primary">
              Explore development
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK MARQUEE ===== */}
      <TechSlider />

      {/* ===== DIGITAL MARKETING ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Digital marketing &amp; SEO</span>
            <h2>Get found, get clicks, get customers</h2>
            <p>
              Building a great site is only half the job. Our marketing team
              drives the right people to it with data-led SEO, paid ads, and
              content that converts.
            </p>
          </div>
          <div className="growth-row">
            <div className="growth reveal">
              <span className="gi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M17 7h4v4" />
                </svg>
              </span>
              <div>
                <b>
                  +180<span className="plus">%</span>
                </b>
                <small>Avg. organic traffic growth</small>
              </div>
            </div>
            <div className="growth reveal">
              <span className="gi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <div>
                <b>
                  3.2<span className="plus">×</span>
                </b>
                <small>Return on ad spend</small>
              </div>
            </div>
            <div className="growth reveal">
              <span className="gi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9H4a2 2 0 0 0 0 4h2M18 9h2a2 2 0 0 1 0 4h-2M8 12h8" />
                  <path d="M12 2v4M12 18v4" />
                </svg>
              </span>
              <div>
                <b>Top&nbsp;3</b>
                <small>Search rankings delivered</small>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link href="/marketing" className="btn btn-primary">
              See marketing services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="block stats">
        <div className="wrap">
          <div className="stat-grid">
            <div className="s reveal">
              <b>
                <AnimatedCounter end={20} suffix="" /><span className="plus">+</span>
              </b>
              <span>Years in business</span>
            </div>
            <div className="s reveal">
              <b>
                <AnimatedCounter end={130} suffix="" /><span className="plus">+</span>
              </b>
              <span>Certified engineers</span>
            </div>
            <div className="s reveal">
              <b>
                <AnimatedCounter end={500} suffix="" /><span className="plus">+</span>
              </b>
              <span>Projects delivered</span>
            </div>
            <div className="s reveal">
              <b>
                <AnimatedCounter end={98} suffix="" /><span className="plus">%</span>
              </b>
              <span>Client retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Case studies</span>
            <h2>IT solutions &amp; projects</h2>
            <p>A look at how we help organizations run leaner, safer, and faster.</p>
          </div>
          <div className="case-grid">
            <article className="case reveal">
              <div className="thumb-img">
                <span className="cat">IT Management</span>
                <img src="/images/portfolio/project-workflow.jpg" alt="Workflow management platform" />
              </div>
              <div className="cbody">
                <h3>Workflow management platform</h3>
                <p>
                  Consolidated a manufacturer&apos;s scattered tools into one
                  monitored platform, cutting resolution time by more than
                  half.
                </p>
                <Link href="/portfolio" className="more">
                  View details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="case reveal">
              <div className="thumb-img">
                <span className="cat">Cloud Computing</span>
                <img src="/images/portfolio/project-cloud.jpg" alt="Cloud migration infrastructure" />
              </div>
              <div className="cbody">
                <h3>Cloud migration for finance</h3>
                <p>
                  Moved a financial services firm off aging servers to a
                  secure cloud setup, reducing infrastructure costs by 34%.
                </p>
                <Link href="/portfolio" className="more">
                  View details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
            <article className="case reveal">
              <div className="thumb-img">
                <span className="cat">Software Development</span>
                <img src="/images/portfolio/project-code.jpg" alt="Custom software development" />
              </div>
              <div className="cbody">
                <h3>Custom software for logistics</h3>
                <p>
                  Built a real-time dispatch and tracking system that
                  replaced 40 spreadsheets and scaled to thousands of daily
                  jobs.
                </p>
                <Link href="/portfolio" className="more">
                  View details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link href="/portfolio" className="btn btn-primary">
              View all projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
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

      {/* ===== TRUSTED BY ===== */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="lbl">Trusted by growing organizations</p>
          <div className="logo-row reveal">
            <span className="lg">Northgate</span>
            <span className="lg">HCM Group</span>
            <span className="lg">Meridian</span>
            <span className="lg">Squarepix</span>
            <span className="lg">Parkabl</span>
            <span className="lg">Domoo</span>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Ready to move your technology forward?</h2>
            <p>
              Tell us what you&apos;re working on and we&apos;ll get back
              within one business day with clear next steps.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">
                Request a consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a href="tel:+15550102020" className="btn btn-outline-w">
                Call +1 (800) 774-2020
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
