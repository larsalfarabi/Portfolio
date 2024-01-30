"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { useEffect, useLayoutEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Cursor from "@/utils/cursor";
import SplashScreen from "@/components/splashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body>
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
