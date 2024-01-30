"use client";

import styles from "./nav.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../header/anim";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Picture from "../picture/picture";
import Home from "@/public/home.png";
import Shop from "@/public/shop.png";
import AboutUs from "@/public/about_us.png";
import LookBook from "@/public/about_us.png";
import Contact from "@/public/contact.png";

const links = [
  {
    title: "Home",
    href: "/",
    src: Home,
  },
  {
    title: "Shop",
    href: "/shop",
    src: Shop,
  },
  {
    title: "About Us",
    href: "/about",
    src: AboutUs,
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: LookBook,
  },
  {
    title: "Contact",
    href: "/contact",
    src: Contact,
  },
];

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Picture
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
}
