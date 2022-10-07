import React from "react";
import {useTranslation} from "react-i18next";
import Header from "src/components/Header";
import Page from "src/components/Page";
import Card from "src/components/ui/Card";
import {SettingsPageContent as Content} from "./SettingsPage.styles";

const SettingsPage = () => {
    const {t} = useTranslation();

    return (
        <Page>
            <Header backButton title={t("settings.title")} />
            <Content>
                <Card title={t("settings.theme.title")}>1</Card>
                <Card title={t("settings.language")}>1</Card>
                <Card title={t("settings.animationDuration")}>1</Card>
                <Card title={t("settings.botComplexity")}>1</Card>
            </Content>
        </Page>
    );
};

export default SettingsPage;
