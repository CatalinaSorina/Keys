import React from "react";
import PropTypes from "prop-types";
import CustomTooltip from "../../tooltip/CustomTooltip";
import { checkVariable } from "../utils/utils";
import { BarchartPercentStyle } from "../styles/Barchart.styles";
import { PERCENT_TEXT } from "../styles/defaultTheme";

const BarchartPercent = ({ percentSize, backgroundColor, textColor, barchartPercentStyle, withTooltip, tooltipStyle }) => {
    const { skipValue, percentText, lowSize } = barchartPercentStyle;
    const showPercent = checkVariable(percentSize > skipValue,`${parseFloat(percentSize).toFixed(0)}%`);
    const finalSize = percentSize>=lowSize? percentSize:lowSize;
    const barchartPercentStyleProps = {
        barchartPercentStyle:barchartPercentStyle,
        width:`${finalSize}%`,
        backgroundColor:backgroundColor,
        textColor: textColor,
        children: percentText===PERCENT_TEXT.CENTER && showPercent,
    }

    return <>
        {withTooltip ?
        <CustomTooltip
            trigger="click"
            customStyle={tooltipStyle}
        >
            <BarchartPercentStyle {...barchartPercentStyleProps} />
        </CustomTooltip>
        :<BarchartPercentStyle {...barchartPercentStyleProps} />}
        {percentText===PERCENT_TEXT.NEAR && <div style={{color:textColor}}>
            {showPercent}
        </div>}
    </>
}

export default BarchartPercent;

BarchartPercent.propTypes = {
    percentSize: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    barchartPercentStyle: PropTypes.object.isRequired,
    withTooltip: PropTypes.bool,
    tooltipStyle: PropTypes.object,
};

BarchartPercent.defaultProps = {
    withTooltip: false,
    textColor: "white"
};