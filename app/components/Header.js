"use client";

import { useEffect, useState } from "react";
import logo from "../logo.png";

const LINKS = [
  { href: "#", label: "Accueil" },
  { href: "#boutiques", label: "Boutiques" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="wrap bar">
        <a className="brand" href="#" onClick={() => setOpen(false)} aria-label="C-A 3 Store, accueil">
          <img src={logo.src} width={logo.width} height={logo.height} alt="C-A 3 Store" />
        </a>
        <nav className="main" aria-label="Navigation">
          {LINKS.map((l) => (
            <a key={l.label} className="navlink" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      <nav className="mobile-nav" aria-label="Navigation mobile">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
