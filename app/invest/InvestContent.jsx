"use client";
import "./style.css";
import { useState } from "react";

import PresentationModal from "@/components/Modals/PresentationModal";
import phone from "@/public/phones.webp";
import TheHeader from "@/components/TheHeader/TheHeader";

export default function InvestContent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="main" className="shine">
        <TheHeader />
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
    </>
  );
}
