"use client";

import Image from "next/image";
import Rocket from "./Rocket";
import ScrambleText from "./ScrambleText";

interface ProjectProps {
  status: string;
  name: string;
  subtext: string;
  priority: string;
  icon: any;
  category: string;
  about: string;
  skill: string;
  btntext: string;
  link: string;
  img: string;
}

export default function Project({
  status,
  name,
  subtext,
  priority,
  icon,
  category,
  about,
  skill,
  btntext,
  link,
  img,
}: ProjectProps) {

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <>
      <div className="relative w-full px-3 lg:px-6 py-3">
        <div className="font-light text-(--primary-color-dark) bg-(--primary-color) px-2 py-1 rounded-full justify-between text-[9px] tracking-wider right-2 absolute flex items-center gap-1">
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
          <p>{status}</p>
        </div>

        <div className="flex max-lg:flex-col items-center mt-[60px] gap-8 lg:gap-16">
          <div>
            <p className="hover:text-(--primary-color) text-2xl tracking-wider font-[SpaceMono] font-light">
              {name}
            </p>
            <p className="font-mono font-light text-(--primary-color) text-sm my-1">
              {subtext}
            </p>
            <div className="text-xs flex gap-3 font-mono tracking-wider mt-3">
              <div className="bg-(--primary-color) px-2.5 py-2 rounded-lg flex items-center gap-1 arrow-hover">
                <span>{icon}</span>
                <p className="font-light text-(--primary-color-dark)">
                  {priority}
                </p>
              </div>

              <div className="border border-(--primary-color) px-2.5 py-2 rounded-lg flex items-center gap-1">
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
                <p className="font-light">{category}</p>
              </div>
            </div>

            <div className="mt-5 text-[#888] text-sm tracking-wide font-[SpaceMono]">
              <p className="leading-6">{about}</p>
            </div>

            <p className="text-xs tracking-wider font-mono text-[#888] font-light mt-5">
              TECH ARSENAL
            </p>

            <div className="text-[11px] mt-1">
              <div className="flex gap-2 tracking-wider font-light flex-wrap font-[SpaceMono]">
                {skill.split(",").map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-2 py-2 text-(--primary-color) rounded-lg bg-(--primary-color)/5 border border-(--primary-color)/50 my-1"
                  >
                    <p>{s.trim()}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleClick} className="bg-(--primary-color) px-2.5 py-3 mt-5 rounded-lg flex items-center gap-[7px] cursor-none arrow-hover hover:scale-104 transition-all duration-800">
              <Rocket />
              <p className="text-(--primary-color-dark) text-[13px] font-[Exan] min-w-[100px]">
                <ScrambleText text={btntext} />
              </p>
            </button>
          </div>

          <div className="lg:w-[195%] border border-(--primary-color)/60 rounded-lg">
            <Image
              className="w-full object-cover rounded-lg"
              src={img}
              alt=""
              width={800}
              height={600}
              // quality={100}
              // style={{ imageRendering: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
