"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <SmoothScrolling>
          {" "}
          <Navbar />
          <div className={`mx-auto max-w-lg`}>
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
