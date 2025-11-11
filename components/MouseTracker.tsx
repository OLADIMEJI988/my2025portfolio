"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseTracker() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const moveHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);
  const initialEventRef = useRef<PointerEvent | null>(null);
  const [mountedArrow, setMountedArrow] = useState(false);

  useEffect(() => {
    // First pointermove listener (capturing, once): mount the arrow only after user moves
    const onFirstMove = (e: PointerEvent) => {
      initialEventRef.current = e; // save first event so we can position immediately after mount
      // mount arrow (triggers render)
      setMountedArrow(true);
      // remove this listener automatically because we used { once: true } below
    };

    window.addEventListener("pointermove", onFirstMove, { once: true, capture: true });

    return () => {
      // In case component unmounts before first move
      window.removeEventListener("pointermove", onFirstMove as any, { capture: true } as any);
    };
  }, []);

  useEffect(() => {
    if (!mountedArrow) return;

    const arrowEl = containerRef.current;
    if (!arrowEl) return;

    // Use a fixed size matching your previous setup
    const SIZE = 27;

    // Show/hide native cursor after arrow exists
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    // Position arrow immediately based on the saved initial event (if present)
    const initial = initialEventRef.current;
    if (initial) {
      const angle = (Math.atan2(
        initial.clientY - window.innerHeight / 2,
        initial.clientX - window.innerWidth / 2
      ) * 180) / Math.PI;

      arrowEl.style.left = `${initial.clientX}px`;
      arrowEl.style.top = `${initial.clientY}px`;
      arrowEl.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      arrowEl.style.opacity = "1";
    }

    // Fast DOM-updating mousemove handler (no React state here)
    const handleMove = (e: MouseEvent) => {
      // compute angle relative to screen center (matches your original)
      const angle = (Math.atan2(
        e.clientY - window.innerHeight / 2,
        e.clientX - window.innerWidth / 2
      ) * 180) / Math.PI;

      // apply transform/position directly to avoid reflows/jank
      arrowEl.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      arrowEl.style.left = `${e.clientX}px`;
      arrowEl.style.top = `${e.clientY}px`;
    };

    // Store and attach
    moveHandlerRef.current = handleMove;
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      // cleanup
      if (moveHandlerRef.current) {
        window.removeEventListener("mousemove", moveHandlerRef.current as any);
        moveHandlerRef.current = null;
      }
      document.body.style.cursor = prevCursor || "auto";
    };
  }, [mountedArrow]);

  // Render nothing until we mount the arrow — zero DOM = no flash
  if (!mountedArrow) return null;

  return (
    <>
      <style jsx>{`
        /* kept very small and invisible until mounted (we render only after mount) */
        #ArrowIconContainer {
          position: fixed;
          left: 0;
          top: 0;
          width: 27px;
          height: 27px;
          pointer-events: none;
          transform-origin: center;
          opacity: 0; /* will be set to 1 in effect after positioning */
          transition: opacity 160ms linear;
          z-index: 9999;
        }
        #ArrowIcon {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>

      <div id="ArrowIconContainer" ref={containerRef}>
        <svg
          id="ArrowIcon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 12 L18 12 M12 6 L18 12 L12 18"
            fill="none"
            stroke="#703bf7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
