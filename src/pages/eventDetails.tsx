import {
  ArrowLeft,
  CalendarClockIcon,
  Dot,
  ExternalLink,
  Globe,
  MailCheckIcon,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";
import MajorEventImage1 from "../assets/major-event-1.avif";
import GoogleMapsIcon from "../assets/icons8-google-maps-32.png";
import UberIcon from "../assets/uber-icon.png";
import BoltIcon from "../assets/bolt-icon.webp";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventView1 from "../assets/event-view-1.jpg";
import EventView2 from "../assets/event-view2.jpg";
import EventView3 from "../assets/event-view-3.jpg";
import EventView4 from "../assets/restaurant-view-1.jpg";
import FoodGallery1 from "../assets/food-gallery.avif";
import FoodGallery2 from "../assets/food-gallery-1.avif";
import FoodGallery3 from "../assets/food-gallery-2.avif";
import useGeneralStore from "../store/general";
import TicketCheckout from "../components/ticketCheckout";
import {
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiX,
} from "@icons-pack/react-simple-icons";

const EventDetails = () => {
  const { isLargeScreen, isTabScreen, isMobileScreen } = useGeneralStore();
  const [eventDetails, setEventDetails] = useState(
    isMobileScreen ? "tickets" : "overview",
  );

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        onClick={() => navigate("/discover")}
        style={isMobileScreen ? { top: "80px" } : {}}
        className="event-details-page-header-button"
      >
        <ArrowLeft height="16px" width="16px" color="rgb(255 255 255 / 0.6)" />
        <p className="event-details-page-header-button-text">Back</p>
      </div>
      <div
        style={
          isMobileScreen
            ? {
                width: "unset",
                marginTop: "40px",
                padding: "15px",
                paddingBottom: "0",
              }
            : { width: "unset", marginTop: "40px" }
        }
        className="event-details-page-container"
      >
        <div
          style={
            isLargeScreen
              ? { width: "80%" }
              : isTabScreen
                ? { width: "90%" }
                : { width: "100%" }
          }
          className="event-details-page-container-wrapper"
        >
          <div className="event-details-page-content">
            <img
              className="event-details-page-content-image"
              src={MajorEventImage1}
              alt="Event/Venue Image"
            />
            <div className="event-details-page-content-text-container">
              <p
                style={{ display: "flex", background: "rgb(147 51 234)" }}
                className="page-text-badge-distance"
              >
                Nightlife
              </p>
              <p
                style={{
                  color: "rgb(255 255 255)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  maxWidth: isMobileScreen ? "95%" : "70%",
                }}
                className="discover-major-event-text"
              >
                Sippa Social
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  alignItems: "center",
                  maxWidth: isMobileScreen ? "95%" : "50%",
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
                  maxWidth: isMobileScreen ? "95%" : "50%",
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
          </div>

          <div className="event-details-page-footer">
            <div
              style={isMobileScreen ? { width: "100%" } : { maxWidth: "43%" }}
              className="event-details-page-first-section"
            >
              <div
                style={{ overflow: "auto" }}
                className="event-details-page-first-header"
              >
                {isMobileScreen && (
                  <div
                    onClick={() => setEventDetails("tickets")}
                    className={
                      eventDetails === "tickets"
                        ? "event-details-page-first-header-button-active"
                        : "event-details-page-first-header-button"
                    }
                  >
                    Tickets
                  </div>
                )}
                <div
                  onClick={() => setEventDetails("overview")}
                  className={
                    eventDetails === "overview"
                      ? "event-details-page-first-header-button-active"
                      : "event-details-page-first-header-button"
                  }
                >
                  Overview
                </div>

                <div
                  className={
                    eventDetails === "menu"
                      ? "event-details-page-first-header-button-active"
                      : "event-details-page-first-header-button"
                  }
                  onClick={() => setEventDetails("menu")}
                >
                  Menu
                </div>

                <div
                  className={
                    eventDetails === "gallery"
                      ? "event-details-page-first-header-button-active"
                      : "event-details-page-first-header-button"
                  }
                  onClick={() => setEventDetails("gallery")}
                >
                  Gallery
                </div>

                <div
                  className={
                    eventDetails === "contact"
                      ? "event-details-page-first-header-button-active"
                      : "event-details-page-first-header-button"
                  }
                  onClick={() => setEventDetails("contact")}
                >
                  Contact
                </div>
              </div>
              <div className="event-details-page-first-body">
                {isMobileScreen && eventDetails === "tickets" && (
                  <TicketCheckout />
                )}

                {eventDetails === "overview" && (
                  <React.Fragment>
                    <div
                      style={{ minHeight: "25%", maxHeight: "25%" }}
                      className="discover-content-last-section-header"
                    >
                      <iframe
                        src="https://www.google.com/maps?q=Landmark+Beach,+Lagos&output=embed"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        frameBorder="0"
                        className="discover-content-last-section-header-frame"
                      ></iframe>
                    </div>
                    <div className="discover-content-last-section-footer-direction">
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        About the Event
                      </p>
                      <div className="event-details-page-first-body-event-text-container">
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          Get ready for an unforgettable experience at The
                          Ultimate Lifestyle & Entertainment Festival. A vibrant
                          celebration bringing together music, entertainment,
                          food, culture, and networking in one exciting
                          destination.
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          Enjoy live performances from talented artists,
                          discover unique experiences, connect with like-minded
                          people, and explore a carefully curated selection of
                          food, drinks, and entertainment throughout the day.
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          Whether you're coming with friends, meeting new
                          people, or simply looking to enjoy a premium night
                          out, this event promises great energy, memorable
                          moments, and an experience you won't want to miss.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        What to Expect
                      </p>
                      <div className="event-details-page-first-body-event-text-container">
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          Live music and entertainment
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          Exclusive performances
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          Food and drinks
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          Networking opportunities
                        </p>
                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          VIP experiences
                        </p>

                        <p
                          style={{ fontWeight: 400 }}
                          className="event-details-page-second-section-header-title-event-text"
                        >
                          <Dot
                            style={{
                              marginRight: "4px",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          Photo-worthy moments
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                )}
                {eventDetails === "menu" && (
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Drinks
                      </p>
                      <div
                        style={{ gap: "25px" }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Signature Cocktail
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Cocktail lightly infused with white rum, fresh
                              lime juice, and a splash of ginger beer.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦5,000
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Signature Mocktail
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Mocktail lightly infused with white rum, fresh
                              lime juice, and a splash of ginger beer.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦8,500
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Chapman
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              The classic Nigerian mocktail blend of Fanta,
                              Sprite, Angostura bitters, and blackcurrant
                              cordial, garnished with cucumber slices and mint.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦2,500
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Zobo
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              A refreshing, dark crimson chilled beverage brewed
                              from dried roselle leaves, sweetened with fresh
                              pineapple juice, ginger, and cloves.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦2,800
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Food
                      </p>
                      <div
                        style={{ gap: "25px" }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Party Jollof Rice
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Smoky, rich, firewood-style parboiled rice cooked
                              in a savory tomato and pepper base. Served with
                              fried plantain (dodo), moin moin, and a choice of
                              grilled chicken or beef.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦7,500
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Efo Riro & Pounded Yam
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Rich, textured Yoruba spinach stew cooked in a
                              bleached palm oil base with iru (locust beans),
                              stockfish, ponmo, and assorted meats. Served with
                              smooth, fluffy pounded yam.
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦8,500
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid rgb(255 255 255 / 0.1)",
                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 400,
                                width: "100%",
                                wordWrap: "break-word",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Seafood Okro & Eba
                            </p>
                            <p
                              style={{
                                fontWeight: 250,
                                fontSize: "0.555rem",
                                width: "95%",
                                wordWrap: "break-word",
                                color:
                                  "rgb(255 255 255 / var(--tw-text-opacity, 0.5))",
                              }}
                              className="event-details-page-second-section-header-title-event-text"
                            >
                              Thick, glossy chopped okra stew loaded with fresh
                              tiger prawns, crabs, calamari, and fresh fish.
                              Served with yellow garri (eba).{" "}
                            </p>
                          </div>
                          <p
                            style={{
                              fontWeight: 700,
                              color:
                                "rgb(216 180 254 / var(--tw-text-opacity, 1))",
                            }}
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            ₦2,500
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
                {eventDetails === "gallery" && (
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Front View
                      </p>
                      <div
                        style={{
                          gap: "15px",
                          flexDirection: "row",
                          flexFlow: "wrap",
                        }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={EventView1}
                          alt="gallery picture"
                        />
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={EventView2}
                          alt="gallery picture"
                        />
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={EventView3}
                          alt="gallery picture"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Others
                      </p>
                      <div
                        style={{
                          gap: "15px",
                          flexDirection: "row",
                          flexFlow: "wrap",
                        }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={EventView4}
                          alt="gallery picture"
                        />
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={FoodGallery1}
                          alt="gallery picture"
                        />
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={FoodGallery2}
                          alt="gallery picture"
                        />
                        <img
                          style={{ maxHeight: "160px", maxWidth: "45%" }}
                          src={FoodGallery3}
                          alt="gallery picture"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                )}
                {eventDetails === "contact" && (
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Numbers
                      </p>
                      <div
                        style={{ gap: "25px" }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <PhoneCallIcon
                            height={25}
                            width={25}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              (window.location.href = "tel:+234992346765")
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            +234 99 234 6765
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Socials
                      </p>
                      <div
                        style={{ gap: "25px" }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <SiWhatsapp
                            size={20}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://wa.me234992346765",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            +234 99 234 6765
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <SiInstagram
                            size={20}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://instagram.com",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            Sippa_Events
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <SiX
                            size={20}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://x.com",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            Sippa_Events
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <SiTiktok
                            size={20}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://tiktok.com",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            Sippa_Events
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <MailCheckIcon
                            height={25}
                            width={25}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              (window.location.href =
                                "mailto:event-sippa@gmail.com")
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            event-sippa@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        marginBottom: "15px",
                      }}
                    >
                      <p className="event-details-page-second-section-header-title-event-title">
                        Website
                      </p>
                      <div
                        style={{ gap: "25px" }}
                        className="event-details-page-first-body-event-text-container"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "100%",
                            border: "none",

                            alignItems: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          <Globe
                            height={25}
                            width={25}
                            color="rgb(216 180 254 / var(--tw-text-opacity, 1))"
                          />
                          <p
                            style={{
                              fontWeight: 400,
                              width: "100%",
                              wordWrap: "break-word",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              window.open(
                                "https://sippaevents.com",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="event-details-page-second-section-header-title-event-text"
                          >
                            Sippaevents.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>

            {!isMobileScreen && (
              <div
                style={{ maxHeight: "fit-content", minWidth: "50%" }}
                className="event-details-page-second-section"
              >
                <TicketCheckout />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventDetails;
