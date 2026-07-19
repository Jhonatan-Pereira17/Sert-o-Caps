"use client";

import { useEffect, useState } from "react";
import type { SiteSettings } from "@/types";

export default function Navbar({ settings }: { settings?: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // roda uma vez ao carregar, caso a página já abra rolada
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-areia-100/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-20">
        <span className="font-display text-2xl text-couro-950">
        {settings?.nomeEmpresa || "Sertão Caps"}
        </span>
        <a
        
          href="#contato"
          className="rounded-full bg-ferrugem text-osso px-5 py-2.5 text-sm font-semibold"
        >
          Solicitar orçamento
        </a>
      </nav>
    </header>
  );
}