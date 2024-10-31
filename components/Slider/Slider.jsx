"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./page.module.css";

export default function Slider(images) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.images.map((url) => (
        <SwiperSlide key={url}>
          <img src={url}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
