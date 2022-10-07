import React, {FC} from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import StepButton from "src/components/Step/StepButton";
import {DEFAULT_STEP, IGameStep} from "src/interfaces/IGameStep";
import {StepWrapper} from "./Step.styles";

interface IStepProps {
    step?: IGameStep;
    onClick?: (step: IGameStep) => void;
}

const Step: FC<IStepProps> = ({step = DEFAULT_STEP, onClick}) => {
    return (
        <StepWrapper>
            <StepButton value="x" onClick={onClick} step={step}>
                <XIcon />
            </StepButton>
            <StepButton value="o" onClick={onClick} step={step}>
                <OIcon />
            </StepButton>
        </StepWrapper>
    );
};

export default Step;
