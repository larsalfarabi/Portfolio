import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";

export default function Experience({ items = [] }) {
  // Array kosong berarti section ini tidak dirender sama sekali, jadi tidak ada
  // tabel kosong di halaman. Tautan navigasinya juga ikut disembunyikan
  // (lihat buildNav di app/page.jsx).
  if (!items.length) return null;

  return (
    <section id="pengalaman" className="scroll-mt-20">
      <MotionHeader title="Pengalaman" meta={`${items.length} entri`} />

      <ul className="divide-y divide-[var(--border-color)]">
        {items.map((item, index) => (
          <li
            key={`${item.organisasi}-${index}`}
            data-reveal
            className="grid gap-1 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <p className="meta-label md:col-span-3">{item.periode}</p>
            <p className="text-base font-semibold md:col-span-4">
              {item.peran}
            </p>
            <p className="text-sm text-[var(--text-muted)] md:col-span-3">
              {item.lokasi ? `${item.organisasi} · ${item.lokasi}` : item.organisasi}
            </p>
            <p className="meta-label md:col-span-2 md:text-right">{item.tipe}</p>
          </li>
        ))}
      </ul>

      <Divider />
    </section>
  );
}
