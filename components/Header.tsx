"use client";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 flex justify-between items-center mx-7 z-50">
      <div className="flex flex-col items-center space-y-1 text-xs tracking-wider font-light">
        <p>SHOLANKE OLADIMEJI</p>
        <p className="text-[#703bf7]/80">SPARK.IGNITE</p>
      </div>

      <Navbar />

      <div className="flex flex-col items-center space-y-1 text-xs tracking-wider font-light">
        <p>SHOLANKE OLADIMEJI</p>
        <p className="text-[#703bf7]/80">SPARK.IGNITE</p>
      </div>
    </header>
  );
}
