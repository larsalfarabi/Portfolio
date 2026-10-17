"use client";
import SplashScreen from "@/components/splashScreen/SplashScreen";
import "@/styles/globals.css";
import Cursor from "@/utils/cursor";
import { useReveal } from "@/utils/reveal";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { useLayoutEffect, useState } from "react";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  // Dijalankan setelah splash selesai, saat section sudah ada di DOM.
  useReveal(!isLoading);

  return (
    <html lang="id" className={`${sans.variable}`}>
      <body className="font-sans antialiased">
        {isLoading ? (
          <SplashScreen />
        ) : (
          <SmoothScrolling>
            <Cursor />
            {children}
            <SpeedInsights />
            <Analytics />
          </SmoothScrolling>
        )}
      </body>
    </html>
  );
}
