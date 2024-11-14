"use client";
import "./style.css";
import PresentationModal from "@/components/Modals/PresentationModal";
import { useState } from "react";
import Placement from "@/components/invest-components/Placement/Placement";
import Attraction from "@/components/invest-components/Attraction/Attraction";
import AboutUs from "@/components/invest-components/AboutUs/AboutUs";

export default function Invest() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="invests">
        <div className="wrap">
          <h1>
            Каталог инвестиционных <br /> проектов нового поколения
          </h1>
          <button
            className="btn btn-yellow invest-btn openTafif"
            onClick={() => setOpen(true)}
          >
            <i className="i-download-pdf"></i> Найти инвестора
          </button>
        </div>
      </section>

      {open && <PresentationModal setOpen={setOpen} type={"placement"} />}

      <Placement />
      <Attraction />
      <AboutUs />
    </>
  );
}
