"use client";

import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Home",
    id: "home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    ),
  },
  {
    label: "Project Showcase",
    id: "project-showcase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
  },
  {
    label: "Skills Arsenal",
    id: "skills-arsenal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 18 6-6-6-6"></path>
        <path d="m8 6-6 6 6 6"></path>
      </svg>
    ),
  },
  {
    label: "Origin Story",
    id: "origin-story",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    label: "Mission Control",
    id: "mission-control",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    if (typeof window === "undefined") return; 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(sectionId);
    }
  };

  return (
    <>
      <div className="flex items-center gap-5 max-lg:gap-0 px-7 max-lg:px-3 py-1 lg:py-2 text-[#888] rounded-full bg-transparent backdrop-blur-xs border border-(--primary-color)/40">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleClick(item.id)}
            className={`relative py-3 px-3 max-lg:px-2 rounded-full text-[12px] font-[Exan] transition-all duration-300 flex items-center lg:space-x-2 cursor-none
            ${
              active === item.id
                ? "lg:bg-(--primary-color) text-(--primary-color) lg:text-white"
                : "text-[#888]/80 hover:bg-(--primary-color)/20"
            }`}
          >
            <span>{item.icon}</span>
            <span className="max-lg:hidden">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
