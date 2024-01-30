"use client";
import { motion } from "framer-motion";
import styles from "./footer.module.css";
import { translate } from "../header/anim";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="intial"
          animate="enter"
          exit="exit"
        >
          <span>Made by:</span>
          Pt. AIDIA Makmur Indonesia
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="intial"
          animate="enter"
          exit="exit"
        >
          <span> Typograpy:</span>
          Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="intial"
          animate="enter"
          exit="exit"
        >
          {" "}
          <span>Images:</span> Freepik, Envato
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="intial"
          animate="enter"
          exit="exit"
        >
          Privacy Police
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="intial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  );
}
