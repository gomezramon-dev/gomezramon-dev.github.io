import { type StateCreator, create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { customSessionStorage } from "./storage/session.storage";

interface LinkState {
  activeLink: string;
  setActiveLink: (value: string) => void;
}

const storeAPI: StateCreator<LinkState> = (set) => ({
  activeLink: "",
  setActiveLink: (value) => {
    set({ activeLink: value });
  },
});

export const useLinkStore = create<LinkState>()(
  devtools(
    persist(storeAPI, {
      name: "link-store",
      storage: customSessionStorage,
    }),
  ),
);