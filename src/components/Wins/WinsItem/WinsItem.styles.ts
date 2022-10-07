import styled from "styled-components";

export const WinItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    height: 6.4rem;

    border-radius: 1.6rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.bg};

    svg {
        width: 1.6rem;
    }
`;
