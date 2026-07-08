"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Replicates the reference site's vanilla-JS scroll reveal behaviour:
 * every element with the `.reveal` class fades/slides into view the
 * first time it enters the viewport, with a small stagger based on
 * its position in the DOM.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal,.reveal-left,.reveal-right,.reveal-zoom,.reveal-rotate")
    );

    if (elements.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 3) * 90, 220)}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
    // Re-runs whenever `pathname` changes so newly-mounted page content
    // gets observed too.
  }, [pathname]);

  return null;
}
