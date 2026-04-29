import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext?: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface Row { actividad: string; recurso: string; horas: number; total: string; }

const data: Row[] = [
  { actividad: "Protección", recurso: "Antivirus empresarial", horas: 14, total: "$300" },
  { actividad: "Red", recurso: "Firewall", horas: 14, total: "$500" },
  { actividad: "Acceso", recurso: "Gestión de usuarios", horas: 12, total: "$300" },
  { actividad: "Backup", recurso: "Copias de seguridad (cloud)", horas: 14, total: "$800" },
  { actividad: "Web", recurso: "Certificado SSL", horas: 12, total: "$200" },
  { actividad: "Monitoreo", recurso: "Logs y monitoreo", horas: 14, total: "$400" },
  { actividad: "Capacitación", recurso: "Formación en ciberseguridad", horas: 6, total: "$600" },
  { actividad: "Gestión", recurso: "Políticas de seguridad", horas: 8, total: "$400" },
  { actividad: "Auditoría", recurso: "Auditoría de seguridad", horas: 4, total: "$600" },
];

const insights = [
  {
    title: "Protección perimetral",
    text: "Antivirus empresarial y firewall como primera línea de defensa contra amenazas externas e internas.",
  },
  {
    title: "Continuidad y recuperación",
    text: "Copias de seguridad en la nube garantizan la recuperación de datos ante incidentes o desastres.",
  },
  {
    title: "Cultura de seguridad",
    text: "Capacitación continua, políticas documentadas y auditorías periódicas para mantener el cumplimiento.",
  },
];

export default function Slide15SegInfo({ onBack, onMenu, current, total }: Props) {
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
              <span className="eyebrow-text">Slide 15</span>
            </div>

            <h2 className="slide-title">Seguridad de la<br /><em>Información</em></h2>

            <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300, marginBottom: "1.25rem" }}>
              Recursos destinados a proteger los activos de información de Animal-ID,
              incluyendo infraestructura, monitoreo y formación del personal.
            </p>

            <div className="tbl-wrap">
              <table className="tbl" style={{ fontSize: "0.72rem", minWidth: 400 }}>
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
                      <td style={{ textAlign: "right", color: "#92600A", fontWeight: 500 }}>{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: "0.75rem", padding: "0.65rem 1rem", background: "var(--ink)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.72rem", color: "var(--bg)", fontWeight: 500 }}>Total mensual</span>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.68rem", color: "rgba(247,245,240,0.5)" }}>102 hrs</span>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.95rem", color: "var(--bg)" }}>$3,920</span>
              </div>
            </div>
          </div>

          {/* Right — insights */}
          <div>
            {insights.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                paddingBottom: "1.5rem", marginBottom: "1.5rem",
                borderBottom: i < insights.length - 1 ? "1px solid var(--line)" : "none",
              }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#92600A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.7rem", color: "white" }}>0{i + 1}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.95rem", color: "var(--ink)", marginBottom: "0.35rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300 }}>{item.text}</p>
                </div>
              </div>
            ))}

            {/* Summary card */}
            <div className="card" style={{ borderLeft: "3px solid #92600A", marginTop: "1rem" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "#92600A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                Dato clave
              </p>
              <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300 }}>
                La seguridad de la información representa solo el <strong style={{ color: "var(--ink)", fontWeight: 500 }}>0.005%</strong> del
                presupuesto total, pero protege el <strong style={{ color: "var(--ink)", fontWeight: 500 }}>100%</strong> de los activos digitales de la organización.
              </p>
            </div>
          </div>
        </div>

        <footer className="slide-footer">
          <button className="sf-btn" onClick={onBack}>← Anterior</button>
          <span className="sf-label">{SLIDE_NAMES[current - 1]}</span>
          <button
            className="sf-btn"
            onClick={onMenu}
            style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}
          >
            Volver al Menú ↗
          </button>
        </footer>
      </div>
    </>
  );
}
