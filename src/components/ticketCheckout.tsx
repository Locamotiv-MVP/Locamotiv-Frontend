import React, { useState } from "react";
import { Check, LockKeyholeIcon, Minus, Plus, TicketCheck } from "lucide-react";

const TicketCheckout = () => {
  //   const { isTabScreen, isMobileScreen } = useGeneralStore();
  const [eventTicketDate, setEventTicketDate] = useState("0");
  const [eventTicketNumber, setEventTicketNumber] = useState("0");

  return (
    <React.Fragment>
      <div className="event-details-page-second-section-header">
        <p className="event-details-page-second-section-header-title">
          Select Date
        </p>

        <div className="event-details-page-second-section-header-body">
          <div
            onClick={() => {
              setEventTicketDate("0");
              setEventTicketNumber("0");
            }}
            className={
              eventTicketDate === "0"
                ? "event-details-page-second-section-header-body-content-active"
                : "event-details-page-second-section-header-body-content"
            }
          >
            <p
              className={
                eventTicketDate === "0"
                  ? "event-details-page-second-section-header-text-header-active"
                  : "event-details-page-second-section-header-text-header"
              }
            >
              Aug
            </p>
            <p className="event-details-page-second-section-header-text-footer">
              30 - Sat
            </p>

            {/* <p
                      className={
                        eventTicketDate === "0"
                          ? "event-details-page-second-section-header-text-header-active"
                          : "event-details-page-second-section-header-text-header"
                      }
                    >
                      Sat
                    </p> */}
          </div>

          <div
            onClick={() => {
              setEventTicketDate("1");
              setEventTicketNumber("0");
            }}
            className={
              eventTicketDate === "1"
                ? "event-details-page-second-section-header-body-content-active"
                : "event-details-page-second-section-header-body-content"
            }
          >
            <p
              className={
                eventTicketDate === "1"
                  ? "event-details-page-second-section-header-text-header-active"
                  : "event-details-page-second-section-header-text-header"
              }
            >
              Aug
            </p>
            <p className="event-details-page-second-section-header-text-footer">
              31 - Sun
            </p>
            {/* <p
                      className={
                        eventTicketDate === "1"
                          ? "event-details-page-second-section-header-text-header-active"
                          : "event-details-page-second-section-header-text-header"
                      }
                    >
                      Sun
                    </p> */}
          </div>
        </div>
      </div>

      <div className="event-details-page-second-section-header-line"></div>

      <div className="event-details-page-second-section-header">
        <p className="event-details-page-second-section-header-title">
          Select Tickets
        </p>

        <div className="event-details-page-second-section-header-body">
          <div
            style={{
              border: "1px solid rgba(56, 227, 73, 0.2)",
            }}
            className="event-details-page-second-section-header-body-content-custom"
          >
            <div className="event-details-page-second-section-header-body-content-container">
              <div className="event-details-page-second-section-header-body-content-text-container">
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  General Admission
                </p>
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    fontSize: "0.75rem",
                    userSelect: "none",
                  }}
                  className="discover-major-event-text"
                >
                  Entry access to the event
                </p>
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "#38e3499e",
                    fontSize: "0.70rem",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  Remaining: 10K
                </p>
              </div>

              <div className="event-details-page-second-section-header-body-content-action-container">
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "#a855f7",
                    textAlign: "end",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  ₦25,000. 25
                </p>

                <div className="event-details-page-second-section-header-body-content-action-buttons">
                  <div
                    style={{
                      position: "absolute",
                      left: "-12px",
                      top: "-0.01px",
                    }}
                    onClick={() => {
                      if (Number(eventTicketNumber) > 0) {
                        setEventTicketNumber(
                          (Number(eventTicketNumber) - 1)?.toString(),
                        );
                      }
                    }}
                    className={
                      Number(eventTicketNumber) > 0
                        ? "discover-hero-location-current-icon"
                        : "discover-hero-location-current-icon-custom"
                    }
                  >
                    <Minus
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "20px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      maxWidth: "40px",

                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                    className="event-details-page-second-section-header-title"
                  >
                    {eventTicketNumber}
                  </p>

                  <div
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "-0.01px",
                    }}
                    onClick={() => {
                      setEventTicketNumber(
                        (Number(eventTicketNumber) + 1)?.toString(),
                      );
                    }}
                    className="discover-hero-location-current-icon-custom-active"
                  >
                    <Plus
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="event-details-page-second-section-header-body-content-custom"
            style={{
              border: "1px solid rgba(245, 34, 34, 0.2)",
            }}
          >
            <div className="event-details-page-second-section-header-body-content-container">
              <div className="event-details-page-second-section-header-body-content-text-container">
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  VIP
                </p>
                <p
                  style={{
                    width: "95%",
                    wordWrap: "break-word",
                    fontSize: "0.75rem",
                    userSelect: "none",
                  }}
                  className="discover-major-event-text"
                >
                  VIP access to the event
                </p>
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    fontSize: "0.65rem",
                    userSelect: "none",
                  }}
                  className="discover-major-event-text"
                >
                  <Check size={12} color="#a855f7" /> Exclusive VIP Lounge
                  Access
                </p>
                {/* <p
                          style={{
                            width: "100%",
                            wordWrap: "break-word",
                            fontSize: "0.65rem",
                            userSelect: "none",
                          }}
                          className="discover-major-event-text"
                        >
                          <Check size={12} color="#a855f7" /> Premium
                          Refreshments Included
                        </p> */}
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    fontSize: "0.65rem",
                    userSelect: "none",
                  }}
                  className="discover-major-event-text"
                >
                  <Check size={12} color="#a855f7" /> Meet & Greet with Artists
                </p>
                {/* <p
                          style={{
                            width: "100%",
                            wordWrap: "break-word",
                            fontSize: "0.65rem",
                            userSelect: "none",
                          }}
                          className="discover-major-event-text"
                        >
                          <Check size={12} color="#a855f7" /> VIP Gift Package
                        </p> */}
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    fontSize: "0.65rem",
                    userSelect: "none",
                  }}
                  className="discover-major-event-text"
                >
                  <Check size={12} color="#a855f7" /> Front-Row Viewing
                  Experience
                </p>

                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "#f5222290",
                    fontSize: "0.70rem",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  Sold Out
                </p>
              </div>

              <div className="event-details-page-second-section-header-body-content-action-container">
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    color: "#a855f7",
                    textAlign: "end",
                  }}
                  className="event-details-page-second-section-header-title"
                >
                  ₦75,000. 00
                </p>

                <div className="event-details-page-second-section-header-body-content-action-buttons">
                  <div
                    style={{
                      position: "absolute",
                      left: "-12px",
                      top: "-0.01px",
                    }}
                    className="discover-hero-location-current-icon-custom"
                  >
                    <Minus
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "20px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      maxWidth: "40px",

                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                    className="event-details-page-second-section-header-title"
                  >
                    0
                  </p>

                  <div
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "-0.01px",
                    }}
                    className="discover-hero-location-current-icon-custom"
                  >
                    <Plus
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-details-page-second-section-header-line"></div>

      <div className="event-details-page-second-section-header-body">
        <div className="event-details-page-second-section-header-body-content-custom">
          <div className="event-details-page-second-section-header-ticket-total">
            <p
              style={{
                width: "90%",
                wordWrap: "break-word",
                color: "rgba(255, 255, 255, 0.8)",

                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem",
              }}
              className="event-details-page-second-section-header-title"
            >
              {eventTicketNumber}{" "}
              {Number(eventTicketNumber) <= 1 ? "Ticket" : "Tickets"} Selected
            </p>
          </div>
          <div className="event-details-page-second-section-header-line"></div>

          <div className="event-details-page-second-section-header-ticket-total">
            <p
              style={{
                wordWrap: "break-word",
                color: "rgba(255, 255, 255, 0.8)",
              }}
              className="event-details-page-second-section-header-title"
            >
              Total
            </p>

            <p
              style={{
                color: "#995ad3",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                maxWidth: "70%",
              }}
              className="discover-major-event-text"
            >
              ₦
              {(Number(eventTicketNumber) * 25000.25).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, #663cad 0%, #762eba 50%, #9a396a 100%)",
              boxShadow:
                "0 8px 30px rgba(147, 51, 234, 0.35), 0 0 20px rgba(236, 72, 153, 0.15)",

              transition: "all 0.2s ease",
            }}
            className="discover-content-fotter-list-button-checkout"
          >
            Checkout <TicketCheck style={{ marginLeft: "8px" }} size={16} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <LockKeyholeIcon
              size={14}
              style={{
                color: "rgba(255,255,255,0.6)",
              }}
            />

            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem",
                userSelect: "none",
              }}
            >
              Secure Checkout
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TicketCheckout;
