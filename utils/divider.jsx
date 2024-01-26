"use client";

import { motion } from "framer-motion";

export default function Divider() {

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 510 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeIn" }}
      className=" my-5 h-[1px] bg-black opacity-30"
    />
  );
}

// [0.76, 0, 0.24, 1]
