import { create } from "zustand";

type useNavbarType = {
  activeLink: string;
  toggleMenu: boolean;
  setActiveLink: (value: string) => void;
  setToggleMenu: (value: boolean) => void;
};

const useNavbarStore = create<useNavbarType>(set => ({
  activeLink: "",
  toggleMenu: false,
  setActiveLink: (value) => set({ activeLink: value}),
  setToggleMenu: (value) => set({ toggleMenu: value})
}));

export default useNavbarStore;