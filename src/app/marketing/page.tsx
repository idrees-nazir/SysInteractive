import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO — SysInteractive",
  description:
    "Get found, get clicks, get customers — data-led SEO, paid ads, and content that turn visitors into leads.",
};

export default function MarketingPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Marketing</span>
          </div>
          <h1>Digital Marketing &amp; SEO</h1>
          <p>
            Get found, get clicks, get customers — data-led SEO, paid ads,
            and content that turn visitors into leads.
          </p>
        </div>
      </section>

      {/* ===== SERVICES + GROWTH ===== */}
      <section className="block">
        <div className="wrap">
          <div className="svc-grid">
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
                </svg>
              </div>
              <h3>Search Engine Optimization</h3>
              <p>
                On-page, technical, and local SEO that lifts rankings and
                brings in steady, high-intent organic traffic.
              </p>
              <Link href="/marketing" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <h3>Paid Advertising (PPC)</h3>
              <p>
                Google, Meta, and LinkedIn campaigns managed for real ROI,
                every dollar tracked, tested, and optimized.
              </p>
              <Link href="/marketing" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                </svg>
              </div>
              <h3>Social Media Marketing</h3>
              <p>
                On-brand social presence and community management that
                builds trust and keeps you top of mind.
              </p>
              <Link href="/marketing" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
              <h3>Content Marketing</h3>
              <p>
                Blogs, landing pages, and copy that rank, inform, and
                convert, written for your audience.
              </p>
              <Link href="/marketing" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="svc reveal">
              <div className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </div>
              <h3>Email &amp; Automation</h3>
              <p>
                Newsletters, drip campaigns, and lead nurturing that keep
                prospects engaged and bring customers back.
              </p>
              <Link href="/marketing" className="more">
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
              <h3>Analytics &amp; Reporting</h3>
              <p>
                Clear dashboards and monthly reports that show exactly
                what&apos;s working, so budget goes where it performs.
              </p>
              <Link href="/marketing" className="more">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
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
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="block tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow c">Our approach</span>
            <h2>How we grow your traffic</h2>
            <p>
              No vanity metrics. Every activity ties back to leads, revenue,
              and return on your spend.
            </p>
          </div>
          <div className="steps5">
            <div className="pstep reveal">
              <div className="pn">01</div>
              <h4>Audit</h4>
              <p>We review your site, rankings, and analytics to find the biggest opportunities.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">02</div>
              <h4>Strategy</h4>
              <p>A clear plan across SEO, ads, and content, tied to real business goals.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">03</div>
              <h4>Execute</h4>
              <p>Campaigns, content, and optimizations launched and managed by specialists.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">04</div>
              <h4>Measure</h4>
              <p>Transparent tracking of traffic, leads, and ROI, every step of the way.</p>
            </div>
            <div className="pstep reveal">
              <div className="pn">05</div>
              <h4>Refine</h4>
              <p>Monthly reviews and adjustments so results keep improving over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Want more of the right traffic?</h2>
            <p>Get a free marketing audit and we&apos;ll show you where the quickest wins are.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">
                Get a free audit
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
