"use client";

import Skill from "./Skill";

const skillsData = [
  {
    skill: "Git",
    level: "ADVANCED",
    readiness: "Combat Effectiveness",
    percentage: "80%",
    year: "3y",
    category: "Version Control",
    status: "COMBAT READY",
    mission_active_num: "4",
  },
  {
    skill: "GitHub",
    level: "ADVANCED",
    readiness: "Combat Effectiveness",
    percentage: "88%",
    year: "3y",
    category: "Framework",
    status: "COMBAT READY",
    mission_active_num: "4",
  },
  {
    skill: "MySQL",
    level: "PROFICIENT",
    readiness: "Combat Effectiveness",
    percentage: "65%",
    year: "1y",
    category: "Database",
    status: "IN TRAINING",
    mission_active_num: "1",
  },
];

export default function CloudOps() {
  return (
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7.5 h-7.5 mt-1"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>

      <p className="mt-3 tracking-wide text-[22px] font-light font-mono">Cloud Ops</p>
      <p className="font-light text-center tracking-wider text-sm text-[#888] font-mono">
        Cloud deployment and infrastructure command
      </p>

      <div className="w-[95%] lg:w-[93%] grid lg:grid-cols-3 gap-5 mt-7">
        {skillsData.map((skillItem) => (
          <Skill key={skillItem.skill} {...skillItem} />
        ))}
      </div>
    </div>
  );
}
