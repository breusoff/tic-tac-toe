import React from "react";
import {useTranslation} from "react-i18next";
import GitHub from "src/components/GitHub";
import Header from "src/components/Header";
import Page from "src/components/Page";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton />
            <GitHub />
        </Page>
    );
};

export default MainPage;
