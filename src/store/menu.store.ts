import { type StateCreator, create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { customSessionStorage } from "./storage/session.storage";
import { closed, open } from "../assets/";

interface MenuState {
  toggleMenu: boolean;
  isLaunchedMenu: boolean;
  menuImg: string;
  setToggleMenu: (value: boolean) => void;
}

const storeAPI: StateCreator<MenuState> = (set) => ({
  toggleMenu: false,
  isLaunchedMenu: false,
  menuImg: closed,
  setToggleMenu: (value) => {
    set({
      toggleMenu: value,
      isLaunchedMenu: true,
      menuImg: value ? open : closed,
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