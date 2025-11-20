"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoreArsenal from "./CoreArsenal";
import UiWeapons from "./UiWeapons";
import CloudOps from "./CloudOps";

export default function SkillsArsenal({ id }: { id?: string }) {
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
    <div id={id} className="flex flex-col items-center pt-5 font-sans mb-40">
      <div className="flex font-mono items-center gap-2 px-4 py-2 text-(--primary-color) rounded-full text-[9px] bg-(--primary-color)/5 backdrop-blur-xs tracking-wider border border-(--primary-color)/50">
        <div className="w-1.5 h-1.5 rounded-full bg-(--primary-color) animate-pulse"></div>
        <p>ALL SKILLS</p>
      </div>

      <p className="text-3xl lg:text-6xl tracking-wide my-5 font-extralight font-[Exan]">
        SKILLS{" "}
        <span className="text-(--primary-color) font-normal">ARSENAL</span>
      </p>

      <div className="text-[#888] lg:w-[500px] font-mono text-[12px] lg:text-[14px] text-center leading-[25px] tracking-wide px-3">
        <p>
          Powerful weaponry acquired through{" "}
          <span className="text-(--primary-color)">3+ years</span> of{" "}
          <span className="text-(--primary-color)">battlefield experience</span>
          . Each skill represents proven{" "}
          <span className="text-(--primary-color)">combat effectiveness</span>{" "}
          in production environments.
        </p>
      </div>

      <div className="flex gap-11 lg:gap-16 tracking-wide font-mono">
        <div className="space-y-1 text-center my-5">
          <p className="text-(--primary-color) text-xl">13+</p>
          <p className="text-[9px] text-[#888]">ACTIVE SKILLS</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-(--primary-color) text-xl">3</p>
          <p className="text-[9px] text-[#888]">TECH DOMAINS</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-(--primary-color) text-xl">81%+</p>
          <p className="text-[9px] text-[#888]">SUCCESS RATE</p>
        </div>
      </div>

      <div className="flex max-lg:grid max-lg:w-[90%] items-center gap-6 mt-10 bg-[#0f0f0f]/30 tracking-wide border border-(--primary-color)/40 p-5 lg:px-2 lg:py-2 rounded-xl font-mono">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center px-16 py-4 lg:py-1.5 rounded-lg tracking-wider cursor-none ${
                isActive
                  ? "bg-(--primary-color)/20 border border-(--primary-color) text-(--primary-color)"
                  : "hover:bg-(--primary-color)/5 hover:border hover:border-(--primary-color)/30 text-[#656565]"
              }`}
            >
              <div
                className={`w-2 h-2 bg-(--primary-color) rounded-full absolute right-1 top-1 animate-pulse ${
                  isActive ? "" : "hidden"
                }`}
              ></div>
              {React.cloneElement(tab.icon, {
                stroke: isActive ? "var(--primary-color)" : "#656565",
              })}
              <p
                className={`font-mono mt-3 text-[12px] lg:text-[11px] ${
                  isActive ? "text-(--primary-color)" : "text-[#656565]"
                }`}
              >
                {tab.label}
              </p>
              <p
                className={`text-[17px] lg:text-sm ${
                  isActive ? "text-(--primary-color)" : "text-[#959595]"
                }`}
              >
                {tab.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 w-[95%] lg:w-[93%]">
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

      <div className="mt-[76px] flex max-lg:grid gap-6 w-[90%] lg:w-[93%] font-mono">
        <div className="bg-[#0f0f0f]/30 flex flex-col items-center tracking-wider font-light border border-(--primary-color)/40 rounded-xl w-full p-12 hover:-translate-y-2 transition-transform duration-600 ease-in-out">
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
            className="lucide lucide-zap w-9 h-9 transition-all duration-300 mb-2"
            aria-hidden="true"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <p className="text-3xl lg:text-4xl text-(--primary-color) my-2">13+</p>
          <p className="text-[#959595] text-sm">Active Weapons</p>
          <p className="text-[#656565] text-xs">in arsenal</p>
        </div>

        <div className="bg-[#0f0f0f]/30 flex flex-col items-center tracking-wider font-light border border-(--primary-color)/40 rounded-xl w-full p-12 hover:-translate-y-2 transition-transform duration-600 ease-in-out">
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
            className="lucide lucide-target w-9 h-9 transition-all duration-300 mb-2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          <p className="text-3xl lg:text-4xl text-(--primary-color) my-2">81%+</p>
          <p className="text-[#959595] text-sm">Avg Accuracy</p>
          <p className="text-[#656565] text-xs">success rate</p>
        </div>

        <div className="bg-[#0f0f0f]/30 flex flex-col items-center tracking-wider font-light border border-(--primary-color)/40 rounded-xl w-full p-12 hover:-translate-y-2 transition-transform duration-600 ease-in-out">
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
            className="lucide lucide-brain w-9 h-9 transition-all duration-300 mb-2"
            aria-hidden="true"
          >
            <path d="M12 18V5"></path>
            <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
            <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
            <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
            <path d="M18 18a4 4 0 0 0 2-7.464"></path>
            <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
            <path d="M6 18a4 4 0 0 1-2-7.464"></path>
            <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
          </svg>
          <p className="text-3xl lg:text-4xl text-(--primary-color) my-2">3+</p>
          <p className="text-[#959595] text-sm">Years Combat</p>
          <p className="text-[#656565] text-xs">experience</p>
        </div>

        <div className="bg-[#0f0f0f]/30 flex flex-col items-center tracking-wider font-light border border-(--primary-color)/40 rounded-xl w-full p-12 hover:-translate-y-2 transition-transform duration-600 ease-in-out">
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
            className="lucide lucide-globe w-9 h-9 transition-all duration-300 mb-2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <p className="text-3xl lg:text-4xl text-(--primary-color) my-2">24/7</p>
          <p className="text-[#959595] text-sm">Operational</p>
          <p className="text-[#656565] text-xs">availability</p>
        </div>
      </div>
    </div>
  );
}
