const Seperator = (props: {
  seperatorText?: string;
  seperatorColor?: string;
  seperatorOpacity?: string;
}) => {
  return (
    <div
      style={
        props?.seperatorColor
          ? {
              background: props?.seperatorColor,
              opacity: props?.seperatorOpacity
                ? Number(props?.seperatorOpacity)
                : 1,
            }
          : {
              opacity: props?.seperatorOpacity
                ? Number(props?.seperatorOpacity)
                : 1,
            }
      }
      className="discover-hero-location-seperator"
    >
      <div className="discover-hero-location-seperator-line"></div>
      <p
        style={props?.seperatorColor ? { color: props?.seperatorColor } : {}}
        className="discover-hero-location-seperator-text"
      >
        {props?.seperatorText || "OR"}
      </p>
      <div
        style={
          props?.seperatorColor ? { background: props?.seperatorColor } : {}
        }
        className="discover-hero-location-seperator-line"
      ></div>
    </div>
  );
};

export default Seperator;
