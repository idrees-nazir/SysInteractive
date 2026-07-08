"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000, decimals = 0 }: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(eased * end);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? val.toFixed(decimals) : Math.round(val)}{suffix}
    </span>
  );
}
