import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

export function FeaturedPortfolio() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Work"
          subtitle="Recent projects we're proud of"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
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
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
