import React from "react";
import {useTranslation} from "react-i18next";
import Header from "src/components/Header";
import Page from "src/components/Page";

const GamePage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton backButton />
            GamePage
        </Page>
    );
};

export default GamePage;
