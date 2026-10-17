import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Project from "@/components/project/project";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Tech from "@/components/tech/tech";
import { ai, experience, services, tech, tool } from "@/utils/data";

export const metadata = {
  title: "Lars Alfarabi Gunawan — Fullstack & Mobile Developer",
  description:
    "Portofolio Lars Alfarabi Gunawan, fullstack & mobile developer. Backend, web, dan aplikasi mobile dengan Next.js, Node.js, dan Flutter.",
};

// Section yang datanya masih kosong tidak dirender (lihat Experience/Services),
// jadi tautannya juga tidak ditampilkan supaya tidak menjadi anchor mati.
function buildNav() {
  return [
    { href: "#tentang", label: "Tentang" },
    { href: "#keahlian", label: "Keahlian" },
    { href: "#proyek", label: "Proyek" },
    ...(experience.length
      ? [{ href: "#pengalaman", label: "Pengalaman" }]
      : []),
    ...(services.length ? [{ href: "#layanan", label: "Layanan" }] : []),
    { href: "#kontak", label: "Kontak" },
  ];
}

export default function Home() {
  const nav = buildNav();

  return (
    <>
      <Navbar items={nav} />
      <main className="mx-auto max-w-6xl px-6 md:px-10">
        <About />
        <Tech tech={tech} tool={tool} ai={ai} />
        <Project />
        <Experience items={experience} />
        <Services items={services} />
        <Contact />
      </main>
      <Footer items={nav} />
    </>
  );
}
