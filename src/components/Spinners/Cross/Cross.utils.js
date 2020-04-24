// @flow
export const moveOn = (position:string):string => {
    switch (position) {
        case "TOP1": return "1/3";
        case "TOP2": return "2/3";
        case "TOP3": return "3/3";
        case "TOP4": return "2/3";
        case "TOP5": return "1/3";
        case "BOTTOM1": return "5/3";
        case "BOTTOM2": return "4/3";
        case "BOTTOM3": return "3/3";
        case "BOTTOM4": return "4/3";
        case "BOTTOM5": return "5/3";
        case "LEFT1": return "3/1";
        case "LEFT2": return "3/2";
        case "LEFT3": return "3/3";
        case "LEFT4": return "3/2";
        case "LEFT5": return "3/1";
        case "RIGHT1": return "3/5";
        case "RIGHT2": return "3/4";
        case "RIGHT3": return "3/3";
        case "RIGHT4": return "3/4";
        case "RIGHT5": return "3/5";
        default: return "3/3";
    }
}

export const setColors = (colors:Array<string> | string):Array<string> => {
    if (typeof colors === "string") {
        switch (colors) {
            case "rainbow": return ["#FD5959", "#FD9059", "#FDE259", "#8FE36A", "#6AE3BE", "#59C1FD", "#6559FD", "#9F59FD"];
            case "green": return ["#B9FF95", "#8ABC70", "#60874D", "#465C3B"];
            case "blue": return ["#8CC1FA", "#6B95C1", "#507090", "#364C61"];
            case "peach": return ["#900C3F", "#C70039", "#FF5733", "#FFC300"];
            default: return ["#674952", "#E7C9D2"]
        }
    }else if(Array.isArray(colors)){
        return colors;
    }else{
        return ["#674952", "#E7C9D2"]
    }    
}

export const selectFrom = (colors:Array<string>,index:number) => colors.length>index?index:Math.abs(index%colors.length);