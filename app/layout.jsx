"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import Cursor from "@/utils/cursor";
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <div>
          <SmoothScrolling>
            <Cursor />
            <Navbar />
            <div className={`mx-auto max-w-lg px-5 pb-5 md:px-0`}>
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </div>
          </SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
