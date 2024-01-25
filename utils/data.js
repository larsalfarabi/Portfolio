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
import Thumbnail from "@/public/1702027598035.jpg";

export const tech = [
  { icon: <Html5 className="h-8 w-8" />, name: "HTML" },
  { icon: <JavaScript className="h-8 w-8" />, name: "JS" },
  { icon: <Html3 className="h-8 w-8" />, name: "CSS" },
  {
    icon: (
      <Image
        priority
        src={TypeScript}
        width={32}
        height={32}
        color="#e8e8e8"
        alt="Follow us on Twitter"
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
      />
    ),
    name: "Github",
  },
  {
    icon: <Figma className="h-8 w-8" />,
    name: "Figma",
  },
];

export const project = [
  {
    thumbnail: Thumbnail,
    name: "Umrah",
    tahun: "2023",
  },
  {
    thumbnail: Thumbnail,
    name: "Kec. Jonggol",
    tahun: "2023",
  },
  {
    thumbnail: Thumbnail,
    name: "Freshly Juice",
    tahun: "2022",
  },
];
