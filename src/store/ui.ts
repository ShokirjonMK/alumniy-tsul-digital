import { create } from "zustand";

interface Iui {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const useUI = create<Iui>((set) => ({
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));

export default useUI;
