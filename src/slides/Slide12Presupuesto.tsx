import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

const budget = [
  { label: "Procesos Core", monthly: "$77,050,000", pct: 99.98 },
  { label: "Recursos Aspectos Ambientales", monthly: "$3,360", pct: 0.004 },
  { label: "Recursos Aspectos SST", monthly: "$3,920", pct: 0.005 },
  { label: "Recursos Seguridad de la Información", monthly: "$3,920", pct: 0.005 },
];

const totals = {
  monthly: "$77,061,200",
  annual: "$924,734,400",
};

export default function Slide12Presupuesto({ onNext, onBack, onMenu, current, total }: Props) {
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

        <div className="slide-body body-grid body-2col">
          {/* Left — info */}
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Slide 12</span>
            </div>

            <h2 className="slide-title">Presupuesto<br /><em>Anual</em></h2>

            <p style={{ fontSize: "0.83rem", color: "var(--ink-2)", lineHeight: 1.7, fontWeight: 300, marginBottom: "2rem", maxWidth: 380 }}>
              Distribución presupuestaria de Animal-ID desglosada por áreas operativas,
              ambientales, seguridad y salud en el trabajo, y seguridad de la información.
            </p>

            {/* Big totals */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
              <div>
                <p style={{ fontSize: "0.62rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4, fontWeight: 500 }}>
                  Mensual USD
                </p>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: "var(--ink)" }}>
                  {totals.monthly}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.62rem", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4, fontWeight: 500 }}>
                  Anual USD
                </p>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: "var(--accent)" }}>
                  {totals.annual}
                </p>
              </div>
            </div>
          </div>

          {/* Right — breakdown */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {budget.map((item, i) => (
                <div key={i} className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: i === 0 ? "var(--ink)" : i === 1 ? "var(--accent)" : i === 2 ? "#1D4ED8" : "#92600A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.7rem", color: "white" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.88rem", color: "var(--ink)", marginBottom: 2 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "var(--ink-3)" }}>
                      {item.pct}% del presupuesto
                    </p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem", color: "var(--accent)" }}>
                      {item.monthly}
                    </p>
                    <p style={{ fontSize: "0.62rem", color: "var(--ink-3)" }}>mensual</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total bar */}
            <div style={{ marginTop: "1rem", padding: "0.85rem 1.25rem", background: "var(--ink)", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.85rem", color: "var(--bg)" }}>Total Mensual</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", color: "var(--bg)" }}>{totals.monthly}</span>
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
