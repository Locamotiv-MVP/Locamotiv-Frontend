/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  LocateFixed,
  LocateOff,
  MapPin,
  Search,
} from "lucide-react";
import Seperator from "./sectionSeperator";
import React, { useEffect, useRef, useState } from "react";
import useGeneralStore from "../store/general";
import { supportedStates } from "../utils/constants";

const HeroLocation = () => {
  const { showHeroCountries, selectedState, setGeneralStore } =
    useGeneralStore();
  const locationRef = useRef<any>(null);
  const [searchResult, setSearchResult] = useState<any>([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    if (!showHeroCountries) return;

    const handleOutsideClick = (evnt?: any) => {
      if (!locationRef.current?.contains(evnt?.target)) {
        setGeneralStore({
          name: "showHeroCountries",
          value: false,
        });
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [setGeneralStore, showHeroCountries]);

  return (
    <div
      style={{
        zIndex: 20,
        position: "absolute",
        top: "5px",
        left: "35px",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: "3px",

        minHeight: "fit-content",
      }}
      ref={locationRef}
    >
      <div
        style={{
          zIndex: 20,

          maxWidth: "fit-content",
          maxHeight: "25px",
          background: "rgb(0 0 0 / 0.9)",
          cursor: "pointer",
        }}
        className="header-button-signup"
        onClick={() => {
          setGeneralStore({
            name: "showHeroCountries",
            value: !showHeroCountries,
          });
        }}
      >
        <MapPin className="header-button-premium-icon" />
        <p className="header-button-signup-text">
          {selectedState !== "" ? selectedState : "Lagos"}, Nigeria
        </p>
        {!showHeroCountries && (
          <ChevronDown className="header-button-premium-icon" />
        )}
        {showHeroCountries && (
          <ChevronUp className="header-button-premium-icon" />
        )}
      </div>
      {showHeroCountries && (
        <div
          style={{
            zIndex: 30,

            background: "rgb(0 0 0 / 0.9)",
          }}
          className="discover-hero-location-settings"
        >
          <div className="discover-hero-location-current">
            <div className="discover-hero-location-current-icon">
              <LocateFixed
                style={{
                  width: "20px",
                  height: "20px",
                  color: "rgb(216 180 254)",
                  maxWidth: "20px",
                }}
              />
            </div>
            <div
              style={{ paddingBottom: "8px" }}
              className="discover-hero-location-current-text-container"
            >
              <p
                style={{ lineHeight: "1.8rem" }}
                className="header-button-premium-text"
              >
                Use my current location
              </p>
              <span
                style={{
                  fontWeight: 400,
                  lineHeight: "1px",
                  fontSize: "0.5rem",
                  opacity: 0.8,
                }}
                className="header-button-signup-text"
              >
                Detect your location automatically
              </span>
            </div>
            <ChevronRight
              style={{
                width: "20px",
                height: "20px",
                color: "rgb(216 180 254)",
                maxWidth: "20px",
              }}
            />
          </div>
          <Seperator seperatorOpacity="0.5" />
          <div className="discover-hero-location-manual">
            <div className="discover-hero-location-current">
              <div className="discover-hero-location-current-icon">
                <LocateOff
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "rgb(216 180 254)",
                    maxWidth: "20px",
                  }}
                />
              </div>
              <div
                style={{ paddingBottom: "3px" }}
                className="discover-hero-location-current-text-container"
              >
                <p
                  style={{ lineHeight: "1.8rem" }}
                  className="header-button-premium-text"
                >
                  Select by state
                </p>
                <span
                  style={{
                    fontWeight: 400,
                    lineHeight: "1px",
                    fontSize: "0.5rem",
                    opacity: 0.8,
                  }}
                  className="header-button-signup-text"
                >
                  Choose a location manually
                </span>
              </div>
              <ChevronUp
                style={{
                  width: "20px",
                  height: "20px",
                  color: "rgb(216 180 254)",
                  maxWidth: "20px",
                }}
              />
            </div>

            <div className="discover-hero-location-manual-list">
              <div className="discover-hero-location-manual-list-search">
                <Search className="header-button-premium-icon" />
                <input
                  className="discover-hero-location-manual-list-search-input"
                  type="text"
                  placeholder="Search for a state"
                  onInput={(e: any) => {
                    if (e.target.value === "") {
                      setSearched("");

                      setSearchResult([]);
                    } else {
                      setSearched(e.target.value.toLowerCase());
                      const filteredSearch = supportedStates?.filter(
                        (state: string) => {
                          if (
                            state
                              ?.toLowerCase()
                              ?.includes(e.target.value.toLowerCase())
                          ) {
                            return state;
                          }
                        },
                      );
                      setSearchResult(filteredSearch);
                    }
                  }}
                />
              </div>

              {searched === "" && (
                <React.Fragment>
                  {supportedStates?.map((state: string, idx: number) => (
                    <div
                      key={`hero-loca-${idx}`}
                      onClick={() => {
                        console.log("onclicked: ", state);
                        setGeneralStore({ name: "isLoading", value: true });
                        setGeneralStore({
                          name: "showHeroCountries",
                          value: false,
                        });
                        setGeneralStore({
                          name: "selectedState",
                          value: state,
                        });

                        setTimeout(() => {
                          setGeneralStore({ name: "isLoading", value: false });
                        }, 4000);
                      }}
                      className="discover-hero-location-manual-list-content"
                    >
                      <MapPin className="header-button-premium-icon" />
                      {state}
                    </div>
                  ))}
                </React.Fragment>
              )}
              {searched !== "" && (
                <React.Fragment>
                  {searchResult?.map((state: string, idx: number) => (
                    <div
                      key={`hero-loca-${idx}`}
                      onClick={() => {
                        setGeneralStore({ name: "isLoading", value: true });
                        setGeneralStore({
                          name: "showHeroCountries",
                          value: false,
                        });
                        setGeneralStore({
                          name: "selectedState",
                          value: state,
                        });

                        setTimeout(() => {
                          setGeneralStore({ name: "isLoading", value: false });
                        }, 4000);
                      }}
                      className="discover-hero-location-manual-list-content"
                    >
                      <MapPin className="header-button-premium-icon" />

                      {state}
                    </div>
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroLocation;
