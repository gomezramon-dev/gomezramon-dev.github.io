import classNames from "classnames";
import { useLinkStore } from "../../store";

interface Props {
  linksData: {
    id: string;
    title: string;
  }[];
  colorText: string;
  flexDirection: string;
  textSize: string;
}

const NavbarLinks = ({ linksData, colorText, flexDirection, textSize }: Props) => {
  const activeLink = useLinkStore((state) => state.activeLink);
  const setActiveLink = useLinkStore((state) => state.setActiveLink);

  return (
    <ul className={`flex list-none gap-10 xl:gap-12 2xl:gap-16 ${flexDirection}`}>
      {linksData.map((link) => (
        <li
          className={classNames("hover:text-primary cursor pointer", {
            [colorText]: activeLink !== link.title,
            "text-primary": activeLink === link.title,
          })}
          key={link.id}
          onClick={() => setActiveLink(link.title)}
        >
          <a className={`tracking-links ${textSize}`} href={`#${link.id}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;