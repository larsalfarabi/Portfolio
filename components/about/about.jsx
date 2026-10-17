import Sosmed from "@/components/sosmed/Sosmed";
import { profile } from "@/utils/data";
import Image from "next/image";

export default function About() {
  return (
    // .hero-fit = minimal satu layar penuh dikurangi navbar (lihat globals.css).
    // Padding atas dihapus di lg karena di sana konten sudah ditengahkan.
    <section
      id="tentang"
      className="hero-fit scroll-mt-[var(--nav-h)] pt-12 md:pt-16 lg:pt-0"
    >
      <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-14">
        <div className="md:col-span-7">
          <p data-reveal className="meta-label">
            {profile.peran}
          </p>

          <h1
            data-reveal
            className="hero-name mt-3 font-extrabold lowercase tracking-[-0.13em]"
          >
            {profile.nama}
          </h1>

          <p
            data-reveal
            className="hero-tagline mt-5 max-w-xl font-semibold leading-snug"
          >
            {profile.tagline}
          </p>

          <div
            data-reveal
            className="hero-bio mt-5 max-w-xl space-y-3 leading-relaxed text-[var(--text-muted)]"
          >
            {profile.bio.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </div>

          <div data-reveal className="mt-6">
            <Sosmed />
          </div>
        </div>

        <div className="md:col-span-5">
          <div data-reveal className="hero-photo">
            <Image
              src={profile.foto}
              alt={`Foto ${profile.nama}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
          <p className="meta-label mt-3">{profile.lokasi}</p>
        </div>
      </div>

      {/* Tidak ada <Divider /> di sini: MotionHeader milik section Keahlian
          sudah menggambar garis di atasnya, dan tinggi divider (my-16 md:my-24)
          membuat hero tidak muat satu layar. */}
    </section>
  );
}
