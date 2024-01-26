"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Divider() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isMobile) {
      return setWidth(350);
    } else {
      return setWidth(510);
    }
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: width }}
      transition={{ delay: 0.5, duration: 1.5, ease: "easeIn" }}
      className=" my-5 h-[1px] bg-black opacity-30"
    />
  );
}

// [0.76, 0, 0.24, 1]
