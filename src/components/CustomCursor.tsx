"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1080px)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onPointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    window.addEventListener("pointermove", onPointerMove);

    const follow = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(follow);
    };
    rafId = requestAnimationFrame(follow);

    const onEnter = () => ring.classList.add("big");
    const onLeave = () => ring.classList.remove("big");

    const attach = () => {
      const els = document.querySelectorAll('[data-cur="big"], a, button');
      els.forEach((el) => {
        el.addEventListener("pointerenter", onEnter);
        el.addEventListener("pointerleave", onLeave);
      });
      return els;
    };

    // Attach on mount, and again shortly after in case content mounted late.
    let els = attach();
    const retry = setTimeout(() => {
      els.forEach((el) => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      });
      els = attach();
    }, 300);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(retry);
      window.removeEventListener("pointermove", onPointerMove);
      els.forEach((el) => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cur ring" ref={ringRef} />
      <div className="cur dot" ref={dotRef} />
    </>
  );
}
