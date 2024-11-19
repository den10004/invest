"use client";
import "./style.css";
import { useState } from "react";
import Placement from "@/components/landing-components/Placement/Placement";
import Attraction from "@/components/landing-components/Attraction/Attraction";
import AboutUs from "@/components/landing-components/AboutUs/AboutUs";
import ForWhom from "@/components/landing-components/ForWhom/ForWhom";
import Industries from "@/components/landing-components/Industries/Industries";
import Why from "@/components/landing-components/Why/Why";
import Banner from "@/components/landing-components/Banner/Banner";
import PresentationModal from "@/components/Modals/PresentationModal";
import phone from "@/public/phones.webp";

export default function Invest() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="main" className="shine">
        <div className="wrap" style={{ position: "relative" }}>
          <h1 className="placing__headline">
            Хотите привлечь инвестиции <br className="placing-br" />
            в свой бизнес, но не знаете <br className="placing-br" />с чего
            начать?
          </h1>
          <p className="pre-line">
            Разместите свой проект в нашем каталоге и получайте целевые заявки
            от заинтересованных инвесторов
          </p>
          <button
            className="btn btn-yellow big-btn btn-pdf-new openTafif"
            onClick={() => setOpen(true)}
          >
            <i className="i-download-pdf"></i> Получить презентацию
          </button>

          <img src={phone.src} className="main-img" alt="" />
        </div>

        <div className="separation"></div>
      </section>

      {open && <PresentationModal setOpen={setOpen} type={"presentation"} />}
      <Placement />
      <Attraction />
      <AboutUs />
      <ForWhom />
      <Industries />
      <Why />
      <Banner />
    </>
  );
}
