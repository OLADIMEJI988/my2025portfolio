"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  highlight?: string; 
}

export default function AnimatedText({ text, highlight }: AnimatedTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    gsap.set(letters, { y: -50, opacity: 0 });

    gsap.to(letters, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power1.out",
      stagger: {
        each: 0.09,
        from: "center", 
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
        end: "bottom 52%", 
        scrub: 1,
        markers: false, 
      },
    });

    ScrollTrigger.refresh();
  }, [text]);

  const splitText = highlight
    ? text.split(new RegExp(`(${highlight})`, "i"))
    : [text];

  return (
    <h2
      ref={textRef}
      className="flex flex-wrap gap-1 overflow-hidden text-3xl lg:text-6xl my-6 font-extralight font-[Exan]"
    >
      {splitText.map((part, index) => {
        const isHighlight =
          highlight && part.toLowerCase() === highlight.toLowerCase();
        return part.split("").map((char, i) => (
          <span
            key={`${index}-${i}`}
            className={`inline-block ${
              isHighlight ? "text-(--primary-color) font-normal" : ""
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ));
      })}
    </h2>
  );
}
