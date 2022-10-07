import React from "react";
import {useTranslation} from "react-i18next";
import Game from "src/components/Game";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Step from "src/components/Step";
import Wins from "src/components/Wins";
import {GamePageArea, GamePageContent} from "./GamePage.styles";

const GamePage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton backButton />
            <GamePageContent>
                <GamePageArea>
                    <Game />
                </GamePageArea>
                <Step />
                <Wins />
            </GamePageContent>
        </Page>
    );
};

export default GamePage;
