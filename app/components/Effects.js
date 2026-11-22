"use client";

import { useLayoutEffect } from "react";

export default function Effects() {
  useLayoutEffect(() => {
    document.documentElement.classList.add("js");
    const cleanups = [];

    // Apparition au défilement
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      els.forEach((e) => io.observe(e));
      cleanups.push(() => io.disconnect());
    }

    // Léger effet de profondeur avec la souris (ordinateur uniquement)
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = document.querySelector(".hero-wrap");
    const stage = document.querySelector(".stage");

    if (fine && !reduce && hero && stage) {
      let raf = 0;
      const onMove = (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = hero.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          stage.style.setProperty("--mx", x.toFixed(3));
          stage.style.setProperty("--my", y.toFixed(3));
        });
      };
      const onLeave = () => {
        stage.style.setProperty("--mx", 0);
        stage.style.setProperty("--my", 0);
      };
      hero.addEventListener("mousemove", onMove);
      hero.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        hero.removeEventListener("mousemove", onMove);
        hero.removeEventListener("mouseleave", onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
