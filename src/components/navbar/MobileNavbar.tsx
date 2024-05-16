import { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
// import NavbarLinks from "./NavbarLinks";
// import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle } from "../../utils/styles";
import { useLinkStore, useMenuStore } from "../../utils/store";

const MobileNavbar = () => {
  const { horizontalPadding, animationOnMobile } = navbarResponsiveStyle;
  const { setActiveLink } = useLinkStore();
  const { toggleMenu, menuImg, menuHoverImg, menuPressedImg, setToggleMenu } = useMenuStore();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const setImageSrc = (src: string) => {
    (imageRef.current as HTMLImageElement).src = src;
  };
  

  return (
    <nav className={`fixed w-full h-20 z-10 flex ${horizontalPadding} ${animationOnMobile}`}>
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
      
        <div className="flex flex-1 justify-end items-center">
          <img
            onMouseOver={() => setImageSrc(menuHoverImg)}
            onMouseOut={() => setImageSrc(menuImg)}
            onMouseDown={() => setImageSrc(menuPressedImg)}
            onMouseUp={() => setImageSrc(menuImg)}
            src={menuImg}
            alt="menu"
            ref={imageRef}
            className="cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>      
      </div>
    </nav>
  );
};

export default MobileNavbar;
