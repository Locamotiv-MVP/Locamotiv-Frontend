/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from "../components/hero";
import { CalendarPlus, Image, MapPin } from "lucide-react";
import useGeneralStore from "../store/general";
import React, { useEffect, useRef, useState } from "react";
import {
  featuredCategories,
  testEventsDetails,
  testVenuesDetails,
} from "../utils/constants";
import MajorEvent from "../components/majorEvent";
import Event from "../components/event";
import DiscoverFooterAction from "../components/discoverFooterAction";

const Discover = () => {
  const { isMobileScreen, showFeaturedList, selectedState, setGeneralStore } =
    useGeneralStore();

  const featuredListRef = useRef<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (!showFeaturedList) return;

    const handleOutsideClick = (evnt?: any) => {
      if (!featuredListRef.current?.contains(evnt?.target)) {
        setGeneralStore({
          name: "showFeaturedList",
          value: false,
        });
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [setGeneralStore, showFeaturedList]);

  return (
    <div className="page-container">
      <div className="page-container-wrapper">
        <Hero />

        <div className="discover-content-container">
          <MajorEvent />
          <div className="discover-content-fotter">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <p
                style={{ fontSize: "1.1875rem", fontStyle: "normal" }}
                className="discover-hero-title"
              >
                Featured Events
              </p>
            </div>

            <div
              style={
                isMobileScreen
                  ? { flexDirection: "column" }
                  : { flexDirection: "row", flexWrap: "wrap" }
              }
              className="discover-content-fotter-list-container"
            >
              {testEventsDetails[selectedState?.toLowerCase()]
                ?.filter((evnt: any) => evnt?.isFeatured)
                ?.map((event: any, idx: number) => (
                  <Event
                    idx={idx}
                    name={event?.name}
                    location={event?.location}
                    locationLink={event?.locationLink}
                    category={event?.category}
                    eventPathType={event?.eventPathType}
                    isFeatured={true}
                    date={event?.date}
                    picture={event?.picture}
                  />
                ))}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "100%",
                  alignItems: "center",
                  overflowY: "hidden",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                }}
              >
                {featuredCategories?.map((category: string, idx: number) => (
                  <React.Fragment key={`featured-category-${idx}`}>
                    {selectedCategory?.toLowerCase() ===
                    category?.toLowerCase() ? (
                      <div
                        onClick={() => setSelectedCategory(category)}
                        className="page-text-badge-button-active"
                      >
                        {category}
                      </div>
                    ) : (
                      <div
                        onClick={() => setSelectedCategory(category)}
                        className="page-text-badge-button"
                      >
                        {category}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {testEventsDetails[selectedState?.toLowerCase()]
                ?.filter((evnt: any) =>
                  selectedCategory?.toLowerCase() === "all"
                    ? evnt?.category
                    : evnt?.categories?.includes(
                        selectedCategory?.toLowerCase(),
                      ),
                )
                ?.map((event: any, idx: number) => (
                  <Event
                    idx={idx}
                    name={event?.name}
                    location={event?.location}
                    locationLink={event?.locationLink}
                    category={event?.category}
                    eventPathType={event?.eventPathType}
                    isFeatured={event?.isFeatured}
                    date={event?.date}
                    picture={event?.picture}
                  />
                ))}
            </div>
          </div>

          <div className="discover-content-fotter">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <p
                style={{ fontSize: "1.1875rem", fontStyle: "normal" }}
                className="discover-hero-title"
              >
                Featured Venues
              </p>
            </div>

            <div
              style={
                isMobileScreen
                  ? { flexDirection: "column" }
                  : { flexDirection: "row", flexWrap: "wrap" }
              }
              className="discover-content-fotter-list-container"
            >
              {testVenuesDetails[selectedState?.toLowerCase()]?.map(
                (event: any, idx: number) => (
                  <Event
                    idx={idx}
                    name={event?.name}
                    location={event?.location}
                    locationLink={event?.locationLink}
                    category={event?.category}
                    eventPathType={event?.eventPathType}
                    isFeatured={true}
                    date={event?.date}
                    picture={event?.picture}
                  />
                ),
              )}
            </div>
          </div>

          <div
            style={
              isMobileScreen
                ? { flexDirection: "column" }
                : { flexDirection: "row", flexWrap: "wrap" }
            }
            className="discover-content-fotter-list-container"
          >
            <DiscoverFooterAction
              iconElement={
                <CalendarPlus
                  style={{ width: "24px", height: "24px", color: "#a855f7" }}
                />
              }
              headerText="Submit Event"
              descriptionText="Get your event featured on Locamotiv"
              redirectionPath="/events"
            />

            <DiscoverFooterAction
              iconElement={
                <MapPin
                  style={{ width: "24px", height: "24px", color: "#a855f7" }}
                />
              }
              headerText="List Your Venue"
              descriptionText="Restaurants, clubs & lounges welcome"
              redirectionPath="/venues"
            />

            <DiscoverFooterAction
              iconElement={
                <Image
                  style={{ width: "24px", height: "24px", color: "#a855f7" }}
                />
              }
              headerText="Share Your Moment"
              descriptionText="Photos & videos from your night out"
              redirectionPath="/moments"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
