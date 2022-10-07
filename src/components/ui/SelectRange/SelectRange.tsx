import React, {FC, ReactNode} from "react";
import {SelectRangeWrapper as Wrapper} from "./SelectRange.styles";
import SelectRangeSlider from "./SelectRangeSlider";
import {ISelectRangeSlider} from "./SelectRangeSlider/ISelectRangeSlider";

interface ISelectRangeProps {
    minIcon?: ReactNode;
    maxIcon?: ReactNode;
    rangeProps?: ISelectRangeSlider;
}

const SelectRange: FC<ISelectRangeProps> = ({minIcon, maxIcon, rangeProps}) => {
    return (
        <Wrapper>
            <div>{minIcon}</div>
            <SelectRangeSlider {...rangeProps} />
            <div>{maxIcon}</div>
        </Wrapper>
    );
};

export default SelectRange;
