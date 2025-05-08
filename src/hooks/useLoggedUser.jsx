import { create } from "zustand";

const useLoggedUser = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export default useLoggedUser;
