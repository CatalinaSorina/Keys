export const combineStyle = (style, defaultStyle) =>
  typeof style === "object" ? { ...defaultStyle, ...style } : defaultStyle;
