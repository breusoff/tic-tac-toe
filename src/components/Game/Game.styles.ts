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

export const GameGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

export const GameRaw = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 1.6rem;
`;
