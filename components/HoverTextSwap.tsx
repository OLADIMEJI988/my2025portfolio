"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HoverTextSwap() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-[red] mb-10 w-full overflow-hidden h-[30px] "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.span
            key="default"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block"
          >
            Hover Me
          </motion.span>
        ) : (
          <motion.span
            key="hovered"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block"
          >
            Surprised
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}