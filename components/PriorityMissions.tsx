"use client";

import Rocket from "./Rocket";

interface MissionProps {
  priority: string;
  category: string;
  state: string;
  name: string;
  subtext: string;
  about: string;
  skill: string;
  year: string;
  status: string;
  btntext: string;
  link: string;
}

export default function PriorityMissions({
  priority,
  category,
  state,
  name,
  subtext,
  about,
  skill,
  year,
  status,
  btntext,
  link,
}: MissionProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className="relative w-full h-[470px] py-[41px] px-6 rounded-2xl 
                 bg-(--primary-color)/2 tracking-wide 
                 border border-(--primary-color)/40 
                 hover:border-(--primary-color)/70"
    >
      <div className="flex gap-2 tracking-wide font-mono">
        <div className="border border-(--primary-color)/50 px-2 py-[9px] rounded-md flex items-center gap-1">
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
          <p className="font-light text-[10px]">{priority}</p>
        </div>

        <div className="border border-(--primary-color)/50 px-2 py-[9px] rounded-md flex items-center gap-[5px]">
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
          <p className="font-light text-[10px]">{category}</p>
        </div>

        <div className="border border-(--primary-color)/50 bg-(--primary-color) px-2 py-[9px] rounded-md flex items-center gap-[7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 15 24"
            fill="none"
            stroke="var(--primary-color-dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play w-3 h-3"
            aria-hidden="true"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
          <p className="text-[10px] text-(--primary-color-dark) font-normal">{state}</p>
        </div>
      </div>

      <div>
        <p className="mt-3 text-lg tracking-wide">{name}</p>
        <p className="font-mono font-light text-(--primary-color) text-xs my-0.5">
          {subtext}
        </p>

        <div className="mt-5 text-[#888] text-sm tracking-wide">
          <p className="leading-6">{about}</p>
        </div>

        <p className="text-xs tracking-wider font-mono text-[#888] font-light mt-5">
          TECH ARSENAL
        </p>

        <div className="flex gap-2 text-[11px] tracking-wider font-light mt-1 mb-4">
          <div className="flex gap-2 text-[11px] tracking-wider font-light flex-wrap">
            {skill.split(",").map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-2 
                           text-(--primary-color) rounded-lg 
                           bg-(--primary-color)/5
                           border border-(--primary-color)/50 my-1"
              >
                <p>{s.trim()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-40">
          <div className="text-xs">
            <p className="text-[#888] font-light">YEAR</p>
            <p className="mt-1">{year}</p>
          </div>

          <div className="text-xs">
            <p className="text-[#888] font-light">Status</p>
            <p className="mt-1">{status}</p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="bg-(--primary-color) px-2.5 py-3 mt-6 rounded-lg flex items-center gap-2 cursor-none"
        >
          <Rocket />
          <p className="text-(--primary-color-dark) text-xs">{btntext}</p>
        </button>
      </div>
    </div>
  );
}
