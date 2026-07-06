import { SectionHeading } from "@/components/ui/SectionHeading";

const technologies = [
  "JavaScript", "TypeScript", "Python", "Go", "Rust", "Java",
  "C#", "Swift", "Kotlin", "Dart", "Ruby", "PHP",
  "React", "Next.js", "Vue", "Angular", "Node.js", "Django",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS",
];

export function TechStack() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Our Tech Stack"
          subtitle="We work with the tools that fit the job"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border-subtle bg-surface px-4 py-2 font-mono text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
