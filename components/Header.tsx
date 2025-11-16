"use client";

import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import SplitWording from "@/components/SplitWording";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 flex justify-between items-center pl-7 z-50">
      <div className="flex flex-col items-center space-y-1 text-xs tracking-wider font-light font-[Alexana]">
        <SplitWording text="OLADIMEJI" />
        <p className="text-(--primary-color)/80 font-mono text-[11px]">▸SPARK.IGNITE</p>
      </div>

      <div className="flex flex-col items-center space-y-1 text-xs tracking-wider font-light -ml-[8%]">
        <Navbar />
      </div>

      <div className="flex flex-col items-center space-y-1 text-xs tracking-wider font-light">
        <SideMenu />
      </div>
    </header>
  );
}
