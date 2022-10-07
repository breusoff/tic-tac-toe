import styled from "styled-components";

export const GameWrapper = styled.div`
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
