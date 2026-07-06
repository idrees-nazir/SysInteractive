"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // ===== HERO INTRO =====
    const introTimer = setTimeout(() => {
      const mega = document.getElementById("mega");
      mega?.classList.add("go");
    }, 200);

    // ===== NAV SCROLL + ACTIVE LINK =====
    const nav = document.getElementById("nav");
    const secs = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], header[id]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nlinks a"),
    );

    const onNavScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
      const y = window.scrollY + 160;
      let cur = "home";
      secs.forEach((s) => {
        if (s.offsetTop <= y) cur = s.id;
      });
      navLinks.forEach((a) =>
        a.classList.toggle("on", a.getAttribute("href") === "#" + cur),
      );
    };
    window.addEventListener("scroll", onNavScroll, { passive: true });
    onNavScroll();

    // ===== PROCESS SCROLL SYNC =====
    const pItems = Array.from(
      document.querySelectorAll<HTMLElement>("#procList .pi"),
    );
    const pNum = document.getElementById("procNum");

    const onProcScroll = () => {
      const mid = window.innerHeight * 0.5;
      let act = 0;
      pItems.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        if (r.top < mid) act = i;
      });
      pItems.forEach((p, i) => p.classList.toggle("active", i === act));
      if (pNum) pNum.textContent = String(act + 1).padStart(2, "0");
    };
    window.addEventListener("scroll", onProcScroll, { passive: true });
    onProcScroll();

    // ===== REVEAL + COUNTERS =====
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          entry.target
            .querySelectorAll<HTMLElement>("[data-count]")
            .forEach((n) => {
              if (n.dataset.done) return;
              n.dataset.done = "1";
              const end = +(n.dataset.count ?? "0");
              const suf = n.dataset.suf || "";
              let c = 0;
              const st = Math.max(1, Math.round(end / 55));
              const iv = setInterval(() => {
                c += st;
                if (c >= end) {
                  c = end;
                  clearInterval(iv);
                }
                n.textContent = c + suf;
              }, 26);
            });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    document
      .querySelectorAll<HTMLElement>(".rv, [data-count]")
      .forEach((el) => io.observe(el));

    return () => {
      clearTimeout(introTimer);
      window.removeEventListener("scroll", onNavScroll);
      window.removeEventListener("scroll", onProcScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
