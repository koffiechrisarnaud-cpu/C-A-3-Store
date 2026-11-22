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
    let R = 500;
    let raf = 0;

    const layout = () => {
      const h = wheel.offsetHeight;
      R = (h * 1.12) / 2 / Math.tan((STEP * Math.PI) / 360);
      cards.forEach((c, i) => {
        c.style.transform = `rotateX(${-i * STEP}deg) translateZ(${R}px)`;
      });
    };

    const update = () => {
      raf = 0;
      const vh = pin.offsetHeight;
      const dist = (n - 1) * vh * 0.85;
      const top = section.getBoundingClientRect().top;
      const p = dist > 0 ? clamp(-top / dist, 0, 1) : 0;
      const pos = p * (n - 1);

      wheel.style.transform = `translateZ(${-R}px) rotateX(${pos * STEP}deg)`;

      cards.forEach((c, i) => {
        const d = Math.abs(i - pos);
        c.style.opacity = String(clamp(1 - d * 0.8, 0, 1));
        c.style.pointerEvents = d < 0.5 ? "auto" : "none";
        c.classList.toggle("on", d < 0.5);
      });
      dots.forEach((dot, i) => dot.classList.toggle("on", i === Math.round(pos)));
      if (hint) hint.style.opacity = String(clamp(1 - p * 10, 0, 1));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      layout();
      update();
    };

    layout();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
