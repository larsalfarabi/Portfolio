import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";

export default function Services({ items = [] }) {
  // Sama seperti Experience: data kosong berarti section tidak dirender.
  if (!items.length) return null;

  return (
    <section id="layanan" className="scroll-mt-20">
      <MotionHeader title="Layanan" meta="Yang bisa saya kerjakan" />

      <ul className="space-y-10">
        {items.map((item) => (
          <li
            key={item.nomor}
            data-reveal
            className="grid gap-3 border-t border-[var(--border-color)] pt-6 md:grid-cols-12 md:gap-6"
          >
            <p className="meta-label md:col-span-2">[{item.nomor}]</p>
            <h3 className="section-title text-xl md:col-span-4 md:text-2xl">
              {item.judul}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] md:col-span-6 md:text-base">
              {item.deskripsi}
            </p>
          </li>
        ))}
      </ul>

      <Divider />
    </section>
  );
}
