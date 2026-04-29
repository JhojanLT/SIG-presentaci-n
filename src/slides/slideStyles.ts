// Shared design tokens — matches HomePage.tsx
export const tokens = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg:       #F7F5F0;
    --ink:      #1A1814;
    --ink-2:    #6B6760;
    --ink-3:    #B8B4AE;
    --accent:   #3D6B4F;
    --accent-2: #E8F0EB;
    --line:     rgba(26,24,20,0.1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body { max-width: 100%; overflow-x: hidden; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Slide shell ── */
  .slide {
    min-height: 100vh;
    background: var(--bg);
    display: flex;
    flex-direction: column;
  }

  /* ── Slide header bar ── */
  .slide-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    border-bottom: 1px solid var(--line);
    gap: 1rem;
    flex-wrap: wrap;
  }

  .sh-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .sh-logo-mark {
    width: 26px; height: 26px;
    background: var(--accent);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .sh-logo-name {
    font-family: 'DM Serif Display', serif;
    font-size: 1rem;
    color: var(--ink);
    letter-spacing: -0.02em;
  }

  .sh-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .sh-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--ink-3);
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .sh-dot.active {
    background: var(--accent);
    transform: scale(1.4);
  }

  .sh-dot:hover { background: var(--ink-2); }

  .sh-counter {
    font-size: 0.72rem;
    color: var(--ink-3);
    margin-left: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  /* ── Slide body ── */
  .slide-body {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  /* Body grid variants (replace inline grid styles) */
  .slide-body.body-grid {
    display: grid;
    gap: 4rem;
    align-items: center;
  }

  .slide-body.body-2col       { grid-template-columns: 1fr 1fr; }
  .slide-body.body-2col-start { grid-template-columns: 1fr 1fr; align-items: start; }
  .slide-body.body-1-2        { grid-template-columns: 1fr 2fr; gap: 3.5rem; }
  .slide-body.body-3-2        { grid-template-columns: 3fr 2fr; gap: 3rem; align-items: start; }
  .slide-body.body-1-3        { grid-template-columns: 1fr 3fr; gap: 3rem; align-items: start; }

  /* Inner grids */
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* Stakeholder matrix — used in Slide06 */
  .matrix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .matrix-cell {
    padding: 1.25rem;
  }

  /* Desktop: 2x2 borders */
  .matrix-cell:nth-child(1),
  .matrix-cell:nth-child(3) { border-right: 1px solid var(--line); }
  .matrix-cell:nth-child(1),
  .matrix-cell:nth-child(2) { border-bottom: 1px solid var(--line); }
  .matrix-cell:nth-child(1) { background: white; }
  .matrix-cell:nth-child(2) { background: var(--accent-2); }
  .matrix-cell:nth-child(3) { background: white; }
  .matrix-cell:nth-child(4) { background: white; }

  /* Flow diagram (Slide05) */
  .flow-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .flow-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .flow-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .flow-arrow { color: var(--ink-3); font-size: 1.2rem; }
  .flow-arrow.vertical { display: none; }

  /* ── Slide footer ── */
  .slide-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    border-top: 1px solid var(--line);
    gap: 1rem;
  }

  .sf-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0.5rem 1.1rem;
    border-radius: 50px;
    border: 1px solid var(--line);
    background: transparent;
    color: var(--ink-2);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .sf-btn:hover {
    background: var(--ink);
    color: var(--bg);
    border-color: var(--ink);
  }

  .sf-btn:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .sf-label {
    font-size: 0.72rem;
    color: var(--ink-3);
    letter-spacing: 0.05em;
    text-align: center;
    flex: 1;
  }

  /* ── Typography ── */
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.25rem;
  }

  .eyebrow-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .eyebrow-text {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 500;
  }

  .slide-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.7rem, 3.5vw, 3.2rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: 2rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .slide-title em { font-style: italic; color: var(--accent); }

  /* ── Cards ── */
  .card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .card-sm {
    background: white;
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 1rem 1.2rem;
  }

  /* ── Tags / chips ── */
  .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0.25rem 0.7rem;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 500;
    border: 1px solid var(--line);
    background: white;
    color: var(--ink-2);
  }

  .tag-green {
    background: var(--accent-2);
    border-color: rgba(61,107,79,0.2);
    color: var(--accent);
  }

  /* ── Table ── */
  .tbl-wrap {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tbl {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--line);
    border-radius: 12px;
    overflow: hidden;
    font-size: 0.78rem;
  }

  .tbl thead tr {
    background: var(--ink);
    color: var(--bg);
  }

  .tbl thead th {
    padding: 0.75rem 1rem;
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: left;
    white-space: nowrap;
  }

  .tbl tbody tr {
    border-top: 1px solid var(--line);
    transition: background 0.15s;
  }

  .tbl tbody tr:hover { background: var(--accent-2); }

  .tbl td {
    padding: 0.65rem 1rem;
    color: var(--ink-2);
    vertical-align: middle;
  }

  .tbl td:first-child { color: var(--ink); font-weight: 500; }

  /* ── Divider ── */
  .divider {
    border: none;
    border-top: 1px solid var(--line);
    margin: 1.5rem 0;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .slide-body { animation: fadeUp 0.4s ease both; }

  /* ─────────────────────────────────────────────
     RESPONSIVE BREAKPOINTS
     ───────────────────────────────────────────── */

  /* Tablet landscape and below */
  @media (max-width: 1024px) {
    .slide-header { padding: 1.25rem 2rem; }
    .slide-body   { padding: 2rem; }
    .slide-footer { padding: 0.85rem 2rem; }

    .slide-body.body-grid       { gap: 2.5rem; }
    .slide-body.body-1-2,
    .slide-body.body-3-2,
    .slide-body.body-1-3        { gap: 2.5rem; }
  }

  /* Tablet portrait and below — STACK EVERYTHING */
  @media (max-width: 768px) {
    .slide-header {
      padding: 1rem 1.25rem;
    }

    .sh-counter { margin-left: 0.4rem; font-size: 0.68rem; }

    .slide-body {
      padding: 1.5rem 1.25rem;
    }

    /* All 2-col body grids stack vertically */
    .slide-body.body-grid,
    .slide-body.body-2col,
    .slide-body.body-2col-start,
    .slide-body.body-1-2,
    .slide-body.body-3-2,
    .slide-body.body-1-3 {
      grid-template-columns: 1fr;
      align-items: stretch;
      gap: 2rem;
    }

    /* Inner grids collapse */
    .grid-3 { grid-template-columns: 1fr; gap: 1rem; }
    .grid-2 { grid-template-columns: 1fr; gap: 0.75rem; }

    /* Matrix collapses to 1 col with horizontal dividers only */
    .matrix { grid-template-columns: 1fr; }
    .matrix-cell:nth-child(1),
    .matrix-cell:nth-child(3) { border-right: none; }
    .matrix-cell:nth-child(1),
    .matrix-cell:nth-child(2),
    .matrix-cell:nth-child(3) { border-bottom: 1px solid var(--line); }

    /* Flow diagram stacks vertically */
    .flow-diagram {
      flex-direction: column;
      gap: 0.75rem;
    }

    .flow-arrow { display: none; }
    .flow-arrow.vertical {
      display: block;
    }

    .slide-footer {
      padding: 0.75rem 1.25rem;
      flex-wrap: wrap;
    }

    .sf-label {
      flex-basis: 100%;
      order: 3;
      text-align: center;
      font-size: 0.65rem;
    }

    .sf-btn { font-size: 0.72rem; padding: 0.45rem 0.9rem; }

    .slide-title { margin-bottom: 1.5rem; }

    .card { padding: 1.1rem; }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .slide-header { padding: 0.85rem 1rem; }

    .sh-logo-name { font-size: 0.9rem; }

    .sh-nav { gap: 0.35rem; }

    .sh-counter {
      flex-basis: 100%;
      margin-left: 0;
      margin-top: 0.25rem;
      text-align: right;
    }

    .slide-body {
      padding: 1.25rem 1rem;
      gap: 1.5rem;
    }

    .slide-footer { padding: 0.65rem 1rem; }

    .tbl thead th { padding: 0.55rem 0.7rem; font-size: 0.6rem; }
    .tbl td { padding: 0.5rem 0.7rem; font-size: 0.72rem; }

    .card { padding: 1rem; }
    .card-sm { padding: 0.85rem 1rem; }

    .tag { font-size: 0.65rem; padding: 0.2rem 0.55rem; }
  }
`;

export const SLIDE_NAMES = [
  "Portada",
  "Objetivos",
  "Política de Gestión",
  "Alcance del Proyecto",
  "Entradas y Salidas",
  "Partes Interesadas",
  "Matriz RACI",
  "Mapa de Procesos",
  "Matriz de Riesgos",
  "Riesgos Ambientales",
  "Organigrama",
  "Presupuesto Anual",
  "Procesos Principales",
  "Ambiental y SST",
  "Seguridad de la Información",
];
