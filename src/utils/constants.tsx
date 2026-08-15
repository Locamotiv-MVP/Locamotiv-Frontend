/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroImage1 from "../assets/discover-hero-picture.avif";
import LagosImage1 from "../assets/lagos-others-image.jpg";
import AbiaImage1 from "../assets/abia-image-1.jpg";
import AbujaImage1 from "../assets/abuja-image-1.jpg";
import OyoImage1 from "../assets/oyo-image1.png";
import KanoImage1 from "../assets/kano-image-1.jpg";
import DeltaImage1 from "../assets/delta-image-1.jpg";
import OsunImage1 from "../assets/osun-image1.webp";

export const minimumScreenForMobile = 0;
export const minimumScreenForTab = 768;
export const maximumScreenForTab = 1280;

export const HeroImages: any = {
  default: HeroImage1,
  lagos: LagosImage1,
  abuja: AbujaImage1,
  kano: KanoImage1,
  oyo: OyoImage1,
  delta: DeltaImage1,
  abia: AbiaImage1,
  osun: OsunImage1,
};

export const supportedStates = [
  "Lagos",
  "Abuja",
  "Kano",
  "Abia",
  "Delta",
  "Oyo",
  "Osun",
];

export const featuredList = ["Events", "Venues"];

export const featuredCategories = [
  "All",
  "Music",
  "Nightlife",
  "Beach",
  "Food",
  "Art",
  "Wellness",
  "Fun & Active",
  "Tech",
];
