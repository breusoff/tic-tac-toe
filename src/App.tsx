import React from "react";
import {Provider} from "react-redux";
import "src/i18n/i18n.config";
import {store} from "src/redux/store";
import AppRouter from "src/routes/AppRouter";
import {ThemeProvider} from "src/styles/ThemeContext";
import GlobalStyles from "./styles/Global.styles";
import ResetGlobalStyles from "./styles/ResetGlobal.styles";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <ResetGlobalStyles />
                <GlobalStyles />
                <AppRouter />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
