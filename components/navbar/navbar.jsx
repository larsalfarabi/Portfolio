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
    <div className={`w-full pt-3`}>
      <div className="flex h-24 items-center justify-between px-5 lg:px-14">
        <Link href="/" className="text -translate-y-24 text-primary">
          <h1 className={`font-pop text-2xl font-semibold`}>Alfarabi.</h1>
        </Link>
      </div>
    </div>
  );
}
