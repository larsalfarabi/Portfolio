"use client";
/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import Sosmed from "@/components/sosmed/Sosmed";
import Divider from "@/utils/divider";
import { useMemo } from "react";

export default function About() {
  const typewriterOptions = useMemo(
    () => ({
      cursorClassName:
        "bg-clip-text text-transparent from-purple-700 to-pink-700",
      strings: ["Fullstack Developer.", "Mobile Developer."],
      delay: 75,
      autoStart: true,
      loop: true,
    }),
    [],
  );
  return (
    <article className="mt-7 h-full">
      <h1
        className="mt-5 select-none font-DM_sans text-4xl font-bold text-primary sm:text-5xl"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        Hey, I'm Alfarabi
      </h1>
      <h1
        className={`mt-2 block select-none bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-DM_sans text-4xl font-bold text-transparent  sm:text-5xl`}
        data-aos="fade-up"
        data-aos-duration="550"
      >
        <Typewriter options={typewriterOptions} />
      </h1>{" "}
      <Sosmed />
      <p
        className="mt-9 text-justify font-DM_sans text-base font-medium tracking-wide text-primary lg:text-lg"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        Hi, I'm Alfarabi, an experienced full-stack developer from Indonesia,
        with 3 years of learning in React, Next, Node.js, and Mysql. Ready to
        create innovative web solutions!
      </p>
      <Divider />
    </article>
  );
}
