
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const inputs  = ["Proveedor Nube", "Recursos Software", "Req. Funcionales y No Funcionales", "Recursos Hardware", "Recurso Humano"];
const outputs = ["Mantenimiento", "Atención al Usuario", "Software Funcional", "Código Fuente", "Certificado de Calidad"];

const NodeBox = ({ label, side }: { label: string; side: "in" | "out" }) => (
  <div style={{
    padding: "0.45rem 0.85rem",
    borderRadius: 8,
    fontSize: "0.75rem",
    fontWeight: 400,
    color: side === "in" ? "var(--ink)" : "var(--accent)",
    background: side === "in" ? "white" : "var(--accent-2)",
    border: `1px solid ${side === "in" ? "var(--line)" : "rgba(61,107,79,0.25)"}`,
    textAlign: "center" as const,
    whiteSpace: "nowrap" as const,
  }}>
    {label}
  </div>
);

export default function Slide05Entradas({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body body-grid body-1-2">

          {/* Left */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 05</span>
            </div>

            <h2 className="slide-title">
              Entradas<br /><em>y Salidas</em>
            </h2>

            <div className="card" style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                Innovación y Calidad del Servicio
              </p>
              <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.7, fontWeight: 300 }}>
                Proceso de desarrollo de un sistema e-commerce donde diferentes entradas
                (requerimientos, hardware, software, nube y recurso humano) alimentan
                el desarrollo y producen software funcional certificado.
              </p>
            </div>

            <p style={{ fontSize: "0.72rem", color: "var(--ink-3)", fontStyle: "italic", lineHeight: 1.5 }}>
              Juana Rodríguez · César Vergara · Jhojan Infante ·<br />
              Juan Diego Rodríguez · Ángel Becerra
            </p>
          </div>

          {/* Right — diagram */}
          <div className="card" style={{ padding: "2rem" }}>
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.9rem", color: "var(--ink)", marginBottom: "2rem", textAlign: "center" }}>
              Diagrama de Flujo — Sistema E-Commerce
            </p>

            <div className="flow-diagram">

              {/* Inputs */}
              <div className="flow-col">
                <p style={{ fontSize: "0.62rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem", textAlign: "center" }}>Entradas</p>
                {inputs.map(n => <NodeBox key={n} label={n} side="in" />)}
              </div>

              {/* Arrow + center */}
              <div className="flow-center">
                <span className="flow-arrow">→</span>
                <span className="flow-arrow vertical">↓</span>
                <div style={{
                  width: 90, height: 90,
                  borderRadius: "50%",
                  background: "var(--ink)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: "var(--bg)",
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "0.78rem",
                  textAlign: "center",
                  lineHeight: 1.3,
                  boxShadow: "0 8px 24px rgba(26,24,20,0.15)",
                  flexShrink: 0,
                }}>
                  E-Commerce
                  <span style={{ fontSize: "0.6rem", fontFamily: "'DM Sans', sans-serif", color: "rgba(247,245,240,0.6)", fontWeight: 300, marginTop: 2 }}>DESARROLLO</span>
                </div>
                <span className="flow-arrow">→</span>
                <span className="flow-arrow vertical">↓</span>
              </div>

              {/* Outputs */}
              <div className="flow-col">
                <p style={{ fontSize: "0.62rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem", textAlign: "center" }}>Salidas</p>
                {outputs.map(n => <NodeBox key={n} label={n} side="out" />)}
              </div>

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
