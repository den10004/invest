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
      style={{
        "--swiper-pagination-color": "rgb(255, 255, 255)",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "15px",
      }}
    >
      {images.images.map((url) => (
        <SwiperSlide key={url}>
          <img src={url}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
