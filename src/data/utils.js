export const combineStyle = (style, defaultStyle) => (typeof style === 'object' ? { ...defaultStyle, ...style } : defaultStyle);

export const removeKeysFromStyle = (style, defaultStyle) => {
  let styleFiltered = {};
  Object.keys(style).forEach((key) => {
    styleFiltered = defaultStyle[key]
      ? styleFiltered
      : { ...styleFiltered, [key]: style[key] };
  });
  return styleFiltered;
};
