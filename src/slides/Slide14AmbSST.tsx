import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface Row { actividad: string; recurso: string; horas: number; total: string; }

const ambiental: Row[] = [
  { actividad: "Residuos", recurso: "Recolección residuos", horas: 14, total: "$2,497,000" },
  { actividad: "Residuos", recurso: "Disposición residuos especiales", horas: 4, total: "$1,427,000" },
  { actividad: "Separación", recurso: "Canecas ecológicas", horas: 12, total: "$1,070,000" },
  { actividad: "Separación", recurso: "Bolsas biodegradables", horas: 14, total: "$499,000" },
  { actividad: "Saneamiento", recurso: "Limpieza y desinfección", horas: 14, total: "$1,498,000" },
  { actividad: "Consumo", recurso: "Agua", horas: 14, total: "$1,784,000" },
  { actividad: "Control", recurso: "Auditoría ambiental", horas: 6, total: "$2,140,000" },
  { actividad: "Capacitación", recurso: "Formación ambiental", horas: 4, total: "$1,070,000" },
];

const sst: Row[] = [
  { actividad: "Protección", recurso: "Cascos de seguridad", horas: 12, total: "$856,000" },
  { actividad: "Protección", recurso: "Guantes", horas: 14, total: "$499,000" },
  { actividad: "Protección", recurso: "Gafas de seguridad", horas: 12, total: "$642,000" },
  { actividad: "Protección", recurso: "Botas de seguridad", horas: 12, total: "$2,140,000" },
  { actividad: "Evaluación", recurso: "Evaluación médica ocupacional", horas: 6, total: "$1,712,000" },
  { actividad: "Riesgos", recurso: "Matriz de riesgos", horas: 8, total: "$1,427,000" },
  { actividad: "Prevención", recurso: "Señalización", horas: 10, total: "$1,070,000" },
  { actividad: "Capacitación", recurso: "Formación en SST", horas: 6, total: "$2,140,000" },
  { actividad: "Control", recurso: "Inspecciones de seguridad", horas: 8, total: "$1,712,000" },
  { actividad: "Gestión", recurso: "Software SST", horas: 14, total: "$1,784,000" },
];

const DataTable = ({ data, min }: { data: Row[]; min: number }) => (
  <div className="tbl-wrap">
    <table className="tbl" style={{ fontSize: "0.72rem", minWidth: min }}>
      <thead>
        <tr>
          <th>Actividad</th>
          <th>Recurso</th>
          <th style={{ textAlign: "center" }}>Hrs</th>
          <th style={{ textAlign: "right" }}>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <td>{r.actividad}</td>
            <td>{r.recurso}</td>
            <td style={{ textAlign: "center" }}>{r.horas}</td>
            <td style={{ textAlign: "right", color: "var(--accent)", fontWeight: 500 }}>{r.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Slide14AmbSST({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Slide 14</span>
          </div>

          <h2 className="slide-title">Recursos <em>Ambientales</em><br />y SST</h2>

          <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300, marginBottom: "1.5rem", maxWidth: 600 }}>
            Presupuesto destinado a gestión ambiental y seguridad y salud en el trabajo.
            Incluye elementos de protección personal, auditorías, capacitación
            y manejo responsable de residuos.
          </p>

          <div className="grid-2" style={{ gap: "1.5rem", alignItems: "start" }}>
            {/* Ambiental */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.65rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color: "var(--accent)" }}>
                  Gestión Ambiental
                </span>
                <span className="tag tag-green" style={{ marginLeft: "auto" }}>$11,985,000/mes</span>
              </div>
              <DataTable data={ambiental} min={380} />
            </div>

            {/* SST */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.65rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1D4ED8", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color: "#1D4ED8" }}>
                  Seguridad y Salud en el Trabajo
                </span>
                <span className="tag" style={{ marginLeft: "auto", background: "#EFF6FF", color: "#1D4ED8", borderColor: "rgba(29,78,216,0.2)" }}>$13,982,000/mes</span>
              </div>
              <DataTable data={sst} min={380} />
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
