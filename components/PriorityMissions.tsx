"use client";

import Image from "next/image";
import Rocket from "./Rocket";

export default function PriorityMissions() {
  return (
    <div className="relative w-full h-[470px] py-[41px] px-6 rounded-2xl bg-[#703bf7]/2 tracking-wide border border-[#703bf7]/40 hover:border-[#703bf7]/70">
      <div className="flex gap-2 tracking-wide font-mono">
        <div className="border border-[#703bf7]/50 px-2 py-[9px] rounded-md flex items-center gap-1">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.1 6c-1.1 2.913 -1.9 4.913 -2.4 6c-1.879 4.088 -3.713 6 -6 6c-2.4 0 -4.8 -2.4 -4.8 -6s2.4 -6 4.8 -6c2.267 0 4.135 1.986 6 6c.512 1.102 1.312 3.102 2.4 6"></path>
          </svg>
          <p className="font-light text-[10px]">ALPHA</p>
        </div>

        <div className="border border-[#703bf7]/50 px-2 py-[9px] rounded-md flex items-center gap-[5px]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="11px"
            width="11px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"></path>
            <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"></path>
          </svg>
          <p className="font-light text-[10px]">Enterprise</p>
        </div>

        <div className="border border-[#703bf7]/50 bg-[#703bf7] px-2 py-[9px] rounded-md flex items-center gap-[7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 15 24"
            fill="none"
            stroke="#13033d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play w-3 h-3"
            aria-hidden="true"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
          <p className="text-[10px] text-[#13033d] font-normal">Active</p>
        </div>
      </div>

      <div>
        <p className="mt-3 text-lg tracking-wide">Estatein Ltd</p>
        <p className="font-mono font-light text-[#703bf7] text-xs my-0.5">
          Real Estate Infrastructure
        </p>

        <div className="mt-5 text-[#888] text-sm tracking-wide">
          <p className="leading-6">
            Modern real estate platform that makes finding and exploring homes
            seamless and enjoyable, offering intelligent features that help
            users discover their ideal properties with ease.
          </p>
        </div>

        <p className="text-xs tracking-wider font-mono text-[#888] font-light mt-5">
          TECH ARSENAL
        </p>

        <div className="flex gap-2 text-[11px] tracking-wider font-light">
          <div className="flex items-center gap-2 px-2 py-2 text-[#703bf7] rounded-lg bg-[#703bf7]/5 border border-[#703bf7]/50 my-4">
            <p>Next.js</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-2 text-[#703bf7] rounded-lg bg-[#703bf7]/5 border border-[#703bf7]/50 my-4">
            <p>React</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-2 text-[#703bf7] rounded-lg bg-[#703bf7]/5 border border-[#703bf7]/50 my-4">
            <p>Tailwind CSS </p>
          </div>

          <div className="flex items-center gap-2 px-2 py-2 text-[#703bf7] rounded-lg bg-[#703bf7]/5 border border-[#703bf7]/50 my-4">
            <p>Typescript</p>
          </div>
        </div>

        <div className="flex gap-40">
          <div className="text-xs">
            <p className="text-[#888] font-light">YEAR</p>
            <p className="mt-1">2025</p>
          </div>

          <div className="text-xs">
            <p className="text-[#888] font-light">Status</p>
            <p className="mt-1">Ongoing</p>
          </div>
        </div>

        <button className="bg-[#703bf7] px-2.5 py-3 mt-6 rounded-lg flex items-center gap-2 cursor-none">
          <Rocket />
          <p className="text-[#13033d] text-xs">LAUNCH RECON</p>
        </button>

      </div>
    </div>
  );
}
