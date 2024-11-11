"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { SliderNavButtons } from "./SliderNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import Image from "next/image";

export default function Slider(images) {
  const arrayLength = images.images.length;

  return (
    <Swiper
      /*
      watchOverflow={true}*/
      pagination={{
        dynamicBullets: false,
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{
        "--swiper-pagination-color": "rgb(255, 255, 255)",
        "--swiper-pagination-bullet-inactive-color": "rgb(255, 255, 255)",
        "--swiper-pagination-bullet-inactive-opacity": "0.3",
        "--swiper-pagination-bullet-size": "10px",
      }}
    >
      {images.images.map((url) => (
        <SwiperSlide key={url}>
          <img src={url} alt="слайдер" className="img-aspect" />
        </SwiperSlide>
      ))}

      {arrayLength > 1 ? <SliderNavButtons /> : <></>}
    </Swiper>
  );
}
