export const wrapperDefaultStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
  width: "99.8vw",
  height: "99.7vh",
  color: "gray",
  border: "0.1rem dotted rgb(86, 105, 80)",
  backgroundColor: "rgba(136, 255, 100,0.3)",
  overflow: "auto",
  cursor: "default",
  scrollbarWidth: "1rem",
  scrollbarTrack: {
    webkitBoxShadow: "inset 0 0 0.1rem rgb(136, 255, 100)"
  },
  scrollbarThumb: {
    borderRadius: "1rem",
    backgroundImage: "linear-gradient(transparent,rgb(136, 255, 100) 50%,transparent)"
  }
};
