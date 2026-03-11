
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

export default function Slide01Portada({ onNext, onMenu, current, total }: Props) {
  return (
    <>
      <style>{tokens}</style>
      <div className="slide">

        {/* Header */}
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

        {/* Body */}
        <div className="slide-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Sistemas Integrados de Gestión</span>
            </div>

            <h1 className="slide-title">
              Estrategia,<br />
              <em>Procesos</em><br />
              y Calidad
            </h1>

            <p style={{ color: "var(--ink-2)", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300, maxWidth: 380, marginBottom: "2.5rem" }}>
              Análisis estratégico aplicado a la organización Animal-ID para
              optimizar su rendimiento, competitividad y progreso organizacional.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <span className="tag tag-green">🐾 Bienestar Animal</span>
              <span className="tag">📊 Gestión Estratégica</span>
              <span className="tag">🌎 15 Países</span>
              <span className="tag">🔗 Innovación Digital</span>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
              {[["15", "Países"], ["B2B2C", "Modelo"], ["2025", "Año"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", color: "var(--ink)", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", aspectRatio: "4/3", boxShadow: "0 24px 60px rgba(26,24,20,0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=900&q=90"
                alt="mascotas"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(10%)" }}
              />
            </div>
            {/* Floating label */}
            <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", background: "rgba(247,245,240,0.92)", backdropFilter: "blur(8px)", border: "1px solid var(--line)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.72rem", color: "var(--ink-2)", lineHeight: 1.6 }}>
              <strong style={{ display: "block", color: "var(--ink)", fontWeight: 500, marginBottom: 2 }}>Animal-ID Platform</strong>
              Identificación · Trazabilidad · Bienestar
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="slide-footer">
          <button className="sf-btn" onClick={onMenu}>← Menú</button>
          <span className="sf-label">{SLIDE_NAMES[current - 1]}</span>
          <button className="sf-btn" onClick={onNext}>Siguiente →</button>
        </footer>

      </div>
    </>
  );
}
