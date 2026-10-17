"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useState } from "react";

/**
 * Menyatukan Lenis dengan GSAP ScrollTrigger, dan menggulirkan tautan jangkar
 * lewat Lenis.
 *
 * (1) Tanpa `useLenis(ScrollTrigger.update)` posisi reveal tertinggal satu frame
 *     di belakang posisi gulir. Itulah yang terlihat sebagai gerakan patah-patah.
 *     `useLenis` sekaligus melepas callback-nya saat komponen dibongkar.
 * (2) Tanpa penanganan tautan jangkar, klik menu melompat seketika sementara
 *     Lenis masih menganimasikan posisi lama, sehingga muncul sentakan.
 */
function ScrollSync() {
  // useLayoutEffect berjalan sebelum efek pasif, jadi plugin sudah terdaftar
  // saat useLenis memasang callback-nya.
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    if (!lenis) return;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const id = link.getAttribute("href");
      const section = id ? document.querySelector<HTMLElement>(id) : null;
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section, {
        // Lenis tidak membaca CSS `scroll-margin-top`, jadi tinggi navbar
        // dikurangi manual supaya judul section tidak tertutup navbar.
        offset: -(document.querySelector("header")?.offsetHeight ?? 0),
        duration: 1.4,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export const SmoothScrolling = ({ children }: { children: any }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Tanpa scroll halus: konten tetap bisa digulir seperti biasa, tanpa lerp.
  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // Sengaja mode `lerp`, bukan `duration`. Kalau `duration` diisi, lenis
        // membuang `lerp` dan memakai animasi berbasis waktu: tiap putaran roda
        // me-restart timer-nya, dan karena easing-nya eksponensial hampir semua
        // jarak ditempuh di awal — gerakannya cepat lalu merayap. Lerp hanya
        // memindahkan sebagian kecil sisa jarak tiap frame, jadi kecepatannya
        // rata dan terasa lebih pelan (bawaan lenis 0.1, ini lebih lambat).
        zoom: 1,
        lerp: 0.1,
        smooth: true,
        smoothTouch: false,
        syncTouch: false,
        touchMultiplier: 1,
        normalizeWheel: false,
        wheelMultiplier: 1,
      }}
    >
      <ScrollSync />
      {children}
    </ReactLenis>
  );
};
