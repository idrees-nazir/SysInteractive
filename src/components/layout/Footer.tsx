import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <span className="glyph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              Sys<b>Interactive</b>
            </Link>
            <p>
              Managed IT, cybersecurity, cloud, custom software, and digital
              marketing for businesses that depend on their technology.
            </p>
            <div className="foot-contact">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                123 Business Ave, Suite 400, Your City
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                hello@sysinteractive.com
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (555) 010-2020
              </span>
            </div>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <Link href="/services">IT Management</Link>
            <Link href="/services">Cyber Security</Link>
            <Link href="/development">Web &amp; Mobile</Link>
            <Link href="/marketing">SEO &amp; Marketing</Link>
          </div>

          <div className="foot-col news">
            <h5>Newsletter</h5>
            <p>IT insights from our team, straight to your inbox.</p>
            <div className="field">
              <input type="email" placeholder="Your email address" aria-label="Email" />
              <button type="button" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 SysInteractive. All rights reserved.</span>
          <div className="social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21H9z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.9 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.4a4 4 0 0 0 3.2 3.9c-.5.2-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.1a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
