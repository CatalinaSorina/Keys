import React from "react";
import PropTypes from "prop-types";
import BarchartPercent from "./components/BarchartPercent";
import { barchartWrapperDefaultStyle, barchartPercentDefaultStyle } from "./styles/defaultTheme";
import { combineStyles, barchartValueIsValid, checkPercentagesSizeColorTooltip, checkProperty, getMarginToCutVerticalBarchart } from "./utils/utils";
import { BarchartWrapper } from "./styles/Barchart.styles";

const Barchart = ({ barchartWrapperStyle, barchartPercentStyle, percentages, percentSizeName, percentColorName, percentTextColorName, vertical, withTooltip, cutMarginByMaxPercent }) => {
    const barchartWidth = checkProperty(barchartWrapperStyle,"width","150px");
    const cutMargin = cutMarginByMaxPercent && getMarginToCutVerticalBarchart(percentages,percentSizeName,barchartWidth);
    const finalBarchartWrapperStyle = combineStyles(barchartWrapperStyle, barchartWrapperDefaultStyle(vertical,cutMargin));
    const finalBarchartPercentStyle = combineStyles(barchartPercentStyle, barchartPercentDefaultStyle(vertical));
    const checkedElements = checkPercentagesSizeColorTooltip(percentages, percentSizeName, percentColorName);
    const { minValue, maxValue } = finalBarchartPercentStyle;

    return (
        <BarchartWrapper barchartWrapperStyle={finalBarchartWrapperStyle}>
            {checkedElements.map((percent, index) => 
                barchartValueIsValid(percent[percentSizeName], minValue, maxValue) && 
                <BarchartPercent
                    key={`${index}Percent`}
                    percentSize={percent[percentSizeName]}
                    backgroundColor={percent[percentColorName]}
                    textColor={percent[percentTextColorName]}
                    barchartPercentStyle={finalBarchartPercentStyle}
                    withTooltip={withTooltip}
                    tooltipStyle={percent.tooltipStyle}
                />
            )}
        </BarchartWrapper>
    )
}

export default Barchart;

Barchart.propTypes = {
    barchartWrapperStyle: PropTypes.object,
    barchartPercentStyle: PropTypes.object,
    percentages: PropTypes.array.isRequired,
    percentSizeName: PropTypes.string,
    percentColorName: PropTypes.string,
    percentTextColorName: PropTypes.string,
    vertical: PropTypes.bool,
    withTooltip: PropTypes.bool,
    cutMarginByMaxPercent: PropTypes.bool,
};

Barchart.defaultProps = {
    percentSizeName: "Percent",
    percentColorName: "Color",
    percentTextColorName: "TextColor",
    vertical: false,
    withTooltip: false,
    cutMarginByMaxPercent: false,
};
