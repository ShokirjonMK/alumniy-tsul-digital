import { create } from "zustand";
import { IUserField } from "types/base";

interface IAuth {
  user: IUserField | null;
  isAuth: boolean;
  login: (user: any) => void;
  logout: () => void;
}

const useAuth = create<IAuth>((set) => ({
  user: null,
  isAuth: false,

  login: (user) => set({ user, isAuth: true }),
  logout: () => {
    set({ user: null, isAuth: false });
    localStorage.removeItem("access_token");
  },
}));

export default useAuth;
