import { Link } from "react-router-dom";
import { navbarStyle } from "../styles";
import { navLinks } from "../constants";
import { Logo } from "../assets";

const Navbar = () => {
  const {
    horizontalPadding,
    justifyContent,
    textSize,
    imageHeight,
    itemsFlex,
  } = navbarStyle;

  return (
    <nav className={`fixed w-full h-20 z-20 ${horizontalPadding} flex bg-secondary`}>
      <div className={`w-full flex items-center ${justifyContent}`}>
        <ul className={`${itemsFlex} list-none`}>
          {navLinks.leftSide.map((link) => (
            <a className={`${textSize}`} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </ul>
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className={`${imageHeight} object-contain`}
          />
        </Link>
        <ul className={`${itemsFlex} list-none`}>
          {navLinks.rightSide.map((link) => (
            <a className={`${textSize}`} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;