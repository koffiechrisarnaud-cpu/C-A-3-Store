import { STORES } from "../data/stores";
import Header from "./components/Header";
import Effects from "./components/Effects";
import logo from "./logo.png";

const NAME = "C-A 3 Store";
const WA_LINK = "https://wa.me/2250170079695?text=Bonjour%2C%20je%20souhaite%20avoir%20plus%20d%E2%80%99informations%20sur%20vos%20produits.";

export default function Home() {
  return (
    <>
      <Effects />
      <Header />

      <div className="hero-wrap">
        <div className="wrap hero">
          <div className="hero-text">
            <p className="eyebrow">Mes boutiques</p>
            <h1>Ebooks et formations, simplement.</h1>
            <p className="lead">Des guides pratiques pour apprendre, vendre et passer à l’action.</p>
            <a className="btn" href="#boutiques">Voir les boutiques</a>
          </div>
          <div className="stage" aria-hidden="true"><div className="ring" /><div className="block" /></div>
        </div>
      </div>

      <section className="band" id="boutiques">
        <div className="wrap center">
          <h2 data-reveal>Nos boutiques</h2>
          <p className="sub" data-reveal style={{ "--d": "0.08s" }}>Trois univers, un seul endroit pour tout retrouver.</p>
          <div className="collection">
            {STORES.map((s, i) => (
              <a className="card" href={`#${s.id}`} key={s.id} data-reveal style={{ "--d": `${i * 0.1}s` }}>
                <div className="tile" style={{ "--tile": s.tile }}>
                  {s.products.length} {s.products.length > 1 ? "produits" : "produit"}
                </div>
                <h3>{s.name}</h3>
                <span className="exp">Explorer <span className="arr">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="wrap">
        {STORES.map((s) => (
          <section className="store" id={s.id} key={s.id}>
            <div className="store-head" data-reveal>
              <div><h2>{s.name}</h2><p>{s.desc}</p></div>
              <a className="visit" href={s.shop} target="_blank" rel="noopener noreferrer">Visiter la boutique</a>
            </div>
            <div className="grid">
              {s.products.map((p, i) => (
                <article key={p.title} data-reveal style={{ "--d": `${i * 0.08}s` }}>
                  <div className="cover" style={{ "--tile": s.tile }}>
                    {p.img ? <img src={p.img} alt={p.title} /> : <span>{p.title}</span>}
                  </div>
                  <div className="info">
                    <h4>{p.title}</h4>
                    <div className="row">
                      <span className="price">{p.price}</span>
                      <a className="buy" href={p.url} target="_blank" rel="noopener noreferrer">
                        {p.price === "Gratuit" ? "Obtenir" : "Acheter"}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <section className="about" id="apropos">
        <div className="about-text" data-reveal>
          <h2>À propos</h2>
          <p>{NAME} regroupe mes ebooks et formations au même endroit. Chaque produit te mène directement à la boutique officielle pour un achat simple et sécurisé.</p>
          <a className="btn" href="#boutiques">Découvrir</a>
        </div>
        <div className="about-img" aria-hidden="true" data-reveal style={{ "--d": "0.12s" }} />
      </section>

      <footer id="contact">
        <div className="wrap foot" data-reveal>
          <div>
            <a className="brand" href="#" aria-label="C-A 3 Store, accueil">
              <img src={logo.src} width={logo.width} height={logo.height} alt={NAME} />
            </a>
            <div className="copy">© 2026 {NAME}</div>
          </div>
          <div>
            <h5>Boutiques</h5>
            {STORES.map((s) => <a key={s.id} href={`#${s.id}`}>{s.name}</a>)}
          </div>
          <div><h5>Suivre</h5><a href="#">TikTok</a><a href="#">Instagram</a><a href="#">Facebook</a></div>
          <div><h5>Infos</h5><a href="#apropos">À propos</a><a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
        </div>
      </footer>

      <a className="wa" href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Nous contacter sur WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="wa-label">Une question ?</span>
      </a>
    </>
  );
}
