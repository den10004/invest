"use client";

import styles from "./page.module.css";
import Slider from "../Slider/Slider";
import PresentationModal from "./../Modals/PresentationModal";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Card({ p, pbArr }) {
  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: 1,
  });

  return (
    <>
      <article className={styles.item} ref={ref}>
        {inView ? (
          <>
            <div className={styles.header}>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.tag}>{p.group}</div>
            </div>
            <div className={styles.slider}>
              <div className={styles.slider__wrap}>
                <Slider
                  images={p.images.map((i) =>
                    pbArr.files.getUrl(p, i, { thumb: "300x180" })
                  )}
                />
              </div>
            </div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: p.content }}
            ></div>
            <div className={styles.footer}>
              <ul className={styles.params}>
                <li>
                  <div className={styles.label}>Инвестиции</div>
                  <div className={styles.value}>{p.invest}</div>
                </li>
                <li>
                  <div className={styles.label}>Доходность *</div>
                  <div className={styles.value}>{p.profit}</div>
                </li>
              </ul>
              <div className={styles.button}>
                <button
                  className="btn btn-yellow"
                  onClick={() => setOpen(true)}
                >
                  Получить презентацию
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </article>

      {open && <PresentationModal setOpen={setOpen} type={"presentation"} />}
    </>
  );
}
