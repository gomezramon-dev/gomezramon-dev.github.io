import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { logo, menuClosed, menuOpen } from "../../assets";
import NavbarLinks from "./NavbarLinks";
import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle } from "../../utils/responsiveStyles";
import useNavbarStore from "../../utils/store";

const Navbar = () => {
  const {
    horizontalPadding,
    imageHeight,
    animationOnDesktop,
    animationOnMobile,
  } = navbarResponsiveStyle;
  const { setActiveLink, toggleMenu, setToggleMenu } = useNavbarStore();
  const firstRender = useRef(true);

  useEffect(() => {
      firstRender.current = false;
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full h-20 z-20 ${horizontalPadding} ${firstRender.current ? 'flex' : 'hidden'} bg-secondary ${animationOnDesktop}`}
      >
        <div className={`w-full flex items-center justify-between`}>
          <NavbarLinks linksData={navLinksData.leftSide} />
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
          <NavbarLinks linksData={navLinksData.rightSide} />
        </div>
      </nav>
      <nav className={`fixed w-full h-20 z-10 ${horizontalPadding} ${firstRender.current ? 'flex' : 'hidden'} ${animationOnMobile}`}>
        <div className={`w-full flex items-center justify-between`}>
          <Link
            to="/"
            className="pl-2.5 flex items-center"
            onClick={() => {
              setActiveLink("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-8" />
          </Link>
          <img
            src={toggleMenu ? menuOpen : menuClosed}
            alt="menu"
            className="cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
