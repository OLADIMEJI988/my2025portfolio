"use client";

import ScrambleText from "./ScrambleText";

export default function Contact({ id }: { id?: string }) {
  return (
    <div id={id} className="flex flex-col items-center pt-5 mb-40 font-mono">
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
        className="lucide lucide-mail w-8 h-8 text-arrow-green"
        aria-hidden="true"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      </svg>

      <p className="text-3xl lg:text-6xl tracking-wide font-[Exan]">
        Contact <span className="text-(--primary-color)">Me</span>
      </p>
      <p className="font-light text-[#888] mt-2 text-center text-[13px] lg:text-[15px] px-3">
        Ready to work together? Let's discuss your project and bring your ideas
        to life.
      </p>

      <div className="w-[95%] lg:w-[60%] bg-(--primary-color)/3 border border-(--primary-color)/50 rounded-xl py-10 px-4 lg:px-8 mt-10">
        <p className="text-center text-xl font-sans font-light tracking-wide">
          Get In Touch
        </p>
        <div className="flex max-lg:flex-col gap-6 lg:gap-8 mt-10">
          <div className="w-full tracking-wide">
            <p>Name</p>
            <input
              type="text"
              className="w-full contact-input rounded-lg p-3 mt-1 text-sm"
              placeholder="What is your name?"
            />
          </div>

          <div className="w-full tracking-wide">
            <p>Email</p>
            <input
              type="text"
              className="w-full contact-input rounded-lg p-3 mt-1 text-sm"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="w-full tracking-wide my-6">
          <p>Subject</p>
          <input
            type="text"
            className="w-full contact-input rounded-lg p-3 mt-1 text-sm"
            placeholder="What's on your mind?"
          />
        </div>

        <div className="w-full tracking-wide">
          <p>Message</p>
          <textarea
            data-slot="textarea"
            className="mt-1 flex w-full rounded-md contact-input bg-transparent p-3 text-base outline-none md:text-sm min-h-32 resize-none"
            id="message"
            name="message"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button className="bg-(--primary-color)/90 w-full py-3 flex justify-center mt-10 rounded-xl arrow-hover font-[Exan] tracking-wider cursor-none hover:scale-101 transition-all duration-800">
          <p>
            <ScrambleText text="Send Message" />
          </p>
        </button>
      </div>
    </div>
  );
}
