"use client";

import { useEffect, useRef } from "react";

const TECHS = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "Flutter", color: "#02569B" },
  { name: "Swift", color: "#F05138" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "React Native", color: "#61DAFB" },
  { name: "PHP", color: "#777BB4" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Angular", color: "#DD0031" },
  { name: "Go", color: "#00ADD8" },
  { name: "Rust", color: "#DEA584" },
  { name: "Java", color: "#ED8B00" },
  { name: "C#", color: "#512BD4" },
  { name: ".NET", color: "#512BD4" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0078D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Shopify", color: "#7AB55C" },
  { name: "WordPress", color: "#21759B" },
  { name: "Figma", color: "#F24E1E" },
];

const ROW1 = TECHS.slice(0, 16);
const ROW2 = TECHS.slice(16);

function MarqueeRow({ items, reverse }: { items: typeof TECHS; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf: number;
    let pos = 0;
    const speed = reverse ? 0.35 : -0.35;
    const half = el.scrollWidth / 2;
    const tick = () => {
      pos += speed;
      if (!reverse && pos <= -half) pos += half;
      if (reverse && pos >= 0) pos -= half;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reverse]);

  const doubled = [...items, ...items];

  return (
    <div className="marquee-track" style={{ overflow: "hidden" }}>
      <div ref={ref} className="marquee-inner" style={{ display: "flex", gap: "1rem", width: "max-content" }}>
        {doubled.map((t, i) => (
          <div key={`${t.name}-${i}`} className="tech-pill">
            <span className="tech-dot" style={{ background: t.color }} />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechSlider() {
  return (
    <section className="block tech-slider-section">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow c">Our tech stack</span>
          <h2>Every language. Every platform.</h2>
          <p>
            From frontend frameworks to cloud infrastructure, we build with the
            right tool for every job — across 30+ technologies.
          </p>
        </div>
      </div>
      <div className="marquee-wrap">
        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
      </div>
    </section>
  );
}
