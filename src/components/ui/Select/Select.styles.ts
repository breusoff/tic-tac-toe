import styled, {css} from "styled-components";
import {FormItem} from "src/components/ui/Form/Form.styles";

export const SelectWrapper = styled(FormItem)`
    .react-select__control {
        width: 100%;
        min-height: unset;
        height: 4.8rem;

        border: none;
        background-color: ${(props) => props.theme.bg};
        border-radius: 1.2rem;
        box-shadow: none !important;
        transition: none;
    }

    .react-select__placeholder,
    .react-select__single-value {
        color: ${(props) => props.theme.color};
    }

    .react-select__indicator-separator {
        display: none;
    }

    .react-select__menu {
        background: unset;
        box-shadow: unset;
    }

    .react-select__menu {
        border-radius: 1.2rem;
    }

    .react-select__menu-list {
        padding: 0;
        border-radius: 1.2rem;
    }

    .react-select__option {
        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.color};
        height: 4.8rem;
        padding: 0 1.6rem;
        display: flex;
        align-items: center;
    }

    .react-select__option--is-focused {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.bg};

        &:active {
            background-color: ${(props) => props.theme.color};
            color: ${(props) => props.theme.bg};
        }
    }
`;

export const SelectDropdownIndicator = styled.div<{opened?: boolean}>`
    width: 4.8rem;
    height: 4.8rem;

    ${(props) =>
        props.opened
            ? css`
                  svg {
                      transform: rotate(90deg);
                  }
              `
            : css`
                  svg {
                      transform: rotate(-90deg);
                  }
              `}
`;
