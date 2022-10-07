import React from "react";
import {useTranslation} from "react-i18next";
import GitHub from "src/components/GitHub";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Step from "src/components/Step";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton />
            <Step />
            <GitHub />
        </Page>
    );
};

export default MainPage;
