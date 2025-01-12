import { create, StoreApi } from "zustand";

type Store = {
  openResources: boolean;
  openSidebar: boolean;
  setOpenResources: () => void;
  setOpenSidebar: () => void;
};
const store = (
  set: StoreApi<Store>["setState"],
  get: StoreApi<Store>["getState"]
) => ({
  openResources: false,
  openSidebar: false,
  setOpenResources: () => set({ openResources: !get().openResources }),
  setOpenSidebar: () => set({ openSidebar: !get().openSidebar }),
});

export const useModalStore = create<Store>(store);
