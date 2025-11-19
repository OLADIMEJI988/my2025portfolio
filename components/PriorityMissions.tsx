"use client";

import Rocket from "./Rocket";
import ScrambleText from "./ScrambleText";

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
      className="relative w-full py-7 lg:py-[41px] px-4 lg:px-6 rounded-2xl 
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
          <p className="text-[10px] text-(--primary-color-dark) font-normal">
            {state}
          </p>
        </div>
      </div>

      <div>
        <p className="mt-3 text-xl tracking-wide font-[SpaceMono]">{name}</p>
        <p className="font-mono font-light text-(--primary-color) text-xs my-0.5">
          {subtext}
        </p>

        <div className="mt-5 text-[#888] text-sm tracking-wide">
          <p className="leading-6 font-[SpaceMono]">{about}</p>
        </div>

        <p className="text-xs tracking-wider font-mono text-[#888] font-light mt-5">
          TECH ARSENAL
        </p>

        <div className="flex gap-2 text-[11px] tracking-wider font-light mt-1 mb-4">
          <div className="flex gap-2 text-[11px] tracking-wider font-light flex-wrap font-[SpaceMono]">
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

        <div className="flex gap-40 font-[SpaceMono]">
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
          className="bg-(--primary-color) px-2.5 py-3 mt-6 rounded-lg flex items-center gap-2 cursor-none arrow-hover hover:scale-104 transition-all duration-800"
        >
          {/* <svg
            stroke="var(--primary-color-dark)"
            fill="var(--primary-color-dark)"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.35 18.55v91.552l102.82 58.544-101.203.305 285.76 135.443L170.27 18.637l-2.186 100.974-58.49-101.06H18.35zm285.058 92.75c-21.68 0-43.36 3.692-64.013 11.055l8.02 16.918c5.095-1.76 10.254-3.288 15.464-4.554l11.565 22.577c-5.513 1.186-10.967 2.71-16.34 4.533l8.04 16.96c5.627-1.812 11.348-3.245 17.128-4.263l3.09 6.032 4.385 50.13 10.3 21.726c.782-.038 1.566-.06 2.35-.06 12.445 0 24.89 4.777 34.438 14.326 19.098 19.098 19.1 49.777.002 68.875-19.098 19.097-49.78 19.098-68.877 0-9.797-9.798-14.553-22.644-14.298-35.41l-17.9-8.483c-.332 2.372-.554 4.757-.635 7.147l-51.738 4.778-7.142-2.203c-.048-11.992 1.588-23.986 4.89-35.612l-17.01-8.062c-3.777 12.374-5.898 25.148-6.347 37.972l-26.163-8.078c1.11-13.985 3.942-27.857 8.48-41.284l-16.94-8.03c-23.33 66.74-8.356 143.966 44.923 197.245 74.11 74.11 194.547 74.11 268.656.002 74.11-74.11 74.107-194.546-.002-268.654-37.054-37.054-85.69-55.582-134.326-55.582zm16.244 19.34c38.255 3.63 75.53 20.115 104.87 49.456 22.975 22.975 38.064 50.816 45.275 80.18l-20.453 10.48c-5.624-27.06-18.91-52.83-39.877-73.795-26.918-26.917-61.753-41.19-97.07-42.82l7.255-23.5zm-12.94 41.923c32.42.29 64.75 12.82 89.54 37.61 19.642 19.643 31.567 44.023 35.828 69.427l-2.648 1.357-60.305 5.57c-2.665-12.13-8.68-23.66-18.078-33.058-11.496-11.496-26.173-17.953-41.245-19.376l-4.877-55.754 1.783-5.778zM427.58 299.894l6.277 1.937c-.243 32.483-12.768 64.893-37.605 89.73-19.303 19.304-43.184 31.156-68.113 35.604l-1.745-3.406-5.05-57.74c10.892-2.985 21.176-8.723 29.704-17.25 12.094-12.096 18.6-27.717 19.544-43.612l56.986-5.263zm24.707 7.626l21.955 6.78c-3.005 39.356-19.574 77.878-49.72 108.024-21.934 21.934-48.3 36.682-76.196 44.248l-11.37-22.195c26.588-5.774 51.877-18.967 72.51-39.602 26.965-26.964 41.23-61.875 42.82-97.254zm-214.234 9.88c2.84 11.51 8.735 22.408 17.697 31.37 12.966 12.966 29.982 19.514 47.045 19.666l4.904 56.084-1.436 4.65c-33.04.18-66.134-12.346-91.397-37.61-19.042-19.042-30.832-42.538-35.418-67.103l3.913-2.006 54.69-5.05zm-75.783 15.858c5.885 26.225 19.006 51.14 39.382 71.517 27.385 27.385 62.964 41.667 98.907 42.88l-7.583 24.566c-40.276-2.447-79.86-19.072-110.684-49.898-22.04-22.04-36.823-48.554-44.356-76.6l24.333-12.464z"></path>
          </svg> */}
          <Rocket />
          <p className="min-w-[84px] text-(--primary-color-dark) text-xs font-[Exan]">
            <ScrambleText text={btntext} />
          </p>
        </button>
      </div>
    </div>
  );
}
