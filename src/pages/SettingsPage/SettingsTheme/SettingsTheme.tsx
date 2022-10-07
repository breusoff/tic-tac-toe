import React from "react";
import {useTranslation} from "react-i18next";
import Card from "src/components/ui/Card";
import Switch from "src/components/ui/Switch";

const SettingsTheme = () => {
    const {t} = useTranslation();

    return (
        <Card title={t("settings.theme.title")}>
            <Switch />
        </Card>
    );
};

export default SettingsTheme;
