import "./store.css";
import Effects from "./Effects";

const DEFAULT_WA = "2250170079695";

const labelFor = (p) => (p.price === "Gratuit" ? "Obtenir" : "Acheter");

export default function StoreSite({ site }) {
  const { hero, features, days, final } = site;
  const products = site.products || [];
  const featured = products.find((p) => p.featured) || products[0];
  if (!featured) return null;

  const many = products.length > 1;
  const waText = site.whatsappText || `Bonjour, je souhaite avoir plus d’informations sur ${site.name}.`;
  const wa = `https://wa.me/${site.whatsapp || DEFAULT_WA}?text=${encodeURIComponent(waText)}`;
  const numbers = days ? Array.from({ length: days.count }, (_, i) => i + 1) : [];

  return (
    <div className="ss" data-theme={site.theme}>
      <Effects />

      <header className="ss-head">
        <div className="wrap ss-bar">
          <span className="ss-brand">{site.name}</span>
          <a className="btn ss-head-btn" href={featured.url} target="_blank" rel="noopener noreferrer">
            {labelFor(featured)}
          </a>
        </div>
      </header>

      <section className="ss-hero">
        <div className="wrap ss-hero-in">
          <div className="ss-hero-text">
            <p className="ss-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="ss-lead">{hero.lead}</p>
            <div className="ss-cta-row">
              <a className="btn" href={featured.url} target="_blank" rel="noopener noreferrer">{hero.cta}</a>
              {many && <a className="ss-more" href="#produits">Voir tous les produits ↓</a>}
            </div>
            {hero.note && <p className="ss-note">{hero.note}</p>}
          </div>
          <div className="ss-art" aria-hidden="true">
            {featured.cover ? (
              <img className="ss-cover-img" src={featured.cover} alt="" />
            ) : (
              <div className="ss-cover">
                <small>{site.name}</small>
                <strong>{featured.title}</strong>
                <em>{featured.price}</em>
              </div>
            )}
          </div>
        </div>
      </section>

      {many && (
        <section className="ss-sec ss-products" id="produits">
          <div className="wrap">
            <h2 className="ss-h2" data-reveal>{site.productsTitle || "Nos produits"}</h2>
            <p className="ss-sub" data-reveal style={{ "--d": "0.08s" }}>
              {site.productsText || "Choisis le produit qui correspond à ton besoin."}
            </p>
            <div className="ss-grid">
              {products.map((p, i) => {
                const badge = p.badge || (p.price === "Gratuit" ? "Gratuit" : "");
                return (
                  <div key={p.id || p.title} data-reveal style={{ "--d": `${0.1 + i * 0.08}s` }}>
                    <article className="ss-prod">
                      <div className="ss-pcover">
                        {p.cover ? <img src={p.cover} alt={p.title} /> : <span>{p.title}</span>}
                        {badge && <em className="ss-badge">{badge}</em>}
                      </div>
                      <div className="ss-pinfo">
                        <h3>{p.title}</h3>
                        {p.description && <p>{p.description}</p>}
                        <div className="ss-prow">
                          <span className="ss-price">{p.price}</span>
                          <a className="ss-buy" href={p.url} target="_blank" rel="noopener noreferrer">{labelFor(p)}</a>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {features && (
        <section className="ss-sec ss-features">
          <div className="wrap">
            <h2 className="ss-h2" data-reveal>{features.title}</h2>
            <p className="ss-sub" data-reveal style={{ "--d": "0.08s" }}>{features.text}</p>
            <div className="ss-cards">
              {features.items.map((f, i) => (
                <div key={f.title} data-reveal style={{ "--d": `${0.1 + i * 0.1}s` }}>
                  <div className="ss-card">
                    <span className="ss-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {days && (
        <section className="ss-sec ss-days">
          <div className="wrap">
            <h2 className="ss-h2" data-reveal>{days.title}</h2>
            <p className="ss-sub" data-reveal style={{ "--d": "0.08s" }}>{days.text}</p>
            <ol className="ss-days-row">
              {numbers.map((n) => (
                <li className="ss-day" key={n} data-reveal style={{ "--d": `${0.1 + n * 0.08}s` }}>
                  <span className="ss-dot">{n}</span>
                  <small>Jour {n}</small>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {final && (
        <section className="ss-sec ss-final">
          <div className="wrap" data-reveal>
            <h2 className="ss-h2">{final.title}</h2>
            <p className="ss-sub">{final.text}</p>
            <a className="btn" href={featured.url} target="_blank" rel="noopener noreferrer">{final.cta}</a>
          </div>
        </section>
      )}

      <footer className="ss-sec ss-foot">
        <div className="wrap">© 2026 {site.name}</div>
      </footer>

      <a className="wa" href={wa} target="_blank" rel="noopener noreferrer" aria-label="Nous contacter sur WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="wa-label">Une question ?</span>
      </a>
    </div>
  );
}
