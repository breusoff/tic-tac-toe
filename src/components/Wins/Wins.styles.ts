import styled from "styled-components";
import Media, {BreakPoints} from "src/styles/Media.styles";

export const WinWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;

    ${Media.lessThan(BreakPoints.mobile)} {
        margin-top: auto;
    }
`;
