"use client";
import { motion } from "framer-motion";
export default function Body({ phrases }) {
  const animation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.04 * i.length,
      },
    }),
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center text-[45px] tracking-[-2.5px]">
      {" "}
      {phrases.map((phrase, i) => {
        return (
          <div className="overflow-hidden" key={i}>
            <motion.p
              className="-my-1.5 select-none font-sans font-bold text-[var(--text-color)]"
              custom={i}
              variants={animation}
              initial="initial"
              animate={"enter"}
              exit={"exit"}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
