import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — SysInteractive",
  description:
    "Explore our portfolio of web, mobile, backend, and DevOps projects.",
};

export default function PortfolioPage() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Projects we've delivered across industries and tech stacks"
        />
        <PortfolioGrid />
      </div>
    </section>
  );
}
