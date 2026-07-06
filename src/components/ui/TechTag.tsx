type TechTagProps = {
  label: string;
};

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
      {label}
    </span>
  );
}
