"use client";
import "@/styles/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useMemo, useState } from "react";
import { project } from "./data";
import { Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";

const MotionCard = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const slidesPerView = windowWidth <= 640 ? 1 : 1.5;

  const slides = useMemo(
    () =>
      project.map((_, index) => (
        <SwiperSlide key={index}>
          <div
            className={`box flex h-[214px] w-full flex-col justify-end rounded-lg bg-base_col px-3 py-4`}
          >
            <div className="flex items-end justify-end gap-1.5">
              <p
                className="sm w-fit rounded-full border border-[#E8E8E8] px-2.5 font-DM_sans text-sm  font-medium text-[#E8E8E8]"
                data-swiper-parallax-x="-100"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-duration="750"
              >
                {_.name}
              </p>
              <p
                className="w-fit rounded-full bg-[#E8E8E8] px-2.5 font-DM_sans text-sm font-medium text-base_col"
                data-swiper-parallax-x="-110"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-duration="750"
              >
                {_.tahun}
              </p>
            </div>
          </div>
        </SwiperSlide>
      )),
    [project],
  );

  return (
    <div data-aos="fade-up" data-aos-duration="550">
      <Swiper
        modules={[Autoplay, Parallax]}
        autoplay={{
          delay: 2500,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        loop
        parallax={{ enabled: true }}
        slidesPerView={slidesPerView}
        spaceBetween={14}
      >
        {" "}
        {slides}
      </Swiper>
    </div>
  );
};

export default MotionCard;
