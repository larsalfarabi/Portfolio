"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { SmoothScrolling } from "@/utils/smoothScrolling";
import { useEffect } from "react";
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        {" "}
        <SmoothScrolling>
          <Navbar />
          <div className={`mx-auto max-w-lg`}>{children}</div>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
