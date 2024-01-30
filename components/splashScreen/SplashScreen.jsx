"use client";
import Body from "@/utils/Body";
import { height } from "@/utils/anim";
import { motion } from "framer-motion";
export default function SplashScreen() {
  const phrases = ["© Folio 2023", "Lars alfarabi"];
  return (
    <motion.div
      className="h-screen overflow-hidden"
      variants={height}
      initial="intial"
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
