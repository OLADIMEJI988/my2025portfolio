"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glowEl = glowRef.current;
    if (!glowEl) return;

    const handleMove = (e: MouseEvent) => {
      const size = 200;
      const x = e.clientX;
      const y = e.clientY;

      glowEl.style.background = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(112,59,247,0.25) 0%, rgba(112,59,247,0) 20%)`;
    };

    const handleLeave = () => {
      glowEl.style.background = "none";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow fixed inset-0 pointer-events-none z-10"
      style={{
        mixBlendMode: "lighten",
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
