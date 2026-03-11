
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const layers = [
  {
    label: "Procesos Estratégicos",
    items: ["Dirección Estratégica", "Gobierno Corporativo", "Gestión de Alianzas"],
    bg: "var(--ink)",
    itemBg: "rgba(255,255,255,0.1)",
    itemColor: "rgba(247,245,240,0.85)",
    labelColor: "rgba(247,245,240,0.5)",
  },
  {
    label: "Procesos Misionales",
    items: ["Gestión de Clientes B2B2C", "Recuperación de Mascotas", "Identificación QR / Microchip", "Censo de Animales Callejeros"],
    bg: "var(--accent)",
    itemBg: "rgba(255,255,255,0.15)",
    itemColor: "rgba(247,245,240,0.9)",
    labelColor: "rgba(247,245,240,0.55)",
  },
  {
    label: "Procesos de Apoyo",
    items: ["Soporte TI", "Atención al Cliente", "Gestión Financiera", "Mercadeo y Logística", "Gestión Legal y Talento"],
    bg: "#D4C9B0",
    itemBg: "rgba(26,24,20,0.08)",
    itemColor: "var(--ink)",
    labelColor: "var(--ink-2)",
  },
];

const insights = [
  { title: "Procesos Estratégicos", text: "Planificación y dirección de la plataforma: Dirección Estratégica, Gobierno Corporativo y Gestión de Alianzas." },
  { title: "Procesos Operativos",   text: "Ciclo de registro, gestión de datos y seguridad — el flujo core del negocio de Animal-ID." },
  { title: "Procesos de Apoyo",     text: "Soporte al usuario y mantenimiento tecnológico para garantizar la continuidad operacional." },
];

export default function Slide08Mapa({ onNext, onBack, onMenu, current, total }: Props) {
  return (
    <>
      <style>{tokens}</style>
      <div className="slide">

        <header className="slide-header">
          <button className="sh-logo" onClick={onMenu} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <div className="sh-logo-mark">🐾</div>
            <span className="sh-logo-name">animal-id</span>
          </button>
          <div className="sh-nav">
            {Array.from({ length: total }, (_, i) => (
              <div key={i} className={`sh-dot ${i === current - 1 ? "active" : ""}`} />
            ))}
            <span className="sh-counter">{current} / {total}</span>
          </div>
        </header>

        <div className="slide-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>

          {/* Left — process map */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 08</span>
            </div>
            <h2 className="slide-title">Mapa de<br /><em>Procesos</em></h2>

            {/* Title of diagram */}
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.82rem", color: "var(--ink-2)", marginBottom: "1rem" }}>
              Mapa de Procesos — Animal ID
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
              {layers.map((layer, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div style={{ textAlign: "center", background: "var(--bg)", padding: "0.3rem 0", fontSize: "0.9rem", color: "var(--ink-3)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>↓</div>
                  )}
                  <div style={{ background: layer.bg, padding: "1.1rem 1.25rem" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: layer.labelColor, marginBottom: "0.65rem" }}>
                      {layer.label}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {layer.items.map(item => (
                        <span
                          key={item}
                          style={{ padding: "0.3rem 0.7rem", borderRadius: 6, fontSize: "0.72rem", background: layer.itemBg, color: layer.itemColor, fontWeight: 400 }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — insights */}
          <div>
            {insights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  paddingBottom: "1.75rem", marginBottom: "1.75rem",
                  borderBottom: i < insights.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: i === 0 ? "var(--ink)" : i === 1 ? "var(--accent)" : "#D4C9B0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.75rem", color: i === 2 ? "var(--ink)" : "var(--bg)" }}>0{i + 1}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--ink)", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.65, fontWeight: 300 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <footer className="slide-footer">
          <button className="sf-btn" onClick={onBack}>← Anterior</button>
          <span className="sf-label">{SLIDE_NAMES[current - 1]}</span>
          <button className="sf-btn" onClick={onNext}>Siguiente →</button>
        </footer>

      </div>
    </>
  );
}
