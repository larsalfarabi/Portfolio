"use client";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { useEffect, useRef } from "react";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

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
          duration: 1.5,
        });
      });

      return () => {};
    }
  }, []);
  return (
    <h1
      className="h-title relative w-full text-2xl font-DM_sans text-primary font-extrabold mb-5"
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
