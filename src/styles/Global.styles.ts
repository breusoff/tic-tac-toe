import {createGlobalStyle, css} from "styled-components";
import Media, {BreakPoints} from "src/styles/Media.styles";
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
        font-size: 2.4rem;

        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.color};
    }

    body,
    #root {
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        user-select: none;
        user-drag: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
    }

    ${Media.lessThan(BreakPoints.mobile)} {
        html {
            font-size: 2.338vw; // 10px
        }
    }
`;

const GlobalStyles = createGlobalStyle`
  ${global}

  ;
`;

export default GlobalStyles;
