import React from "react";
import {useTranslation} from "react-i18next";
import Game from "src/components/Game";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Wins from "src/components/Wins";
import {WinsContextProvider} from "src/context/WinsContext";
import {GamePageContent} from "./GamePage.styles";

const GamePage = () => {
    return (
        <GamePageContent>
            <Game />
            <Wins />
        </GamePageContent>
    );
};

const GamePageContainer = () => {
    const {t} = useTranslation();

    return (
        <WinsContextProvider>
            <Page>
                <Header title={t("main.title")} settingsButton backButton />
                <GamePage />
            </Page>
        </WinsContextProvider>
    );
};

export default GamePageContainer;
