import { Compass, CalendarPlus, Image, MapPin } from "lucide-react";

const Footer = () => {
  const currentPage = window.location.pathname;

  return (
    <div className="footer">
      <div className="footer-buttons-container">
        <div
          className="footer-button"
          onClick={() => {
            window.location.href = "/discover";
          }}
        >
          <Compass
            className={
              currentPage === "/" ||
              currentPage === "/discover" ||
              currentPage === ""
                ? "footer-button-icon-active"
                : "footer-button-icon"
            }
          />
          <p
            className={
              currentPage === "/" ||
              currentPage === "/discover" ||
              currentPage === ""
                ? "footer-button-text-active"
                : "footer-button-text"
            }
          >
            Discover
          </p>
        </div>

        <div
          className="footer-button"
          onClick={() => {
            window.location.href = "/events";
          }}
        >
          <CalendarPlus
            className={
              currentPage === "/events"
                ? "footer-button-icon-active"
                : "footer-button-icon"
            }
          />
          <p
            className={
              currentPage === "/events"
                ? "footer-button-text-active"
                : "footer-button-text"
            }
          >
            Events
          </p>
        </div>

        <div
          className="footer-button"
          onClick={() => {
            window.location.href = "/moments";
          }}
        >
          <Image
            className={
              currentPage === "/moments"
                ? "footer-button-icon-active"
                : "footer-button-icon"
            }
          />
          <p
            className={
              currentPage === "/moments"
                ? "footer-button-text-active"
                : "footer-button-text"
            }
          >
            Moments
          </p>
        </div>

        <div
          className="footer-button"
          onClick={() => {
            window.location.href = "/venues";
          }}
        >
          <MapPin
            className={
              currentPage === "/venues"
                ? "footer-button-icon-active"
                : "footer-button-icon"
            }
          />
          <p
            className={
              currentPage === "/venues"
                ? "footer-button-text-active"
                : "footer-button-text"
            }
          >
            Venues
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
