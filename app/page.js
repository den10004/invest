"use client";
import ScrollToTopButton from "@/components/ScrollUp";
import Projects from "../components/Projects/Projects";
import TheFooter from "@/components/TheFooter/TheFooter";

export default function Home() {
  return (
    <>
      <div id="hero">
        <div className="container">
          <h1>Каталог инвестиционных проектов</h1>
          <h2>
            Инвестируйте в действующие бизнесы или стартапы с доходностью от 15%
            до 50% годовых*
          </h2>
        </div>
      </div>
      <Projects />
      <TheFooter />
      <ScrollToTopButton />
    </>
  );
}
