import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";

export const metadata: Metadata = {
  title: "Services — SysInteractive",
  description:
    "Full-service software development: web, mobile, backend, DevOps, UI/UX, and custom solutions.",
};

export default function ServicesPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need to build, ship, and scale your software"
        />
        <ServiceGrid />
      </div>
    </section>
  );
}
