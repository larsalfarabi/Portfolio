"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    gsap.to(".text", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div className="h-24 pt-3">
      <Link
        href="/"
        className="text absolute left-5 top-11 -translate-y-24 text-primary md:left-14"
      >
        <h1 className={`font-pop text-2xl font-semibold`}>Alfarabi.</h1>
      </Link>
    </div>
  );
}
