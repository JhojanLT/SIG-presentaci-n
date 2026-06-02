import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext?: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface Indicator {
  id: string;
  name: string;
  proceso: string;
  formula: string;
  meta: string;
  frecuencia: string;
}

const calidad: Indicator[] = [
  {
    id: "C1",
    name: "Tasa de Registros Incompletos o con Errores",
    proceso: "Registro de microchips",
    formula: "(Registros con errores / Total registros) × 100",
    meta: "≤ 1%",
    frecuencia: "Semanal",
  },
  {
    id: "C2",
    name: "Tasa de Resolución en Primera Llamada (FCR)",
    proceso: "HelpLine / Atención al cliente",
    formula: "(Casos resueltos 1ª llamada / Total llamadas) × 100",
    meta: "≥ 85%",
    frecuencia: "Mensual",
  },
  {
    id: "C3",
    name: "Índice de Satisfacción del Propietario (CSAT)",
    proceso: "Atención al cliente",
    formula: "(Encuestas positivas / Total encuestas) × 100",
    meta: "≥ 90%",
    frecuencia: "Mensual",
  },
];

const ambiental: Indicator[] = [
  {
    id: "A1",
    name: "Consumo de Energía por Servidor (CES)",
    proceso: "Plataforma digital de registro",
    formula: "kWh consumidos por servidores / Mes",
    meta: "Reducción ≥ 5% anual",
    frecuencia: "Mensual",
  },
  {
    id: "A2",
    name: "Porcentaje de Operaciones Digitales vs. Papel",
    proceso: "Registro de microchips",
    formula: "(Registros digitales / Total registros) × 100",
    meta: "≥ 95%",
    frecuencia: "Trimestral",
  },
  {
    id: "A3",
    name: "Huella de Carbono de Envíos Postales",
    proceso: "Ventas y distribución",
    formula: "CO₂ total (kg) / Total envíos realizados",
    meta: "≤ 0.3 kg CO₂/envío",
    frecuencia: "Trimestral",
  },
];

const sst: Indicator[] = [
  {
    id: "S1",
    name: "Tasa de Accidentalidad Laboral",
    proceso: "Operaciones / Administración",
    formula: "(N° accidentes / Total empleados) × 100",
    meta: "0 accidentes",
    frecuencia: "Mensual",
  },
  {
    id: "S2",
    name: "Índice de Ausentismo por Salud",
    proceso: "Administración / RRHH",
    formula: "(Días perdidos / Total días laborables) × 100",
    meta: "≤ 2%",
    frecuencia: "Mensual",
  },
  {
    id: "S3",
    name: "Cumplimiento Capacitación SST",
    proceso: "Administración / RRHH",
    formula: "(Empleados capacitados / Total empleados) × 100",
    meta: "100%",
    frecuencia: "Semestral",
  },
];

const segInfo: Indicator[] = [
  {
    id: "SI1",
    name: "Tasa de Incidentes de Ciberseguridad",
    proceso: "Plataforma de registro / BD nacional",
    formula: "N° incidentes de seguridad detectados",
    meta: "0 incidentes críticos",
    frecuencia: "Mensual",
  },
  {
    id: "SI2",
    name: "Porcentaje de Datos Respaldados (Backup)",
    proceso: "Plataforma de registro",
    formula: "(Registros con backup / Total registros) × 100",
    meta: "100%",
    frecuencia: "Semanal",
  },
  {
    id: "SI3",
    name: "Tiempo Promedio de Respuesta (MTTR)",
    proceso: "Plataforma de registro",
    formula: "Tiempo total resolución / N° incidentes",
    meta: "≤ 4 horas",
    frecuencia: "Por evento",
  },
];

const categories = [
  { title: "Calidad", color: "#2563EB", bg: "#EFF6FF", data: calidad },
  { title: "Ambiental", color: "var(--accent)", bg: "var(--accent-2)", data: ambiental },
  { title: "Seguridad y Salud en el Trabajo", color: "#D97706", bg: "#FFFBEB", data: sst },
  { title: "Seguridad de la Información", color: "#92600A", bg: "#FEF3C7", data: segInfo },
];

const IndicatorTable = ({ data, color, bg }: { data: Indicator[]; color: string; bg: string }) => (
  <div className="tbl-wrap">
    <table className="tbl" style={{ fontSize: "0.68rem", minWidth: 420 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Indicador</th>
          <th>Proceso</th>
          <th>Meta</th>
          <th>Frec.</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => (
          <tr key={i}>
            <td>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: bg,
                  color,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                }}
              >
                {r.id}
              </span>
            </td>
            <td>
              <span
                style={{ color: "var(--ink)", fontWeight: 500, fontSize: "0.7rem", display: "block", marginBottom: 2 }}
              >
                {r.name}
              </span>
              <span style={{ color: "var(--ink-3)", fontSize: "0.62rem" }}>{r.formula}</span>
            </td>
            <td style={{ fontSize: "0.66rem" }}>{r.proceso}</td>
            <td style={{ color, fontWeight: 600, fontSize: "0.7rem", whiteSpace: "nowrap" }}>{r.meta}</td>
            <td style={{ fontSize: "0.66rem", whiteSpace: "nowrap" }}>{r.frecuencia}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Slide16Indicadores({ onBack, onMenu, current, total }: Props) {
  return (
    <>
      <style>{tokens}</style>
      <div className="slide">
        <header className="slide-header">
          <button
            className="sh-logo"
            onClick={onMenu}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div className="sh-logo-mark">🐾</div>
            <span className="sh-logo-name">animal-id</span>
          </button>
          <div className="sh-nav">
            {Array.from({ length: total }, (_, i) => (
              <div key={i} className={`sh-dot ${i === current - 1 ? "active" : ""}`} />
            ))}
            <span className="sh-counter">
              {current} / {total}
            </span>
          </div>
        </header>

        <div className="slide-body">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Slide 16</span>
          </div>

          <h2 className="slide-title">
            Indicadores de
            <br />
            <em>Calidad</em>
          </h2>

          <p
            style={{
              fontSize: "0.83rem",
              color: "var(--ink-2)",
              lineHeight: 1.6,
              fontWeight: 300,
              marginBottom: "1.5rem",
              maxWidth: 620,
            }}
          >
            12 indicadores clave distribuidos en cuatro dimensiones: calidad del servicio, Calidad ambiental, seguridad
            y salud en el trabajo, y seguridad de la información. Cada uno con su fórmula, meta y frecuencia de
            medición.
          </p>

          <div className="grid-2" style={{ gap: "1.5rem", alignItems: "start" }}>
            {categories.map((cat, i) => (
              <div key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.65rem" }}>
                  <span
                    style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, display: "inline-block" }}
                  />
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.85rem", color: cat.color }}>
                    {cat.title}
                  </span>
                  <span
                    className="tag"
                    style={{ marginLeft: "auto", background: cat.bg, color: cat.color, borderColor: `${cat.color}33` }}
                  >
                    {cat.data.length} indicadores
                  </span>
                </div>
                <IndicatorTable data={cat.data} color={cat.color} bg={cat.bg} />
              </div>
            ))}
          </div>

          {/* Summary bar */}
          <div
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.25rem",
              background: "var(--ink)",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "var(--bg)", fontWeight: 500 }}>Total Indicadores del SIG</span>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.68rem", color: "rgba(247,245,240,0.6)" }}>4 dimensiones</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--bg)" }}>
                12 KPIs
              </span>
            </div>
          </div>
        </div>

        <footer className="slide-footer">
          <button className="sf-btn" onClick={onBack}>
            ← Anterior
          </button>
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
