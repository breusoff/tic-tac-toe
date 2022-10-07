import React from "react";
import {useTranslation} from "react-i18next";
import Card from "src/components/ui/Card";
import SelectRange from "src/components/ui/SelectRange";

const SettingsAnimationDuration = () => {
    const {t} = useTranslation();

    return (
        <Card title={t("settings.animationDuration")}>
            <SelectRange />
        </Card>
    );
};

export default SettingsAnimationDuration;
