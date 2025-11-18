"use client";

import Skill from "./Skill";

const skillsData = [
  {
    skill: "HTML/CSS",
    level: "EXPERT",
    readiness: "Combat Effectiveness",
    percentage: "95%",
    year: "3y",
    category: "Frontend",
    status: "COMBAT READY",
    mission_active_num: "3",
  },
  {
    skill: "Javascript",
    level: "EXPERT",
    readiness: "Combat Effectiveness",
    percentage: "90%",
    year: "3y",
    category: "Language",
    status: "COMBAT READY",
    mission_active_num: "3",
  },
  {
    skill: "Tailwind CSS",
    level: "EXPERT",
    readiness: "Combat Effectiveness",
    percentage: "95%",
    year: "2y",
    category: "Styling",
    status: "COMBAT READY",
    mission_active_num: "4",
  },
  {
    skill: "PHP",
    level: "PROFICIENT",
    readiness: "Combat Effectiveness",
    percentage: "78%",
    year: "1y",
    category: "Language",
    status: "IN TRAINING",
    mission_active_num: "1",
  },
  {
    skill: "React",
    level: "ADVANCED",
    readiness: "Combat Effectiveness",
    percentage: "88%",
    year: "2y",
    category: "Framework",
    status: "COMBAT READY",
    mission_active_num: "3",
  },
  {
    skill: "SQL",
    level: "PROFICIENT",
    readiness: "Combat Effectiveness",
    percentage: "73%",
    year: "1y",
    category: "Database",
    status: "IN TRAINING",
    mission_active_num: "1",
  },
];

export default function CoreArsenal() {
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
        className="lucide lucide-code w-7.5 h-7.5 mt-1"
        aria-hidden="true"
      >
        <path d="m16 18 6-6-6-6"></path>
        <path d="m8 6-6 6 6 6"></path>
      </svg>

      <p className="mt-3 tracking-wide text-[22px] font-light font-mono">Core Arsenal</p>
      <p className="font-light tracking-wider text-sm text-[#888] font-mono">
        Primary weapons in the development battlefield
      </p>

      <div className="w-[93%] grid grid-cols-3 gap-5 mt-7">
        {skillsData.map((skillItem) => (
          <Skill key={skillItem.skill} {...skillItem} />
        ))}
      </div>
    </div>
  );
}
