/* eslint-disable @typescript-eslint/no-explicit-any */
import useGeneralStore from "../store/general";
import { CalendarClockIcon, ExternalLink, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Event = (props: {
  idx?: number;
  eventPathType?: string;
  category: string;
  isFeatured: boolean;
  picture: any;
  name: string;
  location: string;
  locationLink?: string;
  date: string;
}) => {
  const { isTabScreen, isMobileScreen } = useGeneralStore();
  const navigate = useNavigate();

  return (
    <div
      key={
        props.idx !== undefined
          ? `featured-event-${props.idx}`
          : `featured-event`
      }
      style={
        isMobileScreen
          ? { minWidth: "88%", maxWidth: "88%" }
          : isTabScreen
            ? { minWidth: "43%", maxWidth: "43%" }
            : { minWidth: "29.3%", maxWidth: "29.3%" }
      }
      className="discover-content-fotter-list-content"
      //   onClick={() => {
      //     navigate(
      //       props?.eventPathType
      //         ? `/discover/${props?.eventPathType?.toLowerCase()}/${props?.idx}`
      //         : `/discover/events/${props?.idx}`,
      //     );
      //   }}
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
        <p style={{ display: "flex" }} className="page-text-badge-distance">
          {props.category}
        </p>
        {props.isFeatured && <p className="page-text-badge">⭐ Featured</p>}
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
          src={props?.picture}
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
          {props.name}
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
                if (props?.locationLink) {
                  window.open(
                    props?.locationLink,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }
              }}
              className="discover-major-event-text"
            >
              {props?.location}
            </p>
            <ExternalLink
              onClick={() => {
                if (props?.locationLink) {
                  window.open(
                    props?.locationLink,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }
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
            <p className="discover-major-event-text">{props?.date}</p>
          </div>
        </div>

        <div
          onClick={() => {
            navigate(
              props?.eventPathType
                ? `/discover/${props?.eventPathType?.toLowerCase()}/${props?.idx}`
                : `/discover/events/${props?.idx}`,
            );
          }}
          className="discover-content-fotter-list-button"
        >
          View Details
        </div>
      </div>
    </div>
  );
};

export default Event;
