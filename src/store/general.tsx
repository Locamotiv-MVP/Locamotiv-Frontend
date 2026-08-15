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
  showHeroCountries: boolean;
  isLoading: boolean;
  selectedState: string;
  selectedFeatured: string;
  showFeaturedList: boolean;

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
  showHeroCountries: false,
  isLoading: false,
  selectedState: "",
  selectedFeatured: "",
  showFeaturedList: false,

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
      showHeroCountries: false,
      isLoading: false,
      selectedState: "",
      selectedFeatured: "",
      showFeaturedList: false,
    })),
}));

export default useGeneralStore;
