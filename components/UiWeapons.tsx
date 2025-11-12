"use client";

import Skill from "./Skill";

const skillsData = [
  {
    skill: "Next.js",
    level: "PROFICIENT",
    readiness: "Combat Effectiveness",
    percentage: "80%",
    year: "1y",
    category: "Framework",
    status: "COMBAT READY",
    mission_active_num: "2",
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
    skill: "Framer Motion",
    level: "ADVANCED",
    readiness: "Combat Effectiveness",
    percentage: "80%",
    year: "1y",
    category: "Animation library",
    status: "COMBAT READY",
    mission_active_num: "2",
  },
  {
    skill: "GSAP",
    level: "PROFICIENT",
    readiness: "Combat Effectiveness",
    percentage: "60%",
    year: "1y",
    category: "Animation library",
    status: "IN TRAINING",
    mission_active_num: "1",
  },
];

export default function UiWeapons() {
  return (
    <div className="flex flex-col items-center">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#703bf7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7.5 h-7.5 mt-1"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>

      <p className="mt-3 tracking-wide text-[22px] font-light">UI Weapons</p>
      <p className="font-light tracking-wider text-sm text-[#888]">
        Frontend frameworks and library
      </p>

      <div className="w-[93%] grid grid-cols-3 gap-5 mt-7">
        {skillsData.map((skillItem) => (
          <Skill key={skillItem.skill} {...skillItem} />
        ))}
      </div>
    </div>
  );
}
