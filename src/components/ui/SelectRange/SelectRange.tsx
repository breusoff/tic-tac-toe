import React, {FC, ReactNode} from "react";
import {SelectRangeWrapper as Wrapper} from "./SelectRange.styles";

interface ISelectRangeProps {
    minIcon?: ReactNode;
    maxIcon?: ReactNode;
}

const SelectRange: FC<ISelectRangeProps> = ({minIcon, maxIcon}) => {
    return (
        <Wrapper>
            <div>{minIcon}</div>
            <div>SelectRange</div>
            <div>{maxIcon}</div>
        </Wrapper>
    );
};

export default SelectRange;
