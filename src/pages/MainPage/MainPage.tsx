import React from "react";
import {useTranslation} from "react-i18next";
import GitHub from "src/components/GitHub";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Step from "src/components/Step";
import routes from "src/routes";
import {
    MainPageContent as Content,
    MainPageLink as Link,
    MainPageLinks as Links,
} from "./MainPage.styles";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header title={t("main.title")} settingsButton />
            <Content>
                <Step />
                <Links>
                    <Link to={routes.game.url()} $primary>
                        {t("main.menu.playWithBot")}
                    </Link>
                    <Link to={routes.game.url()}>
                        {t("main.menu.playWithFriend")}
                    </Link>
                </Links>
                <GitHub />
            </Content>
        </Page>
    );
};

export default MainPage;
