import { Link } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import classNames from "classnames";
import { logo } from "../../../assets";
import { useClickLogo, useSetImage, useResponsiveDesign } from "../../../hooks";
import { useMenuStore } from "../../../store";

const MobileNavbar_Bar = () => {
  const { handleClickOnLogo } = useClickLogo();
  const { imageRef, handleSetImage } = useSetImage();
  const { isLaunchedRWD, width, LARGE_MIN_WIDTH } = useResponsiveDesign();
  const [toggleMenu, menuImg, menuHoverImg, menuPressedImg, setToggleMenu] =
    useMenuStore(
      useShallow((state) => [
        state.toggleMenu,
        state.menuImg,
        state.menuHoverImg,
        state.menuPressedImg,
        state.setToggleMenu,
      ]),
    );

  return (
    <div
      className={classNames("horizontal-padding fixed z-10 flex h-20 w-full", {
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
          <img
            className="cursor-pointer"
            src={menuImg}
            alt="menu"
            ref={imageRef}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseOut={handleSetImage(menuImg)}
            onMouseOver={handleSetImage(menuHoverImg)}
            onMouseDown={handleSetImage(menuPressedImg)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar_Bar;