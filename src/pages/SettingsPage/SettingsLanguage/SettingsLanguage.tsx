import React from "react";
import {useTranslation} from "react-i18next";
import Card from "src/components/ui/Card";
import Select from "src/components/ui/Select";
import {ISelectOption} from "src/components/ui/Select/ISelectOption";
import {availableLanguages} from "src/i18n/i18n.config";

const options: ISelectOption[] = availableLanguages.map((i) => ({
    value: i.code,
    label: i.name,
}));

const SettingsLanguage = () => {
    const {t, i18n} = useTranslation();

    return (
        <Card title={t("settings.language")}>
            <Select
                options={options}
                value={i18n.language}
                onChange={i18n.changeLanguage}
            />
        </Card>
    );
};

export default SettingsLanguage;
