"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import RequestModal from "../Modals/RequestModal";

export default function TheHeader() {
  const navItems = [
    { label: "Каталог инвестпроектов", href: "/" },
    { label: "Размещение проектов в каталоге", href: "/invest" },
    { label: "Контакты", href: "/contacts" },
  ];
  const nav = useRef();
  const navbtn = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1171) {
      navbtn.current.style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

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
          <Link href="/">Каталог инвестпроектов</Link>
          <Link href="/invest">Размещение проектов в каталоге</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        <button
          className="openModalPost btn-yellow"
          modal=" #add-franch"
          onClick={() => setShowModal(true)}
        >
          <span>Разместить проект</span>
        </button>
      </div>
      {showModal && <RequestModal setShowModal={setShowModal} />}
    </header>
  );
}
