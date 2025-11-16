"use client";

import { useState, useEffect } from "react";
import PriorityMissions from "./PriorityMissions";
import Project from "./Project";

export default function ProjectShowcase({ id }: { id?: string }) {
  const projects = [
    {
      status: "ACTIVE",
      name: "Estatein",
      subtext: "Real Estate Infrastructure",
      priority: "ALPHA PRIORITY",
      category: "Enterprise",
      about:
        "Estatein is a modern real estate platform that makes finding and exploring homes seamless and enjoyable, offering a clean interface, and intelligent features that help users discover their ideal properties with ease and confidence.",
      skill: "Next.js, React, Tailwind CSS, Typescript, Framer Motion",
      btntext: "LAUNCH RECON",
      link: "",
      img: "/estate.png",
    },
    {
      status: "ACTIVE",
      name: "Medlaison",
      subtext: "Healthcare Management",
      priority: "BETA PRIORITY",
      category: "Healthcare",
      about:
        "Medlaison is a modern healthcare platform that makes managing medical services, appointments, and patient communication seamless and intuitive, offering a clean interface, and intelligent features that help users navigate healthcare with ease.",
      skill: "React, Tailwind CSS, Typescript, Vanila CSS, GSAP",
      btntext: "LAUNCH RECON",
      link: "",
      img: "/medlaison.png",
    },
    {
      status: "ACTIVE",
      name: "The QueenAritCircle",
      subtext: "Community Empowerment Hub",
      priority: "ALPHA PRIORITY",
      category: "Community",
      about:
        "The Queen Arit Circle is a modern career‑growth community that makes building tech, product and design skills seamless and intuitive, offering intelligent support that helps early‑career professionals advance with confidence and clarity.",
      skill: "React, Tailwind CSS, Typescript, Framer Motion",
      btntext: "LAUNCH RECON",
      link: "",
      img: "/aritcircle.png",
    },
    {
      status: "ACTIVE",
      name: "NFT Marketplace",
      subtext: "Digital Collectibles Platform",
      priority: "ALPHA PRIORITY",
      category: "Web3",
      about:
        "NFT Marketplace is a modern digital asset platform that makes discovering, minting, and trading NFTs simple and engaging, built with smart tools that help creators and collectors connect through the blockchain seamlessly",
      skill: "React, Tailwind CSS, TypeScript",
      btntext: "LAUNCH RECON",
      link: "",
      img: "/nft.png",
    },
    {
      status: "ACTIVE",
      name: "Optimal",
      subtext: "Business Optimization solutions",
      priority: "BETA PRIORITY",
      category: "Automation",
      about:
        "Optimal is a modern tax‑and‑accounting platform that makes managing finances, payroll and compliance seamless and intuitive, offering a clean interface and intelligent support that helps businesses stay focused on growth with confidence.",
      skill: "HTML, Vanilla CSS",
      btntext: "LAUNCH RECON",
      link: "",
      img: "/optim.png",
    },
    {
      status: "DORMANT",
      name: "Foodzero",
      subtext: "Sustainable Food Network",
      priority: "ALPHA PRIORITY",
      category: "Dining",
      about:
        "FoodZero is a modern food platform that makes accessing healthy meals and reducing food waste seamless and intuitive, offering a clean interface, and intelligent features that help users plan, order, and enjoy wholesome food efficiently.",
      skill: "HTML, Vanilla CSS, Javascript",
      btntext: "VIEW SOURCE",
      link: "https://github.com/OLADIMEJI988/FoodZero",
      img: "/foodzero.png",
    },
  ];

  const priorityMissions = [
    {
      priority: "ALPHA",
      category: "Enterprise",
      state: "Active",
      name: "Estatein Ltd",
      subtext: "Real Estate Infrastructure",
      about:
        "Modern real estate platform that makes finding and exploring homes seamless and enjoyable, offering intelligent solutions that help users discover their ideal properties with ease.",
      skill: "Next.js, React, Tailwind CSS, Typescript, Framer Motion",
      year: "2025",
      status: "Ongoing",
      btntext: "VIEW SOURCE",
      link: "https://github.com/OLADIMEJI988/estatein",
    },
    {
      priority: "ALPHA",
      category: "Fullstack",
      state: "Dormant",
      name: "Covenant University Form Digitization",
      subtext: "Form Management Automation",
      about:
        "A modern academic platform that transforms manual form processes into a seamless digital system, streamlining administrative workflows and improving how students and staff interact with university services.",
      skill: "PHP, SQL, BootStrap, Javascript, MySQL",
      year: "2024",
      status: "Completed",
      btntext: "VIEW SOURCE",
      link: "https://github.com/OLADIMEJI988/CU_Software",
    },
    {
      priority: "ALPHA",
      category: "Dining",
      state: "Dormant",
      name: "FoodZero",
      subtext: "Sustainable Food Network",
      about:
        "A modern food platform that makes accessing healthy meals and reducing food waste seamless and intuitive, offering intelligent features that help users plan, order, and enjoy wholesome food efficiently.",
      skill: "HTML, Vanilla CSS, Javascript",
      year: "2024",
      status: "Ongoing",
      btntext: "VIEW SOURCE",
      link: "https://github.com/OLADIMEJI988/FoodZero",
    },
    {
      priority: "ALPHA",
      category: "Web3",
      state: "Active",
      name: "NFT Marketplace",
      subtext: "Digital Collectibles Platform",
      about:
        "A modern digital asset platform that makes discovering, minting, and trading NFTs simple and engaging, built with smart tools that help creators and collectors connect through the blockchain seamlessly.",
      skill: "React, Tailwind CSS, TypeScript",
      year: "2025",
      status: "Completed",
      btntext: "VIEW SOURCE",
      link: "https://github.com/OLADIMEJI988/NFT-marketplace",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, isPlaying]);

  return (
    <div id={id} className="flex flex-col items-center pt-5 font-sans mb-40">
      <div className="font-mono flex items-center gap-2 px-4 py-2 text-(--primary-color) rounded-full text-[9px] bg-(--primary-color)/5 backdrop-blur-xs tracking-wider border border-(--primary-color)/50">
        <div className="w-1.5 h-1.5 rounded-full bg-(--primary-color) animate-pulse font-mono"></div>
        <p>MISSION PORTFOLIO</p>
      </div>

      <p className="text-6xl tracking-wide my-5 font-extralight font-[Exan]">
        PROJECT <span className="text-(--primary-color) font-normal">SHOWCASE</span>
      </p>

      <div className="text-[#888] w-[500px] text-[14px] text-center leading-[25px] tracking-wide font-mono">
        <span className="text-(--primary-color)">3+ years</span> of building{" "}
        <span className="text-(--primary-color)">precision-engineered solutions</span>{" "}
        across Health, NFT, Real Estate and scalable systems
      </div>

      <div className="flex gap-16 tracking-wide font-mono">
        <div className="space-y-1 text-center my-5">
          <p className="text-(--primary-color) text-xl">10+</p>
          <p className="text-[9px] text-[#888]">MISSIONS COMPLETED</p>
        </div>

        <div className="space-y-1 text-center my-5">
          <p className="text-(--primary-color) text-xl">2</p>
          <p className="text-[9px] text-[#888]">PRIORITY LEVELS</p>
        </div>
      </div>

      <div className="font-mono flex items-center gap-2 px-4 py-2 text-(--primary-color) rounded-full text-[9px] bg-(--primary-color)/5 backdrop-blur-xs tracking-wider border border-(--primary-color)/50 my-4">
        <div className="w-1.5 h-1.5 rounded-full bg-(--primary-color) animate-pulse"></div>
        <p>MISSION CONTROL</p>
      </div>

      <p className="text-[28px] font-extralight tracking-wide">
        Flagship <span className="text-(--primary-color) font-normal">Operations</span>
      </p>
      <p className="text-[11px] font-mono tracking-wider text-[#888]">
        Current active missions with highest strategic value
      </p>

      <div
        className="px-6 py-2 rounded-lg bg-(--primary-color)/2 tracking-wide border border-(--primary-color)/50 my-10 pb-10 w-[93%] relative overflow-hidden 
          min-h-[490px] h-auto 
          lg:min-h-[500px] 
          xl:min-h-[510px] 
          [@media(min-width:1300px)]:min-h-[560px]
          [@media(min-width:1400px)]:min-h-[600px]"
          
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Project {...project} />
          </div>
        ))}
      </div>

      <div className="mb-6 font-mono flex gap-4">
        <button
          onClick={prevSlide}
          className="relative hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-(--primary-color)/20 hover:text-(--primary-color) flex items-center border border-[#1a1a1a] bg-[#0f0f0f]/30 pl-2 pr-[11px] py-2 rounded-lg gap-1 cursor-none"
        >
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
            className="w-4 h-4 transition-transform duration-300"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <p className="text-sm">Prev</p>
        </button>

        <div className="flex items-center border border-(--primary-color)/30 bg-[#0f0f0f]/30 px-4 rounded-full gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${
                current === i ? "bg-(--primary-color) w-6 rounded-full" : "bg-[#323232]"
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-(--primary-color)/20 hover:text-(--primary-color) flex items-center border border-[#1a1a1a] bg-[#0f0f0f]/30 pl-3 pr-2 py-2 rounded-lg gap-1 cursor-none"
        >
          <p className="text-sm">Next</p>
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
            className="w-4 h-4 transition-transform duration-300"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="hover:scale-105 transition-all duration-300 mb-10 flex items-center border border-(--primary-color)/30 bg-[#0f0f0f]/30 px-3 py-2 rounded-full gap-2 cursor-none"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5f5f5f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
            aria-hidden="true"
          >
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
        ) : (
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
            className="w-3 h-3"
            aria-hidden="true"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        )}

        <p className={`text-[11px] ${isPlaying ? "text-[#5f5f5f]" : "text-(--primary-color)"}`}>
          {isPlaying ? "Pause Auto-Play" : "Resume Auto-Play"}
        </p>
      </button>

      <div className="font-mono flex items-center gap-2 px-4 py-2 text-(--primary-color) rounded-full text-[11px] bg-(--primary-color)/5 backdrop-blur-xs tracking-wider border border-(--primary-color)/50 mt-16 mb-10">
        <div className="w-[7px] h-[7px] rounded-full bg-(--primary-color) animate-pulse"></div>
        <p>PRIORITY MISSIONS</p>
      </div>

      <div className="grid grid-cols-2 w-[93%] gap-7">
        {priorityMissions.map((mission, index) => (
          <PriorityMissions key={index} {...mission} />
        ))}
      </div>

      <div className="flex items-center font-mono gap-6 mt-16 bg-[#0f0f0f]/30 tracking-wide border border-(--primary-color)/40 px-5 py-4 rounded-xl">
        <div className="flex flex-col items-center">
          <p className="text-(--primary-color)">23</p>
          <p className="text-[#888] text-[10px]">TOTAL MISSIONS</p>
        </div>

        <div className="h-6 w-px bg-(--primary-color)"></div>

        <div className="flex flex-col items-center">
          <p className="text-(--primary-color)">2</p>
          <p className="text-[#888] text-[10px]">PRIORITY LEVELS</p>
        </div>

        <div className="h-6 w-px bg-(--primary-color)"></div>

        <div className="flex flex-col items-center">
          <p className="text-(--primary-color)">20</p>
          <p className="text-[#888] text-[10px]">COMPLETED</p>
        </div>
      </div>

      <div className="font-mono text-[11px] flex items-center gap-4 mb-px mt-7 bg-(--primary-color)/8 tracking-wider border border-(--primary-color)/40 px-6 py-4 rounded-2xl">
        <div className="w-2 h-2 bg-(--primary-color) rounded-full animate-pulse"></div>
        <p>23 MISSIONS</p>
      </div>
    </div>
  );
}
