import React from "react";
import MainPage from "src/pages/MainPage";
import SettingsPage from "src/pages/SettingsPage";
import {IRoutes} from "src/routes/IRoutes";

const routes: IRoutes = {
    main: {
        url: () => `/`,
        page: <MainPage />,
    },
    settings: {
        url: () => `/settings`,
        page: <SettingsPage />,
    },
};

export default routes;
