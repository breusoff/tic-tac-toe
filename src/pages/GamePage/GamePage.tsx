import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
import Game from "src/components/Game";
import GameWithBot from "src/components/GameWithBot";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Wins from "src/components/Wins";
import {WinsContextProvider} from "src/context/WinsContext";
import {GamePageContent} from "./GamePage.styles";

const GamePage = () => {
    const [searchParams] = useSearchParams();
    const bot = useMemo(
        () => searchParams.get("bot") === "true",
        [searchParams],
    );

    return (
        <GamePageContent>
            {bot ? <GameWithBot /> : <Game />}
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
