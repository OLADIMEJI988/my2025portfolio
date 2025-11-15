"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import MouseTracker from "@/components/MouseTracker";
import CursorGlow from "@/components/CursorGlow";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsArsenal from "@/components/SkillsArsenal";
import HoverTextSwap from "@/components/HoverTextSwap";
import OriginStory from "@/components/OriginStory";

export default function Home() {
  const rotatingGroupRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY * 0.15;
      if (rotatingGroupRef.current) {
        rotatingGroupRef.current.setAttribute(
          "transform",
          `rotate(${rotation} 60 60)`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative bg-lines overflow-hidden font-sans h-[1060px] mb-40">
        <MouseTracker />
        <CursorGlow />
        <Header />

        <div
          id="cursor-glow"
          className="pointer-events-none fixed inset-0 z-1"
        ></div>

        {/* SVG background */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
          <svg
            width="850"
            height="850"
            viewBox="0 0 120 120"
            fill="none"
            className="text-primary"
          >
            {/* static circles */}
            <circle
              cx="60"
              cy="60"
              r="55"
              stroke="var(--primary-color)"
              strokeWidth="1"
              opacity="0.4"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="60"
              cy="60"
              r="40"
              stroke="var(--primary-color)"
              strokeWidth="1"
              opacity="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="60"
              cy="60"
              r="25"
              stroke="var(--primary-color)"
              strokeWidth="1"
              opacity="0.6"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="60"
              cy="60"
              r="2.5"
              fill="var(--primary-color)"
              className="animate-pulse"
            ></circle>

            {/* rotating lines */}
            <g ref={rotatingGroupRef}>
              <line
                x1="60"
                y1="5"
                x2="60"
                y2="20"
                stroke="var(--primary-color)"
                strokeWidth="1"
                opacity="0.7"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="60"
                y1="100"
                x2="60"
                y2="115"
                stroke="var(--primary-color)"
                strokeWidth="1"
                opacity="0.7"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="5"
                y1="60"
                x2="20"
                y2="60"
                stroke="var(--primary-color)"
                strokeWidth="1"
                opacity="0.7"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="100"
                y1="60"
                x2="115"
                y2="60"
                stroke="var(--primary-color)"
                strokeWidth="1"
                opacity="0.7"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </div>

        {/* center text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4 -mt-14">
          <div className="flex gap-1 items-center mb-8">
            <div className="bg-(--primary-color) h-2 w-2 rounded-full animate-pulse"></div>
            <p className="text-(--primary-color) text-[8px] tracking-wide">
              TARGET LOCKEDIN
            </p>
          </div>

          <div className="flex items-center gap-5 mb-[35px]">
            <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-(--primary-color)"></div>
            <p className="font-extralight text-5xl">
              SHOLANKE <span className="text-(--primary-color)">OLADIMEJI</span>
            </p>
            <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-(--primary-color)"></div>
          </div>

          <div className="flex items-center gap-3 mb-[35px]">
            <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-(--primary-color)"></div>
            <div className="px-4 py-2 text-(--primary-color) rounded-full text-xs bg-transparent backdrop-blur-xs tracking-wider border border-(--primary-color)/50">
              CODENAME:SPARK
            </div>
            <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-(--primary-color)"></div>
          </div>

          <div className="font-light flex flex-col items-center gap-[3px] text-[#888] mb-[66px]">
            <p>
              <span className="text-(--primary-color)">Frontend Developer </span>
              crafting engaging,{" "}
              <span className="text-(--primary-color)">
                high-performance web experiences
              </span>
            </p>
            <p>
              with <span className="text-(--primary-color)">3+ years</span> building{" "}
              <span className="text-(--primary-color)">responsive</span>,{" "}
              <span className="text-(--primary-color)">user-centered</span> interfaces
            </p>
          </div>

          <div className="flex gap-6 tracking-wide mb-[50px]">
            <button className="bg-(--primary-color) text-(--primary-color-dark) px-5 py-2.5 rounded-lg cursor-none flex items-center">
              <p>Download CV</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-3 group-hover:translate-x-2 transition-transform"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>

            <button className="bg-(--primary-color) text-(--primary-color-dark) px-5 py-2.5 rounded-lg flex items-center cursor-none">
              <p>Engage Target</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-3 group-hover:translate-x-2 transition-transform"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>

            <button className="px-5 py-2.5 text-(--primary-color) rounded-lg bg-transparent backdrop-blur-xs border border-(--primary-color)/50 cursor-none flex items-center">
              <p>Mission Brief</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-3 group-hover:translate-x-2 transition-transform"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-56 font-light">
            <div className="space-y-1">
              <p className="text-(--primary-color) text-4xl">3+</p>
              <p className="text-[12px] text-[#888]">Years Active</p>
              <p className="text-[10px] text-[#636262]">in field</p>
            </div>

            <div className="space-y-1">
              <p className="text-(--primary-color) text-4xl">10+</p>
              <p className="text-[12px] text-[#888]">Missions</p>
              <p className="text-[10px] text-[#636262]">completed</p>
            </div>

            <div className="space-y-1">
              <p className="text-(--primary-color) text-4xl">3+</p>
              <p className="text-[12px] text-[#888]">Companies</p>
              <p className="text-[10px] text-[#636262]">served</p>
            </div>
          </div>
        </div>

        <div className="text-[11px] absolute bottom-2 w-full flex flex-col justify-center items-center">
          <p className="text-[#888] mb-2 tracking-wide">SCROLL TO EXPLORE</p>
          <div className="flex flex-col items-center gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary/60 rotate-90"
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="var(--primary-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary/60 rotate-90"
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="var(--primary-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>

            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary/60 rotate-90"
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="var(--primary-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <ProjectShowcase />

      <SkillsArsenal />

      <OriginStory />
    </>
  );
}
