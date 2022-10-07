import styled from "styled-components";

export const SelectThumb = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    outline: none;
    background-color: ${(props) => props.theme.color};
`;

export const SelectTrackWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const SelectTrack = styled.div`
    height: 0.1rem;
    width: 100%;
    align-self: center;

    background-color: ${(props) => props.theme.color};
`;

export const SelectMark = styled.div`
    width: 0.1rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme.color};
`;
