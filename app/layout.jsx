"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Cursor from "@/utils/cursor";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body>
        {" "}
        <SmoothScrolling>
          <Cursor />
          {children}
          <SpeedInsights />
          <Analytics />
        </SmoothScrolling>
      </body>
    </html>
  );
}
