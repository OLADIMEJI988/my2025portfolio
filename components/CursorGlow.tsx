"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [primaryColorRGB, setPrimaryColorRGB] = useState<string>("112, 59, 247"); // default

  useEffect(() => {
    const updateColor = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const rgb = rootStyles.getPropertyValue("--primary-color-rgb").trim();
      if (rgb) setPrimaryColorRGB(rgb);
    };

    updateColor(); 

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const glowEl = glowRef.current;
    if (!glowEl) return;

    const size = 200;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      glowEl.style.background = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(${primaryColorRGB}, 0.25) 0%, rgba(${primaryColorRGB}, 0) 20%)`;
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
  }, [primaryColorRGB]); 

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
