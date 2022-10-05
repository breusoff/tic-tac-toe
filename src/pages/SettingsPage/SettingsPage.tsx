import React from "react";
import {useTranslation} from "react-i18next";
import Header from "src/components/Header";
import Page from "src/components/Page";

const SettingsPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header backButton title={t("settings.title")} />
        </Page>
    );
};

export default SettingsPage;
