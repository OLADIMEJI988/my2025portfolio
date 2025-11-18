"use client";

export default function OriginStory({ id }: { id?: string }) {
  return (
    <div id={id} className="flex flex-col items-center pt-5 font-sans mb-40">
      <div className="flex font-mono items-center gap-2 px-4 py-2 text-(--primary-color) rounded-full text-[9px] bg-(--primary-color)/5 backdrop-blur-xs tracking-wider border border-(--primary-color)/50">
        <div className="w-1.5 h-1.5 rounded-full bg-(--primary-color) animate-pulse"></div>
        <p>THE STORY</p>
      </div>

      <p className="text-6xl tracking-wide my-5 font-extralight font-[Exan]">
        ORIGIN <span className="text-(--primary-color) font-normal">STORY</span>
      </p>

      <div className="text-[#888] w-[580px] text-[14px] text-center leading-[25px] tracking-wide font-mono">
        <p>
          From my early days writing simple scripts to{" "}
          <span className="text-(--primary-color)">
            developing clean, efficient, animation-driven interfaces
          </span>{" "}
          that look good, feel smooth, and{" "}
          <span className="text-(--primary-color)">solve real problems.</span>{" "}
          Nothing extra,
          <span className="text-(--primary-color)"> just quality.</span>
        </p>
      </div>

      <div className="flex w-[93%] justify-between mt-[70px] relative">
        <div className="w-[42%]">
          <div className="flex items-center mb-11 relative">
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
              className="lucide lucide-target w-6 h-6 text-arrow-green mr-2 opacity-30"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <p className="text-[27px] tracking-wide font-light absolute left-3 top-1 font-[Exan]">
              WHERE VISION FINDS FORM
            </p>
          </div>

          <div className="flex flex-col gap-5 leading-7 text-[#888] text-[14px] font-mono">
            <p>
              My journey into tech started in 2020. Over the years, I’ve grown
              into a frontend developer with a strong foundation in modern web
              technologies and a clear focus on building clean, responsive, and
              intuitive user experiences.
            </p>

            <p>
              With a B.Sc. in Computer Science from Olabisi Onabanjo University,
              I’ve spent the last several years working across academic,
              freelance, and collaborative team environments, developing real
              world applications that solve real problems. Most recently, I
              contributed to Covenant University’s IT Development Team, where I
              helped build an internal system focused on form digitization and
              process automation. I implemented core modules using PHP, SQL, and
              JavaScript, optimized backend-to-UI interactions, and worked on
              functional features like HOD endorsement workflows, student
              filtering logic, and committee review automation.
            </p>

            <p>
              Beyond institutional work, I’ve built projects for clients, where
              I handled brand alignment, accessibility, and performance
              improvements. I’ve also collaborated with teams to build solutions
              like a Car Booking Web App using React, Tailwind CSS, and Context
              API, focusing on state management, reusable components, and
              seamless user flow.
            </p>

            <p>
              I represent precision, intention, and discipline. Whether I'm
              crafting refined interfaces, optimizing performance, or
              architecting smooth user interactions, I approach each build with
              accuracy and focus, aiming to consistently achieve precise
              technical goals.
            </p>
          </div>

          <div className="flex items-center gap-20 mt-10 tracking-wide font-mono">
            <div className="flex items-center text-[#888] text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>Nigeria</p>
            </div>

            <div className="flex items-center text-[#888] text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <p>Available immediately</p>
            </div>
          </div>

          <button className="font-mono text-[11px] flex items-center mb-px mt-7 bg-(--primary-color)/6 tracking-wider border border-(--primary-color)/40 px-6 py-3 rounded-xl">
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
              className="lucide lucide-github w-4 h-4 mr-2"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>

            <p>GitHub</p>

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
              className="lucide lucide-arrow-right w-4 h-4 ml-2"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 transform flex flex-col items-center justify-center pointer-events-none w-[1%]">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-(--primary-color)/70 bg-background flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-crosshair w-6 h-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
            </svg>
          </div>
          <div className="absolute top-1/7 w-4 h-4 border border-(--primary-color) rotate-45"></div>
          <div className="absolute bottom-1/7 w-4 h-4 border border-(--primary-color) rotate-45"></div>
        </div>

        <div className="w-[42%]">
          <div className="flex items-center font-[Exan]">
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
              className="lucide lucide-target w-6 h-6 text-arrow-green mr-2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <p className="text-[27px] tracking-wide font-light">
              MISSION TIMELINE
            </p>
          </div>

          <div className="flex gap-5 ml-1 mt-9 text-xs">
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
              className="lucide lucide-crosshair w-6 h-6 mt-2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
            </svg>

            <div className="font-mono text-[11px] w-full flex flex-col bg-(--primary-color)/6 tracking-wider border border-(--primary-color)/40 px-4 py-4 rounded-md hover:translate-x-2 transition-transform duration-600 ease-in-out">
              <p>2016 - 2020</p>
              <div className="font-[SpaceMono] mt-3">
                <p className="font-medium text-[13px]">Foundation Years</p>
                <p className="my-1 font-light text-[11px]">Building the Base</p>
                <p className="text-[#888] leading-4 text-[10px] mt-2">
                  Establishing foundational knowledge in sciences and
                  mathematics while discovering the digital world
                </p>
                <p className="text-[#888] ml-3 my-3 text-[10px]">
                  Completed Secondary School (Science)
                </p>
              </div>

              <div className="flex gap-3">
                <p>Mathematics</p>
                <p>Sciences</p>
                <p>Basic Computing</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ml-1 mt-8 text-xs">
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
              className="lucide lucide-crosshair w-6 h-6 mt-2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
            </svg>

            <div className="font-mono text-[11px] w-full flex flex-col bg-(--primary-color)/6 tracking-wider border border-(--primary-color)/40 px-4 py-4 rounded-md hover:translate-x-2 transition-transform duration-600 ease-in-out">
              <p>2021 - 2025</p>
              <div className="font-[SpaceMono] mt-3">
                <p className="font-medium text-[13px]">Discovery Phase</p>
                <p className="my-1 font-light text-[11px]">
                  Frontend Emergence
                </p>
                <p className="text-[#888] leading-4 text-[10px] mt-2">
                  University journey begins while transitioning to frontend
                  development with major side projects.
                </p>
                <p className="text-[#888] ml-3 my-3 text-[10px]">
                  Started B.Sc. Computer Science
                </p>
              </div>

              <div className="flex gap-3">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>C++</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ml-1 mt-8 text-xs">
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
              className="lucide lucide-crosshair w-6 h-6 mt-2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
            </svg>

            <div className="font-mono text-[11px] w-full flex flex-col bg-(--primary-color)/6 tracking-wider border border-(--primary-color)/40 px-4 py-4 rounded-md hover:translate-x-2 transition-transform duration-600 ease-in-out">
              <p>2023 - 2025</p>
              <div className="font-[SpaceMono] mt-3">
                <p className="font-medium text-[13px]">Evolution Era</p>
                <p className="my-1 font-light text-[11px]">
                  Fullstack Emergence
                </p>
                <p className="text-[#888] leading-4 text-[10px] mt-2">
                  Techinical journey strengthened through hands-on software
                  development experience at Covenant University.
                </p>
                <p className="text-[#888] ml-3 my-3 text-[10px]">
                  Junior Software Developer (2024)
                </p>
              </div>

              <div className="flex gap-3">
                <p>PHP</p>
                <p>SQL</p>
                <p>MySQL</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ml-1 mt-8 text-xs">
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
              className="lucide lucide-crosshair w-6 h-6 mt-2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="22" x2="18" y1="12" y2="12"></line>
              <line x1="6" x2="2" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="6" y2="2"></line>
              <line x1="12" x2="12" y1="22" y2="18"></line>
            </svg>

            <div className="font-mono text-[11px] w-full flex flex-col bg-(--primary-color)/6 tracking-wider border border-(--primary-color)/40 px-4 py-4 rounded-md hover:translate-x-2 transition-transform duration-600 ease-in-out">
              <p>2024 - Present</p>
              <div className="font-[SpaceMono] mt-3">
                <p className="font-medium text-[13px]">Specialization Period</p>
                <p className="my-1 font-light text-[11px]">
                  Web Development Focus
                </p>
                <p className="text-[#888] leading-4 text-[10px] mt-2">
                  Freelance journey begins, building solutions for clients
                  across various industries.
                </p>
                <p className="text-[#888] ml-3 my-3 text-[10px]">
                  Started Freelancing
                </p>
              </div>

              <div className="flex gap-3">
                <p>JavaScript</p>
                <p>React.js</p>
                <p>TailwindCSS</p>
                <p>Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-mono text-[11px] flex items-center mb-px mt-20 bg-(--primary-color)/2 tracking-wider border border-(--primary-color)/40 px-6 py-3 rounded-xl">
        <p>STORY + TIMELINE: SYNCHRONIZED</p>
      </div>

      <div className="w-[65%] mb-px mt-28 bg-(--primary-color)/2 tracking-wide border border-(--primary-color)/40 px-6 py-4 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-target w-8 h-8 mb-2 opacity-20"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>

        <div className="w-full flex flex-col items-center font-[Exan]">
          <p className="text-[26px] font-extralight">TACTICAL PHILOSOPHY</p>
          <div className="text-[#888] italic text-[18px] mt-3 flex flex-col items-center">
            <p>"To be exceptional, you have to be the exception.</p>

            <p>Break the default settings"</p>
          </div>
        </div>

        <p className="font-[Exan] italic flex justify-center items-center w-full mt-5 tracking-wider text-[16px] font-light">
          — SHOLANKE OLADIMEJI [ CODENAME: SPARK ] —
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-crosshair right-0 w-8 h-8 mt-2 opacity-20 ml-auto"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" x2="18" y1="12" y2="12"></line>
          <line x1="6" x2="2" y1="12" y2="12"></line>
          <line x1="12" x2="12" y1="6" y2="2"></line>
          <line x1="12" x2="12" y1="22" y2="18"></line>
        </svg>
      </div>
    </div>
  );
}
