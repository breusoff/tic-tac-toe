import React from "react";
import {Link} from "react-router-dom";
import Page from "src/components/Page";
import routes from "src/routes";

const SettingsPage = () => {
    return (
        <Page>
            SettingsPage
            <Link to={routes.main.url()}>Main Page</Link>
        </Page>
    );
};

export default SettingsPage;
