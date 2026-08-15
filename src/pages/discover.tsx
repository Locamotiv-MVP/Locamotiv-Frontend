/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from "../components/hero";
import MajorEventImage1 from "../assets/major-event-1.avif";
import GoogleMapsIcon from "../assets/icons8-google-maps-32.png";
import UberIcon from "../assets/uber-icon.png";
import BoltIcon from "../assets/bolt-icon.webp";
import {
  CalendarClockIcon,
  CalendarPlus,
  CarFront,
  ExternalLink,
  Image,
  MapPin,
} from "lucide-react";
import useGeneralStore from "../store/general";
import React, { useEffect, useRef, useState } from "react";
import { featuredCategories } from "../utils/constants";

const Discover = () => {
  const {
    isLargeScreen,
    isTabScreen,
    isMobileScreen,
    showFeaturedList,
    setGeneralStore,
  } = useGeneralStore();
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
          <div className="discover-content">
            <div className="discover-content-group">
              <div className="discover-content-first-section">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyContent: isLargeScreen ? "unset" : "space-between",
                  }}
                >
                  <p className="page-text-badge">🔥 This Friday</p>
                  <p
                    style={{ display: "flex" }}
                    className="page-text-badge-distance"
                  >
                    <CarFront style={{ width: "15px", height: "15px" }} />
                    {"  "} 2.4km (35min drive)
                  </p>
                </div>
                <p className="discover-major-event-title">
                  Nothing Bad Happens on a Friday
                </p>
                {isLargeScreen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "3px",
                      alignItems: "center",
                    }}
                  >
                    <CalendarClockIcon
                      style={{ width: "15px", height: "15px" }}
                      className="header-button-premium-icon"
                    />
                    {"  "}
                    <p className="discover-major-event-text">
                      June 26, 2026 - 10:45 pm.
                    </p>
                    <MapPin
                      style={{ width: "15px", height: "15px" }}
                      className="header-button-premium-icon"
                    />
                    {"  "}
                    <p
                      style={{ color: "rgb(216 180 254)", cursor: "pointer" }}
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="discover-major-event-text"
                    >
                      Landmark Beach, Victoria Island, Lagos
                    </p>
                    <ExternalLink
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      style={{
                        width: "15px",
                        height: "15px",
                        cursor: "pointer",
                      }}
                      className="header-button-premium-icon"
                    />
                  </div>
                )}

                {!isLargeScreen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "3px",
                        alignItems: "center",
                      }}
                    >
                      <CalendarClockIcon
                        style={{ width: "15px", height: "15px" }}
                        className="header-button-premium-icon"
                      />
                      {"  "}
                      <p className="discover-major-event-text">
                        June 26, 2026 - 10:45 pm.
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "3px",
                        alignItems: "center",
                      }}
                    >
                      <MapPin
                        style={{ width: "15px", height: "15px" }}
                        className="header-button-premium-icon"
                      />
                      {"  "}
                      <p
                        style={{ color: "rgb(216 180 254)", cursor: "pointer" }}
                        onClick={() => {
                          window.open(
                            "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }}
                        className="discover-major-event-text"
                      >
                        Landmark Beach, Victoria Island, Lagos
                      </p>
                      <ExternalLink
                        onClick={() => {
                          window.open(
                            "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }}
                        style={{
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                        className="header-button-premium-icon"
                      />
                    </div>
                  </div>
                )}
                <p className="discover-major-event-text">
                  The hottest Friday night of the season. Don't miss out.
                </p>
                {isLargeScreen && (
                  <div className="discover-major-event-button">
                    🎫 Buy Ticket
                  </div>
                )}
              </div>

              <div
                style={isTabScreen ? { width: "100%" } : {}}
                className="discover-content-second-section-container"
              >
                <div className="discover-content-second-section">
                  <img
                    className="discover-content-second-section-image"
                    src={MajorEventImage1}
                    alt="Event Image"
                  />
                </div>

                <div
                  style={
                    isLargeScreen
                      ? { cursor: "pointer" }
                      : { width: "10rem", cursor: "none" }
                  }
                  className="discover-content-last-section"
                >
                  <div className="discover-content-last-section-header">
                    <iframe
                      src="https://www.google.com/maps?q=Landmark+Beach,+Lagos&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      frameBorder="0"
                      className="discover-content-last-section-header-frame"
                    ></iframe>
                  </div>
                  <div className="discover-content-last-section-footer">
                    <p
                      style={{ paddingLeft: "20px", fontSize: "0.6rem" }}
                      className="discover-major-event-text"
                    >
                      Get Directions
                    </p>
                    <div className="discover-content-last-section-footer-content">
                      <div
                        onClick={() => {
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&destination=6.422201,3.445722`,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }}
                        className="discover-content-last-section-footer-title-container"
                      >
                        <div className="discover-content-last-section-footer-body">
                          <div
                            style={{
                              background: "transparent",
                              height: "20px",
                              width: "20px",
                              overflow: "hidden",
                            }}
                            className="discover-hero-location-current-icon"
                          >
                            <img
                              width="120%"
                              height="120%"
                              src={GoogleMapsIcon}
                              alt="Google maps logo"
                            />
                          </div>
                          <p
                            style={{
                              color: "rgb(255 255 255 /0.7)",
                              fontSize: "0.5rem",
                              paddingTop: "5px",
                            }}
                            className="discover-major-event-text"
                          >
                            Google Maps
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          const baseUrl = "https://m.uber.com/ul/";
                          const params = new URLSearchParams({
                            action: "setPickup",
                            pickup: "my_location",
                            "dropoff[latitude]": "6.422201",
                            "dropoff[longitude]": "3.445722",
                            "dropoff[nickname]": "Landmark Beach",
                          });

                          const url = `${baseUrl}?${params.toString()}`;

                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                        className="discover-content-last-section-footer-title-container"
                      >
                        <div className="discover-content-last-section-footer-body">
                          <div
                            style={{
                              background: "transparent",
                              height: "20px",
                              width: "20px",
                              overflow: "hidden",
                            }}
                            className="discover-hero-location-current-icon"
                          >
                            <img
                              width="100%"
                              height="110%"
                              src={UberIcon}
                              alt="Uber logo"
                            />
                          </div>
                          <p
                            style={{
                              color: "rgb(255 255 255  /0.7)",
                              fontSize: "0.5rem",
                              paddingTop: "5px",
                            }}
                            className="discover-major-event-text"
                          >
                            Uber
                          </p>
                        </div>
                      </div>
                      <div className="discover-content-last-section-footer-title-container">
                        <div className="discover-content-last-section-footer-body">
                          <div
                            style={{
                              background: "transparent",
                              height: "18px",
                              width: "18px",
                              overflow: "hidden",
                            }}
                            className="discover-hero-location-current-icon"
                          >
                            <img
                              width="100%"
                              height="100%"
                              src={BoltIcon}
                              alt="Bolt logo"
                            />
                          </div>
                          <p
                            style={{
                              color: "rgb(255 255 255  /0.7)",
                              fontSize: "0.5rem",
                              paddingTop: "5px",
                            }}
                            className="discover-major-event-text"
                          >
                            Bolt
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!isLargeScreen && (
                <div className="discover-major-event-button">🎫 Buy Ticket</div>
              )}
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
              {[1, 2, 3]?.map((_: any, idx: number) => (
                <div
                  key={`featured-event-${idx}`}
                  style={
                    isMobileScreen
                      ? { minWidth: "88%", maxWidth: "88%" }
                      : isTabScreen
                        ? { minWidth: "43%", maxWidth: "43%" }
                        : { minWidth: "29.3%", maxWidth: "29.3%" }
                  }
                  className="discover-content-fotter-list-content"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "space-between",
                      zIndex: 10,
                    }}
                  >
                    <p
                      style={{ display: "flex" }}
                      className="page-text-badge-distance"
                    >
                      Nightlife
                    </p>
                    <p className="page-text-badge">⭐ Featured</p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      borderRadius: "1rem",
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      background: "transparent",
                      maxHeight: "60%",
                      minHeight: "60%",
                      height: "60%",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{ maxHeight: "100%", width: "100%" }}
                      src={MajorEventImage1}
                      alt="Event Image"
                    />
                  </div>

                  <div
                    style={{ top: "63%" }}
                    className="discover-content-fotter-list-text-container"
                  >
                    <p
                      style={{
                        color: "rgb(255 255 255)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem",
                      }}
                      className="discover-major-event-text"
                    >
                      Sippa Social
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <MapPin
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p
                          style={{
                            color: "rgb(216 180 254)",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          className="discover-major-event-text"
                        >
                          Landmark Beach, Victoria Island, Lagos
                        </p>
                        <ExternalLink
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          style={{
                            width: "15px",
                            height: "15px",
                            cursor: "pointer",
                          }}
                          className="header-button-premium-icon"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <CalendarClockIcon
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p className="discover-major-event-text">
                          June 26, 2026 - 10:45 pm.
                        </p>
                      </div>
                    </div>

                    <div className="discover-content-fotter-list-button">
                      View Details
                    </div>
                  </div>
                </div>
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

              {[1, 2, 3]?.map((_: any, idx: number) => (
                <div
                  key={`featured-event-${idx}`}
                  style={
                    isMobileScreen
                      ? { minWidth: "88%", maxWidth: "88%" }
                      : isTabScreen
                        ? { minWidth: "43%", maxWidth: "43%" }
                        : { minWidth: "29.3%", maxWidth: "29.3%" }
                  }
                  className="discover-content-fotter-list-content"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "space-between",
                      zIndex: 10,
                    }}
                  >
                    <p
                      style={{ display: "flex" }}
                      className="page-text-badge-distance"
                    >
                      Nightlife
                    </p>
                    <p className="page-text-badge">⭐ Featured</p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      borderRadius: "1rem",
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      background: "transparent",
                      maxHeight: "60%",
                      minHeight: "60%",
                      height: "60%",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{ maxHeight: "100%", width: "100%" }}
                      src={MajorEventImage1}
                      alt="Event Image"
                    />
                  </div>

                  <div
                    style={{ top: "63%" }}
                    className="discover-content-fotter-list-text-container"
                  >
                    <p
                      style={{
                        color: "rgb(255 255 255)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem",
                      }}
                      className="discover-major-event-text"
                    >
                      Sippa Social
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <MapPin
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p
                          style={{
                            color: "rgb(216 180 254)",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          className="discover-major-event-text"
                        >
                          Landmark Beach, Victoria Island, Lagos
                        </p>
                        <ExternalLink
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          style={{
                            width: "15px",
                            height: "15px",
                            cursor: "pointer",
                          }}
                          className="header-button-premium-icon"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <CalendarClockIcon
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p className="discover-major-event-text">
                          June 26, 2026 - 10:45 pm.
                        </p>
                      </div>
                    </div>

                    <div className="discover-content-fotter-list-button">
                      View Details
                    </div>
                  </div>
                </div>
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
              {[1, 2, 3]?.map((_: any, idx: number) => (
                <div
                  key={`featured-event-${idx}`}
                  style={
                    isMobileScreen
                      ? { minWidth: "88%", maxWidth: "88%" }
                      : isTabScreen
                        ? { minWidth: "43%", maxWidth: "43%" }
                        : { minWidth: "29.3%", maxWidth: "29.3%" }
                  }
                  className="discover-content-fotter-list-content"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "space-between",
                      zIndex: 10,
                    }}
                  >
                    <p
                      style={{ display: "flex" }}
                      className="page-text-badge-distance"
                    >
                      Nightlife
                    </p>
                    <p className="page-text-badge">⭐ Featured</p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      borderRadius: "1rem",
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      background: "transparent",
                      maxHeight: "60%",
                      minHeight: "60%",
                      height: "60%",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{ maxHeight: "100%", width: "100%" }}
                      src={MajorEventImage1}
                      alt="Event Image"
                    />
                  </div>

                  <div
                    style={{ top: "63%" }}
                    className="discover-content-fotter-list-text-container"
                  >
                    <p
                      style={{
                        color: "rgb(255 255 255)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem",
                      }}
                      className="discover-major-event-text"
                    >
                      Sippa Social
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <MapPin
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p
                          style={{
                            color: "rgb(216 180 254)",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          className="discover-major-event-text"
                        >
                          Landmark Beach, Victoria Island, Lagos
                        </p>
                        <ExternalLink
                          onClick={() => {
                            window.open(
                              "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                          style={{
                            width: "15px",
                            height: "15px",
                            cursor: "pointer",
                          }}
                          className="header-button-premium-icon"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <CalendarClockIcon
                          style={{ width: "15px", height: "15px" }}
                          className="header-button-premium-icon"
                        />
                        {"  "}
                        <p className="discover-major-event-text">
                          June 26, 2026 - 10:45 pm.
                        </p>
                      </div>
                    </div>

                    <div className="discover-content-fotter-list-button">
                      View Details
                    </div>
                  </div>
                </div>
              ))}
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
            <div
              style={
                isMobileScreen
                  ? {
                      minWidth: "88%",
                      maxWidth: "88%",
                      height: "fit-content",
                      minHeight: "fit-content",
                      maxHeight: "fit-content",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : isTabScreen
                    ? {
                        minWidth: "43%",
                        maxWidth: "43%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        minWidth: "29.3%",
                        maxWidth: "29.3%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
              }
              className="discover-content-fotter-list-content"
              onClick={() => (window.location.href = "/events")}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgb(147 51 234 / 0.3)",
                    overflow: "hidden",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                  }}
                >
                  <CalendarPlus
                    style={{ width: "24px", height: "24px", color: "#a855f7" }}
                  />
                </div>
              </div>

              <p
                style={{
                  color: "rgb(255 255 255)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: "normal",
                }}
                className="discover-major-event-text"
              >
                Submit Event
              </p>

              <p className="discover-major-event-text">
                Get your event featured on Locamotiv
              </p>
            </div>
            <div
              style={
                isMobileScreen
                  ? {
                      minWidth: "88%",
                      maxWidth: "88%",
                      height: "fit-content",
                      minHeight: "fit-content",
                      maxHeight: "fit-content",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : isTabScreen
                    ? {
                        minWidth: "43%",
                        maxWidth: "43%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        minWidth: "29.3%",
                        maxWidth: "29.3%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
              }
              className="discover-content-fotter-list-content"
              onClick={() => (window.location.href = "/venues")}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgb(147 51 234 / 0.3)",
                    overflow: "hidden",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                  }}
                >
                  <MapPin
                    style={{ width: "24px", height: "24px", color: "#a855f7" }}
                  />
                </div>
              </div>

              <p
                style={{
                  color: "rgb(255 255 255)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: "normal",
                }}
                className="discover-major-event-text"
              >
                List Your Venue
              </p>

              <p className="discover-major-event-text">
                Restaurants, clubs & lounges welcome
              </p>
            </div>
            <div
              style={
                isMobileScreen
                  ? {
                      minWidth: "88%",
                      maxWidth: "88%",
                      height: "fit-content",
                      minHeight: "fit-content",
                      maxHeight: "fit-content",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : isTabScreen
                    ? {
                        minWidth: "43%",
                        maxWidth: "43%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        minWidth: "29.3%",
                        maxWidth: "29.3%",
                        height: "fit-content",
                        minHeight: "fit-content",
                        maxHeight: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                      }
              }
              className="discover-content-fotter-list-content"
              onClick={() => (window.location.href = "/moments")}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgb(147 51 234 / 0.3)",
                    overflow: "hidden",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Image
                    style={{ width: "24px", height: "24px", color: "#a855f7" }}
                  />
                </div>
              </div>

              <p
                style={{
                  color: "rgb(255 255 255)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: "normal",
                }}
                className="discover-major-event-text"
              >
                Share Your Moment
              </p>

              <p className="discover-major-event-text">
                Photos & videos from your night out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
