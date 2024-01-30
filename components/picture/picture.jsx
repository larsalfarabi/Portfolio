"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./picture.module.css";
import { opacity } from "../header/anim";
export default function Picture({ src, selectedLink }) {
  return (
    <motion.div
      variants={opacity}
      intial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image src={src} alt="Picture" fill />
    </motion.div>
  );
}
