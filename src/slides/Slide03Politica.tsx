import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const pillars = [
  {
    icon: "🐕",
    num: "01",
    title: "Compromiso con la Seguridad y Bienestar Animal",
    img: "https://img.freepik.com/vector-gratis/ilustracion-rescate-animales-dibujados-mano_52683-109643.jpg?semt=ais_hybrid&w=740&q=80",
    text: "La prioridad central es la protección de las mascotas mediante soluciones tecnológicas de vanguardia: microchips, QR y monitoreo en tiempo real.",
    tag: "Seguridad",
  },
  {
    icon: "⚡",
    num: "02",
    title: "Innovación y Calidad del Servicio",
    img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Garantizar la interoperabilidad global de datos, asegurando que el sistema sea accesible, intuitivo y eficiente para todos los usuarios y socios.",
    tag: "Innovación",
  },
  {
    icon: "🛡️",
    num: "03",
    title: "Transparencia, Ética y Responsabilidad Social",
    img: "https://www.cookieyes.com/wp-content/uploads/2022/02/ccpa-vs.-gdpr-1.png",
    text: "Cumplimiento estricto de normativas GDPR y CCPA para generar confianza en el usuario y garantizar la privacidad de los datos en todo momento.",
    tag: "Ética",
  },
];

export default function Slide03Politica({ onNext, onBack, onMenu, current, total }: Props) {
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
            <span className="eyebrow-text">Slide 03</span>
          </div>

          <h2 className="slide-title">
            Política de <em>Gestión</em>
            <br />
            Estratégica
          </h2>

          {/* Three pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", flex: 1 }}>
            {pillars.map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem" }}>{p.icon}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span className="tag tag-green">{p.tag}</span>
                    <span
                      style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "var(--ink-3)" }}
                    >
                      {p.num}
                    </span>
                  </div>
                </div>

                <hr className="divider" style={{ margin: 0 }} />

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.1rem",
                    color: "var(--ink)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>

                <img
                  src={p.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(15%)",
                    transition: "transform 0.4s",
                  }}
                />

                {/* Text */}
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginTop: "auto",
                  }}
                >
                  {p.text}
                </p>
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
