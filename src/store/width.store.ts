import { type StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface WindowState {
  LARGE_MIN_WIDTH: number;
  width: number;
  priorWidth: number;
  isLaunchedRWD: boolean;
  isWidthCrossingThreshold: () => boolean;
  activateRWD: () => void;
  setWidth: (width: number) => void;
}

const storeAPI: StateCreator<WindowState> = (set, get) => ({
  LARGE_MIN_WIDTH: 1024,
  width: window.innerWidth,
  priorWidth: window.innerWidth,
  isLaunchedRWD: false,
  isWidthCrossingThreshold: () => {
    return (
      get().width !== get().priorWidth &&
      ((get().width >= get().LARGE_MIN_WIDTH &&
        get().priorWidth < get().LARGE_MIN_WIDTH) ||
        (get().width < get().LARGE_MIN_WIDTH &&
          get().priorWidth >= get().LARGE_MIN_WIDTH))
    );
  },
  activateRWD: () => {
    if (
      get().width === get().LARGE_MIN_WIDTH ||
      get().isWidthCrossingThreshold()
    ) {
      set({ isLaunchedRWD: true });
    }
  },
  setWidth: (width) => {
    set({
      priorWidth: get().width,
      width,
    });
  },
});

export const useWidthStore = create<WindowState>()(devtools(storeAPI));