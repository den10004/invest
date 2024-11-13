"use client";
import { ProjectRender } from "@/services/connect";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Projects() {
  const [cards, setCards] = useState([]);

  let cardArr = cards.data;
  let errorMessage = cards.error;
  let pbArr = cards.pb;

  useEffect(() => {
    ProjectRender().then(setCards);
  }, []);

  return (
    <div id="catalogue">
      <div className="container">
        <div className="items">
          <div style={{ background: "red" }}>
            <h1>{errorMessage}</h1>{" "}
          </div>

          {cardArr?.items?.map((item) => {
            const p = item.expand.project;
            return <Card p={p} pbArr={pbArr} key={p.id} />;
          })}

          {cards.length === 0 && (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100vh",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "5px solid #0b1e30",
                  borderBottomColor: "transparent",
                  borderRadius: "50%",
                  margin: "150px auto 0 auto",
                  animation: "rotation 1s linear infinite",
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
