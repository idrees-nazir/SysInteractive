import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — SysInteractive",
  description:
    "Questions, quotes, or support — we're here and we respond fast.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>Questions, quotes, or support — we&apos;re here and we respond fast.</p>
        </div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="block">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", margin: ".9rem 0 1rem" }}>
              Let&apos;s talk about your technology
            </h2>
            <p className="body-p" style={{ marginBottom: "1.6rem" }}>
              Prefer to reach us directly? Use the details below, or send the
              form and we&apos;ll respond within one business day.
            </p>

            <div className="info-stack">
              <div className="info">
                <span className="ii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <b>Office</b>
                  <span>123 Business Ave, Suite 400, Your City</span>
                </div>
              </div>
              <div className="info">
                <span className="ii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </span>
                <div>
                  <b>Email</b>
                  <a href="mailto:hello@sysinteractive.com">hello@sysinteractive.com</a>
                </div>
              </div>
              <div className="info">
                <span className="ii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <b>Phone</b>
                  <a href="tel:+15550102020">+1 (555) 010-2020</a>
                </div>
              </div>
              <div className="info">
                <span className="ii">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div>
                  <b>Support hours</b>
                  <span>24/7 monitored help desk</span>
                </div>
              </div>
            </div>

            <div className="map-embed">
              <div className="mk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Your City, HQ
                <br />
                <span style={{ fontWeight: 400, fontSize: ".82rem" }}>
                  Embed a Google Map here
                </span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Ready to move your technology forward?</h2>
            <p>
              Tell us what you&apos;re working on and we&apos;ll get back
              within one business day with clear next steps.
            </p>
            <div className="cta-actions">
              <a href="mailto:hello@sysinteractive.com" className="btn btn-white">
                Email us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
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
