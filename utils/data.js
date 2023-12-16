import { Html5, JavaScript, Html3, Figma } from "iconsax-react";
import ReactJs from "@/public/ReactJs.svg";
import TypeScript from "@/public/TypeScript.svg";
import Nextjs from "@/public/Nextjs.svg";
import Nestjs from "@/public/Nest.svg";
import Nodejs from "@/public/NodeJs.svg";
import Mysql from "@/public/mySql.svg";
import Flutter from "@/public/Flutter.svg";
import Firebase from "@/public/firebase.svg";
import VS from "@/public/Figma.svg";
import Github from "@/public/Github.svg";
import Image from "next/image";

export const tech = [
  { icon: <Html5 className="w-8 h-8" />, name: "HTML" },
  { icon: <JavaScript className="w-8 h-8" />, name: "JS" },
  { icon: <Html3 className="w-8 h-8" />, name: "CSS" },
  {
    icon: (
      <Image
        priority
        src={TypeScript}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "TS",
  },
  {
    icon: (
      <Image
        priority
        src={ReactJs}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "React",
  },
  {
    icon: (
      <Image
        priority
        src={Nextjs}
        width={32}
        height={32}
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Next",
  },
  {
    icon: (
      <Image
        priority
        src={Nodejs}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Node",
  },
  {
    icon: (
      <Image
        priority
        src={Nestjs}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Nest",
  },
  {
    icon: (
      <Image
        priority
        src={Mysql}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "MySQL",
  },
  {
    icon: (
      <Image
        priority
        src={Flutter}
        width={25.5}
        height={25.5}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Flutter",
  },
  {
    icon: (
      <Image
        priority
        src={Firebase}
        width={23}
        height={23}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Firebase",
  },
];

export const tool = [
  {
    icon: (
      <Image
        priority
        src={VS}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "VS Code",
  },
  {
    icon: (
      <Image
        priority
        src={Github}
        width={33}
        height={33}
        color="#e8e8e8"
        alt="Follow us on Twitter"
        className="select-none"
      />
    ),
    name: "Github",
  },
  {
    icon: <Figma className="w-8 h-8" />,
    name: "Figma",
  },
];
