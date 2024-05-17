import { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavbarLinks from "./NavbarLinks";
import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle, menuResponsiveStyle } from "../../utils/styles";
import { useLinkStore, useMenuStore } from "../../utils/store";

const MobileNavbar = () => {
  const { horizontalPadding, animationOnMobile, animationOnMobileWindow } = navbarResponsiveStyle;
  const { horizontalWhiteBarSize, horizontalBlackBarSize } = menuResponsiveStyle;
  const { setActiveLink } = useLinkStore();
  const { toggleMenu, menuImg, menuHoverImg, menuPressedImg, setToggleMenu } = useMenuStore();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const setImageSrc = (src: string) => {
    (imageRef.current as HTMLImageElement).src = src;
  };

  return (
    <>
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
      <div className={`${toggleMenu? 'flex' : 'hidden'} fixed w-full h-full flex flex-col justify-center items-center ${animationOnMobileWindow}`}>
          <div className={`flex justify-start items-center gap-2 bg-secondary ${horizontalBlackBarSize} pl-4 h-[30px]`}>
            <span className="h-[12px] w-[12px] bg-white rounded-full inline-block"></span>
            <span className="h-[12px] w-[12px] bg-white rounded-full inline-block"></span>
            <span className="h-[12px] w-[12px] bg-white rounded-full inline-block"></span>
          </div>
          <div className={`flex flex-col items-center justify-between bg-white ${horizontalWhiteBarSize} border-secondary border-x-[6px] border-b-[6px] py-48 text-center`}>
              <NavbarLinks 
                linksData={[...navLinksData.leftSide,...navLinksData.rightSide]}
                colorText="text-black"
                flexDirection="flex-col"
                textSize="text-2xl"
              />
          </div>
      </div>
    </>
  );
};

export default MobileNavbar;
