"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Divider() {
  const dividerRef = useRef();
  useEffect(() => {
    gsap.to(dividerRef.current, {
      x: 0,
      y: 0,
      width: 510,
      duration: 2,
      delay: 0.5,
      ease: [0.76, 0, 0.24, 1],
    });
  }, []);

  return (
    <div ref={dividerRef} className="my-5 h-[1px] w-0 bg-black opacity-30" />
  );
}
