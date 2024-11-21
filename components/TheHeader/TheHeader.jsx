"use client";

import Link from "next/link";
import "./style.css";
import { useRef, useState } from "react";
import RequestModal from "../Modals/RequestModal";
import { usePathname } from "next/navigation";

export default function TheHeader() {
  const pathname = usePathname();
  const nav = useRef();
  const navbtn = useRef();
  const [showModal, setShowModal] = useState(false);

  const showMenuOpen = () => {
    nav.current.style.display = "flex";
    navbtn.current.style.display = "block";
  };

  const closeMenuOpen = () => {
    nav.current.style.display = "none";
    navbtn.current.style.display = "none";
  };

  return (
    <header className="header">
      <div className="wrap flex">
        <div className="nav-toggle" onClick={showMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="/" className="logo">
          <span>PLAT</span>FORMA
        </a>

        <nav className="flex header-nav" ref={nav}>
          <span className="close-header" ref={navbtn} onClick={closeMenuOpen}>
            ×
          </span>
          <Link className={pathname == "/" ? "activePage" : ""} href="/">
            Каталог инвестпроектов
          </Link>
          <Link
            className={pathname == "/invest" ? "activePage" : ""}
            href="/invest"
          >
            Размещение проектов в каталоге
          </Link>
          <Link
            className={pathname == "/contacts" ? "activePage" : ""}
            href="/contacts"
          >
            Контакты
          </Link>
        </nav>

        <button
          className="openModalPost btn-yellow"
          modal=" #add-franch"
          onClick={() => setShowModal(true)}
        >
          <span>Разместить проект</span>
        </button>
      </div>
      {showModal && (
        <RequestModal setShowModal={setShowModal} showModal={showModal} />
      )}
    </header>
  );
}
