"use client";

import PriorityMissions from "./PriorityMissions";
import Project from "./Project";

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col items-center pt-5 font-sans">
      <div className="flex items-center gap-2 px-4 py-2 text-[#703bf7] rounded-full text-[8px] bg-[#703bf7]/5 backdrop-blur-xs tracking-wider border border-[#703bf7]/50">
        <div className="w-1.5 h-1.5 rounded-full bg-[#703bf7]"></div>
        <p>MISSION PORTFOLIO</p>
      </div>

      <p className="text-5xl tracking-wide my-5 font-extralight">
        PROJECT <span className="text-[#703bf7] font-normal">SHOWCASE</span>
      </p>

      <div className="text-[#888] w-[350px] text-sm text-center leading-[25px]">
        <span className="text-[#703bf7]">3+ years</span> of building{" "}
        <span className="text-[#703bf7]">precision-engineered solutions</span>{" "}
        across Health, NFT, Real Estate and scalable systems
      </div>

      <div className="flex gap-10 tracking-wide">
        <div className="space-y-1 text-center my-5">
          <p className="text-[#703bf7] text-xl">10+</p>
          <p className="text-[9px] text-[#888]">MISSIONS COMPLETED</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-[#703bf7] text-xl">2</p>
          <p className="text-[9px] text-[#888]">PRIORITY LEVELS</p>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 text-[#703bf7] rounded-full text-[8px] bg-[#703bf7]/5 backdrop-blur-xs tracking-wider border border-[#703bf7]/50 my-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#703bf7]"></div>
        <p>MISSION CONTROL</p>
      </div>

      <p className="text-2xl font-extralight tracking-wide">
        Flagship <span className="text-[#703bf7] font-normal">Operations</span>
      </p>
      <p className="text-[10px] tracking-wider text-[#888]">
        Current active missions with highest strategic value
      </p>

      <div className="px-6 py-2 rounded-lg bg-[#703bf7]/2 tracking-wide border border-[#703bf7]/50 my-10 pb-10 w-[90%] relative">
        <Project />
      </div>

      <div className="mb-6 font-mono flex gap-4">
        <button className="relative hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#703bf7]/20 hover:text-[#703bf7] hover:transition-all hover:duration-300 flex items-center border border-[#1a1a1a] bg-[#0f0f0f]/30 pl-2 pr-[11px] py-2 rounded-lg gap-1 cursor-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left w-4 h-4 transition-transform duration-300"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <p className="text-sm">Prev</p>
        </button>

        <div className="flex items-center border border-[#703bf7]/30 bg-[#0f0f0f]/30 px-4 rounded-full gap-2">
          <div className="h-[11px] w-6 bg-[#703bf7] rounded-full"></div>
          <div className="h-2.5 w-2.5 bg-[#323232] rounded-full"></div>
          <div className="h-2.5 w-2.5 bg-[#323232] rounded-full"></div>
          <div className="h-2.5 w-2.5 bg-[#323232] rounded-full"></div>
        </div>

        <button className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#703bf7]/20 hover:text-[#703bf7] hover:transition-all hover:duration-300 flex items-center border border-[#1a1a1a] bg-[#0f0f0f]/30 pl-3 pr-2 py-2 rounded-lg gap-1 cursor-none">
          <p className="text-sm">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      <button className="hover:scale-105 transition-all duration-300 mb-10 flex items-center border border-[#703bf7]/30 bg-[#0f0f0f]/30 px-3 py-2 rounded-full gap-2 cursor-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5f5f5f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-play w-3 h-3"
          aria-hidden="true"
        >
          <polygon points="6 3 20 12 6 21 6 3"></polygon>
        </svg>
        <p className="text-[11px] text-[#5f5f5f]">Pause Auto-Play</p>
      </button>

      <div className="flex items-center gap-2 px-4 py-2 text-[#703bf7] rounded-full text-[11px] bg-[#703bf7]/5 backdrop-blur-xs tracking-wider border border-[#703bf7]/50 mt-16 mb-10">
        <div className="w-[7px] h-[7px] rounded-full bg-[#703bf7]"></div>
        <p>PRIORITY MISSIONS</p>
      </div>

      <div className="flex w-[90%] gap-6">
        <PriorityMissions />
        <PriorityMissions />
      </div>

      <div className="flex w-[90%] gap-6">
        <PriorityMissions />
        <PriorityMissions />
      </div>

      <div className="flex items-center gap-6 mt-10 bg-[#0f0f0f]/30 tracking-wide border border-[#703bf7]/40 px-5 py-4 rounded-xl">
        <div className="flex flex-col items-center">
          <p className="text-[#703bf7]">22</p>
          <p className="text-[#888] text-[10px]">TOTAL MISSIONS</p>
        </div>

        <div className="h-6 w-px bg-[#703bf7]"></div>

        <div className="flex flex-col items-center">
          <p className="text-[#703bf7]">2</p>
          <p className="text-[#888] text-[10px]">PRIORITY LEVELS</p>
        </div>

        <div className="h-6 w-px bg-[#703bf7]"></div>

        <div className="flex flex-col items-center">
          <p className="text-[#703bf7]">20</p>
          <p className="text-[#888] text-[10px]">COMPLETED</p>
        </div>
      </div>

      <div className="font-mono text-[11px] flex items-center gap-4 mb-10 mt-7 bg-[#703bf7]/8 tracking-wider border border-[#703bf7]/40 px-6 py-4 rounded-2xl">
      <div className="w-2 h-2 bg-[#703bf7] rounded-full animate-pulse"></div>
        <p>22 MISSIONS</p>
      </div>
    </div>
  );
}
