import Link from "next/link";
import Sosmed from "@/components/sosmed/Sosmed";
import { profile } from "@/utils/data";
import { ScrollToTop } from "@/utils/scrollToTop";

export default function Footer({ items = [] }) {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--border-color)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div className="space-y-3">
          <p className="meta-label">Menu</p>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors duration-300 hover:text-[var(--accent-color)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="meta-label">Sosial</p>
          <Sosmed />
        </div>

        <div className="space-y-3">
          <p className="meta-label">Kredit</p>
          <p className="text-sm text-[var(--text-muted)]">
            Dirancang &amp; dikembangkan oleh {profile.nama}.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t border-[var(--border-color)] px-6 py-6 md:px-10">
        <p className="meta-label">
          © {tahun} {profile.nama}
        </p>
        <ScrollToTop />
      </div>
    </footer>
  );
}
