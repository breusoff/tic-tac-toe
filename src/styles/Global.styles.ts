import {createGlobalStyle, css} from "styled-components";
import RobotoEot from "src/styles/fonts/Roboto/Roboto-Bold.eot";
import RobotoTtf from "src/styles/fonts/Roboto/Roboto-Bold.ttf";
import RobotoWoff from "src/styles/fonts/Roboto/Roboto-Bold.woff";

const global = css`
    @font-face {
        font-family: "Roboto";
        src: url(${RobotoEot});
        src: local("Roboto Bold"), local("Roboto-Bold"),
            url("${RobotoEot}?#iefix") format("embedded-opentype"),
            url(${RobotoWoff}) format("woff"),
            url(${RobotoTtf}) format("truetype");
        font-weight: bold;
        font-style: normal;
    }

    html {
        font-family: "Roboto", sans-serif;
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
