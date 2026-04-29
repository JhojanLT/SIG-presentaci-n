
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const especificos = [
  "Analizar la estructura organizacional actual de Animal-ID.",
  "Identificar los procesos clave y su alineación con la estrategia.",
  "Definir indicadores de calidad para medir el rendimiento.",
  "Proponer mejoras en los procesos operativos y de apoyo.",
  "Establecer una política de gestión que garantice la sostenibilidad.",
];

export default function Slide02Objetivos({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body body-grid body-2col-start">

          {/* Left */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 02</span>
            </div>

            <h2 className="slide-title">Objetivos<br /><em>del Proyecto</em></h2>

            {/* Objetivo General */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--ink)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>G</span>
                Objetivo General
              </div>
              <div className="card">
                <p style={{ color: "var(--ink-2)", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 300 }}>
                  Aplicar los principios de la gestión estratégica para analizar la organización
                  Animal-ID y proponer un esquema funcional que optimice su <strong style={{ color: "var(--ink)", fontWeight: 500 }}>rendimiento,
                  competitividad y progreso organizacional.</strong>
                </p>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="tag tag-green">📈 Rendimiento</span>
              <span className="tag tag-green">🏆 Competitividad</span>
              <span className="tag tag-green">🔄 Progreso</span>
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--ink)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8, paddingBottom: "0.75rem", borderBottom: "1px solid var(--line)" }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--ink)", color: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>E</span>
              Objetivos Específicos
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {especificos.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.9rem 1rem", background: "white", border: "1px solid var(--line)", borderRadius: 10, transition: "background 0.15s" }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.8rem", color: "var(--ink-3)", minWidth: 20 }}>0{i + 1}</span>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-2)", lineHeight: 1.55, fontWeight: 300 }}>{item}</p>
                </div>
              ))}
            </div>
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
