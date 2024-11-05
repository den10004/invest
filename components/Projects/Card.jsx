"use client";

import styles from "./page.module.css";
import Slider from "../Slider/Slider";

import { useInView } from "react-intersection-observer";

export default function Card({ p, pbArr }) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: 1,
  });

  return (
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
              <button className="btn btn-yellow item-present">
                Получить презентацию
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>no</div>
      )}
    </article>
  );
}
