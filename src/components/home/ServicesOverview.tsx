import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const iconMap: Record<string, string> = {
  globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  smartphone: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  server: "M21.75 17.25v-.228a4.328 4.328 0 0 0-.12-.7 4.5 4.5 0 0 0-3.025-3.025 4.328 4.328 0 0 0-.7-.12h-.228M21.75 17.25V21m0-3.75H18M3.75 17.25h.228c.237 0 .473.024.7.12a4.5 4.5 0 0 1 3.025 3.025c.096.227.12.463.12.7v.228M3.75 17.25V21m0-3.75H6m15.75-6.75v-.228a4.328 4.328 0 0 0-.12-.7A4.5 4.5 0 0 0 18.605 6.5a4.328 4.328 0 0 0-.7-.12H17.25m4.5 4.12V6.75m0 3.75H18m-14.25 0h.228c.237 0 .473-.024.7-.12A4.5 4.5 0 0 0 7.703 7.38c.096-.227.12-.463.12-.7V6.45M3.75 10.5V6.75m0 3.75H6",
  cloud: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  palette: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z",
  code: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
};

export function ServicesOverview() {
  const featured = services.slice(0, 4);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end development services across all platforms and languages"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <Card key={service.id}>
              <svg
                className="mb-4 h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={iconMap[service.icon] || iconMap.code}
                />
              </svg>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
