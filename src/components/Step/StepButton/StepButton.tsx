import React, {FC, PropsWithChildren} from "react";
import {GameStep} from "src/interfaces/GameStep";
import {StepIcon} from "../Step.styles";

interface IStepButtonProps {
    step?: GameStep;
    value: GameStep;
    onClick?: (value: GameStep) => void;
}

const StepButton: FC<PropsWithChildren<IStepButtonProps>> = ({
    step = GameStep.x,
    value,
    onClick,
    children,
}) => {
    function onClickHandler() {
        onClick && onClick(value);
    }

    return (
        <StepIcon active={value === step} onClick={onClickHandler}>
            {children}
        </StepIcon>
    );
};

export default StepButton;
