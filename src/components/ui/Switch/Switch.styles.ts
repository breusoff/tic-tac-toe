import styled, {css} from "styled-components";
import {FormItem} from "src/components/ui/Form/Form.styles";

export const SwitchWrapper = styled(FormItem)`
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(auto-fit, minmax(6.4rem, 1fr));
`;

export const SwitchItem = styled.div<{active?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1.2rem;
    cursor: pointer;

    ${(props) =>
        props.active &&
        css`
            color: ${props.theme.bg};
            background-color: ${props.theme.color};
        `};
`;
