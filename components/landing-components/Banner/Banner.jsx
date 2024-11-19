"use client";
import "./style.css";
import "../style.css";
import PresentationModal from "@/components/Modals/PresentationModal";
import { useState } from "react";

export default function Banner() {
  const [open, setOpen] = useState(false);
  return (
    <section className="banner">
      <div className="banner__block">
        <div className="wrap">
          <h1>
            Свяжитесь с нами <br /> для публикации <br /> инвест-проекта <br />в
            каталоге PLATFORMA
          </h1>

          <button
            className="btn btn-yellow invest-btn openTafif"
            onClick={() => setOpen(true)}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      {open && <PresentationModal setOpen={setOpen} type={"placement"} />}
    </section>
  );
}
