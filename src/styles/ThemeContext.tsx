import React, {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {APP_STORAGE_NAME} from "src/data/appName";
import emptyFunction from "src/lib/emptyFunction";
import {ThemesNames, themes} from "src/styles/Theme.styles";

interface IThemeContext {
    themeName: ThemesNames;
    setThemeName: (themeName: ThemesNames) => void;
}

const DEFAULT_THEME_NAME = ThemesNames.dark;

const ThemeContext = createContext<IThemeContext>({
    themeName: DEFAULT_THEME_NAME,
    setThemeName: emptyFunction,
});

const storageThemeName = `${APP_STORAGE_NAME}_THEME`;

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const getSavedThemeName = (): ThemesNames => {
        const theme = localStorage.getItem(storageThemeName) as ThemesNames;

        if (Object.values(ThemesNames).includes(theme)) {
            return theme;
        }

        return DEFAULT_THEME_NAME;
    };

    const [themeName, setThemeName] = useState(() => getSavedThemeName());

    return (
        <ThemeContext.Provider value={{themeName, setThemeName}}>
            <StyledThemeProvider theme={themes[themeName] || themes.dark}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
