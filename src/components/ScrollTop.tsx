"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setActive(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top${active ? " active" : ""}`}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
}
