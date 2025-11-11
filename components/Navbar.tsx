"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="lg:flex items-center gap-5 px-7 py-2 text-[#888] rounded-full 
                    bg-transparent backdrop-blur-xs border border-[#703bf7]/30">
      {/* Home */}
      <div className="relative py-3 px-3 hover:bg-[#703bf7]/20 rounded-full text-[10px] transition-all duration-300 text-muted-foreground hover:text-foreground">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span>Home</span>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="relative py-3 px-3 hover:bg-[#703bf7]/20 rounded-full text-[10px] transition-all duration-300 text-muted-foreground hover:text-foreground">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </svg>
          <span>PROJECT SHOWCASE</span>
        </div>
      </div>

      {/* Skills Arsenal */}
      <div className="relative py-3 px-3 hover:bg-[#703bf7]/20 rounded-full text-[10px] transition-all duration-300 text-muted-foreground hover:text-foreground">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 18 6-6-6-6"></path>
            <path d="m8 6-6 6 6 6"></path>
          </svg>
          <span>SKILLS ARSENAL</span>
        </div>
      </div>

      {/* Origin Story */}
      <div className="relative py-3 px-3 hover:bg-[#703bf7]/20 rounded-full text-[10px] transition-all duration-300 text-muted-foreground hover:text-foreground">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>ORIGIN STORY</span>
        </div>
      </div>

      {/* Mission Control */}
      <div className="relative py-3 px-3 hover:bg-[#703bf7]/20 rounded-full text-[10px] transition-all duration-300 text-muted-foreground hover:text-foreground">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          <span>MISSION CONTROL</span>
        </div>
      </div>
    </div>
  );
}
