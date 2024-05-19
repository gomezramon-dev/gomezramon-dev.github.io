import { Link } from "react-router-dom";
import classNames from "classnames";
import NavbarLinks from "./NavbarLinks";
import { logo } from "../../assets";
import { navLinksData } from "../../data/data";
import { useClickLogo, useResponsiveDesign } from "../../hooks";

const DesktopNavbar = () => {
  const { handleClickOnLogo } = useClickLogo();
  const { isLaunchedRWD, width, LARGE_MIN_WIDTH } = useResponsiveDesign();

  return (
    <nav
      className={classNames(
        "bg-secondary horizontal-padding fixed z-20 flex h-20 w-full",
        {
          "hidden": width < LARGE_MIN_WIDTH && !isLaunchedRWD,
          "animate-slideUp lg:animate-slideDown": isLaunchedRWD,
        },
      )}
    >
      <div className="flex w-full items-center justify-between">
        <NavbarLinks
          linksData={navLinksData.leftSide}
          colorText="text-white"
          flexDirection="flex-row"
          textSize="text-base"
        />
        <Link
          className="flex items-center pl-2.5"
          to="/"
          onClick={handleClickOnLogo}
        >
          <img className="h-8 xl:h-10" src={logo} alt="logo" />
        </Link>
        <NavbarLinks
          linksData={navLinksData.rightSide}
          colorText="text-white"
          flexDirection="flex-row"
          textSize="text-base"
        />
      </div>
    </nav>
  );
};

export default DesktopNavbar;