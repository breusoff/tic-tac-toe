import styled, {css} from "styled-components";

export const StepWrapper = styled.div`
    width: 12.8rem;
    height: 6.4rem;
    background-color: ${(props) => props.theme.cell};
    border-radius: 1.6rem;

    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
`;

export const StepIcon = styled.div<{active?: boolean}>`
    width: 6.4rem;
    height: 6.4rem;

    padding: 1.6rem;
    border-radius: 1.6rem;

    ${(props) =>
        props.active &&
        css`
            color: ${props.theme.bg};
            background-color: ${props.theme.color};
        `};
`;
