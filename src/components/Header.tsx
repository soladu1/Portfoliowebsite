"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { href: "#hero",      icon: "bi-house",            label: "Home" },
  { href: "#about",     icon: "bi-person",           label: "About" },
  { href: "#resume",    icon: "bi-file-earmark-text", label: "Resume" },
  { href: "#portfolio", icon: "bi-images",           label: "Portfolio" },
  { href: "#skills",    icon: "bi-hdd-stack",        label: "Skills" },
  { href: "#contact",   icon: "bi-envelope",         label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  function handleNavClick() {
    if (isOpen) setIsOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 200;
      for (const item of navItems) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY >= el.offsetTop && scrollY <= el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile toggle – only visible below 1200px */}
      <button
        className="header-toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
      </button>

      <header
        id="header"
        className={`header dark-background${isOpen ? " header-show" : ""}`}
      >
        {/* Profile Image */}
        <div className="profile-img">
          <Image
            src="/img/hero-bg.jpg"
            alt="Hana Guesh profile"
            width={120}
            height={120}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            priority
          />
        </div>

        {/* Site name */}
        <a href="#hero" className="logo">
          <h1 className="sitename">HANA GUESH</h1>
        </a>

        {/* Social Links */}
        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Navigation */}
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : ""}
                  onClick={handleNavClick}
                >
                  <i className={`bi ${item.icon} navicon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
