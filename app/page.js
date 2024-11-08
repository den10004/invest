"use client";
import Projects from "../components/Projects/Projects";
import { investContext } from "@/context/context";

export default function Home() {
  const mm = 5;

  return (
    <>
      <investContext.Provider value={{ mm }}>
        <div id="hero">
          <div className="container">
            <h1>Каталог инвестиционных проектов</h1>
            <h2>
              Инвестируйте в действующие бизнесы или стартапы с доходностью от
              15% до 50% годовых*
            </h2>
          </div>
        </div>
        <Projects />
      </investContext.Provider>
    </>
  );
}
