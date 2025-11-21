"use client";

import { useEffect, useState } from "react";

type Star = {
  top: string;
  left: string;
  delay: string;
  size: number;
  rotate: number; 
  opacity: number;
};

export default function CombustingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const count = 25; 
    const minDist = 12; 
    const points: { top: number; left: number }[] = [];

    while (points.length < count) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const tooClose = points.some(
        (p) => Math.hypot(p.top - top, p.left - left) < minDist
      );

      if (!tooClose) {
        points.push({ top, left });
      }
    }

    const generated = points.map<Star>((p) => ({
      top: `${p.top}%`,
      left: `${p.left}%`,
      delay: `${(Math.random() * 4).toFixed(4)}s`,
      size: Math.round(Math.random() * 8) + 4,
      rotate: Math.round(Math.random() * 360),
      opacity: +(0.6 + Math.random() * 0.4).toFixed(2),
    }));

    setStars(generated);
  }, []);

  return (
    <>
      <div className="stars-wrap">
        {stars.map((s, i) => (
          <svg
            key={i}
            className="star-svg star-glow"
            width={s.size}
            height={s.size}
            viewBox="0 0 24 24"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              ["--r" as any]: `${s.rotate}deg`,
              ["--o" as any]: `${s.opacity}`,
            }}
            fill="none"
          >
            <path
              d="M12 2.5l2.1 4.5 5 .7-3.6 3.2.9 5-4.4-2.3L7.6 16l.9-5L5 7.9l5-.7L12 2.5z"
              fill="var(--primary-color)"
              className="star-inner"
            />
            <path
              d="M12 6.5l1 2 2 .2-1.5 1.3.4 2-1.8-.9L11 11l.4-2L10 7.2l2-.7L12 6.5z"
              fill="rgba(255,255,255,0.7)"
              opacity="0.45"
            />
          </svg>
        ))}
      </div>
    </>
  );
}
