import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useWidthStore } from "../store";

const useResponsiveDesign = () => {
  const [LARGE_MIN_WIDTH, width, isLaunchedRWD, activateRWD, setWidth] =
    useWidthStore(
      useShallow((state) => [
        state.LARGE_MIN_WIDTH,
        state.width,
        state.isLaunchedRWD,
        state.activateRWD,
        state.setWidth,
      ]),
    );

  useEffect(() => {
    if (!isLaunchedRWD) {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setWidth, isLaunchedRWD]);

  useEffect(() => {
    if (!isLaunchedRWD) {
      activateRWD();
    }
  }, [activateRWD, width, isLaunchedRWD]);

  return { isLaunchedRWD, width, LARGE_MIN_WIDTH };
};

export default useResponsiveDesign;