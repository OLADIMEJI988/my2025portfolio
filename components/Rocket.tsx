"use client";

import { motion } from "framer-motion";

export default function Rocket() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--primary-color-dark)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-rocket"
      aria-hidden="true"
      animate={{
        y: [0, -4, 0], 
        rotate: [0, -2, 0, 2, 0], 
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      <motion.path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        fill="var(--primary-color)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
          filter: [
            "drop-shadow(0 0 3px var(--primary-color))",
            "drop-shadow(0 0 8px #9d6bff)", 
            "drop-shadow(0 0 3px var(--primary-color))",
          ],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </motion.svg>
  );
}
