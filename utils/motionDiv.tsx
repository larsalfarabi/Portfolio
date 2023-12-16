"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";

export interface props {
  initial: {};
  animate: {};
  children: JSX.Element;
}
export const MotionDiv: NextPage<props> = ({
  initial,
  animate,
  children,
  ...props
}) => {
  return (
    <motion.div {...props} initial={initial} animate={animate}>
      {children}
    </motion.div>
  );
};
