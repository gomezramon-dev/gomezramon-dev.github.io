import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavbarLinks from "./NavbarLinks";
import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle } from "../../utils/styles";
import { useLinkStore } from "../../utils/store";

const DesktopNavbar = () => {
  const { animationOnDesktop } = navbarResponsiveStyle;
  const { setActiveLink } = useLinkStore();

  return (
    <nav
      className={`bg-secondary horizontal-padding fixed z-20 flex h-20 w-full ${animationOnDesktop}`}
    >
      <div className={`flex w-full items-center justify-between`}>
        <NavbarLinks
          linksData={navLinksData.leftSide}
          colorText={"text-white"}
          flexDirection="flex-row"
          textSize="text-base"
        />
        <Link
          to="/"
          className="flex items-center pl-2.5"
          onClick={() => {
            setActiveLink("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-8 xl:h-10" />
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
