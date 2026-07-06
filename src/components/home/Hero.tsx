import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm text-accent">
          &gt;_ Full-Service Development Agency
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          We Build Software
          <br />
          <span className="text-accent">
            That Scales
            <span className="animate-[blink_1s_steps(1)_infinite]">_</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          From web and mobile to backend and cloud — we deliver end-to-end
          development solutions in every language, on every platform.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Start Your Project</Button>
          <Button href="/portfolio" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
