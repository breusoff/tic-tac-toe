import React, {FC, PropsWithChildren} from "react";
import {IGameStep} from "src/interfaces/IGameStep";
import {StepIcon} from "../Step.styles";

interface IStepButtonProps {
    step?: IGameStep;
    value: IGameStep;
    onClick?: (value: IGameStep) => void;
}

const StepButton: FC<PropsWithChildren<IStepButtonProps>> = ({
    step = "x",
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
