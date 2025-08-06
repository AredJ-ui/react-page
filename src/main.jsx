import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BlockScreen from "./components/Block";
import FirstImpression from "./components/FirstImpression";
import image1 from "./images/Icons/church.png";
import image2 from "./images/Icons/cheers.png";
import Place from "./components/Place";
import Carrucel from "./components/Carrucel";
//import './styles/BlockStyle.css';
//<FirstImpression targetDate="2025-12-31T23:59:59" />

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstImpression targetDate="2025-12-31T23:59:59" />
    <Place
      img={image1}
      subTitle="Ceremonia"
      description="18:00 hrs parroquia sabinas centro"
      textButton="Llegar a la ceremonia"
      link="https://www.youtube.com/"
    />
    <Place
      img={image2}
      subTitle="Fiesta"
      description="Los esperamos en palapa 'Los dos hermanos' despues de la ceremonia"
      textButton="Llegar a la Fiesta"
      link="https://www.prydwen.gg/zenless/"
    />
    <Carrucel />
  </StrictMode>
);
