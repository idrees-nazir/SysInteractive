import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — SysInteractive",
  description:
    "A full spectrum of IT services under one roof — managed, secured, and built by one accountable team.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>Our Services</h1>
          <p>
            A full spectrum of IT services under one roof — managed,
            secured, and built by one accountable team.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="block">
        <div className="wrap">
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
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">How we work</span>
            <h2>A clear path from idea to production</h2>
            <p>
              Five stages, run in tight loops. You see progress early and
              often, never a black box.
            </p>
          </div>
          <div className="steps5">
            <div className="pstep reveal">
              <div className="pn">Step 01</div>
              <h4>Discovery</h4>
              <p>
                We learn your goals, systems, and constraints, then map the
                smallest version worth building.
              </p>
            </div>
            <div className="pstep reveal">
              <div className="pn">Step 02</div>
              <h4>Plan &amp; design</h4>
              <p>
                Architecture and interface decided together, so work starts
                on solid ground.
              </p>
            </div>
            <div className="pstep reveal">
              <div className="pn">Step 03</div>
              <h4>Build</h4>
              <p>
                Short cycles with working demos. You steer priorities as
                real software takes shape.
              </p>
            </div>
            <div className="pstep reveal">
              <div className="pn">Step 04</div>
              <h4>Test</h4>
              <p>
                Thorough QA across devices and scenarios before anything
                reaches your users.
              </p>
            </div>
            <div className="pstep reveal">
              <div className="pn">Step 05</div>
              <h4>Launch &amp; support</h4>
              <p>Automated deploys, monitoring, and a team that stays as you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div className="faq">
            <details className="qa" open>
              <summary>
                Do you offer ongoing support, or just projects?
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                Both. Many clients start with a project and move onto a
                managed support plan with our 24/7 help desk. You can also
                engage us purely for one-off work.
              </div>
            </details>
            <details className="qa">
              <summary>
                Which cloud providers do you work with?
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                AWS, Microsoft Azure, and Google Cloud. We recommend the
                right fit for your workloads and budget rather than pushing a
                single platform.
              </div>
            </details>
            <details className="qa">
              <summary>
                How quickly can you respond to issues?
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                Our help desk is monitored around the clock. Critical issues
                are picked up within minutes, with response targets set out
                clearly in your service agreement.
              </div>
            </details>
            <details className="qa">
              <summary>
                Can you work with our existing systems?
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="ans">
                Yes. We specialize in improving and modernizing what you
                already have, migrating incrementally so there is no risky
                big-bang switch.
              </div>
            </details>
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
                Call +1 (555) 010-2020
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
