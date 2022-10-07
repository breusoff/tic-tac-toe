import styled from "styled-components";
import {StepWrapper} from "src/components/Step/Step.styles";

export const GamePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;

    margin-bottom: 1.6rem;
    margin-top: 6.4rem;

    ${StepWrapper} {
        margin-top: 3.2rem;
        margin-bottom: 6.4rem;
        align-self: center;
    }
`;

export const GamePageArea = styled.div`
    flex-grow: 1;
`;
