import React from "react";
import {Link} from "react-router-dom";
import GitHub from "src/components/GitHub";
import Page from "src/components/Page";
import routes from "src/routes";

const MainPage = () => {
    return (
        <Page>
            MainPage
            <Link to={routes.settings.url()}>settings</Link>
            <GitHub />
        </Page>
    );
};

export default MainPage;
