"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
export default function RootLayout({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    })();
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        {" "}
        <div data-scroll-container>
          {" "}
          <Navbar />
          <div className={`mx-auto max-w-lg`}>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
