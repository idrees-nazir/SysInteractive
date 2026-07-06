const categories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
];

type CategoryFilterProps = {
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            active === cat.value
              ? "bg-accent text-background"
              : "border border-border-subtle text-text-secondary hover:border-accent hover:text-accent"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
