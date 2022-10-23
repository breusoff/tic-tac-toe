import styled from "styled-components";
import {CardWrapper} from "src/components/ui/Card/Card.styles";

export const GameWinnerModalContent = styled(CardWrapper)`
    width: calc(42.8rem - 2.4rem * 2);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 3.2rem;

    border-radius: 1.6rem;
`;

export const GameWinnerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    svg {
        width: 6.4rem;
    }
`;

export const GameWinnerXIcon = styled.div`
    color: ${(props) => props.theme.cellX};
`;

export const GameWinnerOIcon = styled.div`
    color: ${(props) => props.theme.cellO};
`;
