
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const quadrants = [
  { label: "Mantener satisfecho", sub: "Alto Poder · Baja Influencia", actors: ["Clientes finales", "Inversionistas"], accent: "var(--ink)" },
  { label: "Mantener cerca",      sub: "Alto Poder · Alta Influencia",  actors: ["Gobiernos locales", "Equipo TI", "CEO / Fundadores"], accent: "var(--accent)" },
  { label: "Monitorear",          sub: "Bajo Poder · Baja Influencia",  actors: ["ONG"], accent: "var(--ink-3)" },
  { label: "Mantener informados", sub: "Bajo Poder · Alta Influencia",  actors: ["Proveedores", "Veterinarias y refugios"], accent: "var(--ink-2)" },
];

const insights = [
  { title: "Identificación de stakeholders", text: "El diagrama clasifica a los actores según su poder e influencia en el proyecto." },
  { title: "Gestión estratégica",             text: "Define cómo relacionarse con cada grupo: mantener cerca, satisfechos, informados o monitorear." },
  { title: "Objetivo",                         text: "Priorizar la comunicación y toma de decisiones para garantizar el éxito del proyecto." },
];

export default function Slide06Partes({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "3rem", alignItems: "start" }}>

          {/* Left — matrix */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 06</span>
            </div>

            <h2 className="slide-title">Partes<br /><em>Interesadas</em></h2>

            {/* Matrix */}
            <div style={{ border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
              {/* Axis label top */}
              <div style={{ background: "var(--ink)", color: "var(--bg)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.4rem 1rem", textAlign: "center", fontWeight: 500 }}>
                PODER ↕
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {quadrants.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.25rem",
                      borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
                      borderBottom: i < 2 ? "1px solid var(--line)" : "none",
                      background: i % 2 === 0 && i < 2 ? "white" : i < 2 ? "var(--accent-2)" : "white",
                    }}
                  >
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color: q.accent, marginBottom: "0.2rem" }}>{q.label}</p>
                    <p style={{ fontSize: "0.6rem", color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{q.sub}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {q.actors.map(a => (
                        <span key={a} className="tag" style={{ fontSize: "0.68rem" }}>{a}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Axis label bottom */}
              <div style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.4rem 1rem", display: "flex", justifyContent: "space-between", color: "var(--ink-3)", fontWeight: 500 }}>
                <span>← BAJA INFLUENCIA</span>
                <span>ALTA INFLUENCIA →</span>
              </div>
            </div>
          </div>

          {/* Right — insights */}
          <div style={{ paddingTop: "5rem" }}>
            {insights.map((item, i) => (
              <div key={i} style={{ paddingBottom: "1.5rem", marginBottom: "1.5rem", borderBottom: i < insights.length - 1 ? "1px solid var(--line)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.4rem" }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.7rem", color: "var(--ink-3)" }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.95rem", color: "var(--ink)" }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.65, fontWeight: 300 }}>{item.text}</p>
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
