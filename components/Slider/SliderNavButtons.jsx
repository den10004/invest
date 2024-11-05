import React from "react";
import { useSwiper } from "swiper/react";
import check from "./../../public/check.png";
import "./style.css";

export const SliderNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="btn-wrapper">
      <button onClick={() => swiper.slidePrev()} className="btnSlider">
        <img src={check.src} alt="button-prev" className="arrow" />
      </button>
      <button onClick={() => swiper.slideNext()} className="btnSlider">
        <img src={check.src} alt="button-next" className="arrow rotate" />
      </button>
    </div>
  );
};
