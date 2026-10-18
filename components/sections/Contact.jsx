import Sosmed from "@/components/sosmed/Sosmed";
import { profile } from "@/utils/data";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 pt-4 md:pt-6">
      <p data-reveal className="meta-label">
        Kontak
      </p>

      <h2 data-reveal className="section-title mt-4 text-4xl md:text-6xl">
        Mari bicara.
      </h2>

      <p
        data-reveal
        className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base"
      >
        Ada posisi yang cocok atau ingin berdiskusi soal proyek? Kirim email
        atau hubungi saya di LinkedIn, saya balas secepatnya.
      </p>

      <div data-reveal className="mt-8">
        {/* Tombol email hanya muncul kalau profile.email sudah diisi
            (lihat utils/data.js). Tanpa itu, tautannya akan rusak. */}
        {profile.email ? (
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent-color)] bg-[var(--accent-muted)] px-5 py-3 text-sm font-semibold text-[var(--accent-color)] transition-colors duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)]"
          >
            {profile.email}
            <span aria-hidden="true">&#8599;</span>
          </a>
        ) : null}
      </div>

      <div data-reveal className="mt-8">
        <p className="meta-label mb-3">Atau lewat</p>
        <Sosmed />
      </div>
    </section>
  );
}
