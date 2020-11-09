export const PERCENT_TEXT = {
  CENTER: "center",
  NEAR: "near",
};

export const barchartWrapperDefaultStyle = (vertical = false, cutMargin) => ({
  width: "150px",
  height: vertical ? "100%" : "21px",
  flexDirection: vertical ? "column" : "row",
  alignItems: vertical ? "center" : "",
  marginRight: vertical && cutMargin ? cutMargin : "",
  marginLeft: vertical && cutMargin ? cutMargin : "",
  marginTop: "none",
  marginBottom: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "2px",
  cursor: "default",
});

export const barchartPercentDefaultStyle = (vertical = false) => ({
  width: vertical ? "100%" : "",
  textShadow: "0 0.5px black",
  borderRight: vertical ? "" : "1px dotted gray",
  borderBottom: vertical ? "1px dotted gray" : "",
  borderLeft: "none",
  borderTop: "none",
  marginRight: vertical ? "none" : "5px",
  marginBottom: vertical ? "3px" : "none",
  borderRadius: "0",
  fontSize: "12px",
  fontWeight: "normal",
  percentText: PERCENT_TEXT.CENTER,
  skipValue: -1,
  minValue: 1,
  maxValue: 101,
  lowSize: 5,
});

export const tooltipStyle = {
  width: "100px",
  backgroundColor: "#B6D8FF",
  borderColor: "transparent",
  contentWrapper: {
    color: "white",
  },
};