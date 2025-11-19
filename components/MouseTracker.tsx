"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseTracker() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const moveHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);
  const initialEventRef = useRef<PointerEvent | null>(null);
  const [mountedArrow, setMountedArrow] = useState(false);
  const [strokeColor, setStrokeColor] = useState<string>("");

  useEffect(() => {
    const updateColor = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryColor = rootStyles
        .getPropertyValue("--primary-color")
        .trim();
      setStrokeColor(primaryColor || "#703bf7");
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
    const onFirstMove = (e: PointerEvent) => {
      initialEventRef.current = e;
      setMountedArrow(true);
    };

    window.addEventListener("pointermove", onFirstMove, {
      once: true,
      capture: true,
    });

    return () => {
      window.removeEventListener(
        "pointermove",
        onFirstMove as any,
        { capture: true } as any
      );
    };
  }, []);

  useEffect(() => {
    if (!mountedArrow) return;
    const arrowEl = containerRef.current;
    if (!arrowEl) return;

    const SIZE = 27;
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const initial = initialEventRef.current;
    if (initial) {
      const angle =
        (Math.atan2(
          initial.clientY - window.innerHeight / 2,
          initial.clientX - window.innerWidth / 2
        ) *
          180) /
        Math.PI;

      arrowEl.style.left = `${initial.clientX}px`;
      arrowEl.style.top = `${initial.clientY}px`;
      arrowEl.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      arrowEl.style.opacity = "1";
    }

    const handleMove = (e: MouseEvent) => {
      const angle =
        (Math.atan2(
          e.clientY - window.innerHeight / 2,
          e.clientX - window.innerWidth / 2
        ) *
          180) /
        Math.PI;

      arrowEl.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      arrowEl.style.left = `${e.clientX}px`;
      arrowEl.style.top = `${e.clientY}px`;
    };

    moveHandlerRef.current = handleMove;
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      if (moveHandlerRef.current) {
        window.removeEventListener("mousemove", moveHandlerRef.current as any);
        moveHandlerRef.current = null;
      }
      document.body.style.cursor = prevCursor || "auto";
    };
  }, [mountedArrow]);

  useEffect(() => {
    const targets = document.querySelectorAll(".arrow-hover");

    const handleEnter = () => setStrokeColor("#fff");
    const handleLeave = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryColor = rootStyles
        .getPropertyValue("--primary-color")
        .trim();
      setStrokeColor(primaryColor || "#703bf7");
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  if (!mountedArrow) return null;

  return (
    <>
      <style jsx>{`
        #ArrowIconContainer {
          position: fixed;
          left: 0;
          top: 0;
          width: 27px;
          height: 27px;
          pointer-events: none;
          transform-origin: center;
          opacity: 0;
          transition: opacity 160ms linear;
          z-index: 9999;
        }
        #ArrowIcon {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>

      <div className="max-lg:hidden" id="ArrowIconContainer" ref={containerRef}>
        <svg
          id="ArrowIcon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 12 L18 12 M12 6 L18 12 L12 18"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
