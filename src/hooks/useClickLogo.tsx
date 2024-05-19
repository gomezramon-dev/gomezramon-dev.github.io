import { useLinkStore } from "../store";

const useClickLogo = () => {
  const setActiveLink = useLinkStore((state) => state.setActiveLink);
  const handleClickOnLogo = () => {
    setActiveLink("");
    window.scrollTo(0, 0);
  };

  return { setActiveLink, handleClickOnLogo };
};

export default useClickLogo;