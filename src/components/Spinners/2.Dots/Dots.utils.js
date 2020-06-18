// @flow
export const checkColorsIndex = (colors:Array<string> | string, index: number):string => {
  if (Array.isArray(colors)) {
    switch (index) {
      case 0:
        return colors[0] ? colors[0] : 'white';
      case 1:
        return colors[1] ? colors[1] : 'rgba(255,255,255,0.8)';
      case 2:
        return colors[2] ? colors[2] : 'rgba(255,255,255,0.5)';
      default:
        return 'white';
    }
  } else if (typeof colors === 'string') {
    return colors;
  }
  return 'white';
};