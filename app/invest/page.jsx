"use client";
import "./style.css";
import { useState } from "react";
import PresentationModal from "@/components/Modals/PresentationModal";
import Placement from "@/components/landing-components/Placement/Placement";
import Attraction from "@/components/landing-components/Attraction/Attraction";
import AboutUs from "@/components/landing-components/AboutUs/AboutUs";
import ForWhom from "@/components/landing-components/ForWhom/ForWhom";
import Industries from "@/components/landing-components/Industries/Industries";
import Why from "@/components/landing-components/Why/Why";
import Banner from "@/components/landing-components/Banner/Banner";

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
            Найти инвестора
          </button>
        </div>
      </section>

      {open && <PresentationModal setOpen={setOpen} type={"placement"} />}

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
