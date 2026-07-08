"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "running.",
  "growing.",
  "scaling.",
  "winning.",
  "thriving.",
];

export default function TypeWriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 120);
      } else {
        timer = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 60);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor-blink">|</span>
    </span>
  );
}
