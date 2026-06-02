import { useState } from "react";

interface Slide {
  num: string;
  title: string;
  desc: string;
}

const slides: Slide[] = [
  { num: "01", title: "Portada", desc: "Presentación general del proyecto" },
  { num: "02", title: "Objetivos", desc: "Objetivo general y específicos" },
  { num: "03", title: "Política de Gestión", desc: "Estrategia, valores y compromisos" },
  { num: "04", title: "Alcance del Proyecto", desc: "Geografía, funciones y socios" },
  { num: "05", title: "Entradas y Salidas", desc: "Diagrama del sistema e-commerce" },
  { num: "06", title: "Partes Interesadas", desc: "Mapa de stakeholders y poder" },
  { num: "07", title: "Matriz RACI", desc: "Roles y responsabilidades" },
  { num: "08", title: "Mapa de Procesos", desc: "Estratégicos, misionales y de apoyo" },
  { num: "09", title: "Matriz de Riesgos", desc: "Identificación, nivel y controles" },
  { num: "10", title: "Riesgos Ambientales", desc: "Impactos y medidas de mitigación" },
  { num: "11", title: "Organigrama", desc: "Estructura jerárquica y cargos" },
  { num: "12", title: "Presupuesto Anual", desc: "Distribución presupuestaria global" },
  { num: "13", title: "Procesos Principales", desc: "50 recursos de desarrollo y marketing" },
  { num: "14", title: "Ambiental y SST", desc: "Gestión ambiental y salud laboral" },
  { num: "15", title: "Seguridad de la Información", desc: "Protección de activos digitales" },
  { num: "16", title: "Indicadores de Calidad", desc: "12 KPIs de calidad, ambiente, SST y seguridad" },
];

interface HomePageProps {
  onStart?: () => void;
  onGoTo?: (n: number) => void;
}

export default function HomePage({ onStart, onGoTo }: HomePageProps) {
  const [, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body { max-width: 100%; overflow-x: hidden; }

        :root {
          --bg:       #F7F5F0;
          --ink:      #1A1814;
          --ink-2:    #6B6760;
          --ink-3:    #B8B4AE;
          --accent:   #3D6B4F;
          --accent-2: #E8F0EB;
          --line:     rgba(26,24,20,0.1);
        }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── PAGE ── */
        .page {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }

        /* ── HERO ── */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 92vh;
          position: relative;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3rem 3.5rem;
          z-index: 2;
          gap: 2rem;
        }

        .logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .logo-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          color: var(--ink);
          letter-spacing: -0.02em;
        }

        .logo-tag {
          margin-left: auto;
          font-size: 0.7rem;
          color: var(--ink-2);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .hero-body {
          padding-bottom: 1rem;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 2rem;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
        }

        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 5vw, 5rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 2rem;
          overflow-wrap: break-word;
        }

        .hero-title em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--ink-2);
          max-width: 360px;
          font-weight: 300;
          margin-bottom: 2.5rem;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--ink);
          color: var(--bg);
          padding: 0.85rem 1.75rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: all 0.25s;
          letter-spacing: 0.01em;
        }

        .hero-cta:hover {
          background: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(61,107,79,0.3);
        }

        .hero-cta-arrow {
          width: 20px;
          height: 20px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
        }

        .hero-footer-stat {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .stat { }

        .stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: var(--ink);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 3px;
        }

        /* ── HERO RIGHT (image) ── */
        .hero-right {
          position: relative;
          overflow: hidden;
          min-height: 320px;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(15%) contrast(1.05);
        }

        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            var(--bg) 0%,
            transparent 20%
          );
        }

        .hero-img-label {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(247,245,240,0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          font-size: 0.75rem;
          color: var(--ink-2);
          line-height: 1.5;
          max-width: calc(100% - 4rem);
        }

        .hero-img-label strong {
          display: block;
          color: var(--ink);
          font-weight: 500;
          font-size: 0.85rem;
          margin-bottom: 2px;
        }

        /* ── DIVIDER ── */
        .section-divider {
          display: flex;
          align-items: center;
          padding: 0 3.5rem;
          border-top: 1px solid var(--line);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .section-divider-label {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          font-weight: 500;
          padding: 1.25rem 0;
          margin-right: auto;
        }

        .section-divider-count {
          font-size: 0.68rem;
          color: var(--ink-3);
          font-weight: 500;
        }

        /* ── SLIDES GRID ── */
        .slides-section {
          padding: 0 3.5rem 5rem;
        }

        .slides-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }

        .slide-card {
          padding: 1.75rem 1.5rem;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
          background: var(--bg);
        }

        /* With 4 cols and 12 cards: rows are 4-4-4.
           Right border off on every 4th, bottom border off on the last row (9-12). */
        /* With 4 cols and 15 cards: rows are 4-4-4-3.
           Right border off on every 4th, bottom border off on last row (13+). */
        .slide-card:nth-child(4n) { border-right: none; }
        .slide-card:nth-child(n+13) { border-bottom: none; }

        .slide-card:hover {
          background: var(--accent-2);
        }

        .slide-card:hover .card-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .card-num {
          font-family: 'DM Serif Display', serif;
          font-size: 0.8rem;
          color: var(--ink-3);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.05rem;
          color: var(--ink);
          line-height: 1.25;
          margin-bottom: 0.6rem;
        }

        .card-desc {
          font-size: 0.75rem;
          color: var(--ink-2);
          line-height: 1.5;
          font-weight: 300;
        }

        .card-arrow {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 0.8rem;
          color: var(--accent);
          opacity: 0;
          transition: all 0.2s;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--line);
          padding: 1.5rem 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-dot {
          width: 7px; height: 7px;
          background: var(--accent);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .footer-name {
          font-size: 0.8rem;
          color: var(--ink-2);
          font-weight: 500;
        }

        .footer-right {
          font-size: 0.72rem;
          color: var(--ink-3);
          letter-spacing: 0.05em;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-left      { animation: fadeUp 0.6s ease both; }
        .hero-right     { animation: fadeUp 0.6s 0.15s ease both; }
        .slides-section { animation: fadeUp 0.6s 0.3s ease both; }

        /* ─────────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
           ───────────────────────────────────────────── */

        /* Tablet landscape */
        @media (max-width: 1024px) {
          .hero-left { padding: 2.5rem 2rem; }
          .section-divider { padding: 0 2rem; }
          .slides-section { padding: 0 2rem 3.5rem; }
          .footer { padding: 1.25rem 2rem; }

          .slides-grid { grid-template-columns: repeat(3, 1fr); }
          .slide-card { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
          /* 15 cards in 3 cols = 5 full rows. */
          .slide-card:nth-child(4n) { border-right: 1px solid var(--line); }
          .slide-card:nth-child(3n) { border-right: none; }
          .slide-card:nth-child(n+16) { border-bottom: none; }
        }

        /* Tablet portrait — stack hero and switch to 2-col grid */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .hero-left {
            padding: 2rem 1.5rem;
            order: 2;
          }

          .hero-right {
            order: 1;
            min-height: 280px;
            max-height: 360px;
          }

          .hero-img-overlay {
            background: linear-gradient(
              to bottom,
              transparent 60%,
              var(--bg) 100%
            );
          }

          .logo-tag {
            margin-left: 0;
            flex-basis: 100%;
            order: 3;
          }

          .hero-footer-stat { gap: 1.5rem; }

          .stat-num { font-size: 1.6rem; }

          .section-divider {
            padding: 0 1.5rem;
          }

          .slides-section { padding: 0 1.5rem 3rem; }

          .slides-grid { grid-template-columns: repeat(2, 1fr); }

          /* Reset and re-apply for 2 cols, 15 cards = 7 rows of 2 + 1 solo */
          .slide-card { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
          .slide-card:nth-child(3n),
          .slide-card:nth-child(4n) { border-right: 1px solid var(--line); }
          .slide-card:nth-child(2n) { border-right: none; }
          .slide-card:nth-child(n+15) { border-bottom: none; }

          .slide-card { padding: 1.4rem 1.2rem; }

          .footer {
            padding: 1.25rem 1.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .hero-left { padding: 1.75rem 1.25rem; gap: 1.5rem; }

          .hero-right { min-height: 220px; }

          .hero-img-label {
            bottom: 1rem;
            right: 1rem;
            padding: 0.7rem 0.9rem;
            font-size: 0.7rem;
          }

          .hero-desc { margin-bottom: 1.75rem; font-size: 0.9rem; }

          .hero-cta { padding: 0.75rem 1.4rem; font-size: 0.8rem; }

          .hero-footer-stat { gap: 1.25rem; }

          .stat-num { font-size: 1.4rem; }

          .section-divider { padding: 0 1.25rem; }

          .section-divider-label { padding: 1rem 0; font-size: 0.62rem; }

          .slides-section { padding: 0 1.25rem 2.5rem; }

          /* 1 column on small mobile — 11 cards stacked */
          .slides-grid { grid-template-columns: 1fr; }

          .slide-card {
            border-right: none;
            border-bottom: 1px solid var(--line);
            padding: 1.25rem 1.1rem;
          }
          .slide-card:nth-child(16) { border-bottom: none; }
          .slide-card:nth-child(n) { border-right: none; }

          .card-num { margin-bottom: 0.85rem; }

          .card-title { font-size: 1rem; }

          .footer { padding: 1.1rem 1.25rem; }

          .footer-name { font-size: 0.75rem; }

          .footer-right { font-size: 0.68rem; }
        }
      `}</style>

      <div className="page">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-left">
            {/* Logo */}
            <div className="logo-row">
              <div className="logo-mark">🐾</div>
              <span className="logo-name">animal-id</span>
              <span className="logo-tag">Sistemas Integrados de Gestión</span>
            </div>

            {/* Main copy */}
            <div className="hero-body">
              <div className="hero-eyebrow">
                <div className="eyebrow-dot" />
                <span className="eyebrow-text">Presentación Estratégica</span>
              </div>

              <h1 className="hero-title">
                Estrategia,
                <br />
                <em>Procesos</em>
                <br />y Calidad
              </h1>

              <p className="hero-desc">
                Análisis estratégico y propuesta de esquema funcional para optimizar el rendimiento, la competitividad y
                el progreso organizacional de Animal-ID.
              </p>

              <button className="hero-cta" onClick={onStart}>
                Ver presentación
                <span className="hero-cta-arrow">↗</span>
              </button>
            </div>

            {/* Stats */}
            <div className="hero-footer-stat">
              <div className="stat">
                <div className="stat-num">15</div>
                <div className="stat-label">Países</div>
              </div>
              <div className="stat">
                <div className="stat-num">16</div>
                <div className="stat-label">Secciones</div>
              </div>
              <div className="stat">
                <div className="stat-num">B2B2C</div>
                <div className="stat-label">Modelo</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hero-right">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=1200&q=90"
              alt="mascotas"
            />
            <div className="hero-img-overlay" />
            <div className="hero-img-label">
              <strong>Animal-ID Platform</strong>
              Identificación · Trazabilidad · Bienestar
            </div>
          </div>
        </section>

        {/* ── SLIDES SECTION ── */}
        <section>
          <div className="section-divider">
            <span className="section-divider-label">Contenido de la presentación</span>
            <span className="section-divider-count">16 secciones</span>
          </div>

          <div className="slides-section">
            <div className="slides-grid">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="slide-card"
                  onClick={() => onGoTo?.(i + 1)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="card-num">{slide.num}</div>
                  <div className="card-title">{slide.title}</div>
                  <div className="card-desc">{slide.desc}</div>
                  <span className="card-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-dot" />
            <span className="footer-name">animal-id · Estrategia, Procesos y Calidad</span>
          </div>
          <span className="footer-right">Sistemas Integrados de Gestión · 2025</span>
        </footer>
      </div>
    </>
  );
}
