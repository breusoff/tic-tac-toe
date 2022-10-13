import React from "react";
import {useTranslation} from "react-i18next";
import Game from "src/components/Game";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Wins from "src/components/Wins";
import {GamePageContent} from "./GamePage.styles";

const GamePage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton backButton />
            <GamePageContent>
                <Game />
                <Wins />
            </GamePageContent>
        </Page>
    );
};

export default GamePage;
