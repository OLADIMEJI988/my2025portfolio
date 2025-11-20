"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SideMenu() {
  const DEFAULT_COLOR = "#703bf7";

  const colors = [
    { name: "Aurora Mint", value: "#3fe0c5", desc: "Soft Mint – Calm, Fresh & Modern" },
    { name: "Cobalt Edge", value: "#4361ee", desc: "Electric Blue – Sharp, Confident & Precise" },
    { name: "Saffron", value: "#f4c430", desc: "Warm yellow - elegant and optimistic." },
    { name: "Emerald", value: "#2ecc71", desc: "Pakistan Green – Professional & Natural" },
    { name: "Slate", value: "#708090", desc: "Modern Gray – Minimalist & Clean" },
  ];

  const [activeColor, setActiveColor] = useState(DEFAULT_COLOR);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"colors" | "theme">("colors");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const setPrimaryColor = (colorValue: string) => {
    document.documentElement.style.setProperty("--primary-color", colorValue);

    const rgb = colorValue
      .replace(/^#/, "")
      .match(/\w\w/g)
      ?.map((x) => parseInt(x, 16))
      .join(", ");

    if (rgb) document.documentElement.style.setProperty("--primary-color-rgb", rgb);

    setActiveColor(colorValue);
  };

  useEffect(() => {
    setPrimaryColor(DEFAULT_COLOR);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const menu = menuRef.current;
      const button = buttonRef.current;

      if (
        isOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !button?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 lg:right-7 max-lg:bottom-4 lg:top-8 z-40 bg-background text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition cursor-none"
        style={{
          borderColor: "var(--primary-color)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-palette"
        >
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-monitor"
        >
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-5 lg:right-7 max-lg:bottom-[70px] lg:top-22 w-72 bg-background rounded-xl shadow-2xl border border-(--primary-color)/50 z-50 p-4"
            style={{ position: "fixed" }}
          >
            <div className="flex bg-[#1a1a1a] p-1 rounded-lg mb-4 relative text-[13px] h-[45px]">
              <div
                className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.5rem)] bg-[#0a0a0a] rounded-md transition-all duration-300"
                style={{ transform: `translateX(${activeTab === "theme" ? "100%" : "0"})` }}
              ></div>

              <button
                onClick={() => setActiveTab("colors")}
                className={`flex-1 py-2 rounded-md relative z-10 transition-colors duration-300 ${
                  activeTab === "colors"
                    ? "text-(--primary-color)/90"
                    : "text-[#888] hover:text-white"
                }`}
              >
                Color Palette
              </button>

              <button
                onClick={() => setActiveTab("theme")}
                className={`flex-1 py-2 rounded-md relative z-10 transition-colors duration-300 ${
                  activeTab === "theme"
                    ? "text-(--primary-color)/90"
                    : "text-[#888] hover:text-white"
                }`}
              >
                Theme Mode
              </button>
            </div>

            <div className="transition-opacity duration-300">
              {activeTab === "colors" && (
                <ul className="space-y-4">
                  {colors.map((color) => (
                    <li key={color.value}>
                      <button
                        onClick={() => setPrimaryColor(color.value)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition border hover:bg-[#181818] ${
                          activeColor === color.value ? "bg-[#131313]" : "border-transparent"
                        }`}
                        style={
                          activeColor === color.value
                            ? { borderColor: "var(--primary-color)" }
                            : {}
                        }
                      >
                        <div className="flex flex-col text-left">
                          <span className="text-white font-medium font-mono">{color.name}</span>
                          <span className="text-[10px] text-gray-400">{color.desc}</span>
                        </div>

                        <span
                          className="w-5 h-5 rounded-full border border-white"
                          style={{ backgroundColor: color.value }}
                        ></span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "theme" && (
                <div className="text-gray-400 text-sm">Theme modes Coming soon.</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
