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
    <ul className={classNames("flex list-none gap-10 xl:gap-12 2xl:gap-16", flexDirection)}>
      {linksData.map(({ id, title }) => (
        <li
          key={id}
          className={classNames("cursor-pointer hover:text-primary", {
            [colorText]: activeLink !== title,
            "text-primary": activeLink === title,
          })}
          onClick={() => setActiveLink(title)}
        >
          <a className={classNames("tracking-links", textSize)} href={`#${id}`}> {title} </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;