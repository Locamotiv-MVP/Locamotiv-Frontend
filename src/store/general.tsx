import { create } from "zustand";
import {
  maximumScreenForTab,
  minimumScreenForMobile,
  minimumScreenForTab,
} from "../utils/constants";

interface GeneralStore {
  isLargeScreen: boolean;
  isMobileScreen: boolean;
  isTabScreen: boolean;

  setGeneralStore: <Key extends keyof GeneralStore>(params: {
    name: Key;
    value: GeneralStore[Key];
  }) => void;

  setScreenSize: (width: number) => void;

  resetGeneralStore: () => void;
}

const useGeneralStore = create<GeneralStore>((set) => ({
  isLargeScreen: false,
  isMobileScreen: false,
  isTabScreen: false,

  setGeneralStore: ({ name, value }) =>
    set(() => ({
      [name]: value,
    })),

  setScreenSize: (width: number) =>
    set({
      isLargeScreen: width >= maximumScreenForTab,

      isTabScreen: width >= minimumScreenForTab && width < maximumScreenForTab,

      isMobileScreen:
        width >= minimumScreenForMobile && width < minimumScreenForTab,
    }),

  resetGeneralStore: () =>
    set(() => ({
      isLargeScreen: false,
      isMobileScreen: false,
      isTabScreen: false,
    })),
}));

export default useGeneralStore;
