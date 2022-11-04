import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
import Game from "src/components/Game";
import GameWithBot from "src/components/GameWithBot";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Wins from "src/components/Wins";
import {GameStep} from "src/types/GameStep";
import {GamePageContent} from "./GamePage.styles";

const GamePage = () => {
    const [searchParams] = useSearchParams();
    const {bot, user} = useMemo(() => {
        function getUser() {
            return searchParams.get("user") === GameStep.o
                ? GameStep.o
                : GameStep.x;
        }

        return {
            bot: searchParams.get("bot") === "true",
            user: getUser(),
        };
    }, [searchParams]);

    return (
        <GamePageContent>
            {bot ? <GameWithBot user={user} /> : <Game />}
            <Wins />
        </GamePageContent>
    );
};

const GamePageContainer = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton backButton />
            <GamePage />
        </Page>
    );
};

export default GamePageContainer;
