import React from "react";
import {useTranslation} from "react-i18next";
import BabyIcon from "src/assets/icons/range/BabyIcon";
import BotIcon from "src/assets/icons/range/BotIcon";
import Card from "src/components/ui/Card";
import SelectRange from "src/components/ui/SelectRange";

const SettingsBotComplexity = () => {
    const {t} = useTranslation();

    return (
        <Card title={t("settings.botComplexity")}>
            <SelectRange
                minIcon={<BabyIcon />}
                maxIcon={<BotIcon />}
                steps={3}
            />
        </Card>
    );
};

export default SettingsBotComplexity;
