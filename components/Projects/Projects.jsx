"use client";

import styles from "./page.module.css";
import Slider from "../Slider/Slider";

import ProjectRender from "./ProjectRender";
import { useEffect, useState } from "react";

export default function Projects() {
  const [cards, setCards] = useState({});
  let cardArr = cards.data;
  let pbArr = cards.pb;

  useEffect(() => {
    ProjectRender().then(setCards);
  }, [ProjectRender]);

  return (
    <div id="catalogue">
      <div className="container">
        <div className="items">
          {cardArr?.map((p) => (
            <article className={styles.item} key={p.id}>
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
