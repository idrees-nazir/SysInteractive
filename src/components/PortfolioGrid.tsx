"use client";

import { useState } from "react";

type Project = {
  size: string;
  bg: string;
  cat: string;
  title: string;
  desc: string;
  url: string;
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="pf-grid">
        {projects.map((p) => (
          <div
            className={`pf ${p.size} rv`}
            data-cur="big"
            key={p.title}
            role="button"
            tabIndex={0}
            onClick={() => setActive(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(p);
            }}
          >
            <div className="bgv" style={{ background: p.bg }} />
            <span className="arrow">→</span>
            <div className="meta">
              <span className="cat">{p.cat}</span>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="pf-modal-overlay" onClick={() => setActive(null)}>
          <div className="pf-modal glass" onClick={(e) => e.stopPropagation()}>
            <button
              className="pf-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="bgv" style={{ background: active.bg }} />
            <span className="cat">{active.cat}</span>
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
            <a
              className="mag"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
