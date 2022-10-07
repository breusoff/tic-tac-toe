import React from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import useBooleanState from "src/hooks/useBooleanState";
import {StepIcon, StepWrapper} from "./Step.styles";

const Step = () => {
    const {value: xActive, setTrue, setFalse} = useBooleanState(true);

    return (
        <StepWrapper>
            <StepIcon active={xActive} onClick={setTrue}>
                <XIcon />
            </StepIcon>
            <StepIcon active={!xActive} onClick={setFalse}>
                <OIcon />
            </StepIcon>
        </StepWrapper>
    );
};

export default Step;
