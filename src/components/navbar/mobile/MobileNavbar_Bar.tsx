import { Link } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import classNames from "classnames";
import { logo } from "../../../assets";
import { useClickLogo, useResponsiveDesign } from "../../../hooks";
import { useMenuStore } from "../../../store";

const MobileNavbar_Bar = () => {
  const { handleClickOnLogo } = useClickLogo();
  const { isLaunchedRWD, width, LARGE_MIN_WIDTH } = useResponsiveDesign();
  const [toggleMenu, menuImg, setToggleMenu] = useMenuStore(
    useShallow((state) => [
      state.toggleMenu,
      state.menuImg,
      state.setToggleMenu,
    ]),
  );

  return (
    <div
      className={classNames("horizontal-padding fixed z-30 flex h-20 w-full", {
        hidden: width > LARGE_MIN_WIDTH && !isLaunchedRWD,
        "animate-slideDown lg:animate-slideUp": isLaunchedRWD,
      })}
    >
      <div className="flex w-full items-center justify-between">
        <Link
          className="flex items-center pl-2.5"
          to="/"
          onClick={handleClickOnLogo}
        >
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <button
            className="w-[42px] h-[42px]"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img src={menuImg} alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar_Bar;
