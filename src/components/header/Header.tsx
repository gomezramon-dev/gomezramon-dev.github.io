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
import cv from "../../../public/KapidevResume.pdf"

const Header = () => {
  // Header with SVG animations hidden on small screens for better readability
  // Programmatic download for resume to utilize base button styles
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'RamonGomezUrquidezResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex horizontal-padding w-full items-center justify-center relative min-h-screen">
      <WelcomeTo />
      <img
        className="absolute z-30 inset-0 mx-auto my-auto"
        src={mainWindow}
        alt="Ventana principal"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[-575%] translate-x-[1050%]"
        src={mouse}
        alt="Cursor animado"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[32%] translate-x-[-32.25%]"
        src={blackWindow}
        alt="Ventana negra"
      />
      <img
        className="absolute z-[28] mx-auto my-auto translate-y-[-21%] translate-x-[-7%]"
        src={backwardWindow}
        alt="Ventana posterior"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[10%] translate-x-[130%]"
        src={asciiWindow}
        alt="Ventana ASCII"
      />
      <img
        className="absolute z-[28] mx-auto my-auto translate-y-[18%] translate-x-[122.5%]"
        src={smallBackwardWindow}
        alt="Pequeña ventana posterior"
      />
      <img
        className="absolute z-[27] mx-auto my-auto translate-y-[28%] translate-x-[115%]"
        src={smallBackwardWindow}
        alt="Pequeña ventana posterior"
      />
      <img
        className="absolute z-[26] mx-auto my-auto translate-y-[-17%] translate-x-[-85%]"
        src={leftWorld}
        alt="Mundo izquierdo"
      />
      <img
        className="absolute z-[26] mx-auto my-auto translate-y-[15%] translate-x-[115%]"
        src={rightWorld}
        alt="Mundo derecho"
      />
      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        <button
          type="button"
          onClick={handleDownload}
          className="w-48 sm:w-60 h-10 sm:h-14"
        >
          Get Resume
          <img
            src={download}
            alt="Icono de descarga"
            className="ml-2 w-4 sm:w-5 h-4 sm:h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
