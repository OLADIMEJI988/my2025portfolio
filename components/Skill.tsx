"use client";


interface CardProps {
  skill: string;
  level: string;
  readiness: string;
  percentage: string;
  year: string;
  category: string;
  status: string;
  mission_active_num: string;
}

export default function Skill({
  skill,
  level,
  readiness,
  percentage,
  year,
  category,
  status,
  mission_active_num,
}: CardProps) {
  return (
    <div className="bg-[#0f0f0f]/30 tracking-wide border border-(--primary-color)/40 rounded-2xl w-full py-12 px-5 hover:shadow-[0_0_8px_var(--primary-color)] transition duration-700 ease-in-out">
      <div className="flex justify-between">
        <p className="font-[SpaceMono]">{skill}</p>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-(--primary-color) rounded-full"></div>
          <div className="border border-(--primary-color)/60 rounded-[7px] text-(--primary-color) p-[5px] text-[10px] tracking-wider">
            <p className="font-modal-fullscreen-xl-down">{level}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[#888] font-light text-xs mt-4 font-mono tracking-normal">
        <p>{readiness}</p>
        <p>{percentage}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#1a1a1a] rounded-full h-3 relative overflow-hidden mt-2">
        <div
          className="h-3 rounded-full bg-(--primary-color) transition-all duration-1000 ease-out"
          style={{ width: percentage }}
        ></div>
      </div>

      <div className="flex gap-30 mt-5 font-[SpaceMono]">
        <div className="text-xs">
          <p className="text-[#888] font-light">Years Active</p>
          <p className="mt-1 text-(--primary-color)">{year}</p>
        </div>

        <div className="text-xs">
          <p className="text-[#888] font-light">Category</p>
          <p className="mt-1 text-(--primary-color)">{category}</p>
        </div>
      </div>

      <div className="border-t border-b h-10 border-(--primary-color)/20 mt-4 flex justify-between text-[10px] tracking-wider items-center font-mono">
        <p className="text-[8px] text-[#888]">STATUS:</p>
        <p className="text-(--primary-color)">{status}</p>
      </div>

      <p className="text-[10px] text-[#888] tracking-wider mt-5 font-mono">
        Active in {mission_active_num} mission(s)
      </p>
    </div>
  );
}
