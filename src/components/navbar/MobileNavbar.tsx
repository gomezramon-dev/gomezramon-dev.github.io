import { useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import NavbarLinks from "./NavbarLinks";
import { navLinksData } from "../../data/data";
import { navbarResponsiveStyle, menuResponsiveStyle } from "../../utils/styles";
import { useLinkStore, useMenuStore } from "../../utils/store";

const MobileNavbar = () => {
  const { horizontalPadding, animationOnMobile, animationOnMobileWindow } =
    navbarResponsiveStyle;
  const { horizontalWhiteBarSize, horizontalBlackBarSize } =
    menuResponsiveStyle;
  const { setActiveLink } = useLinkStore();
  const { toggleMenu, menuImg, menuHoverImg, menuPressedImg, setToggleMenu } =
    useMenuStore();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const setImageSrc = (src: string) => {
    (imageRef.current as HTMLImageElement).src = src;
  };

  return (
    <>
      <nav
        className={`fixed z-10 flex h-20 w-full ${horizontalPadding} ${animationOnMobile}`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <Link
            to="/"
            className="flex items-center pl-2.5"
            onClick={() => {
              setActiveLink("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-8" />
          </Link>

          <div className="flex flex-1 items-center justify-end">
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
      <div
        className={`${toggleMenu ? "flex" : "hidden"} fixed flex h-full w-full flex-col items-center justify-center ${animationOnMobileWindow}`}
      >
        <div
          className={`bg-secondary flex items-center justify-start gap-2 ${horizontalBlackBarSize} h-[30px] pl-4`}
        >
          <span className="inline-block h-[12px] w-[12px] rounded-full bg-white"></span>
          <span className="inline-block h-[12px] w-[12px] rounded-full bg-white"></span>
          <span className="inline-block h-[12px] w-[12px] rounded-full bg-white"></span>
        </div>
        <div
          className={`flex flex-col items-center justify-between bg-white ${horizontalWhiteBarSize} border-secondary border-x-[6px] border-b-[6px] py-48 text-center`}
        >
          <NavbarLinks
            linksData={[...navLinksData.leftSide, ...navLinksData.rightSide]}
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
