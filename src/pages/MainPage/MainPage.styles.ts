import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

export const MainPageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    gap: 6.4rem;
    justify-content: space-between;

    margin-bottom: 1.6rem;
    margin-top: 6.4rem;
`;

export const MainPageLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 100%;
`;

export const MainPageLink = styled(Link)<{$primary?: boolean}>`
    border-radius: 1.2rem;

    width: 100%;
    height: 6.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;

    ${(props) =>
        props.$primary
            ? css`
                  color: ${props.theme.bg};
                  background-color: ${props.theme.color};
              `
            : css`
                  color: ${props.theme.color};
                  background-color: ${props.theme.cell};
              `};
`;
