
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

type RaciKey = "R" | "A" | "C" | "I";

interface RaciRow {
  proceso: string;
  gc: RaciKey;
  pm: RaciKey;
  ti: RaciKey;
}

const data: RaciRow[] = [
  { proceso: "Generación de Reportes BI", gc: "A", pm: "I", ti: "R" },
  { proceso: "Gestión Info. y Datos",     gc: "C", pm: "R", ti: "A" },
  { proceso: "Control de Incidentes",     gc: "A", pm: "I", ti: "R" },
  { proceso: "Cambios del Aplicativo",    gc: "A", pm: "I", ti: "R" },
  { proceso: "Seguimiento Servicio",      gc: "R", pm: "I", ti: "C" },
];

const RACI_STYLE: Record<RaciKey, { bg: string; color: string; border: string; label: string }> = {
  R: { bg: "var(--accent-2)", color: "var(--accent)", border: "rgba(61,107,79,0.25)", label: "Responsable" },
  A: { bg: "#FEF9EC",         color: "#92600A",        border: "rgba(146,96,10,0.2)",  label: "Aprobador" },
  C: { bg: "#EFF6FF",         color: "#1D4ED8",        border: "rgba(29,78,216,0.2)",  label: "Consultado" },
  I: { bg: "#F8F8F8",         color: "var(--ink-3)",   border: "var(--line)",          label: "Informado" },
};

const RaciBadge = ({ v }: { v: RaciKey }) => {
  const s = RACI_STYLE[v];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: "0.7rem", fontWeight: 500, whiteSpace: "nowrap" as const }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, display: "inline-block" }} />
      {s.label}
    </span>
  );
};

const sections = [
  { title: "Soporte TI",            sub: "Principal responsable (R) de las tareas técnicas",    items: ["Generación de reportes BI", "Control de incidentes", "Cambios del aplicativo"] },
  { title: "Gestión Corporativa",   sub: "Rol de aprobación (A) en la mayoría de procesos",     items: ["Aprueba reportes BI y control de incidentes", "Responsable (R) del seguimiento del servicio", "Consultado (C) en gestión de información"] },
  { title: "Prog. Municipales",     sub: "Generalmente informado (I), excepto en:",             items: ["Gestión de información y datos → Responsable (R)"] },
];

export default function Slide07Raci({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body body-grid body-3-2">

          {/* Left — table */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 07</span>
            </div>

            <h2 className="slide-title">Matriz <em>RACI</em></h2>

            <div className="tbl-wrap">
              <table className="tbl" style={{ minWidth: 480 }}>
                <thead>
                  <tr>
                    <th>Proceso</th>
                    <th style={{ textAlign: "center" }}>Gestión Corporativa</th>
                    <th style={{ textAlign: "center" }}>Progr. Municipales</th>
                    <th style={{ textAlign: "center" }}>Soporte TI</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i}>
                      <td>{row.proceso}</td>
                      <td style={{ textAlign: "center" }}><RaciBadge v={row.gc} /></td>
                      <td style={{ textAlign: "center" }}><RaciBadge v={row.pm} /></td>
                      <td style={{ textAlign: "center" }}><RaciBadge v={row.ti} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: "1.25rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {(Object.entries(RACI_STYLE) as [RaciKey, typeof RACI_STYLE[RaciKey]][]).map(([k, v]) => (
                <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.72rem", color: "var(--ink-2)" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: v.color, display: "inline-block" }} />
                  {v.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — breakdown */}
          <div>
            {sections.map((s, i) => (
              <div key={i} style={{ paddingBottom: "1.25rem", marginBottom: "1.25rem", borderBottom: i < sections.length - 1 ? "1px solid var(--line)" : "none" }}>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--ink)", marginBottom: "0.25rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.73rem", color: "var(--ink-3)", marginBottom: "0.6rem" }}>{s.sub}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.8rem", color: "var(--ink-2)", fontWeight: 300 }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
