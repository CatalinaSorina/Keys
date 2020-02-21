export const combineStyle = (style, defaultStyle) =>
  typeof style === "object" ? { ...defaultStyle, ...style } : defaultStyle;


export const removeKeysFromStyle = (style, defaultStyle) => {
  let styleFiltered = {};
  for (let key in style) {
    styleFiltered = defaultStyle[key] ?
      styleFiltered
      : { ...styleFiltered, [key]: style[key] };
  }
  return styleFiltered;
};