import { tokens, SLIDE_NAMES } from "./slideStyles";

interface Props {
  onNext?: () => void;
  onBack: () => void;
  onMenu: () => void;
  current: number;
  total: number;
}

/**
 * SLIDE 11 — Información Adicional
 * ────────────────────────────────────────────────────────────
 * Placeholder preparado para recibir contenido nuevo.
 *
 * Estructura disponible:
 * - Eyebrow + título (ya configurados, edita el texto si aplica)
 * - Body con grid responsive: cambia la clase del slide-body por:
 *     · "body-grid body-2col"        → 2 columnas iguales
 *     · "body-grid body-2col-start"  → 2 columnas alineadas arriba
 *     · "body-grid body-1-2"         → izq angosta, der ancha
 *     · "body-grid body-3-2"         → izq ancha, der angosta
 *     · "body-grid body-1-3"         → izq muy angosta, der muy ancha
 *     · sin clase extra              → flex column normal
 *
 * - Para tablas: envuélvelas en <div className="tbl-wrap"> con
 *   <table className="tbl" style={{ minWidth: XXX }}>
 *
 * - Para grids internos de 3 columnas: usa <div className="grid-3">
 * - Para grids internos de 2 columnas: usa <div className="grid-2">
 *
 * En móvil todo colapsa automáticamente a una columna.
 * ────────────────────────────────────────────────────────────
 */
export default function Slide11Info({ onBack, onMenu, current, total }: Props) {
  return (
    <>
      <style>{tokens}</style>
      <div className="slide">

        {/* Header */}
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

        {/* Body — placeholder content */}
        <div className="slide-body">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Slide 11</span>
          </div>

          <h2 className="slide-title">Información<br /><em>Adicional</em></h2>

          {/* ─────────────────────────────────────────────
               ESPACIO RESERVADO PARA CONTENIDO NUEVO
               Reemplaza esta sección cuando llegue la info.
             ───────────────────────────────────────────── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              border: "2px dashed var(--ink-3)",
              borderRadius: 14,
              padding: "3rem 1.5rem",
              textAlign: "center",
            }}
          >
            <div style={{ maxWidth: 460 }}>
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.1rem",
                  color: "var(--ink-2)",
                  marginBottom: "0.6rem",
                }}
              >
                Espacio reservado
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ink-3)",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Esta sección está lista para recibir el contenido adicional
                que se enviará próximamente. La estructura responsive ya está
                configurada para móvil, tablet y escritorio.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
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
