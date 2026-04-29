import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface Person {
  name: string;
  role: string;
  salary: string;
}

interface Unit {
  title: string;
  color: string;
  bg: string;
  people: Person[];
}

const direccion: Person[] = [
  { name: "Vasil Dub", role: "CEO", salary: "$6,000" },
  { name: "Victor Kopach", role: "Co-Founder", salary: "$5,500" },
  { name: "—", role: "Secretaria Ejecutiva", salary: "$1,200" },
  { name: "—", role: "Asistente de Dirección", salary: "$1,000" },
];

const units: Unit[] = [
  {
    title: "Unidad Técnica",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    people: [
      { name: "Vadym Melnyk", role: "CTO", salary: "$5,000" },
      { name: "—", role: "Secretaria Ejecutiva", salary: "$1,200" },
      { name: "—", role: "Web Developer", salary: "$2,500" },
      { name: "Ruslan Py", role: "Web Developer", salary: "$2,500" },
      { name: "Oleg Hashenko", role: "UX/UI Designer", salary: "$2,200" },
    ],
  },
  {
    title: "Unidad de Mercado / Comercial",
    color: "var(--accent)",
    bg: "var(--accent-2)",
    people: [
      { name: "Vera Petryk", role: "Head of Marketing", salary: "$3,000" },
      { name: "Tetiana Dub", role: "Sales Manager", salary: "$2,800" },
      { name: "Liuba Shorina", role: "SMM Manager", salary: "$2,200" },
      { name: "—", role: "Ejecutivo de Ventas", salary: "$1,800" },
      { name: "—", role: "Community Manager", salary: "$1,500" },
      { name: "—", role: "Asistente de Marketing", salary: "$1,200" },
    ],
  },
  {
    title: "Unidad de Operaciones / Producto",
    color: "#92600A",
    bg: "#FFFBEB",
    people: [
      { name: "Oksana Pankiv", role: "Product Manager", salary: "$3,200" },
      { name: "Marta Kopach", role: "Social Project Manager", salary: "$2,500" },
      { name: "Khrystyna Mozhak", role: "Project Manager", salary: "$2,800" },
      { name: "—", role: "Coordinador de Operaciones", salary: "$2,000" },
      { name: "—", role: "Analista de Producto", salary: "$1,800" },
      { name: "—", role: "Asistente de Operaciones", salary: "$1,200" },
      { name: "—", role: "Auxiliar Logístico", salary: "$1,200" },
    ],
  },
];

const apoyo = [
  { area: "Atención al Cliente", count: 3, people: ["Supervisor de Servicio — $1,800", "Agentes de Soporte (2) — $1,200 c/u"] },
  { area: "Gestión Financiera", count: 2, people: ["Contador — $2,200", "Auxiliar Contable — $1,300"] },
  { area: "Mercadeo y Logística", count: 2, people: ["Coordinador Logístico — $2,000", "Auxiliar Logístico — $1,300"] },
  { area: "Gestión Legal y Talento", count: 3, people: ["Abogado — $2,500", "Analista RRHH — $1,800", "Reclutador — $1,500"] },
];

export default function Slide11Organigrama({ onNext, onBack, onMenu, current, total }: Props) {
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
            <span className="eyebrow-text">Slide 11</span>
          </div>

          <h2 className="slide-title">Organigrama<br /><em>Animal-ID</em></h2>

          <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300, marginBottom: "1.5rem", maxWidth: 600 }}>
            Estructura organizacional con cuatro niveles jerárquicos: Dirección General,
            tres unidades operativas y áreas de apoyo transversales.
          </p>

          {/* Dirección General */}
          <div className="card" style={{ marginBottom: "1rem", borderLeft: "3px solid var(--ink)" }}>
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.85rem", color: "var(--ink)", marginBottom: "0.75rem" }}>
              Dirección General
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {direccion.map((p, i) => (
                <div key={i} className="card-sm" style={{ flex: "1 1 140px", minWidth: 140 }}>
                  <p style={{ fontWeight: 500, fontSize: "0.78rem", color: "var(--ink)" }}>{p.name}</p>
                  <p style={{ fontSize: "0.68rem", color: "var(--ink-2)" }}>{p.role}</p>
                  <p style={{ fontSize: "0.68rem", color: "var(--accent)", fontWeight: 500, marginTop: 2 }}>{p.salary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Three operational units */}
          <div className="grid-3" style={{ marginBottom: "1rem" }}>
            {units.map((unit, i) => (
              <div key={i} className="card" style={{ borderLeft: `3px solid ${unit.color}`, padding: "1rem 1.2rem" }}>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.82rem", color: unit.color, marginBottom: "0.65rem" }}>
                  {unit.title}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {unit.people.map((p, j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.3rem 0.5rem", background: unit.bg, borderRadius: 6, fontSize: "0.72rem" }}>
                      <div>
                        <span style={{ fontWeight: 500, color: "var(--ink)" }}>{p.name !== "—" ? p.name : ""}</span>
                        {p.name !== "—" && <span style={{ color: "var(--ink-3)", margin: "0 4px" }}>·</span>}
                        <span style={{ color: "var(--ink-2)" }}>{p.role}</span>
                      </div>
                      <span style={{ color: unit.color, fontWeight: 500, fontSize: "0.68rem", flexShrink: 0, marginLeft: 8 }}>{p.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Áreas de apoyo */}
          <div className="card" style={{ borderLeft: "3px solid var(--ink-3)" }}>
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.85rem", color: "var(--ink)", marginBottom: "0.75rem" }}>
              Áreas de Apoyo
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {apoyo.map((a, i) => (
                <div key={i} style={{ flex: "1 1 200px", minWidth: 180 }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    {a.area} <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>({a.count})</span>
                  </p>
                  {a.people.map((p, j) => (
                    <p key={j} style={{ fontSize: "0.68rem", color: "var(--ink-2)", lineHeight: 1.5, paddingLeft: "0.6rem" }}>· {p}</p>
                  ))}
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
