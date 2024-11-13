"use client";
import "./style.css";
import Image from "next/image";
import PresentationModal from "@/components/Modals/PresentationModal";
import { useState } from "react";

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

      <section className="placement">
        <div className="placement-bg">
          <div className="placement-container wrap">
            <div>
              <h3>
                Инвест-каталог.рф <br /> — инструмент
                <br /> для профессионалов
              </h3>
              <p>
                Вы не платите за размещение в каталоге, оплата только за
                результат - заявки от потенциальных инвесторов. Это контакт
                заинтересованного лица в вашем городе
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
