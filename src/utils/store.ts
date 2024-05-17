import { create } from "zustand";
import {
  menuClosed,
  menuClosedHover,
  menuClosedPressed,
  menuOpen,
  menuOpenHover,
  menuOpenPressed,
} from "../assets/";

type useLinkType = {
  activeLink: string;
  setActiveLink: (value: string) => void;
};

type useMenuType = {
  toggleMenu: boolean;
  menuImg: string;
  menuHoverImg: string;
  menuPressedImg: string;
  setToggleMenu: (value: boolean) => void;
};

export const useLinkStore = create<useLinkType>((set) => ({
  activeLink: "",
  setActiveLink: (value) => set({ activeLink: value }),
}));

export const useMenuStore = create<useMenuType>((set) => ({
  toggleMenu: false,
  menuImg: menuClosed,
  menuHoverImg: menuClosedHover,
  menuPressedImg: menuClosedPressed,
  setToggleMenu: (value) => {
    set({
      toggleMenu: value,
      menuImg: value ? menuOpen : menuClosed,
      menuHoverImg: value ? menuOpenHover : menuClosedHover,
      menuPressedImg: value ? menuOpenPressed : menuClosedPressed,
    });
  },
}));
