type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
