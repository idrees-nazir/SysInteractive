import { Card } from "@/components/ui/Card";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
};

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alex Morgan",
    role: "Lead Engineer",
    bio: "15+ years in full-stack development. Previously at AWS and Stripe.",
  },
  {
    name: "Priya Sharma",
    role: "Mobile Lead",
    bio: "React Native and Flutter specialist. Shipped apps with 1M+ downloads.",
  },
  {
    name: "Daniel Kim",
    role: "DevOps Architect",
    bio: "Kubernetes and cloud infrastructure expert. Certified AWS Solutions Architect.",
  },
];

export function TeamMembers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {teamMembers.map((member) => (
        <Card key={member.name} className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-mono text-xl font-bold text-accent">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="mb-2 text-sm text-accent">{member.role}</p>
          <p className="text-sm text-text-secondary">{member.bio}</p>
        </Card>
      ))}
    </div>
  );
}
