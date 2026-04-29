import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface Resource {
  actividad: string;
  recurso: string;
  horas: number;
  total: string;
}

const desarrollo: Resource[] = [
  { actividad: "Planificación", recurso: "Product Manager", horas: 8, total: "$3,200,000" },
  { actividad: "Planificación", recurso: "Project Manager", horas: 6, total: "$2,800,000" },
  { actividad: "Diseño", recurso: "Analista de Producto", horas: 10, total: "$1,800,000" },
  { actividad: "Desarrollo", recurso: "CTO", horas: 12, total: "$5,000,000" },
  { actividad: "Desarrollo", recurso: "Web Developer", horas: 14, total: "$2,500,000" },
  { actividad: "Diseño UI", recurso: "UX/UI Designer", horas: 10, total: "$2,200,000" },
  { actividad: "Testing", recurso: "Coord. Operaciones", horas: 8, total: "$2,000,000" },
  { actividad: "Testing", recurso: "Asist. Operaciones", horas: 10, total: "$1,200,000" },
  { actividad: "Infraestructura", recurso: "AWS / Cloud", horas: 14, total: "$1,000,000" },
  { actividad: "Equipos", recurso: "Computadores (5)", horas: 14, total: "$6,000,000" },
  { actividad: "Estrategia", recurso: "Dirección General", horas: 4, total: "$6,000,000" },
  { actividad: "Soporte", recurso: "Soporte TI", horas: 14, total: "$1,500,000" },
];

const marketing: Resource[] = [
  { actividad: "Estrategia", recurso: "Head of Marketing", horas: 8, total: "$3,000,000" },
  { actividad: "Gestión ventas", recurso: "Sales Manager", horas: 10, total: "$2,800,000" },
  { actividad: "Redes sociales", recurso: "SMM Manager", horas: 12, total: "$2,200,000" },
  { actividad: "Ventas", recurso: "Ejecutivo de Ventas", horas: 14, total: "$1,800,000" },
  { actividad: "Comunidad", recurso: "Community Manager", horas: 12, total: "$1,500,000" },
  { actividad: "Publicidad", recurso: "Meta Ads", horas: 14, total: "$2,000,000" },
  { actividad: "Publicidad", recurso: "Google Ads", horas: 14, total: "$2,000,000" },
  { actividad: "Equipos", recurso: "Computadores (6)", horas: 14, total: "$7,000,000" },
  { actividad: "Branding", recurso: "Material publicitario", horas: 10, total: "$1,000,000" },
  { actividad: "Eventos", recurso: "Activaciones", horas: 8, total: "$1,500,000" },
  { actividad: "Estrategia", recurso: "Dirección General", horas: 4, total: "$6,000,000" },
  { actividad: "Fidelización", recurso: "Programas clientes", horas: 10, total: "$800,000" },
];

const ResourceTable = ({ title, data, color }: { title: string; data: Resource[]; color: string }) => (
  <div>
    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color, marginBottom: "0.65rem" }}>
      {title}
    </p>
    <div className="tbl-wrap">
      <table className="tbl" style={{ fontSize: "0.72rem", minWidth: 420 }}>
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
  </div>
);

export default function Slide13Procesos({ onNext, onBack, onMenu, current, total }: Props) {
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
            <span className="eyebrow-text">Slide 13</span>
          </div>

          <h2 className="slide-title">Procesos<br /><em>Principales</em></h2>

          <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300, marginBottom: "1.5rem", maxWidth: 600 }}>
            Detalle de los 50 recursos asignados a los dos procesos principales de Animal-ID:
            desarrollo de producto y marketing/ventas. Total mensual: <strong style={{ color: "var(--ink)", fontWeight: 500 }}>$77,050,000 COP</strong> con 566 horas de dedicación.
          </p>

          <div className="grid-2" style={{ gap: "1.5rem", alignItems: "start" }}>
            <ResourceTable title="Desarrollo de Producto" data={desarrollo} color="var(--ink)" />
            <ResourceTable title="Marketing y Ventas" data={marketing} color="var(--accent)" />
          </div>

          <div style={{ marginTop: "1rem", padding: "0.75rem 1.25rem", background: "var(--ink)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--bg)", fontWeight: 500 }}>Total Procesos Core</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <span style={{ fontSize: "0.72rem", color: "rgba(247,245,240,0.6)" }}>566 hrs</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--bg)" }}>$77,050,000</span>
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
