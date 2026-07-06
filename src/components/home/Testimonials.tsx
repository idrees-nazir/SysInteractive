import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "SysInteractive delivered our platform ahead of schedule. Their technical depth across the full stack is rare to find.",
    name: "Sarah Chen",
    company: "TechVenture Inc.",
  },
  {
    quote:
      "From the initial architecture to deployment, they handled everything. Our API handles 10x the traffic we planned for.",
    name: "Marcus Rivera",
    company: "LogiFlow",
  },
  {
    quote:
      "Professional, responsive, and genuinely skilled. They turned our rough concept into a polished product.",
    name: "Emily Nakamura",
    company: "HealthSync",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What Clients Say"
          subtitle="Trusted by teams building ambitious products"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <blockquote className="mb-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-accent">{t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
