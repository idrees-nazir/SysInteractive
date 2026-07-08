import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — SysInteractive",
  description:
    "Nearly two decades of keeping businesses secure, connected, and moving forward.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1>About SysInteractive</h1>
          <p>
            Nearly two decades of keeping businesses secure, connected, and
            moving forward.
          </p>
        </div>
      </section>

      {/* ===== ABOUT GRID ===== */}
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

      {/* ===== VALUES ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Why choose us</span>
            <h2>What working with us feels like</h2>
            <p>
              We built SysInteractive on the belief that IT should make your
              business simpler, not more complicated.
            </p>
          </div>
          <div className="val-grid">
            <div className="val reveal">
              <div className="vi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="m11 17 2 2a1 1 0 0 0 1.4-1.4" />
                  <path d="m14 16 2.5 2.5a1 1 0 0 0 1.4-1.4L15 14" />
                  <path d="m17 14 2.4 2.4a1 1 0 0 0 1.4-1.4l-3.4-3.4a2 2 0 0 0-2.8 0l-1.2 1.2" />
                  <path d="M3 12 8 7l4 4" />
                </svg>
              </div>
              <h4>One accountable partner</h4>
              <p>
                Support, security, cloud, and software under one roof, so
                nothing falls between vendors.
              </p>
            </div>
            <div className="val reveal">
              <div className="vi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
                </svg>
              </div>
              <h4>Practical, not buzzwords</h4>
              <p>
                We recommend what solves your problem, in plain language,
                with the trade-offs spelled out.
              </p>
            </div>
            <div className="val reveal">
              <div className="vi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="m4.9 4.9 4.2 4.2M14.9 14.9l4.2 4.2M14.9 9.1l4.2-4.2M4.9 19.1l4.2-4.2" />
                </svg>
              </div>
              <h4>Always-on support</h4>
              <p>
                A real, monitored help desk around the clock, with people who
                know your setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="block stats">
        <div className="wrap">
          <div className="stat-grid">
            <div className="s reveal">
              <b>
                20<span className="plus">+</span>
              </b>
              <span>Years in business</span>
            </div>
            <div className="s reveal">
              <b>
                130<span className="plus">+</span>
              </b>
              <span>Certified engineers</span>
            </div>
            <div className="s reveal">
              <b>
                500<span className="plus">+</span>
              </b>
              <span>Projects delivered</span>
            </div>
            <div className="s reveal">
              <b>
                98<span className="plus">%</span>
              </b>
              <span>Client retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Our team</span>
            <h2>The people behind your systems</h2>
            <p>
              Certified engineers, developers, and strategists who treat your
              technology like their own.
            </p>
          </div>
          <div className="team-grid">
            {[
              { photo: "/images/team/team1.jpg", name: "Alex Rivera", role: "Founder & CEO" },
              { photo: "/images/team/team2.jpg", name: "Jordan Chen", role: "Head of Engineering" },
              { photo: "/images/team/team3.jpg", name: "Sam Patel", role: "Security Lead" },
              { photo: "/images/team/team4.jpg", name: "Maria Okafor", role: "Marketing Director" },
            ].map((m) => (
              <div className="tm reveal" key={m.name}>
                <div className="ph">
                  <img src={m.photo} alt={m.name} />
                </div>
                <div className="tb">
                  <h4>{m.name}</h4>
                  <small>{m.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Want to see if we&apos;re the right fit?</h2>
            <p>
              Book a free, no-pressure consultation and we&apos;ll walk
              through your setup together.
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
