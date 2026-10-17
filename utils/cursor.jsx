"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const curs = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const images = document.querySelectorAll(".img");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, {
      height: "60px",
      width: "60px",
      ease: "back.out",
      duration: 0.5,
      animationDuration: 1,
    }).to(text.current, { opacity: 1, fontSize: "14px" }, 0);

    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        tl.play();
      });

      img.addEventListener("mouseleave", () => {
        tl.reverse();
        tl.eventCallback("onReverseComplete", () => {
          gsap.set(text.current, { opacity: 0 }); // Hide the text element
          gsap.set(curs.current, {
            height: "0px",
            width: "0px",
            fontSize: "0px",
          }); // Hide the text element
        });
      });
    });

    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={curs}
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-0 w-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent-color)] text-[var(--bg-color)] sm:flex"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <p ref={text} className="font-sans text-[0px] font-semibold opacity-0">
        Lihat
      </p>
    </div>
  );
}
