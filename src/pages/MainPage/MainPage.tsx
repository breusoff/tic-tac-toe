import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import GitHub from "src/components/GitHub";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Step from "src/components/Step";
import routes from "src/routes";
import {GameStep} from "src/types/GameStep";
import {
    MainPageContent as Content,
    MainPageLink as Link,
    MainPageLinks as Links,
} from "./MainPage.styles";

const MainPage = () => {
    const {t} = useTranslation();
    const [step, setStep] = useState<GameStep>(GameStep.x);

    return (
        <Page>
            <Header title={t("main.title")} settingsButton />
            <Content>
                <Step step={step} onClick={setStep} />
                <Links>
                    <Link to={routes.game.url()} $primary>
                        {t("main.menu.playWithFriend")}
                    </Link>
                    <Link to={`${routes.game.url()}?bot=true`}>
                        {t("main.menu.playWithBot")}
                    </Link>
                </Links>
                <GitHub />
            </Content>
        </Page>
    );
};

export default MainPage;
