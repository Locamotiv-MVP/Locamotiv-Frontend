/* eslint-disable @typescript-eslint/no-explicit-any */
import useGeneralStore from "../store/general";

const DiscoverFooterAction = (props: {
  redirectionPath?: string;
  headerText?: string;
  descriptionText?: string;
  iconElement?: any;
}) => {
  const { isTabScreen, isMobileScreen } = useGeneralStore();

  return (
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
      onClick={() => {
        if (props.redirectionPath) {
          window.location.href = props.redirectionPath;
        }
      }}
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
          {props.iconElement ? props.iconElement : null}
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
        {props.headerText || ""}
      </p>

      <p className="discover-major-event-text">{props.descriptionText || ""}</p>
    </div>
  );
};

export default DiscoverFooterAction;
