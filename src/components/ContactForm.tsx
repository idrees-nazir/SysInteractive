"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

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
    <motion.form
      className="cform"
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
    >
      <motion.div className="cf-field" variants={fieldVariants}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" placeholder="John Doe" required />
      </motion.div>

      <motion.div className="cf-field" variants={fieldVariants}>
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" placeholder="john@company.com" required />
      </motion.div>

      <motion.div className="cf-field" variants={fieldVariants}>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Project inquiry" required />
      </motion.div>

      <motion.div className="cf-field" variants={fieldVariants}>
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        className="cf-submit"
        disabled={status === "submitting"}
        variants={fieldVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="sending"
              className="cf-spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          ) : (
            <motion.span
              key="label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Send Message →
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            className="cf-msg cf-ok"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            ✓ Message sent — we&apos;ll get back to you within 24 hours.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="cf-msg cf-err"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            Something went wrong — please email us directly.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
