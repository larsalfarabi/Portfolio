"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";

export interface props {
  initial: {};
  animate: {};
  text: string;
}
export const MotionHeader: NextPage<props> = ({
  initial,
  animate,
  text,
  ...props
}) => {
  return (
    <motion.h1 {...props} initial={initial} animate={animate}>
      {text}
    </motion.h1>
  );
};
