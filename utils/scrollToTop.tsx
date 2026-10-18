"use client";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect } from "react";

export const ScrollToTop = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const lenis = useLenis(ScrollTrigger.update);

  const scrollToTop = useCallback(() => {
    lenis.scrollTo(0, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 3) });
  }, [lenis]);

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
