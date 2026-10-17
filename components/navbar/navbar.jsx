"use client";
import Link from "next/link";
export default function Navbar({ items = [] }) {
  return (
    // Tinggi dipatok ke --nav-h supaya hero bisa menghitung sisa satu layar
    // dengan tepat (lihat .hero-fit di globals.css). Jangan ganti jadi padding.
    <header className="bg-[var(--bg-color)]/90 sticky top-0 z-50 h-[var(--nav-h)] border-b border-[var(--border-color)] backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="#tentang"
          className="text-base font-extrabold tracking-[-0.13em] transition-colors duration-300 hover:text-[var(--accent-color)] md:text-5xl"
        >
          lars.
        </Link>

        <nav aria-label="Navigasi utama" className="hidden gap-7 sm:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10.4px] font-light uppercase transition-colors duration-300 hover:text-[var(--accent-color)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
