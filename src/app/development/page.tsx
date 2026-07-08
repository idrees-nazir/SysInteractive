import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Development — SysInteractive",
  description:
    "Websites, web apps, and mobile apps designed and built by senior engineers — fast, secure, and easy to grow.",
};

const techs = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Python",
  "PostgreSQL",
  "GraphQL",
  "Firebase",
  "AWS",
  "Docker",
  "WordPress",
  "Tailwind",
];

export default function DevelopmentPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>Development</span>
          </div>
          <h1>Web &amp; Mobile Development</h1>
          <p>
            Websites, web apps, and mobile apps designed and built by senior
            engineers — fast, secure, and easy to grow.
          </p>
        </div>
      </section>

      {/* ===== DEV DUO ===== */}
      <section className="block">
        <div className="wrap">
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

          <div className="dev-extra">
            <div className="mini reveal">
              <div className="mi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <circle cx="6.5" cy="12" r="2.5" />
                  <circle cx="16.5" cy="16" r="2.5" />
                  <path d="M11.5 7.8 8.7 11M8.9 13.2l5.3 2.1" />
                </svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>Wireframes, prototypes, and clean interfaces designed around your users.</p>
            </div>
            <div className="mini reveal">
              <div className="mi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                  <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                </svg>
              </div>
              <h4>API &amp; Integrations</h4>
              <p>Connect payments, CRMs, and third-party tools into one smooth system.</p>
            </div>
            <div className="mini reveal">
              <div className="mi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="m9 11 3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h4>QA &amp; Testing</h4>
              <p>Thorough testing across devices and browsers before anything ships.</p>
            </div>
            <div className="mini reveal">
              <div className="mi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Support &amp; Maintenance</h4>
              <p>Updates, security patches, and hosting handled so you can focus on business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Technologies</span>
            <h2>The tools we build with</h2>
            <p>
              We pick technologies for reliability and hiring depth, so your
              product is still maintainable in five years.
            </p>
          </div>
          <div className="dev-tech" style={{ justifyContent: "center", border: "none", paddingTop: 0 }}>
            {techs.map((t) => (
              <span className="tchip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Our process</span>
            <h2>From idea to launch</h2>
          </div>
          <div className="steps5">
            <div className="pstep reveal">
              <div className="pn">01</div>
              <h4>Discovery</h4>
              <p>Goals, users, and scope defined, with a clear roadmap and estimate.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">02</div>
              <h4>Design</h4>
              <p>Wireframes and UI turned into an interactive prototype for sign-off.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">03</div>
              <h4>Build</h4>
              <p>Clean, tested code shipped in short sprints with regular demos.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">04</div>
              <h4>QA</h4>
              <p>Cross-device and browser testing, performance, and security checks.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">05</div>
              <h4>Launch</h4>
              <p>Deployment, monitoring, and ongoing updates and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Have a website or app in mind?</h2>
            <p>
              Tell us what you want to build and we&apos;ll come back with a
              plan, a timeline, and a straight answer on cost.
            </p>
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
