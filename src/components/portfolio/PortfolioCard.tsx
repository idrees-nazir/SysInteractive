import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/data/portfolio";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-video">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </Card>
  );
}
