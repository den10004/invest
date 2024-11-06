"use client";
import "./style.css";
import phone from "@/public/phones.webp";
import icon from "@/public/icon2.webp";
import icon2 from "@/public/icon5.webp";
import icon3 from "@/public/icon6.webp";
import PresentationModal from "@/components/Modals/PresentationModal";
import { useState } from "react";

export default function Placement() {
  const [open, setOpen] = useState(false);
  return (
    <section id="main" className="shine">
      <div className="wrap" style={{ position: "relative" }}>
        <h1 className="placing__headline">
          Хотите привлечь инвестиции <br className="placing-br" />
          в свой бизнес, но не знаете <br className="placing-br" />с чего
          начать?
        </h1>
        <p className="pre-line">
          Разместите свой проект в нашем каталоге и получайте целевые заявки от
          заинтересованных инвесторов
        </p>
        <button
          className="btn btn-yellow big-btn btn-pdf-new openTafif"
          onClick={() => setOpen(true)}
        >
          <i className="i-download-pdf"></i> Получить презентацию
        </button>
        <div className="main-tr-box flex">
          <div className="main-tr-item">
            <div className="main-tr-item-img">
              <img
                src={icon.src}
                className="main-img"
                alt="публикация проектов"
              />
              <div className="num-small">01</div>
            </div>
            <p>
              <strong>Бесплатная </strong>публикация ваших проектов
            </p>
          </div>
          <div className="main-tr-item">
            <div className="main-tr-item-img">
              <img
                src={icon2.src}
                className="main-img"
                alt="Оплата только за заявки"
              />
              <div className="num-small">02</div>
            </div>
            <p>Оплата только за заявки</p>
          </div>
          <div className="main-tr-item">
            <div className="main-tr-item-img">
              <img src={icon3.src} alt="заявки" />
              <div className="num-small">03</div>
            </div>
            <p>
              <strong>Обмен</strong>
              некачественных заявок
            </p>
          </div>
        </div>
        <img src={phone.src} className="main-img" alt="" />
      </div>

      <div className="separation"></div>

      {open && <PresentationModal setOpen={setOpen} type={"placement"} />}
    </section>
  );
}
