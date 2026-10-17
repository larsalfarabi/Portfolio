"use client";
import Body from "@/utils/Body";
import { height } from "@/utils/anim";
import { motion } from "framer-motion";
export default function SplashScreen() {
  const phrases = ["© 2026", "lars."];
  return (
    <motion.div
      className="h-screen overflow-hidden bg-[var(--bg-color)]"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Body phrases={phrases} />
        </div>
      </div>
    </motion.div>
  );
}
