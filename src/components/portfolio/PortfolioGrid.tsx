"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";
import { CategoryFilter } from "./CategoryFilter";

export function PortfolioGrid() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <>
      <CategoryFilter active={category} onChange={setCategory} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
