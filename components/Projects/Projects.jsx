"use client";

import ProjectRender from "@/lib/connect";
import { useEffect, useState } from "react";

import Card from "./Card";

export default function Projects() {
  const [cards, setCards] = useState({});

  let cardArr = cards.data;
  let pbArr = cards.pb;

  useEffect(() => {
    ProjectRender().then(setCards);
  }, []);

  return (
    <div id="catalogue">
      <div className="container">
        <div className="items">
          {cardArr?.items?.map((item) => {
            const p = item.expand.project;
            return <Card p={p} pbArr={pbArr} key={p.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
