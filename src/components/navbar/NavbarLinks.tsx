import { navbarResponsiveStyle } from "../../utils/styles";
import { useLinkStore } from "../../utils/store";

interface Props {
  linksData: {
    id: string;
    title: string;
  }[];
  colorText: string
  flexDirection: string
  textSize: string
}

const NavbarLinks = ({ linksData, colorText, flexDirection, textSize }: Props) => {
  const { itemsFlexGap } = navbarResponsiveStyle;
  const { activeLink, setActiveLink } = useLinkStore();

  return (
    <ul className={`${itemsFlexGap} ${flexDirection} list-none`}>
      {linksData.map((link) => (
        <li
          key={link.id}
          className={`${activeLink === link.title ? "text-primary" : colorText} hover:text-primary cursor pointer`}
          onClick={() => setActiveLink(link.title)}
        >
          <a className={`${textSize} letter-spacing`} href={`#${link.id}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
