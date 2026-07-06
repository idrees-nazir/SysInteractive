import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SysInteractive",
  description:
    "Get in touch with SysInteractive. Tell us about your project and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? We'd love to hear about it."
        />

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Email
              </h3>
              <a
                href="mailto:hello@sysinteractive.com"
                className="text-lg text-text-secondary transition-colors hover:text-foreground"
              >
                hello@sysinteractive.com
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  X / Twitter
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-accent">
                &gt;_ Response Time
              </h3>
              <p className="text-text-secondary">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
