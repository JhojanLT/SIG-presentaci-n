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
  }

  .sh-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--ink-3);
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
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
  }

  /* ── Slide footer ── */
  .slide-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    border-top: 1px solid var(--line);
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
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: 2rem;
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
];
