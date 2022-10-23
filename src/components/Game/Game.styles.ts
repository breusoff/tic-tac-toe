import styled from "styled-components";
import {StepWrapper} from "src/components/Step/Step.styles";

export const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${StepWrapper} {
        margin-top: 3.2rem;
        margin-bottom: 3.2rem;
        align-self: center;
    }
`;
