import styled, {css} from "styled-components";

export const GameCellWrapper = styled.div<{
    win?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1;

    border-radius: 1.6rem;
    background-color: ${(props) => props.theme.cell};

    svg {
        width: 55.1724%;
    }
`;

export const GameCellX = styled(GameCellWrapper)`
    color: ${(props) => props.theme.cellX};

    ${({win, theme}) =>
        win &&
        css`
            color: ${theme.cell};
            background-color: ${theme.cellX};
        `}
`;

export const GameCellO = styled(GameCellWrapper)`
    color: ${(props) => props.theme.cellO};

    ${({win, theme}) =>
        win &&
        css`
            color: ${theme.cell};
            background-color: ${theme.cellO};
        `}
`;
