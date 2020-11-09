import { tooltipStyle } from "../styles/defaultTheme";

export const combineStyles = (customStyle, defaultTheme) => {
  return customStyle ? { ...defaultTheme, ...customStyle } : defaultTheme;
};

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const barchartValueIsValid = (number, min, max) =>
  number > min && number < max;

export const checkPercentagesSizeColorTooltip = ( percentages, percentSizeName, percentColorName ) =>
  percentages.map((e) => {
    const percentSize =
      e[percentSizeName] || e[percentSizeName] === 0
        ? e[percentSizeName]
        : 100 / percentages.length;

    const percentColor = e[percentColorName]
      ? e[percentColorName]
      : getRandomColor();

    const tooltipStyleWithText = e.hasOwnProperty(tooltipStyle)
      ? e.tooltipStyle
      : { ...tooltipStyle,
        text: `Percent: ${parseFloat(percentSize).toFixed(0)}%`,
      };

    return {
      ...e,
      [percentSizeName]: percentSize,
      [percentColorName]: percentColor,
      tooltipStyle: tooltipStyleWithText,
    };
  });

export const checkVariable = (variable, ifTrueVariable, ifFalseVariable = "") =>
  variable ? ifTrueVariable : ifFalseVariable;

export const checkProperty = (obj, propertyString, withoutProperty) =>
  (obj && obj.hasOwnProperty(propertyString)) ?
    obj[propertyString] :
    withoutProperty

export const getMarginToCutVerticalBarchart = (percentages, percentSizeName, barchartWidth) => {
  let maxPercent=percentages[0][percentSizeName];
  percentages.forEach(percentObj=>{
    maxPercent=percentObj[percentSizeName]>maxPercent?
      percentObj[percentSizeName]
      :maxPercent;
  })
  const barchartWidthNumber=Number(barchartWidth.match(/\d+/));
  const percentInPxNumber=maxPercent/100*barchartWidthNumber;
  return ((-1)*(barchartWidthNumber-percentInPxNumber)/2)+"px";
}