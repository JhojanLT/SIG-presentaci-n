import { useState } from "react";
import HomePage from "./HomePage";
import Slide01Portada from "./slides/Slide01Portada";
import Slide02Objetivos from "./slides/Slide02Objetivos";
import Slide03Politica from "./slides/Slide03Politica";
import Slide04Alcance from "./slides/Slide04Alcance";
import Slide05Entradas from "./slides/Slide05Entradas";
import Slide06Partes from "./slides/Slide06Partes";
import Slide07Raci from "./slides/Slide07Raci";
import Slide08Mapa from "./slides/Slide08Mapa";
import Slide09Riesgos from "./slides/Slide09Riesgos";
import Slide10RiesgosAmb from "./slides/Slide10RiesgosAmb";
import Slide11Organigrama from "./slides/Slide11Organigrama";
import Slide12Presupuesto from "./slides/Slide12Presupuesto";
import Slide13Procesos from "./slides/Slide13Procesos";
import Slide14AmbSST from "./slides/Slide14AmbSST";
import Slide15SegInfo from "./slides/Slide15SegInfo";
import Slide16Indicadores from "./slides/Slide16Indicadores";

const TOTAL = 16;

const SLIDES = [
  Slide01Portada,
  Slide02Objetivos,
  Slide03Politica,
  Slide04Alcance,
  Slide05Entradas,
  Slide06Partes,
  Slide07Raci,
  Slide08Mapa,
  Slide09Riesgos,
  Slide10RiesgosAmb,
  Slide11Organigrama,
  Slide12Presupuesto,
  Slide13Procesos,
  Slide14AmbSST,
  Slide15SegInfo,
  Slide16Indicadores,
];

export default function App() {
  // 0 = home, 1-15 = slides
  const [page, setPage] = useState<number>(0);

  const goMenu = () => setPage(0);
  const goNext = () => setPage((p) => Math.min(TOTAL, p + 1));
  const goBack = () => setPage((p) => Math.max(1, p - 1));

  if (page === 0) {
    return <HomePage onStart={() => setPage(1)} onGoTo={(n: number) => setPage(n)} />;
  }

  const SlideComp = SLIDES[page - 1];

  return <SlideComp current={page} total={TOTAL} onNext={goNext} onBack={goBack} onMenu={goMenu} />;
}
