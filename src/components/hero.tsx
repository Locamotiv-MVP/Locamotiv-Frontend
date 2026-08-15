import React from "react";
import useGeneralStore from "../store/general";
import HeroLocation from "./heroLocation";
import { HeroImages } from "../utils/constants";

const Hero = () => {
  const { selectedState } = useGeneralStore();

  return (
    <React.Fragment>
      <HeroLocation />
      <div className="page-hero-section-container">
        <img
          className="discover-hero-image"
          src={
            selectedState === ""
              ? HeroImages?.default
              : HeroImages[selectedState?.toLowerCase()]
          }
          alt="Hero Image"
        />
        <div className="discover-hero-text-container">
          <p className="discover-hero-title">Your Motive. Your Way.</p>
          <p className="discover-hero-text">
            Discover events, share moments & explore nightlife
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
