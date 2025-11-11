"use client";

import Image from "next/image";

export default function Project() {
  return (
    <>
      <div className="font-light text-[#13033d] bg-[#703bf7] px-2 py-1 rounded-full justify-between text-[9px] tracking-wider right-2 absolute flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 15 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-play w-3 h-3"
          aria-hidden="true"
        >
          <polygon points="6 3 20 12 6 21 6 3"></polygon>
        </svg>
        <p>ACTIVE</p>
      </div>

      <div className="flex items-center mt-[60px] gap-16">
        <div>
          <p className="text-[#585858] hover:text-[#703bf7] text-2xl font-semibold tracking-wider">
            Estatein
          </p>
          <p className="font-mono font-light text-[#703bf7] text-sm my-1">
            Real Estate Infrastructure
          </p>
          <div className="text-xs flex gap-3 font-mono tracking-wider mt-3">
            <div className="bg-[#703bf7] px-2.5 py-2 rounded-lg flex items-center gap-1">
              <svg
                stroke="#13033d"
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
              <p className="font-light text-[#13033d]">ALPHA PRIORITY</p>
            </div>

            <div className="border border-[#703bf7] px-2.5 py-2 rounded-lg flex items-center gap-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="12px"
                width="12px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"></path>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"></path>
              </svg>
              <p className="font-light text-foreground">Enterprise</p>
            </div>
          </div>

          <div className="mt-5 text-[#888] text-sm tracking-wide">
            <p className="leading-6">
              Estatein is a modern real estate platform that makes finding and
              exploring homes seamless and enjoyable, offering a clean
              interface, and intelligent features that help users discover their
              ideal properties with ease and confidence.
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

            {/* <div className="flex items-center gap-2 px-2 py-2 text-[#703bf7] rounded-lg bg-[#703bf7]/5 border border-[#703bf7]/50 my-4">
              <p>Framer Motion</p>
            </div> */}
          </div>

          <button className="bg-[#703bf7] px-2.5 py-3 mt-3 rounded-lg flex items-center gap-2 cursor-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#13033d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rocket"
              aria-hidden="true"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            <p className="text-[#13033d] text-xs">LAUNCH RECON</p>
          </button>
        </div>

        <div className="w-[195%] border border-[#703bf7]/60 rounded-lg">
          <Image
            className="w-full object-cover rounded-lg"
            src="/realestate.png"
            alt="close"
            width={800}
            height={600}
            quality={100}
            style={{ imageRendering: "auto" }}
            priority
          />
        </div>
      </div>
    </>
  );
}
