import React from "react";
import {useTranslation} from "react-i18next";
import BabyIcon from "src/assets/icons/range/BabyIcon";
import BotIcon from "src/assets/icons/range/BotIcon";
import Card from "src/components/ui/Card";
import SelectRange from "src/components/ui/SelectRange";
import {
    useBotComplexity,
    useSetBotComplexity,
} from "src/redux/entities/settings/settingsHooks";

const SettingsBotComplexity = () => {
    const {t} = useTranslation();

    const botComplexity = useBotComplexity();
    const setBotComplexity = useSetBotComplexity();

    return (
        <Card title={t("settings.botComplexity")}>
            <SelectRange
                minIcon={<BabyIcon />}
                maxIcon={<BotIcon />}
                rangeProps={{
                    min: 0,
                    max: 400,
                    steps: 4,
                    value: botComplexity,
                    onChange: setBotComplexity,
                }}
            />
        </Card>
    );
};

export default SettingsBotComplexity;
