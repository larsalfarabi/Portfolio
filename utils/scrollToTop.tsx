"use client";
import { useCallback } from "react";

export const ScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Sebelumnya ada useEffect yang memanggil scrollToTop saat komponen dipasang,
  // sehingga halaman menggulir ke atas sendiri saat dibuka. Dihapus.
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group flex items-center gap-2"
    >
      <span className="meta-label transition-colors duration-300 group-hover:text-[var(--accent-color)]">
        Kembali ke atas
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-1"
      >
        <svg
          className="-rotate-90 text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--accent-color)]"
          width="14"
          height="14"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};
