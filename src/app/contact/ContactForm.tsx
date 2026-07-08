"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "This form isn't configured yet. Please email hello@sysinteractive.com directly."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New enquiry from SysInteractive website");
    formData.append("from_name", "SysInteractive Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again or email us directly."
      );
    }
  }

  return (
    <div className="form-card reveal">
      {status === "success" && (
        <div className="form-success show">
          Thanks — your message has been received. We&apos;ll get back to
          you within one business day.
        </div>
      )}
      {status === "error" && <div className="form-error">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="fg">
            <label htmlFor="fn">Full name</label>
            <input id="fn" name="name" required placeholder="Jane Doe" />
          </div>
          <div className="fg">
            <label htmlFor="fc">Company</label>
            <input id="fc" name="company" placeholder="Acme Inc." />
          </div>
        </div>
        <div className="form-row">
          <div className="fg">
            <label htmlFor="fe">Email</label>
            <input
              id="fe"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
            />
          </div>
          <div className="fg">
            <label htmlFor="fp">Phone</label>
            <input
              id="fp"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
        <div className="fg">
          <label htmlFor="fs">How can we help?</label>
          <select id="fs" name="service" defaultValue="General enquiry">
            <option>General enquiry</option>
            <option>IT Management &amp; Support</option>
            <option>Cyber Security</option>
            <option>Cloud Computing</option>
            <option>Software Development</option>
            <option>Web &amp; Mobile App</option>
            <option>Digital Marketing &amp; SEO</option>
          </select>
        </div>
        <div className="fg">
          <label htmlFor="fb">Budget</label>
          <select id="fb" name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
        <div className="fg">
          <label htmlFor="fm">Message</label>
          <textarea
            id="fm"
            name="message"
            required
            placeholder="Tell us a little about your project or challenge..."
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <p className="form-note">
          We respond to every enquiry within one business day.
        </p>
      </form>
    </div>
  );
}
