import Expressjs from "@/public/Expressjs.svg";
import VS from "@/public/Figma.svg";
import Flutter from "@/public/Flutter.svg";
import Github from "@/public/Github.svg";
import Nestjs from "@/public/Nest.svg";
import Nextjs from "@/public/Nextjs.svg";
import Nodejs from "@/public/NodeJs.svg";
import ReactJs from "@/public/ReactJs.svg";
import TypeScript from "@/public/TypeScript.svg";
import Firebase from "@/public/firebase.svg";
import Mysql from "@/public/mySql.svg";
import { Figma, Html3, Html5, JavaScript } from "iconsax-react";
import Image from "next/image";

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
    icon: <Figma className="h-8 w-8" />,
    name: "Figma",
    content:
      "Figma is a cloud-based design application used to create user interfaces (UI) and user experiences (UX).",
  },
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
    name: "Postman",
    title: "It means",
    content: "",
  },
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
    name: "DBeaver",
    title: "It means",
    content: "",
  },

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
    name: "Google Colab",
    title: "It means",
    content: "",
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
    name: "Git",
    content: "",
  },
];

// ============================================================================
// PENGEMBANGAN BERBANTUAN AI — isi manual.
//
// Array kosong berarti kelompok ini tidak ditampilkan sama sekali. Sebelumnya
// di sini ada dua entri (Antigravity IDE/CLI) dengan src="" sehingga ikonnya
// rusak dan tidak bisa dirender — jadi dikosongkan, bukan dihapus, supaya
// contoh pengisiannya tetap terlihat.
//
// Contoh cara mengisi (icon wajib diisi, jangan string kosong):
//   {
//     icon: <Image src={NamaImport} width={32} height={32} alt="" />,
//     name: "Nama alat",
//     content: "Penjelasan singkat cara Anda memakainya.",
//   },
// ============================================================================
export const ai = [];

// ============================================================================
// SOSIAL MEDIA — edit manual. Dipakai section Tentang, Kontak, dan Footer.
//   label : teks yang tampil
//   href  : tujuan tautan
// ============================================================================
export const sosmed = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/larsalfarabi/",
  },
  { label: "GitHub", href: "https://github.com/larsalfarabi" },
];

// ============================================================================
// DATA PROYEK — edit manual di sini untuk menambah / mengubah proyek.
//
// Cara menambah proyek: salin satu blok { ... } di bawah, ubah isinya, dan
// letakkan di urutan yang diinginkan (blok paling atas tampil paling awal).
//
//   id          : teks unik, huruf kecil tanpa spasi. WAJIB berbeda tiap proyek
//                 (dipakai React sebagai key saat daftar berubah).
//   name        : nama proyek.
//   description : 1-2 kalimat. Sebutkan masalah yang dipecahkan, bukan cuma fitur.
//   role        : peran Anda di proyek ini.
//   tahun       : tahun pengerjaan (teks, boleh "2024-2025").
//   tech        : daftar teknologi. Boleh dikosongkan jadi [].
//   link        : URL demo atau repo. Pakai "#" kalau belum ada.
//   thumbnail   : taruh gambar di folder public/, lalu isi "/nama-file.png".
//                 Nilai sekarang masih placeholder picsum.photos — ganti dengan
//                 screenshot asli proyek sebelum dipakai melamar.
// ============================================================================
export const project = [
  {
    id: "aplikasi-rihlatul",
    thumbnail: "https://picsum.photos/seed/rihlatul-guide/600/400",
    name: "Aplikasi Rihlatul",
    description:
      "Aplikasi panduan (mobile) untuk membantu ibadah jamaah haji dan umrah secara interaktif.",
    role: "Backend Developer",
    tahun: "2023",
    tech: ["Flutter", "Nest.js", "MySQL"],
    link: "#",
  },
  {
    id: "website-portfolio",
    thumbnail: "https://picsum.photos/seed/portfolio-2024/600/400",
    name: "Website Portfolio",
    description:
      "Website pribadi responsif untuk menampilkan karya, tech stack, dan profil profesional.",
    role: "Fullstack Developer",
    tahun: "2024",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "lost-and-found-system",
    thumbnail: "https://picsum.photos/seed/lost-found-2025/600/400",
    name: "Lost & Found System",
    description:
      "Platform web kampus untuk pelacakan dan klaim barang hilang dengan sistem verifikasi admin.",
    role: "Backend Developer",
    tahun: "2025",
    tech: ["React", "Express.js", "Prisma ORM", "PostgreSQL"],
    link: "#",
  },
  {
    id: "host-briefing-dashboard",
    thumbnail: "https://picsum.photos/seed/briefing-dashboard/600/400",
    name: "Host Briefing Dashboard",
    description:
      "Dashboard manajemen briefing live streaming untuk meminimalkan kesalahan operasional jadwal siaran.",
    role: "Fullstack Developer",
    tahun: "2025",
    tech: ["Next.js", "Express.js", "Prisma ORM", "PostgreSQL"],
    link: "#",
  },
];

// ============================================================================
// PROFIL — edit manual. Dipakai section Hero/Tentang, Kontak, dan Footer.
//
//   nama    : nama lengkap Anda.
//   peran   : satu baris jabatan yang ingin dibaca rekruter.
//   tagline : satu kalimat ringkas "saya membangun apa".
//   lokasi  : kota, mis. "Bandung, Indonesia".
//   email   : WAJIB diisi. Selama string ini kosong, tombol email di section
//             Kontak tidak akan muncul (tidak ada tautan mati).
//   foto    : file ada di folder public/, jadi isinya "/nama-file.png".
//   bio     : daftar paragraf. Boleh 1-3 paragraf, tiap paragraf satu string.
//
// Nilai peran, tagline, dan bio di bawah adalah draf awal — periksa dan ganti
// sesuai keadaan Anda. Hanya `email` yang wajib diisi (barisnya ditandai
// [ISI_MANUAL]).
// ============================================================================
export const profile = {
  nama: "Lars Alfarabi Gunawan",
  peran: "Fullstack & Mobile Developer",
  tagline:
    "Saya membangun backend yang skalabel dan aplikasi mobile yang nyaman dipakai.",
  lokasi: "Indonesia",
  email: "msyamil404@gmail.com", // [ISI_MANUAL] mis. "lars@example.com"
  foto: "/Lars Alfarabi Gunawan-Professional 1.png",
  bio: [
    "Saya berfokus pada React, Next.js, Node.js, dan Flutter. Saya merancang REST API, skema database, dan antarmuka yang bersih agar data mengalir dengan benar dan nyaman dipakai pengguna.",
    "Saya menikmati pekerjaan di titik temu backend dan antarmuka — data harus mengalir dengan benar, dan antarmuka harus nyaman dipakai.",
    "Saya terbuka untuk posisi fullstack atau mobile, kantor atau proyek lepas.",
  ],
};

// ============================================================================
// PENGALAMAN — edit manual. Array kosong berarti section Pengalaman tidak
// ditampilkan sama sekali (tidak ada tabel kosong di halaman).
//
// Salin blok di bawah, letakkan di urutan yang diinginkan (terbaru di atas):
//   periode   : teks bebas, mis. "2024 — Sekarang"
//   peran     : jabatan Anda
//   organisasi: nama perusahaan / instansi
//   lokasi    : kota, mis. "Jakarta"
//   tipe      : "Full-time" | "Kontrak" | "Magang" | "Freelance"
// ============================================================================
export const experience = [
  // {
  //   periode: "2024 — Sekarang",
  //   peran: "Backend Developer",
  //   organisasi: "Nama Perusahaan",
  //   lokasi: "Jakarta",
  //   tipe: "Full-time",
  // },
];

// ============================================================================
// LAYANAN / FOKUS — edit manual. Array kosong berarti section ini tidak
// ditampilkan. `nomor` dipakai sebagai label urut di tampilan, bukan index.
// ============================================================================
export const services = [
  {
    nomor: "01",
    judul: "Pengembangan Backend",
    deskripsi:
      "REST API dan skema database yang rapi, sehingga fitur Anda bisa berkembang tanpa ribet untuk dirawat.",
  },
  {
    nomor: "02",
    judul: "Pengembangan Web",
    deskripsi:
      "antarmuka web responsif dengan Next.js dan React, dari desain hingga peluncuran.",
  },
  {
    nomor: "03",
    judul: "Aplikasi Mobile",
    deskripsi:
      "Aplikasi mobile lintas platform dengan Flutter terhubung ke backend yang sama.",
  },
];
