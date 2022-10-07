import React from "react";
import {useTranslation} from "react-i18next";
import Header from "src/components/Header";
import Page from "src/components/Page";
import SettingsAnimationDuration from "src/pages/SettingsPage/SettingsAnimationDuration";
import SettingsBotComplexity from "src/pages/SettingsPage/SettingsBotComplexity";
import SettingsLanguage from "src/pages/SettingsPage/SettingsLanguage";
import SettingsTheme from "src/pages/SettingsPage/SettingsTheme";
import {SettingsPageContent as Content} from "./SettingsPage.styles";

const SettingsPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header backButton title={t("settings.title")} />
            <Content>
                <SettingsTheme />
                <SettingsLanguage />
                <SettingsAnimationDuration />
                <SettingsBotComplexity />
            </Content>
        </Page>
    );
};

export default SettingsPage;
