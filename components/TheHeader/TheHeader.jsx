"use client";

import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import styles from "./page.module.css";
import { useState } from "react";
import RequestModal from "../Modals/RequestModal";

export default function TheHeader() {
  const navItems = [
    { label: "Каталог инвестпроектов", href: "/" },
    { label: "Размещение проектов в каталоге", href: "/placement" },
    { label: "Контакты", href: "/contacts" },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <div className="wrap flex">
        <Link href="/" className="logo">
          <span>PLAT</span>FORMA
        </Link>
        <span className={styles.close__header}>×</span>
        <Navigation navLinks={navItems} />
        <button
          className="btn-yellow header-btn"
          onClick={() => setShowModal(true)}
        >
          <span>Разместить проект</span>
        </button>
      </div>

      {showModal && <RequestModal setShowModal={setShowModal} />}
    </header>
  );
}
