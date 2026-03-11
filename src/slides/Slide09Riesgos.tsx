
import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

type NivelKey = "Crítico" | "Alto" | "Oport. Estratégica" | "Oport. Alta" | "Moderado-Alto";

interface Risk {
  id: string;
  proceso: string;
  causa: string;
  riesgo: string;
  p: number;
  i: number;
  v: number;
  nivel: NivelKey;
  accion: string;
  resp: string;
}

const risks: Risk[] = [
  { id: "R1", proceso: "Soporte TI",        causa: "Infraestructura no redundante", riesgo: "Caída de plataforma",    p: 4, i: 5, v: 20, nivel: "Crítico",            accion: "Arquitectura redundante + DRP",  resp: "Líder Infra. TI" },
  { id: "R2", proceso: "Soporte TI",        causa: "Brechas de ciberseguridad",     riesgo: "Fuga de datos",          p: 3, i: 5, v: 15, nivel: "Alto",               accion: "Cifrado, SIEM y auditorías",     resp: "Oficial Seguridad" },
  { id: "R3", proceso: "Prog. Municipales", causa: "Datos incompletos",             riesgo: "Registros erróneos",     p: 3, i: 4, v: 12, nivel: "Alto",               accion: "Validación automática",          resp: "Gerente Prog. Mun." },
  { id: "R4", proceso: "Gestión Corp.",     causa: "Falta análisis regulatorio",    riesgo: "Incumplimiento norm.",   p: 3, i: 5, v: 15, nivel: "Alto",               accion: "Comité legal y revisión",        resp: "Dir. Corporativo" },
  { id: "R5", proceso: "Prog. Municipales", causa: "Alta digitalización pública",   riesgo: "Expansión municipal",    p: 4, i: 4, v: 16, nivel: "Oport. Estratégica", accion: "Plan expansión priorizado",      resp: "Dir. Comercial" },
  { id: "R6", proceso: "Soporte TI",        causa: "Automatización de procesos",    riesgo: "Eficiencia operativa",   p: 3, i: 4, v: 12, nivel: "Oport. Alta",        accion: "Automatización y DevOps",        resp: "CTO" },
  { id: "R7", proceso: "Gestión Corp.",     causa: "Alianzas internacionales",      riesgo: "Integración global",     p: 3, i: 4, v: 12, nivel: "Oport. Alta",        accion: "Fortalecer convenios",           resp: "Dir. Alianzas" },
  { id: "R8", proceso: "Operación Gral.",   causa: "Sin plan de continuidad",       riesgo: "Interrupción prolong.",  p: 2, i: 5, v: 10, nivel: "Moderado-Alto",      accion: "Plan Continuidad BCP",           resp: "Gte. Operaciones" },
];

const NIVEL_STYLE: Record<NivelKey, { bg: string; color: string; border: string }> = {
  "Crítico":            { bg: "#FEF2F2", color: "#991B1B", border: "rgba(153,27,27,0.2)" },
  "Alto":               { bg: "#FFF7ED", color: "#9A3412", border: "rgba(154,52,18,0.2)" },
  "Oport. Estratégica": { bg: "var(--accent-2)", color: "var(--accent)", border: "rgba(61,107,79,0.25)" },
  "Oport. Alta":        { bg: "var(--accent-2)", color: "var(--accent)", border: "rgba(61,107,79,0.25)" },
  "Moderado-Alto":      { bg: "#FFFBEB", color: "#92600A", border: "rgba(146,96,10,0.2)" },
};

const NivelBadge = ({ n }: { n: NivelKey }) => {
  const s = NIVEL_STYLE[n];
  return (
    <span style={{ padding: "2px 8px", borderRadius: 20, background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: "0.65rem", fontWeight: 500, whiteSpace: "nowrap" as const }}>
      {n}
    </span>
  );
};

export default function Slide09Riesgos({ onNext, onBack, onMenu, current, total }: Props) {
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
            <span className="eyebrow-text">Slide 09</span>
          </div>

          <h2 className="slide-title">Matriz de <em>Riesgos</em></h2>

          <div style={{ overflowX: "auto", flex: 1 }}>
            <table className="tbl" style={{ fontSize: "0.75rem", minWidth: 780 }}>
              <thead>
                <tr>
                  {["ID", "Proceso", "Causa", "Riesgo / Oport.", "P", "I", "V", "Nivel", "Acción / Control", "Resp."].map(h => (
                    <th key={h} style={{ textAlign: h === "Proceso" || h === "Causa" || h === "Riesgo / Oport." || h === "Acción / Control" ? "left" : "center" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {risks.map(r => (
                  <tr key={r.id}>
                    <td style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.85rem", color: "var(--ink)" }}>{r.id}</td>
                    <td>{r.proceso}</td>
                    <td style={{ color: "var(--ink-2)" }}>{r.causa}</td>
                    <td>{r.riesgo}</td>
                    <td style={{ textAlign: "center" }}>{r.p}</td>
                    <td style={{ textAlign: "center" }}>{r.i}</td>
                    <td style={{ textAlign: "center", fontWeight: 500, color: "var(--ink)" }}>{r.v}</td>
                    <td style={{ textAlign: "center" }}><NivelBadge n={r.nivel} /></td>
                    <td>{r.accion}</td>
                    <td style={{ color: "var(--ink-3)", fontSize: "0.7rem" }}>{r.resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
