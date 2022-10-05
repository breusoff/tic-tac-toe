import {createGlobalStyle, css} from "styled-components";

const global = css`
    html {
        font-family: "Lato", sans-serif;
        font-size: 10px;
    }

    body {
        font-size: 1.6rem;

        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.color};
    }

    body,
    #root {
        min-height: 100vh;
    }

    * {
        user-select: none;
        user-drag: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
    }
`;

const GlobalStyles = createGlobalStyle`
  ${global}

  ;
`;

export default GlobalStyles;
