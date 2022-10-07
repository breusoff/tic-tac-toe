import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface DefaultTheme {
        bg: string;
        color: string;
        cell: string;
        cellX: string;
        cellO: string;
    }
}

export enum ThemesNames {
    dark = "dark",
    light = "light",
}

export const themes: Record<ThemesNames, DefaultTheme> = {
    [ThemesNames.light]: {
        bg: "#DEDEDE",
        color: "#292929",
        cell: "#D2D2D2",
        cellX: "#FFA31A",
        cellO: "#3183FF",
    },
    [ThemesNames.dark]: {
        bg: "#1B1B1B",
        color: "#F2F2F2",
        cell: "#292929",
        cellX: "#FFA31A",
        cellO: "#3183FF",
    },
};
