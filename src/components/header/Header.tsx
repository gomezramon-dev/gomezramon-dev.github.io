import { useEffect, useState } from "react";
import WelcomeTo from "./WelcomeTo";
import {
  asciiWindow,
  backwardWindow,
  blackWindow,
  leftWorld,
  mainWindow,
  mouse,
  rightWorld,
  smallBackwardWindow,
} from "../../assets";

const Header = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / 1920);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ transform: `scale(${scale})` }}
      className="flex h-[1000px] horizontal-padding w-full items-center justify-center relative"
    >
      <WelcomeTo />
      <img
        className="absolute z-30 mx-auto my-auto"
        src={mainWindow}
        alt="mainWindow"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[-575%] translate-x-[1050%]"
        src={mouse}
        alt="mainWindow"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[32%] translate-x-[-32.25%]"
        src={blackWindow}
        alt="blackWindow"
      />
      <img
        className="absolute z-[28] mx-auto my-auto translate-y-[-21%] translate-x-[-7%]"
        src={backwardWindow}
        alt="backwardWindow"
      />
      <img
        className="absolute z-[29] mx-auto my-auto translate-y-[10%] translate-x-[130%]"
        src={asciiWindow}
        alt="asciiWindow"
      />
      <img
        className="absolute z-[28] mx-auto my-auto translate-y-[18%] translate-x-[122.5%]"
        src={smallBackwardWindow}
        alt="smallBackwardWindow"
      />
      <img
        className="absolute z-[27] mx-auto my-auto translate-y-[28%] translate-x-[115%]"
        src={smallBackwardWindow}
        alt="smallBackwardWindow"
      />
      <img
        className="absolute z-[26] mx-auto my-auto translate-y-[-17%] translate-x-[-85%]"
        src={leftWorld}
        alt="leftWorld"
      />
      <img
        className="absolute z-[26] mx-auto my-auto translate-y-[15%] translate-x-[115%]"
        src={rightWorld}
        alt="rightWorld"
      />
    </div>
  );
};

export default Header;
