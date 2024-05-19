import { type StateCreator, create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { customSessionStorage } from "./storage/session.storage";
import { menuClosed, menuClosedHover, menuClosedPressed, menuOpen, menuOpenHover, menuOpenPressed } from "../assets/";

interface MenuState {
  toggleMenu: boolean;
  isLaunchedMenu: boolean;
  menuImg: string;
  menuHoverImg: string;
  menuPressedImg: string;
  setToggleMenu: (value: boolean) => void;
}

const storeAPI: StateCreator<MenuState> = (set) => ({
  toggleMenu: false,
  isLaunchedMenu: false,
  menuImg: menuClosed,
  menuHoverImg: menuClosedHover,
  menuPressedImg: menuClosedPressed,
  setToggleMenu: (value) => {
    set({
      toggleMenu: value,
      isLaunchedMenu: true,
      menuImg: value ? menuOpen : menuClosed,
      menuHoverImg: value ? menuOpenHover : menuClosedHover,
      menuPressedImg: value ? menuOpenPressed : menuClosedPressed,
    });
  },
});

export const useMenuStore = create<MenuState>()(
  devtools(
    persist(storeAPI, {
      name: "menu-store",
      storage: customSessionStorage,
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["isLaunchedMenu"].includes(key),
          ),
        ),
    }),
  ),
);