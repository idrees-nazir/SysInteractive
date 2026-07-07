"use client";

import { motion } from "framer-motion";
import ThreeScene from "@/components/ThreeScene";
import CustomCursor from "@/components/CustomCursor";
import TiltCards from "@/components/TiltCards";
import ScrollEffects from "@/components/ScrollEffects";
import ContactForm from "@/components/ContactForm";

const heroMarquee = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Laravel",
  "AWS",
  "Docker",
  "Kubernetes",
  "WordPress",
  "Elementor",
  "PostgreSQL",
  "GraphQL",
];

const services = [
  {
    no: "/ 01",
    title: "Frontend Development",
    desc: "Animated, responsive interfaces in React, Next.js and Vue — sub-second loads, silky motion, flawless on every screen.",
    tags: ["React", "Next.js", "Vue", "WebGL"],
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="1.7"
      >
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
      </svg>
    ),
  },
  {
    no: "/ 02",
    title: "Backend Development",
    desc: "Secure, scalable APIs and business logic in Node, Python and Laravel — engineered for real-world traffic.",
    tags: ["Node", "Python", "Laravel"],
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="1.7"
      >
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r=".9" fill="#8B78FF" />
        <circle cx="7" cy="17" r=".9" fill="#8B78FF" />
      </svg>
    ),
  },
  {
    no: "/ 03",
    title: "Full-Stack Apps",
    desc: "SaaS platforms, dashboards and portals — complete products from database schema to the last interaction.",
    tags: ["SaaS", "Dashboards", "APIs"],
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="1.7"
      >
        <path d="M12 2l9 5v10l-9 5-9-5V7Z" />
        <path d="M12 2v20M3 7l18 10M21 7L3 17" opacity=".5" />
      </svg>
    ),
  },
  {
    no: "/ 04",
    title: "AWS Cloud & DevOps",
    desc: "EC2, S3, RDS, CI/CD pipelines and auto-scaling — infrastructure that grows with you and never wakes you at 3am.",
    tags: ["EC2", "S3", "Docker"],
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="1.7"
      >
        <path d="M18 10a4 4 0 0 0-7.9-1A4.5 4.5 0 0 0 6 17.5h12a3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
  {
    no: "/ 05",
    title: "Server Management",
    desc: "Hardened Linux servers, proactive monitoring, automated backups and round-the-clock uptime care.",
    tags: ["Linux", "Nginx", "24/7"],
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="1.7"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h4M7 13h7M7 17h5" />
      </svg>
    ),
  },
  {
    no: "/ 06",
    title: "WordPress & Elementor",
    desc: "Premium Elementor builds, custom themes and WooCommerce stores — optimized to 90+ PageSpeed.",
    tags: ["Elementor", "WooCommerce"],
    icon: (
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "17px",
          background: "var(--grad)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        W·E
      </span>
    ),
  },
];

const techStack = [
  { d: "5", bg: "#E44D26", label: "HTML5" },
  { d: "3", bg: "#1572B6", label: "CSS3" },
  { d: "JS", bg: "#F7DF1E", color: "#111", label: "JavaScript" },
  { d: "TS", bg: "#3178C6", label: "TypeScript" },
  { d: "⚛", bg: "#0e7490", label: "React" },
  { d: "N", bg: "#111", border: "1px solid #444", label: "Next.js" },
  { d: "V", bg: "#41B883", label: "Vue.js" },
  { d: "⬢", bg: "#3C873A", label: "Node.js" },
  { d: "php", bg: "#777BB3", label: "PHP" },
  { d: "L", bg: "#FF2D20", label: "Laravel" },
  { d: "Py", bg: "#3776AB", label: "Python" },
  { d: "a", bg: "#FF9900", color: "#111", label: "AWS" },
  { d: "D", bg: "#2496ED", label: "Docker" },
  { d: "W", bg: "#21759B", label: "WordPress" },
  { d: "E", bg: "#92003B", label: "Elementor" },
];

const processSteps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, users and constraints before a single line is written.",
  },
  {
    n: "02",
    title: "Plan & Architect",
    desc: "Tech stack decisions, wireframes and a clear roadmap you approve before we build.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Intuitive, distinctive UI/UX that connects with your users and reflects your brand.",
  },
  {
    n: "04",
    title: "Develop",
    desc: "Agile sprints with weekly demos, transparent progress and code reviewed at every step.",
  },
  {
    n: "05",
    title: "Deploy",
    desc: "Zero-downtime launch on AWS with monitoring, backups and performance tuning.",
  },
  {
    n: "06",
    title: "Support",
    desc: "Ongoing optimization, updates and 24/7 support so you can focus on growth.",
  },
];

const portfolio = [
  {
    size: "wide",
    bg: "linear-gradient(140deg,#1e1b4b,#4c1d95,#831843)",
    cat: "SaaS · Full Stack",
    title: "Analytics Dashboard Platform",
  },
  {
    size: "norm",
    bg: "linear-gradient(140deg,#172554,#0e7490)",
    cat: "DevOps · AWS",
    title: "Cloud Infrastructure",
  },
  {
    size: "half",
    bg: "linear-gradient(140deg,#4a044e,#1e40af)",
    cat: "E-Commerce",
    title: "WooCommerce Store",
  },
  {
    size: "half",
    bg: "linear-gradient(140deg,#312e81,#be185d)",
    cat: "WordPress · Elementor",
    title: "Corporate Website",
  },
  {
    size: "norm",
    bg: "linear-gradient(140deg,#0c4a6e,#5b21b6)",
    cat: "Web App",
    title: "Task Manager",
  },
  {
    size: "wide",
    bg: "linear-gradient(140deg,#3b0764,#1d4ed8,#0e7490)",
    cat: "Full Stack · React",
    title: "Fintech Web Application",
  },
];

const testimonials = [
  {
    delay: "d1",
    quote:
      "Sysinteractive turned our idea into a polished, high-performance product. Professional, responsive and genuinely world-class engineering.",
    initials: "JM",
    name: "Jason Miller",
    role: "CEO, TechNova",
  },
  {
    delay: "d2",
    quote:
      "They delivered on time and blew past our expectations. Communication was flawless from kickoff to launch and beyond.",
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Founder, ShopEase",
  },
  {
    delay: "d3",
    quote:
      "After their AWS work our load times dropped 70% and conversions doubled. This is a premium team, no question.",
    initials: "DB",
    name: "David Brown",
    role: "CTO, InnovateX",
  },
];

export default function Home() {
  return (
    <>
      <ThreeScene />
      <div className="grain" />
      <div className="vig" />
      <CustomCursor />
      <TiltCards />
      <ScrollEffects />

      {/* ===== NAV ===== */}
      <motion.nav
        id="nav"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <a className="brand" href="#home" data-cur="big">
          <span className="m">
            <svg width="38" height="42" viewBox="0 0 38 42">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4C7DFF" />
                  <stop offset=".5" stopColor="#8B78FF" />
                  <stop offset="1" stopColor="#F062C0" />
                </linearGradient>
              </defs>
              <path
                d="M19 1 36 11v20L19 41 2 31V11Z"
                fill="none"
                stroke="url(#lg)"
                strokeWidth="2.4"
              />
              <text
                x="19"
                y="27"
                textAnchor="middle"
                fontFamily="Syne"
                fontWeight="800"
                fontSize="16"
                fill="url(#lg)"
              >
                S
              </text>
            </svg>
          </span>
          <span>
            SYSINTERACTIVE
            <small>DIGITAL ENGINEERING</small>
          </span>
        </a>
        <div className="nlinks">
          <a href="#home" className="on">
            Home
          </a>
          <a href="#services">Services</a>
          <a href="#tech">Stack</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="mag" href="#contact" data-cur="big">
          Start a Project
        </a>
        <button className="hamb">☰</button>
      </motion.nav>

      {/* ===== HERO ===== */}
      <header className="hero" id="home">
        <div className="hero-tag">
          <span className="ln" />
          FRONTEND · BACKEND · CLOUD · WORDPRESS
        </div>
        <h1 className="mega" id="mega">
          <span className="l">
            <span>WE ENGINEER</span>
          </span>
          <span className="l">
            <span className="stroke-txt">DIGITAL</span>
          </span>
          <span className="l">
            <span className="fill-grad">EXPERIENCES.</span>
          </span>
        </h1>
        <div className="hero-foot">
          <p>
            Sysinteractive is a full-stack IT studio building high-performance
            websites, cloud infrastructure and premium WordPress for brands
            that refuse to blend in.
          </p>
          <div className="scroll-hint">
            <span className="mouse" />
            SCROLL TO EXPLORE
          </div>
        </div>
        <div className="hero-marq">
          <div className="t" id="hmarq">
            {[...heroMarquee, ...heroMarquee].map((item, i) => (
              <span key={i}>
                <b>◆</b> {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ===== SERVICES ===== */}
      <section id="services">
        <div className="sec-label">
          <span className="idx">(01)</span> What We Do <span className="ln" />
        </div>
        <h2 className="big rv">
          Six disciplines.
          <br />
          One obsessive studio.
        </h2>
        <p className="lead rv">
          From the first pixel to the last server config — every layer of the
          modern web stack, owned end to end by one accountable team.
        </p>
        <div className="svc-wrap">
          {services.map((s) => (
            <div className="tilt" key={s.title}>
              <div className="svc glass" data-cur="big">
                <div className="glow" />
                <div className="no">{s.no}</div>
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tags">
                  {s.tags.map((tag) => (
                    <i key={tag}>{tag}</i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BIG MARQUEE ===== */}
      <div className="big-marq">
        <div className="bt" id="bigmarq">
          {[0, 1].map((i) => (
            <span key={i}>
              FRONTEND <span className="star">✦</span> <em>BACKEND</em>{" "}
              <span className="star">✦</span> CLOUD{" "}
              <span className="star">✦</span> <em>DEVOPS</em>{" "}
              <span className="star">✦</span> WORDPRESS{" "}
              <span className="star">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== TECH ===== */}
      <section id="tech">
        <div className="sec-label">
          <span className="idx">(02)</span> Our Stack <span className="ln" />
        </div>
        <h2 className="big rv">Tools we&apos;ve mastered.</h2>
        <div className="tech-row">
          {techStack.map((t) => (
            <div className="tpill rv" key={t.label}>
              <span
                className="d"
                style={{
                  background: t.bg,
                  color: t.color,
                  border: t.border,
                }}
              >
                {t.d}
              </span>
              {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS (sticky) ===== */}
      <section id="process">
        <div className="sec-label">
          <span className="idx">(03)</span> How We Work{" "}
          <span className="ln" />
        </div>
        <div className="proc-grid">
          <div className="proc-sticky">
            <h2 className="big rv">
              A process
              <br />
              built to ship.
            </h2>
            <div className="huge" id="procNum">
              01
            </div>
            <p className="lead rv" style={{ marginTop: "14px" }}>
              Six deliberate stages. No black boxes, no surprises — you see
              progress every single week.
            </p>
          </div>
          <div className="proc-list" id="procList">
            {processSteps.map((step, i) => (
              <div className={`pi${i === 0 ? " active" : ""}`} key={step.n}>
                <span className="n">{step.n}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <div className="band">
        <div className="band-in rv">
          <div className="bs">
            <div className="n fill-grad" data-count="150" data-suf="+">
              0
            </div>
            <div className="l">PROJECTS SHIPPED</div>
          </div>
          <div className="bs">
            <div className="n fill-grad" data-count="98" data-suf="%">
              0
            </div>
            <div className="l">CLIENT SATISFACTION</div>
          </div>
          <div className="bs">
            <div className="n fill-grad" data-count="12" data-suf="">
              0
            </div>
            <div className="l">COUNTRIES SERVED</div>
          </div>
          <div className="bs">
            <div className="n fill-grad">24/7</div>
            <div className="l">SUPPORT &amp; MONITORING</div>
          </div>
        </div>
      </div>

      {/* ===== WORK ===== */}
      <section id="work">
        <div className="sec-label">
          <span className="idx">(04)</span> Selected Work{" "}
          <span className="ln" />
        </div>
        <h2 className="big rv">
          Projects that
          <br />
          speak for us.
        </h2>
        <div className="pf-grid">
          {portfolio.map((p) => (
            <div className={`pf ${p.size} rv`} data-cur="big" key={p.title}>
              <div className="bgv" style={{ background: p.bg }} />
              <span className="arrow">→</span>
              <div className="meta">
                <span className="cat">{p.cat}</span>
                <h4>{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials">
        <div className="sec-label">
          <span className="idx">(05)</span> Client Voices{" "}
          <span className="ln" />
        </div>
        <h2 className="big rv">
          Trusted by teams
          <br />
          who ship.
        </h2>
        <div className="tst-grid">
          {testimonials.map((t) => (
            <div className={`tst glass rv ${t.delay}`} key={t.name}>
              <div className="stars">★★★★★</div>
              <p>&quot;{t.quote}&quot;</p>
              <div className="who">
                <span className="av">{t.initials}</span>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <div className="cta" id="contact">
        <motion.div
          className="cta-in"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aura" />
          <div className="sec-label" style={{ justifyContent: "center" }}>
            <span className="ln" /> Let&apos;s build <span className="ln" />
          </div>
          <h2>
            Got a project
            <br />
            worth building?
          </h2>
          <p>
            Free consultation. Transparent quotes. On-time delivery,
            guaranteed.
          </p>

          <div className="cta-grid">
            <ContactForm />

            <motion.div
              className="cta-info"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cta-info-item">
                <span className="lbl">Email</span>
                <a href="mailto:info@sysinteractive.com">
                  info@sysinteractive.com
                </a>
              </div>
              <div className="cta-info-item">
                <span className="lbl">Phone</span>
                <a href="tel:+923001234567">+92 300 1234567</a>
              </div>
              <div className="cta-info-item">
                <span className="lbl">Location</span>
                <span className="val">Lahore, Pakistan</span>
              </div>
              <div className="cta-info-item">
                <span className="lbl">Response Time</span>
                <span className="val">Within 24 hours</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="f-in">
          <div className="f-brand">
            <div className="big-s fill-grad">SYSINTERACTIVE</div>
            <p>Full-spectrum IT studio — engineering the web end to end.</p>
            <p style={{ color: "#5D5C82", fontSize: "12.5px", marginTop: "12px" }}>
              Frontend · Backend · Cloud · WordPress
            </p>
            <div className="socs">
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">⌥</a>
            </div>
          </div>
          <div>
            <h5>Navigate</h5>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h5>Services</h5>
            <a href="#services">Frontend</a>
            <a href="#services">Backend</a>
            <a href="#services">Full Stack</a>
            <a href="#services">AWS Cloud</a>
            <a href="#services">WordPress</a>
          </div>
          <div>
            <h5>Get in touch</h5>
            <p>📍 Lahore, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ info@sysinteractive.com</p>
            <p>🕘 Mon–Sat · 9AM–6PM</p>
          </div>
        </div>
        <div className="f-low">
          <span>© 2026 SYSINTERACTIVE — ALL RIGHTS RESERVED</span>
          <span>PRIVACY · TERMS</span>
        </div>
      </footer>
    </>
  );
}
