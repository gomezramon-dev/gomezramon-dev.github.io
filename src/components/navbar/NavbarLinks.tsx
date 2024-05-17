import { useLinkStore } from "../../utils/store";

interface Props {
  linksData: {
    id: string;
    title: string;
  }[];
  colorText: string;
  flexDirection: string;
  textSize: string;
}

const NavbarLinks = ({
  linksData,
  colorText,
  flexDirection,
  textSize,
}: Props) => {
  const { activeLink, setActiveLink } = useLinkStore();

  return (
    <ul
      className={`flex list-none gap-10 xl:gap-12 2xl:gap-16 ${flexDirection}`}
    >
      {linksData.map((link) => (
        <li
          key={link.id}
          className={`${activeLink === link.title ? "text-primary" : colorText} hover:text-primary cursor pointer`}
          onClick={() => setActiveLink(link.title)}
        >
          <a className={`${textSize} tracking-links`} href={`#${link.id}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
