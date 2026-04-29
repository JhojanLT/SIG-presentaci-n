import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const cols = [
  {
    img: "https://wallpapers.com/images/hd/artistic-countries-map-ta9hfqbxj7y0rhdd.jpg",
    label: "🌎 Geográfico",
    title: "Alcance Geográfico",
    items: [
      "Presencia operativa en 15 países actualmente.",
      "Enfoque estratégico en mercados con normativas de identificación obligatoria.",
      "Principales regiones: EE.UU., Canadá y Unión Europea.",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    label: "⚙️ Funcional",
    title: "Alcance Funcional",
    items: [
      "Identificación: Sistemas híbridos con etiquetas QR y microchips subcutáneos.",
      "Gestión Digital: Plataforma y app móvil para perfiles de mascotas e historial médico.",
      "Interoperabilidad: Integración global con EuropetNet y PetMaxx.",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&q=80",
    label: "👥 Población",
    title: "Población Objetivo y Socios",
    items: [
      "Modelo B2B2C: Colaboración con refugios, clínicas veterinarias y municipalidades.",
      "Usuario Final: Dueños de mascotas que buscan seguridad y trazabilidad.",
    ],
  },
];

export default function Slide04Alcance({ onNext, onBack, onMenu, current, total }: Props) {
  return (
    <>
      <style>{tokens}</style>
      <div className="slide">
        <header className="slide-header">
          <button
            className="sh-logo"
            onClick={onMenu}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div className="sh-logo-mark">🐾</div>
            <span className="sh-logo-name">animal-id</span>
          </button>
          <div className="sh-nav">
            {Array.from({ length: total }, (_, i) => (
              <div key={i} className={`sh-dot ${i === current - 1 ? "active" : ""}`} />
            ))}
            <span className="sh-counter">
              {current} / {total}
            </span>
          </div>
        </header>

        <div className="slide-body">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Slide 04</span>
          </div>

          <h2 className="slide-title">
            Alcance del <em>Proyecto</em>
            <br />
            Animal-ID
          </h2>

          <div className="grid-3" style={{ flex: 1 }}>
            {cols.map((col, i) => (
              <div
                key={i}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem", padding: "0", overflow: "hidden" }}
              >
                {/* Image */}
                <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={col.img}
                    alt={col.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(15%)",
                      transition: "transform 0.4s",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "0 1.25rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    flex: 1,
                  }}
                >
                  <span className="tag tag-green" style={{ alignSelf: "flex-start" }}>
                    {col.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {col.title}
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {col.items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          alignItems: "flex-start",
                          fontSize: "0.78rem",
                          color: "var(--ink-2)",
                          lineHeight: 1.55,
                          fontWeight: 300,
                        }}
                      >
                        <span style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="slide-footer">
          <button className="sf-btn" onClick={onBack}>
            ← Anterior
          </button>
          <span className="sf-label">{SLIDE_NAMES[current - 1]}</span>
          <button className="sf-btn" onClick={onNext}>
            Siguiente →
          </button>
        </footer>
      </div>
    </>
  );
}
