import React from "react";
import AppRouter from "src/routes/AppRouter";
import {ThemeProvider} from "src/styles/ThemeContext";
import GlobalStyles from "./styles/Global.styles";
import ResetGlobalStyles from "./styles/ResetGlobal.styles";

const App = () => {
    return (
        <ThemeProvider>
            <ResetGlobalStyles />
            <GlobalStyles />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
