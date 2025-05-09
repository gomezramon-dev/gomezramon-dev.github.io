// React hooks removed; responsiveness handled via Tailwind and fallbacks
import WelcomeTo from "./WelcomeTo";
import {
  download,
  asciiWindow,
  backwardWindow,
  blackWindow,
  leftWorld,
  mainWindow,
  mouse,
  rightWorld,
  smallBackwardWindow,
} from "../../assets";
import cv from "../../../public/KapidevResume.pdf";

const Header = () => {
  // Programmatic download for resume to utilize base button styles
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'RamonGomezUrquidezResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Header container: static size, images and SVG static size
  return (
    <div className="relative horizontal-margin flex items-center justify-center z-[19] min-h-screen">
      {/* SVG fijo sin escalado */}
      <div className="hidden lg:inline">
        <WelcomeTo />
      </div>
      <img
        className="absolute z-20 inset-0 mx-auto my-auto"
        src={mainWindow}
        alt="Ventana principal"
      />
      <img
        className="absolute z-[19] mx-auto my-auto translate-y-[-575%] translate-x-[1050%]"
        src={mouse}
        alt="Cursor animado"
      />
      <img
        className="absolute z-[19] mx-auto my-auto translate-y-[32%] translate-x-[-32.25%]"
        src={blackWindow}
        alt="Ventana negra"
      />
      <img
        className="absolute z-[18] mx-auto my-auto translate-y-[-21%] translate-x-[-7%]"
        src={backwardWindow}
        alt="Ventana posterior"
      />
      <img
        className="absolute z-[19] mx-auto my-auto translate-y-[10%] translate-x-[130%]"
        src={asciiWindow}
        alt="Ventana ASCII"
      />
      <img
        className="absolute z-[18] mx-auto my-auto translate-y-[18%] translate-x-[122.5%]"
        src={smallBackwardWindow}
        alt="Pequeña ventana posterior"
      />
      <img
        className="absolute z-[17] mx-auto my-auto translate-y-[28%] translate-x-[115%]"
        src={smallBackwardWindow}
        alt="Pequeña ventana posterior"
      />
      <img
        className="absolute z-[16] mx-auto my-auto translate-y-[-17%] translate-x-[-85%]"
        src={leftWorld}
        alt="Mundo izquierdo"
      />
      <img
        className="absolute z-[16] mx-auto my-auto translate-y-[15%] translate-x-[115%]"
        src={rightWorld}
        alt="Mundo derecho"
      />
      <button
        type="button"
        onClick={handleDownload}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[300px] h-[52px]"
      >
          Get Resume
          <img
            src={download}
            alt="Icono de descarga"
            className="ml-2 w-4 sm:w-5 h-4 sm:h-5"
          />
      </button>
    </div>
  );
};

export default Header;
