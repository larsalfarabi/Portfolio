"use client";
import { useCallback, useEffect } from "react";
import { NextPage } from "next";

export const ScrollToTop: NextPage = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <button onClick={scrollToTop} className="group flex space-x-1">
      <span className="font-DM_sans text-[clamp(.75rem,3vw,1rem)] font-semibold uppercase text-primary">
        Back to top
      </span>
      <span className="duration-[400ms] ease-in-out group-hover:-translate-y-3">
        <svg
          className="-rotate-90"
          width="22"
          height="22"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_238_1313)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
              fill="url(#paint0_linear_238_1313)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_238_1313"
              x1="14"
              y1="26"
              x2="179"
              y2="179.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#30303040"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>
    </button>
    // <button
    //   onClick={() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //   }}
    //   aria-label="scroll-to-top"
    //   className={`${
    //     showScrollButton
    //       ? "translate-x-0 opacity-100"
    //       : "-translate-x-full opacity-0"
    //   } flex h-10 w-12 items-center justify-center rounded-md bg-[#3030300d] duration-[0.4s] ease-in`}
    // >
    //   <ArrowUp variant="TwoTone" />
    // </button>
  );
};
