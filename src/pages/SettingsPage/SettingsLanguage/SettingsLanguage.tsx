import React from "react";
import {useTranslation} from "react-i18next";
import Card from "src/components/ui/Card";
import Select from "src/components/ui/Select";

const SettingsLanguage = () => {
    const {t} = useTranslation();

    return (
        <Card title={t("settings.language")}>
            <Select />
        </Card>
    );
};

export default SettingsLanguage;
