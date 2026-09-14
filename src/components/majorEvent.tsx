import useGeneralStore from "../store/general";
import GoogleMapsIcon from "../assets/icons8-google-maps-32.png";
import UberIcon from "../assets/uber-icon.png";
import BoltIcon from "../assets/bolt-icon.webp";
import {
  CalendarClockIcon,
  CarFront,
  ExternalLink,
  MapPin,
} from "lucide-react";
import MajorEventImage1 from "../assets/major-event-1.avif";

const MajorEvent = () => {
  const { isLargeScreen, isTabScreen, isMobileScreen } = useGeneralStore();

  return (
    <div
      style={
        isMobileScreen ? { width: "90%" } : isTabScreen ? { width: "95%" } : {}
      }
      className="discover-content"
    >
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
            <p style={{ display: "flex" }} className="page-text-badge-distance">
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
            <div className="discover-major-event-button">🎫 Buy Ticket</div>
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
              <div
                style={
                  !isLargeScreen
                    ? { justifyContent: "flex-start", gap: "10px" }
                    : {}
                }
                className="discover-content-last-section-footer-content"
              >
                {isLargeScreen && (
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
                )}
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
  );
};

export default MajorEvent;
