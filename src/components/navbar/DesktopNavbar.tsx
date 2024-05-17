import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavbarLinks from "./NavbarLinks";
import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle } from "../../utils/styles";
import { useLinkStore } from "../../utils/store";

const DesktopNavbar = () => {
  const { horizontalPadding, imageHeight, animationOnDesktop } = navbarResponsiveStyle;
  const { setActiveLink } = useLinkStore();

  return (
    <nav className={`fixed w-full h-20 z-20 flex bg-secondary ${horizontalPadding} ${animationOnDesktop}`}>
      <div className={`w-full flex items-center justify-between`}>
        <NavbarLinks 
          linksData={navLinksData.leftSide} 
          colorText={"text-white"}
          flexDirection="flex-row"
          textSize="text-base"
        />
        <Link
          to="/"
          className="pl-2.5 flex items-center"
          onClick={() => {
            setActiveLink("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={`${imageHeight}`} />
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
