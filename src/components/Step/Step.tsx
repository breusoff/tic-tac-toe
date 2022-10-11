import React, {FC} from "react";
import OIcon from "src/assets/icons/OIcon";
import XIcon from "src/assets/icons/XIcon";
import StepButton from "src/components/Step/StepButton";
import {GameStep} from "src/interfaces/GameStep";
import {StepWrapper} from "./Step.styles";

interface IStepProps {
    step?: GameStep;
    onClick?: (step: GameStep) => void;
}

const Step: FC<IStepProps> = ({step = GameStep.x, onClick}) => {
    return (
        <StepWrapper>
            <StepButton value={GameStep.x} onClick={onClick} step={step}>
                <XIcon />
            </StepButton>
            <StepButton value={GameStep.o} onClick={onClick} step={step}>
                <OIcon />
            </StepButton>
        </StepWrapper>
    );
};

export default Step;
