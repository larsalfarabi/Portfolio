"use client";
/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import Sosmed from "@/components/sosmed/Sosmed";
import Divider from "@/utils/divider";

export default function About() {
  return (
    <article className="mt-7 h-full">
      <h1
        className="text-4xl sm:text-5xl font-bold mt-5 text-primary font-DM_sans"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        Hey, I'm Alfarabi
      </h1>
      <h1
        className={`block mt-2 font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-DM_sans`}
        data-aos="fade-up"
        data-aos-duration="550"
      >
        <Typewriter
          options={{
            cursorClassName:
              "bg-clip-text text-transparent from-purple-700 to-pink-700",
            strings: ["Fullstack Developer.", "Mobile Developer."],
            delay: "75",
            autoStart: true,
            loop: true,
          }}
        />
      </h1>{" "}
      <Sosmed />
      <p
        className="mt-9 text-[#272526] font-DM_sans font-medium text-lg tracking-wide"
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
