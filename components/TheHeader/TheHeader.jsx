"use client";

import Link from "next/link";
import "./style.css";
import { useRef, useState } from "react";
import RequestModal from "../Modals/RequestModal";

export default function TheHeader() {
  const navItems = [
    { label: "Каталог инвестпроектов", href: "/" },
    { label: "Размещение проектов в каталоге", href: "/invest" },
    { label: "Контакты", href: "/contacts" },
  ];
  const nav = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [none, setNone] = useState(false);

  const showMenuOpen = () => {
    console.log("asd");
  };

  const closeMenuOpen = () => {
    setShowMenu(fa);
  };

  return (
    <header className="header">
      <div className="wrap flex">
        <div className="nav-toggle" onClick={() => showMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="/" className="logo">
          <span>PLAT</span>FORMA
        </a>

        <nav className="flex header-nav" ref={nav}>
          <span className="close-header">×</span>
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
