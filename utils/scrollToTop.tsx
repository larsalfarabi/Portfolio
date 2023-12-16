"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "iconsax-react";
import { NextPage } from "next";

export const ScrollToTop: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollButton && window.scrollY > 150) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= 150) {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", checkScrollTop);
    console.log(window.scrollY);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      aria-label="scroll-to-top"
      className={`${
        showScrollButton
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      } h-10 w-12 flex justify-center items-center rounded-md bg-[#3030300d] duration-[0.4s] ease-in`}
    >
      <ArrowUp variant="TwoTone" />
    </button>
  );
};
