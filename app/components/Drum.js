"use client";

import { useEffect, useRef } from "react";

const STEP = 42; // angle entre deux cartes sur le rouleau (en degrés)
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export default function Drum({ stores }) {
  const sectionRef = useRef(null);
  const wheelRef = useRef(null);
  const n = stores.length;

  useEffect(() => {
    const section = sectionRef.current;
    const wheel = wheelRef.current;
    if (!section || !wheel) return;

    const pin = section.querySelector(".drum-pin");
    const cards = Array.from(wheel.querySelectorAll(".dcard"));
    const dots = Array.from(section.querySelectorAll(".ddot"));
    const hint = section.querySelector(".drum-hint");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let R = 500;
    let top = 0;
    let dist = 1;
    let width = window.innerWidth;
    let cur = 0;
    let target = 0;
    let raf = 0;
    let lastDot = -1;
    let lastHint = -1;
    const state = cards.map(() => ({ op: -1, on: null }));

    // Mesures (faites rarement, jamais pendant le défilement)
    const measure = () => {
      const h = wheel.offsetHeight;
      R = (h * 1.12) / 2 / Math.tan((STEP * Math.PI) / 360);
      cards.forEach((c, i) => {
        c.style.transform = `rotateX(${-i * STEP}deg) translateZ(${R}px)`;
      });
      const vh = pin.offsetHeight;
      dist = (n - 1) * vh * 0.85;
      top = section.getBoundingClientRect().top + window.scrollY;
    };

    // Applique la position du rouleau (n'écrit que ce qui change)
    const render = () => {
      const pos = cur * (n - 1);
      wheel.style.transform = `translate3d(0, 0, ${-R}px) rotateX(${pos * STEP}deg)`;

      cards.forEach((c, i) => {
        const d = Math.abs(i - pos);
        const op = Math.round(clamp(1 - d * 0.8, 0, 1) * 100) / 100;
        const st = state[i];
        if (op !== st.op) {
          c.style.opacity = String(op);
          st.op = op;
        }
        const on = d < 0.5;
        if (on !== st.on) {
          c.classList.toggle("on", on);
          c.style.pointerEvents = on ? "auto" : "none";
          st.on = on;
        }
      });

      const di = Math.round(pos);
      if (di !== lastDot) {
        dots.forEach((dot, i) => dot.classList.toggle("on", i === di));
        lastDot = di;
      }
      if (hint) {
        const o = Math.round(clamp(1 - cur * 10, 0, 1) * 100) / 100;
        if (o !== lastHint) {
          hint.style.opacity = String(o);
          lastHint = o;
        }
      }
    };

    const readTarget = () => (dist > 0 ? clamp((window.scrollY - top) / dist, 0, 1) : 0);

    // Mouvement lissé vers la position visée
    const tick = () => {
      raf = 0;
      const diff = target - cur;
      if (Math.abs(diff) < 0.0006) {
        cur = target;
        render();
        return;
      }
      cur += diff * 0.22;
      render();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const t = readTarget();
      if (t === target) return;
      target = t;
      if (reduce) {
        cur = t;
        render();
        return;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const refresh = () => {
      measure();
      target = readTarget();
      cur = target;
      render();
    };

    // Sur mobile, la barre d'adresse change la hauteur : on ignore, seule la largeur compte
    const onResize = () => {
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      refresh();
    };

    refresh();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", refresh);
    window.addEventListener("load", refresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", refresh);
      window.removeEventListener("load", refresh);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  return (
    <section className="drum" id="boutiques" ref={sectionRef} style={{ "--n": n }}>
      <div className="drum-pin">
        <div className="drum-head">
          <p className="eyebrow">Nos boutiques</p>
          <h2>Trois univers, un seul endroit.</h2>
        </div>

        <div className="drum-stage">
          <div className="drum-wheel" ref={wheelRef}>
            {stores.map((s, i) => (
              <a
                className="dcard"
                href={`#${s.id}`}
                key={s.id}
                data-s={s.id}
                style={{ "--tile": s.tile, opacity: i === 0 ? 1 : 0 }}
              >
                <span className="dnum">{String(i + 1).padStart(2, "0")}</span>
                <div className="dbody">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="dfoot">
                  <span className="dpill">{s.count} {s.count > 1 ? "produits" : "produit"}</span>
                  <span className="dgo">Explorer <span className="arr">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="drum-bottom" aria-hidden="true">
          <div className="ddots">
            {stores.map((s) => <span className="ddot" key={s.id} />)}
          </div>
          <div className="drum-hint"><span>Fais défiler</span><span className="chev">↓</span></div>
        </div>
      </div>
    </section>
  );
}
