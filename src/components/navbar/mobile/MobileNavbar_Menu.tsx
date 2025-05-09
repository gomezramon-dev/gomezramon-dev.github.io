import classNames from "classnames";
import NavbarLinks from "../NavbarLinks";
import { navLinksData } from "../../../data/data";
import { useResponsiveDesign } from "../../../hooks";
import { useMenuStore } from "../../../store";

const MobileNavbar_Menu = () => {
  const { isLaunchedRWD,  width, LARGE_MIN_WIDTH } = useResponsiveDesign();
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const isLaunchedMenu = useMenuStore((state) => state.isLaunchedMenu);
  const setToggleMenu = useMenuStore((state) => state.setToggleMenu);

  return (
    <div
      className={classNames(
        "fixed h-full z-50 w-full grid-cols-8 flex-col items-center justify-center",
        {
          "grid": toggleMenu && !isLaunchedMenu,
          "hidden": (!toggleMenu && !isLaunchedMenu) || (width > LARGE_MIN_WIDTH && !isLaunchedRWD),
          "grid animate-slideDownWindow": toggleMenu && isLaunchedMenu,
          "grid animate-slideUpWindow": !toggleMenu && isLaunchedMenu,
          "animate-slideDownWindow lg:animate-slideUpWindow": toggleMenu && isLaunchedRWD,
        },
      )}
    >
      <div className="relative col-span-6 border-white border-[6px] col-start-2 flex flex-col">
        <div className="bg-secondary flex h-[30px] items-center justify-start gap-2 pl-4">
          {Array(3).fill(null).map((_, index) => (
            <span key={index} className="inline-block h-[12px] w-[12px] rounded-full bg-white"></span>
          ))}
        </div>
        <div className="border-secondary flex flex-col items-center justify-between border-x-[6px] border-b-[6px] bg-white py-48 text-center">
          <NavbarLinks
            linksData={[...navLinksData.leftSide, ...navLinksData.rightSide]}
            colorText="text-black"
            flexDirection="flex-col"
            textSize="text-2xl"
            onLinkClick={() => setToggleMenu(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar_Menu;