"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const MotionHeader = ({ title }: { title: string }) => {
  const boxRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const titles = document.querySelectorAll(".h-title");
      const tl = gsap.timeline({ defaults: { duration: 1 } });

      titles.forEach((title, index) => {
        const el = title.querySelectorAll("span span");

        tl.to([boxRef.current, el], {
          y: 0,
          duration: 1,
        });
      });

      return () => {};
    }
  }, []);
  return (
    <h1
      className="h-title relative mb-5 w-full font-DM_sans text-2xl font-extrabold text-primary"
      ref={boxRef}
    >
      <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
        <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
          {title}
        </span>
      </span>
    </h1>
  );
};
