"use client";
import { useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text }) {
  const elementRef = useRef(null);
  const intervalRef = useRef(null);

  const scrambleText = (targetText) => {
    const el = elementRef.current;
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      el.innerText = el.innerText
        .split("")
        .map((char, index) => {
          if (index < iteration) return targetText[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span
      ref={elementRef}
      data-value={text}
      onMouseEnter={() => scrambleText(text)}
      onMouseLeave={() => scrambleText(text)}
    >
      {text}
    </span>
  );
}
