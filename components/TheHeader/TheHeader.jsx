import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import styles from "./page.module.css";

export default function TheHeader() {
  const navItems = [
    { label: "Каталог инвестпроектов", href: "/" },
    { label: "Размещение проектов в каталоге", href: "/placement" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <header className={styles.header}>
      <div className="wrap flex">
        <Link href="/" className="logo">
          <span>PLAT</span>FORMA
        </Link>
        <span className={styles.close__header}>×</span>
        <Navigation navLinks={navItems} />
        <button className="btn-yellow header-btn">
          <span>Разместить проект</span>
        </button>
      </div>

      <div className={styles.hero}>
        <div id="hero">
          <div className="container">
            <h1>Каталог инвестиционных проектов</h1>
            <h2>
              Инвестируйте в действующие бизнесы или стартапы с доходностью от
              15% до 50% годовых*
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
