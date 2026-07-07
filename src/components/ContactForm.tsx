"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="cform rv" onSubmit={handleSubmit}>
      <div className="cf-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" placeholder="John Doe" required />
      </div>

      <div className="cf-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" placeholder="john@company.com" required />
      </div>

      <div className="cf-field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Project inquiry" required />
      </div>

      <div className="cf-field">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          required
        />
      </div>

      <button type="submit" className="cf-submit" disabled={status === "submitting"}>
        {status === "submitting" ? <span className="cf-spinner" /> : "Send Message →"}
      </button>

      {status === "success" && (
        <p className="cf-msg cf-ok">
          ✓ Message sent — we&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="cf-msg cf-err">
          Something went wrong — please email us directly.
        </p>
      )}
    </form>
  );
}
