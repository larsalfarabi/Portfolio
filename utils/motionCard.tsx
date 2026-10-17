"use client";

import Image from "next/image";
import { project } from "./data";

// Daftar editorial: satu proyek per baris dengan gambar besar, bukan grid kartu
// yang seragam (lihat aturan anti-template di docs/redesign/DESIGN_BRIEF.md).
const MotionCard = () => {
  return (
    <ul className="space-y-16 md:space-y-24">
      {project.map((item) => (
        <li
          key={item.id}
          data-reveal
          className="group grid gap-6 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            {/* class "img" dibaca utils/cursor.jsx untuk memperbesar kursor. */}
            <div className="img relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
              <Image
                src={item.thumbnail}
                alt={`Tangkapan layar proyek ${item.name}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between md:col-span-7">
            <div>
              <h3 className="section-title text-2xl md:text-3xl">
                {item.name}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                {item.description}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <dt className="meta-label">Tahun</dt>
                  <dd className="mt-1 text-sm">{item.tahun}</dd>
                </div>
                <div>
                  <dt className="meta-label">Peran</dt>
                  <dd className="mt-1 text-sm">{item.role}</dd>
                </div>
                <div>
                  <dt className="meta-label">Stack</dt>
                  <dd className="mt-1 text-sm">
                    {item.tech && item.tech.length > 0
                      ? item.tech.join(" · ")
                      : "—"}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Tautan hanya muncul kalau sudah diisi. Link "#" berarti belum ada,
                jadi tidak ditampilkan supaya tidak jadi tombol mati. */}
            {item.link && item.link !== "#" ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--accent-color)] bg-[var(--accent-muted)] px-4 py-2 text-sm font-semibold text-[var(--accent-color)] transition-colors duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)]"
              >
                Lihat Proyek
                <span aria-hidden="true">&#8599;</span>
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MotionCard;
