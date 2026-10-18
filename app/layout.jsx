"use client";
import SplashScreen from "@/components/splashScreen/SplashScreen";
import "@/styles/globals.css";
import Cursor from "@/utils/cursor";
import { useReveal } from "@/utils/reveal";
import { ScrollSync } from "@/utils/smoothScrolling";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef();

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  // Dijalankan setelah splash selesai, saat section sudah ada di DOM.
  useReveal(!isLoading);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <html lang="id" className={`${sans.variable}`}>
      <body className="font-sans antialiased">
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <ReactLenis
              root
              options={{
                zoom: 1,
                lerp: 0.05,
                smooth: true,
                smoothTouch: false,
                syncTouch: false,
                touchMultiplier: 1,
                normalizeWheel: false,
                wheelMultiplier: 1,
                autoRaf: false,
              }}
              ref={lenisRef}
            />
            <ScrollSync />
            <Cursor />
            {children}
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
