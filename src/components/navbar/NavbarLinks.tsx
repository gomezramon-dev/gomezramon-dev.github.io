import { navbarResponsiveStyle } from "../../utils/styles";
import { useLinkStore } from "../../utils/store";

interface Props {
  linksData: {
    id: string;
    title: string;
  }[];
}

const NavbarLinks = ({ linksData }: Props) => {
  const { itemsFlex } = navbarResponsiveStyle;
  const { activeLink, setActiveLink } = useLinkStore();

  return (
    <ul className={`${itemsFlex} list-none`}>
      {linksData.map((link) => (
        <li
          key={link.id}
          className={`${activeLink === link.title ? "text-primary" : "text-white"} hover:text-primary cursor pointer`}
          onClick={() => setActiveLink(link.title)}
        >
          <a className="text-base letter-spacing" href={`#${link.id}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
