"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typedInstance: { destroy: () => void } | null = null;

    async function initTyped() {
      const { default: Typed } = await import("typed.js");
      if (!typedRef.current) return;
      typedInstance = new Typed(typedRef.current, {
        strings: ["Designer", "Developer", "Freelancer", "Photographer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    initTyped();
    return () => { typedInstance?.destroy(); };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <Image
        src="/img/hero-bg1.jpg"
        alt="Hero background"
        fill
        className="hero-bg"
        priority
        style={{ objectFit: "cover", zIndex: 1 }}
      />

      <div className="container">
        <h2>HANA GUESH</h2>
        <p>
          I&apos;m <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
}
