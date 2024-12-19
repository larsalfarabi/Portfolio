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
import Expressjs from "@/public/Expressjs.svg";

export const tech = [
  {
    icon: <Html5 className="h-8 w-8" />,
    name: "HTML",
    content:
      "HTML (HyperText Markup Language) is a standard markup language for creating web pages. HTML uses tags to define the structure and content of web pages.",
  },
  {
    icon: <JavaScript className="h-8 w-8" variant="Bold" />,
    name: "JS",
    content:
      "JS (JavaScript) is a high-level, dynamic programming language used to make web pages more interactive. JavaScript can be used to add a wide variety of functionality to web pages.",
  },
  {
    icon: <Html3 className="h-8 w-8" />,
    name: "CSS",
    content:
      "CSS (Cascading Style Sheets) is a programming language used to design and organize the appearance of web pages.",
  },
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
    content:
      "TS (TypeScript) is a superset of JavaScript that adds data types and other features to improve security, reliability, and productivity.",
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
    content:
      "React is a JavaScript library used to build component-based interactive user interfaces.",
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
    content:
      "Next.js is a React framework created by Vercel. Next.js offers a variety of features and capabilities that can help developers build modern and responsive web applications.",
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
    content:
      "Node.js is a runtime environment that runs outside the browser and uses the JavaScript programming language. Node.js is designed for applications with intensive I/O processes such as network servers or backend API.",
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
    content:
      "NestJS is a web server framework built on Node.js. NestJS offers a variety of additional features and capabilities that can help developers build more complex and scalable web applications.",
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
    content:
      "MySQL is a popular open-source relational database management system (RDBMS). MySQL is used to store data in various types of applications, including web  , mobile, and desktop.",
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
    content:
      "Flutter is a mobile, desktop, and web application development framework created by Google. Flutter uses the Dart programming language to build responsive applications that can be used on various platforms.",
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
    content:
      "Firebase is a Backend-as-a-Service (BaaS) platform that provides a variety of services to help developers develop web and mobile applications faster.",
  },
  {
    icon: (
      <Image
        src={Expressjs}
        priority
        width={31.5}
        height={31.5}
        color="#e8e8e8"
        className="text-[#e8e8e8]"
        alt="Follow us on Twitter"
      />
    ),
    name: "Express",
    content:
      "Express.js is a popular choice for RESTful web application development. Express.js is easy to use and configurable, and offers a variety of features that can help developers build fast and efficient web applications.",
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
    title: "It means",
    content:
      "VS Code (Visual Studio Code) is a popular code editor for web developers, software developers, and data scientists.",
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
    content:
      "Github is a popular source code hosting service for software development. Github allows developers to store, share, and collaborate on their code.",
  },
  {
    icon: <Figma className="h-8 w-8" />,
    name: "Figma",
    content:
      "Figma is a cloud-based design application used to create user interfaces (UI) and user experiences (UX).",
  },
];

export const project = [
  {
    thumbnail: Thumbnail,
    name: "Rihlatul",
    description: "Umrah guide",
    role: "Back End",
    tahun: "2023",
  },
];
