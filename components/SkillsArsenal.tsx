"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoreArsenal from "./CoreArsenal";
import UiWeapons from "./UiWeapons";
import CloudOps from "./CloudOps";

export default function SkillsArsenal() {
  const [activeTab, setActiveTab] = useState("core");

  const tabs = [
    {
      id: "core",
      label: "CORE - 01",
      description: "Core Arsenal",
      icon: (
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
          className="w-4 h-4 mt-1"
        >
          <path d="m16 18 6-6-6-6"></path>
          <path d="m8 6-6 6 6 6"></path>
        </svg>
      ),
      component: <CoreArsenal />,
    },
    {
      id: "ui",
      label: "UI - 02",
      description: "UI Weapons",
      icon: (
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
          className="w-4 h-4 mt-1"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      component: <UiWeapons />,
    },
    {
      id: "cloud",
      label: "CLD - 03",
      description: "Cloud Ops",
      icon: (
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
          className="w-4 h-4 mt-1"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      ),
      component: <CloudOps />,
    },
  ];

  return (
    <div className="flex flex-col items-center pt-5 font-sans mb-40">
      <div className="flex font-mono items-center gap-2 px-4 py-2 text-[#703bf7] rounded-full text-[8px] bg-[#703bf7]/5 backdrop-blur-xs tracking-wider border border-[#703bf7]/50">
        <div className="w-1.5 h-1.5 rounded-full bg-[#703bf7] animate-pulse"></div>
        <p>ALL SKILLS</p>
      </div>

      <p className="text-5xl tracking-wide my-5 font-extralight">
        SKILLS <span className="text-[#703bf7] font-normal">ARSENAL</span>
      </p>

      <div className="text-[#888] w-[430px] text-sm text-center leading-[25px] tracking-wide">
        <p>
          Powerful weaponry acquired through{" "}
          <span className="text-[#703bf7]">4+ years</span> of{" "}
          <span className="text-[#703bf7]">battlefield experience</span>. Each
          skill represents proven{" "}
          <span className="text-[#703bf7]">combat effectiveness</span> in
          production environments.
        </p>
      </div>

      <div className="flex gap-10 tracking-wide">
        <div className="space-y-1 text-center my-5">
          <p className="text-[#703bf7] text-xl">10+</p>
          <p className="text-[9px] text-[#888]">ACTIVE SKILLS</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-[#703bf7] text-xl">2</p>
          <p className="text-[9px] text-[#888]">TECH DOMAINS</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-[#703bf7] text-xl">88%+</p>
          <p className="text-[9px] text-[#888]">SUCCESS RATE</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 mt-10 bg-[#0f0f0f]/30 tracking-wide border border-[#703bf7]/40 px-2 py-2 rounded-xl">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center px-16 py-1.5 rounded-lg tracking-wider cursor-none ${
                isActive
                  ? "bg-[#703bf7]/20 border border-[#703bf7] text-[#703bf7]"
                  : "hover:bg-[#703bf7]/5 hover:border hover:border-[#703bf7]/30 text-[#656565]"
              }`}
            >
              <div
                className={`w-2 h-2 bg-[#703bf7] rounded-full absolute right-1 top-1 animate-pulse ${
                  isActive ? "" : "hidden"
                }`}
              ></div>
              {React.cloneElement(tab.icon, {
                stroke: isActive ? "#703bf7" : "#656565",
              })}
              <p
                className={`font-mono mt-3 text-[11px] ${
                  isActive ? "text-[#703bf7]" : "text-[#656565]"
                }`}
              >
                {tab.label}
              </p>
              <p
                className={`text-sm ${
                  isActive ? "text-[#703bf7]" : "text-[#959595]"
                }`}
              >
                {tab.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active tab component */}
      <div className="mt-12 w-[93%]">
        <AnimatePresence mode="wait">
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                {tab.component}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
