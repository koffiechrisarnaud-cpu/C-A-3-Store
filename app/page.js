import { STORES } from "../data/stores";

const NAME = "C-A 3 Store";

export default function Home() {
  return (
    <>
      <div className="hero-wrap">
        <header>
          <div className="wrap">
            <a className="logo" href="#">{NAME}</a>
            <nav className="main" aria-label="Navigation">
              <a href="#">Accueil</a>
              <a href="#boutiques">Boutiques</a>
              <a href="#apropos">À propos</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
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
          <h2>Nos boutiques</h2>
          <p className="sub">Trois univers, un seul endroit pour tout retrouver.</p>
          <div className="collection">
            {STORES.map((s) => (
              <div key={s.id}>
                <div className="tile" style={{ "--tile": s.tile }}>
                  {s.products.length} {s.products.length > 1 ? "produits" : "produit"}
                </div>
                <h3>{s.name}</h3>
                <a className="exp" href={`#${s.id}`}>Explorer →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="wrap">
        {STORES.map((s) => (
          <section className="store" id={s.id} key={s.id}>
            <div className="store-head">
              <div><h2>{s.name}</h2><p>{s.desc}</p></div>
              <a className="visit" href={s.shop} target="_blank" rel="noopener noreferrer">Visiter la boutique</a>
            </div>
            <div className="grid">
              {s.products.map((p) => (
                <article key={p.title}>
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
        <div className="about-text">
          <h2>À propos</h2>
          <p>{NAME} regroupe mes ebooks et formations au même endroit. Chaque produit te mène directement à la boutique officielle pour un achat simple et sécurisé.</p>
          <a className="btn" href="#boutiques">Découvrir</a>
        </div>
        <div className="about-img" aria-hidden="true" />
      </section>

      <footer id="contact">
        <div className="wrap foot">
          <div><a className="logo" href="#">{NAME}</a><div className="copy">© 2026 {NAME}</div></div>
          <div>
            <h5>Boutiques</h5>
            {STORES.map((s) => <a key={s.id} href={`#${s.id}`}>{s.name}</a>)}
          </div>
          <div><h5>Suivre</h5><a href="#">TikTok</a><a href="#">Instagram</a><a href="#">Facebook</a></div>
          <div><h5>Infos</h5><a href="#apropos">À propos</a><a href="#">Contact</a></div>
        </div>
      </footer>
    </>
  );
}
