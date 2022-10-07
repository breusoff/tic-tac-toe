import React, {FC, ReactNode} from "react";
import {SelectRangeWrapper as Wrapper} from "./SelectRange.styles";
import SelectRangeSlider from "./SelectRangeSlider";

interface ISelectRangeProps {
    minIcon?: ReactNode;
    maxIcon?: ReactNode;
    steps?: number;
}

const SelectRange: FC<ISelectRangeProps> = ({minIcon, maxIcon, steps}) => {
    return (
        <Wrapper>
            <div>{minIcon}</div>
            <SelectRangeSlider steps={steps} />
            <div>{maxIcon}</div>
        </Wrapper>
    );
};

export default SelectRange;
