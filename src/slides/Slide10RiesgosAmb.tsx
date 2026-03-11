
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext?: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

interface EnvRow {
  proceso: string;
  actividad: string;
  aspecto: string;
  impacto: string;
  medio: "Aire" | "Suelo" | "Agua" | "Fauna";
  control: string;
}

const data: EnvRow[] = [
  { proceso: "Mercadeo y logística",      actividad: "Uso de transporte municipal",          aspecto: "Consumo de combustible",        impacto: "Emisión de CO₂",                  medio: "Aire",  control: "Viajes con carga completa para reducir vehículos" },
  { proceso: "Mercadeo y logística",      actividad: "Distribución material publicitario",   aspecto: "Consumo de papel",              impacto: "Generación de residuos sólidos",   medio: "Suelo", control: "Priorizar publicidad digital y papel reciclado" },
  { proceso: "Mercadeo y logística",      actividad: "Mantenimiento de vehículos",           aspecto: "Posibles derrames de aceite",   impacto: "Contaminación hídrica",            medio: "Agua",  control: "Mantenimiento solo en sitios autorizados" },
  { proceso: "Mercadeo y logística",      actividad: "Implementación lavado en seco",        aspecto: "Reducción consumo de agua",     impacto: "Conservación del recurso hídrico", medio: "Agua",  control: "Mantener política de lavado ecológico" },
  { proceso: "Censo animales callejeros", actividad: "Identificación y georreferenciación",  aspecto: "Generación de info. ambiental", impacto: "Mejora en control poblacional",    medio: "Fauna", control: "Mantener base de datos actualizada" },
  { proceso: "Gestión financiera",        actividad: "Digitalización de archivos",           aspecto: "Reducción de papel",            impacto: "Disminución de residuos",          medio: "Suelo", control: "Mantener política de cero papel" },
  { proceso: "Atención al cliente",       actividad: "Atención virtual (chat/app)",          aspecto: "Uso de plataformas digitales",  impacto: "Reducción de desplazamientos",     medio: "Aire",  control: "Fomentar canales virtuales" },
  { proceso: "Gestión legal y Talento",   actividad: "Campañas de sensibilización",          aspecto: "Educación ambiental",           impacto: "Uso responsable del agua",         medio: "Agua",  control: "Difundir buenas prácticas del recurso hídrico" },
];

const MEDIO_STYLE: Record<EnvRow["medio"], { bg: string; color: string; border: string }> = {
  Aire:  { bg: "#EFF6FF", color: "#1D4ED8", border: "rgba(29,78,216,0.2)" },
  Suelo: { bg: "#FFFBEB", color: "#92600A", border: "rgba(146,96,10,0.2)" },
  Agua:  { bg: "var(--accent-2)", color: "var(--accent)", border: "rgba(61,107,79,0.25)" },
  Fauna: { bg: "#F5F3FF", color: "#5B21B6", border: "rgba(91,33,182,0.2)" },
};

const MedioBadge = ({ m }: { m: EnvRow["medio"] }) => {
  const s = MEDIO_STYLE[m];
  return (
    <span style={{ padding: "2px 8px", borderRadius: 20, background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: "0.65rem", fontWeight: 500 }}>
      {m}
    </span>
  );
};

const insights = [
  { title: "Identificación de impactos", text: "La tabla relaciona cada proceso del proyecto con sus aspectos e impactos ambientales." },
  { title: "Medios afectados",            text: "Se analizan efectos sobre aire, agua, suelo y fauna." },
  { title: "Controles propuestos",        text: "Digitalización, mantenimiento adecuado y prácticas sostenibles como medidas de mitigación." },
];

export default function Slide10RiesgosAmb({ onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body" style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "3rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 10</span>
            </div>

            <h2 className="slide-title">Riesgos<br /><em>Ambientales</em></h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {insights.map((item, i) => (
                <div key={i} style={{ paddingLeft: "1rem", borderLeft: "2px solid var(--accent)" }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color: "var(--ink)", marginBottom: "0.3rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--ink-2)", lineHeight: 1.6, fontWeight: 300 }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Medio legend */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "0.6rem", fontWeight: 500 }}>Medio afectado</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {(Object.keys(MEDIO_STYLE) as EnvRow["medio"][]).map(m => (
                  <MedioBadge key={m} m={m} />
                ))}
              </div>
            </div>
          </div>

          {/* Right — table */}
          <div style={{ overflowX: "auto" }}>
            <table className="tbl" style={{ fontSize: "0.73rem" }}>
              <thead>
                <tr>
                  {["Proceso", "Actividad", "Aspecto ambiental", "Impacto ambiental", "Medio", "Control sugerido"].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    <td>{row.proceso}</td>
                    <td style={{ color: "var(--ink-2)" }}>{row.actividad}</td>
                    <td style={{ color: "var(--ink-2)" }}>{row.aspecto}</td>
                    <td style={{ color: "var(--ink-2)" }}>{row.impacto}</td>
                    <td style={{ textAlign: "center" }}><MedioBadge m={row.medio} /></td>
                    <td style={{ color: "var(--ink-2)" }}>{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        <footer className="slide-footer">
          <button className="sf-btn" onClick={onBack}>← Anterior</button>
          <span className="sf-label">{SLIDE_NAMES[current - 1]}</span>
          <button className="sf-btn" onClick={onMenu} style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}>
            Volver al Menú ↗
          </button>
        </footer>

      </div>
    </>
  );
}
