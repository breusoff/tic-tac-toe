import styled from "styled-components";

export const IconButtonWrapper = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1.2rem;
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.bg};

    cursor: pointer;
`;
