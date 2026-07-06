import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Story } from "@/components/about/Story";
import { TeamMembers } from "@/components/about/TeamMember";

export const metadata: Metadata = {
  title: "About — SysInteractive",
  description:
    "Learn about SysInteractive — our mission, our team, and why we build software differently.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <section className="mb-20">
          <Story />
        </section>

        <section>
          <SectionHeading
            title="The Team"
            subtitle="Small team, big impact"
          />
          <TeamMembers />
        </section>
      </div>
    </div>
  );
}
