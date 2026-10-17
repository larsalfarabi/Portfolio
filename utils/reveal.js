"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Animasi reveal untuk setiap elemen ber-atribut `data-reveal`.
 *
 * Memakai gsap.from (bukan gsap.set), jadi keadaan bawaan elemen tetap
 * terlihat penuh. Kalau JS gagal dimuat atau animasi sengaja dilewati,
 * konten tetap terbaca.
 *
 * @param {boolean} ready - jalankan hanya setelah konten benar-benar dirender.
 *   Selama splash screen masih tampil, konten belum ada di DOM.
 */
export function useReveal(ready = true) {
  useEffect(() => {
    if (!ready) return;

    // Hormati preferensi pengguna: tanpa ini seluruh konten tetap terlihat
    // karena keadaan bawaan elemen sudah opacity 1.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal-list]").forEach((list) => {
        gsap.from(list.children, {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: list, start: "top 85%", once: true },
        });
      });
    });

    return () => ctx.revert();
  }, [ready]);
}
