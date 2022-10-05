import React from "react";
import {ThemeProvider} from "src/styles/ThemeContext";
import GlobalStyles from "./styles/Global.styles";
import ResetGlobalStyles from "./styles/ResetGlobal.styles";

const App = () => {
    return (
        <ThemeProvider>
            <ResetGlobalStyles />
            <GlobalStyles />
            <main>App</main>
        </ThemeProvider>
    );
};

export default App;
