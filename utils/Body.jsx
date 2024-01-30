"use client";
import { AnimatePresence, motion } from "framer-motion";
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
    <div className="flex h-screen flex-col items-center justify-center text-[3vw]">
      {" "}
      <AnimatePresence mode="wait">
        {phrases.map((phrase, i) => {
          return (
            <div className="overflow-hidden" key={i}>
              <motion.p
                className="m-0 font-DM_sans font-bold"
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
      </AnimatePresence>
    </div>
  );
}
