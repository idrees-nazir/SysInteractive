"use client";

import { useEffect } from "react";

export default function TiltCards() {
  useEffect(() => {
    const tilts = Array.from(document.querySelectorAll<HTMLElement>(".tilt"));
    const cleanups: Array<() => void> = [];

    tilts.forEach((tilt) => {
      const card = tilt.querySelector<HTMLElement>(".svc");
      if (!card) return;

      const onMove = (e: PointerEvent) => {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        tilt.style.transform = `rotateY(${(px - 0.5) * 14}deg) rotateX(${
          (0.5 - py) * 14
        }deg)`;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
      };
      const onLeave = () => {
        tilt.style.transform = "";
      };

      tilt.addEventListener("pointermove", onMove);
      tilt.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        tilt.removeEventListener("pointermove", onMove);
        tilt.removeEventListener("pointerleave", onLeave);
      });
    });

    // Magnetic buttons (.mag)
    const mags = Array.from(document.querySelectorAll<HTMLElement>(".mag"));
    mags.forEach((b) => {
      const onMove = (e: PointerEvent) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${
          (e.clientX - r.left - r.width / 2) * 0.3
        }px,${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      };
      const onLeave = () => {
        b.style.transform = "";
      };
      b.addEventListener("pointermove", onMove);
      b.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        b.removeEventListener("pointermove", onMove);
        b.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
